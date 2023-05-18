export default interface Usuario {
    id: string
    name: string
    email: string
    imageUrl: string | null
    cpf?: string
    phone?: string
}