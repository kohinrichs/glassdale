import { getOfficers, useOfficers } from "./OfficerDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
       
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value
    
        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officerThatWasChosen: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const OfficerSelect = () => {
    // Get all officers from application state
    getOfficers().then(() => {
    const officers = useOfficers()
    render(officers)
    } )
}

// THIS CREATE THE HTML REPRESENTATION OF THE OFFICERS IN A DROPDOWN MENU
const render = officersCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map((officer) =>
                    `<option value=${officer.id}>
                        ${officer.name}
                    </option>
                    `)
            }
        </select>
    `
}