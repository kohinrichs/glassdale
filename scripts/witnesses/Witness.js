export const Witness = (witnessObject) => {
    const [firstName, lastName] = witnessObject.name.split(" ")
    return `
    <div id="witness--${witnessObject.id}" class="witness">
        <h4 id="witness__${witnessObject.name}">Name: ${firstName} ${lastName}</h4>
        <p>Statements: ${witnessObject.statements}</p>
    </div>
    `
}