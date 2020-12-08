import { getNotes, useNotes } from "./NoteProvider.js";
import { NoteHTMLConverter } from "./Note.js";

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")

// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

// Removed custonmEvent since it's a parameter that isn't being used.
eventHub.addEventListener("showNotesClicked", () => {
    NoteList()
})

eventHub.addEventListener("notesStateChanged", () => {
    NoteList()
})

const render = (noteArray) => {
    const allNotesConvertedToStrings = noteArray.map(
        // convert the notes objects to HTML with NoteHTMLConverter 
        // Could also be written like -> ((note) => NoteHTMLConverter(note).join)
        (note) => {
            return NoteHTMLConverter(note)
        }
        ).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not? UseNotes is our application state. 
export const NoteList = () => {
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes)
        })
}