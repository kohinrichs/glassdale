export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__suspect">Suspect: ${ noteObject.criminalName }</div>
            <div class="note__author">Author: ${ noteObject.author }</div>
            <div class="note__timestamp">Timestamp: ${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
            <div class="note__text">Note:${ noteObject.text }</div>
        </section>
    `
}