import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

// Add event listener for a click on the form button
// Handle browser-generated click event in component

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        // Need to gather the data from the form
        let author = document.querySelector("#author").value
        let text = document.querySelector("#text").value
        let suspect = document.querySelector("#suspect").value
        
        // Make a new object representation of a note
        const newNote = {
            timestamp:Date.now(),
            author: author,
            text: text,
            suspect: suspect 
        }

        // Change API state and application state
        saveNote(newNote)
    }

    const customEvent = new CustomEvent("resetForm")
        eventHub.dispatchEvent(customEvent)

})

const render = () => {
    contentTarget.innerHTML = `
        <div class="form">
            <input type="text" id="author" placeholder="author name">
            <textarea id="text" placeholder="note text"></textarea>
            <input type="text" id="suspect" placeholder="suspect name">
            <button id="saveNote">Save Note</button>
        </div>
    `
}

export const NoteForm = () => {
    render()
}