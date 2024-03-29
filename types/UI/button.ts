export interface ButtonProps {
  type?: 'button' | 'submit' | undefined
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'secondary' | 'outlined' | 'text' | 'success' | 'danger'
  rounded?: boolean
  loading?: boolean
}
