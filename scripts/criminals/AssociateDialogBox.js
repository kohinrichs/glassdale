import { useCriminals } from "./CriminalDataProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".associateDialogBox")

eventHub.addEventListener("associatesBtnClicked", (event) => {
    // const associateDialog = document.querySelector("associatesDialog")
    // const dialogText = document.querySelector("#associatesDialog__text")

    const clickedCriminal = useCriminals().find(
        (criminal) => criminal.id === event.detail.clickedCriminalId
    )

    contentTarget.showModal()
    render(clickedCriminal)
})

  const render = (criminal) => {
    contentTarget.innerHTML =
`
            <div class= "associate">
                <h3 class= "criminal__name">${criminal.name}</h3>
                ${criminal.known_associates.map( (associate) => `
                    <div class="criminal__associateName"> ${associate.name}</div>
                    <div class="criminal__associateAlibi">${associate.alibi}</div>`
                                ).join("")}
                <button id="closeButton">Close</button>
            </div>
        `
    }

// To close the dialog box
    eventHub.addEventListener("click", (clickEvent) => {
        if (clickEvent.target.id === "closeButton") {
            contentTarget.close()
        }
    })


// Also part of the trying something different
//     dialogText.innerHTML =
//     `
//     <h3>Associates of ${clickedCriminal.name}<h3></h3>
//     ${clickedCriminal.known_associates.map( (associate) => `
//       <h4>${associate.name}</h4>
//       <div>${associate.alibi}</div>`
//       ).join("")}`

//   associatesDialog.showModal()

// })

// export const AssociatesDialog = () => {
//   return `
//     <dialog id="associatesDialog">
//       <div id="associatesDialog__text"></div>
//       <button id="closeDialog">close</button>
//     </dialog>
//   `
// }