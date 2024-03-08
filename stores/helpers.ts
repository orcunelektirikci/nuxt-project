import type { StoreDefinition } from 'pinia'
import type { HasId, RelationObject, StateItem, StateItems } from '~/types/store/defaults'
import type { Dictionary } from '~/types/objects'
import availableStores from '~/stores/index'

export function normalizeResource(resource: Array<HasId> | HasId) {
  const normalized = {} as Record<number, HasId>

  if (Array.isArray(resource)) {
    resource.forEach((r) => {
      normalized[r.id as number] = r
    })
  }
  else {
    normalized[resource.id as number] = resource
  }

  return normalized
}

export function populateRelations(relations: RelationObject[], item: StateItem): StateItem {
  const relationshipMap = relations.map((rel) => {
    const result = {} as Dictionary
    const store = (availableStores as Record<string, () => ReturnType<StoreDefinition>>)[rel.store]

    if (!store) {
      result[rel.key] = item[rel.key]
    }
    else {
      const relatedItems = store().items as StateItems

      if (Array.isArray(item[rel.key])) {
        result[rel.key] = (item[rel.key] as Array<any>)
          .map((i: number) => relatedItems[i])
          .filter((i: StateItem | undefined | null) => i)
      }
      else { result[rel.key] = relatedItems[rel.key] }
    }

    return result
  })

  return { ...item, ...relationshipMap }
}
