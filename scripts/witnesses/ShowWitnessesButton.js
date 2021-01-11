const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".buttonContainer_witnessList")

export const ShowWitnessListButton = () => {
    contentTarget.innerHTML = `
    <button id ="button--witnessList">Witness Statements</button>
    `
}

contentTarget.addEventListener("click", event => {
    if (event.target.id === ("button--witnessList")) {
        const witnessListBtnClick = new CustomEvent("showWitnessList")
        eventHub.dispatchEvent(witnessListBtnClick)

        const disableAffordanceEvent = new CustomEvent("disableAffordanceEvent")
        eventHub.dispatchEvent(disableAffordanceEvent)
    }
})