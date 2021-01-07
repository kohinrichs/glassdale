import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js";
import { NoteHTMLConverter } from "./Note.js";
import { useCriminals } from "../criminals/CriminalDataProvider.js"


let visible = false

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")

// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

// Removed custonmEvent since it's a parameter that isn't being used.
eventHub.addEventListener("showNotesClicked", () => {
    if (visible === false) {
        NoteList()
        visible = true
    } else {
        contentTarget.innerHTML = ""
        visible = false
    }

})

eventHub.addEventListener("noteStateChanged", () => {
    if (visible === true) {
        NoteList()
    }
})

// New EventListener for DELETING notes
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, noteId] = clickEvent.target.id.split("--")

       deleteNote(noteId)
    }
})

eventHub.addEventListener("resetForm", clickEvent => {
        document.querySelector("#author").value = ""
        document.querySelector("#text").value = ""
        document.querySelector("#suspect").value = ""
    }
)

const render = (noteArray, criminals) => {
    const allNotesConvertedToStrings = noteArray.map(
        // convert the notes objects to HTML with NoteHTMLConverter 
        // Could also be written like -> ((note) => NoteHTMLConverter(note).join)
        (note) => {
            const associatedCriminal = criminals.find(
                (criminal) => {
                    return criminal.id === note.criminalId
                }
            )
            note.criminalName = associatedCriminal.name

            return NoteHTMLConverter(note)
        }
        ).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not? UseNotes is our application state. 
export const NoteList = () => {
    let criminals = useCriminals()
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes, criminals)
        })
}