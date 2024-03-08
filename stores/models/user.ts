export default {
  storeName: 'users',
  title: {
    plural: 'users.title.plural',
    singular: 'users.title.singular',
  },
  pagination: {
    itemsPerPage: 15,
    currentPage: 1,
    lastPage: 1,
    totalItems: 0,
    itemsByPage: {},
  },
  relationships: [
    {
      key: 'blogs',
      store: 'blogs',
    },
  ],
  table: {
    columns: [
      {
        id: 1,
        key: 'id',
        label: 'ID',
        sortable: true,
      },
      {
        id: 2,
        key: 'name',
        label: 'Name',
        sortable: true,
      },
      {
        id: 3,
        key: 'email',
        label: 'E-Mail',
        sortable: true,
      },
    ],
  },
  form: {
    fields: [

    ],
  },
}
