export const Criminal = (criminal) => {
    return `
            <section class= "criminal">
                <h3 class= "criminal__name">${criminal.name}</h3>
                <div class= "criminal__age">Age: ${criminal.age}</div>
                <div class= "criminal__conviction">Crime:${criminal.conviction}</div>
                <div class= "criminal__term-start">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
                <div class= "criminal__term-end">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
                <button id="associates--${criminal.id}">Associate Alibis</button>
            </section>
        `
}

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", (event) => {
    const [splitID, id] = event.target.id.split("--")
    if ("associates" === splitID) {
        const customEvent = new CustomEvent("associatesBtnClicked", {
            detail: {
                clickedCriminalId: parseInt(id)
            }
        })

    // Trying to do this a different way 
    // if (event.target.id.includes("associates--")) {
    //     const customEvent = new CustomEvent("associatesBtnClicked", {
    //         detail: {
    //             clickedCriminalId: event.target.id.split("--")[1]
    //         }
    //     })
        eventHub.dispatchEvent(customEvent)
    }
})

