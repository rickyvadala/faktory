export const serializedDate = () => {
    const date = new Date();
    return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
}
