import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

// Add event listener for a click on the form button
// Handle browser-generated click event in component

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "saveNote") {
        
        // Need to gather the data from the form
        let author = document.querySelector("#author").value
        let text = document.querySelector("#text").value
        let criminalId = parseInt(document.querySelector("#suspect").value)
        
        // Make a new object representation of a note
        const newNote = {
            timestamp: Date.now(),
            author: author,
            text: text,
            criminalId: criminalId 
        }

        // Change API state and application state
        saveNote(newNote)
       
    }

    // Is this a bad idea? Is this stacking eventListeners?
    const customEvent = new CustomEvent("resetForm")
        eventHub.dispatchEvent(customEvent)

})

const render = () => {
    const criminalCollection = useCriminals()

    contentTarget.innerHTML = `
        <div class="form">
            <input type="text" id="author" placeholder="author name">
            <textarea id="text" placeholder="note text"></textarea>
            
            <select class="dropdown" id="suspect">
                <option value="0">Please select a suspect...</option>
                ${
                    criminalCollection.map(
                        (criminal) => `
                            <option value=${criminal.id}>
                                ${criminal.name}
                            </option>
                    `)
                }
            </select>
            <button id="saveNote">Save Note</button>
        </div>
    `
}

export const NoteForm = () => {
    getCriminals()
    .then( () => render())
}