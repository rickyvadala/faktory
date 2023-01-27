export interface IPrompt {
    id: number,
    owner: number,
    title: string
    description: string,
    downloads: number,
    text: string,
    img: string,
    date?: string,
}
