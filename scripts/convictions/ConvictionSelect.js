/*
 *   ConvictionSelect component that renders a select HTML element
 *   which lists all convictions in the Glassdale PD API
 */

 // listen for the selection of a crime and captue the chosen value
 // send out a message (customEvent) via the eventHub

import { getConvictions, useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
// const contentTarget = document.querySelector(".filters__crime ")

// BELOW IS THE NEW EVENT HUB INFO

/*
    Which element in your HTML contains all components?
    That's your Event Hub. Get a reference to it here.
*/

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

// On the event hub, listen for a "change" event.
eventHub.addEventListener("change", event => {

    // Only do this if the `crimeSelect` element was changed
    if (event.target.id === "crimeSelect") {
        // Create custom event. Provide an appropriate name.
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        // Dispatch to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

// ABOVE IS THE NEW EVENT HUB INFO

export const ConvictionSelect = () => {
    // Get all convictions from application state
    getConvictions().then(() => {
    const convictions = useConvictions()
    render(convictions)
    } )
}


const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map((crime) =>
                    `<option value=${crime.id}>
                    ${crime.name}
                    </option>
                    `)
            }
        </select>
    `
}