import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './CriminalComponent.js'
import { useConvictions } from '../convictions/ConvictionProvider.js'
import { useOfficers } from "../officers/OfficerDataProvider.js"

// BELOW IS THE NEW EVENT HUB INFORMATION

const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")


// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state *let crimninals from useCriminals down to the people that committed the crime
        */
        console.log('crime', event.detail);

        const crimes = useConvictions()
        const crime = crimes.find( (crime) => crime.id === parseInt(event.detail.crimeThatWasChosen))


        const criminals = useCriminals()
        const matchingCriminals = criminals.filter( (criminal) => criminal.conviction === crime.name)


        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */

       render(matchingCriminals)
    }
})

// THIS FILTERS THE OFFICERS
eventHub.addEventListener("officerSelected", changeEvent => {
    if (changeEvent.detail.officerThatWasChosen !== "0") {

// How can you access the officer name that was selected by the user?
        
    // const officerName = changeEvent.detail.name

    const officers = useOfficers()
    const officerName = officers.find( (officer) => officer.id === parseInt(changeEvent.detail.officerThatWasChosen))
    
// How can you get the criminals that were arrested by that officer?

    const criminals = useCriminals()
    const chooseCriminalsByArrestingOfficer  = 
        criminals.filter(
        (criminal) => {
            if (criminal.arrestingOfficer === officerName.name) {
                return true
            }
        }
    )
    render(chooseCriminalsByArrestingOfficer)
    }
})
    
const render = (criminals) => {
    let criminalCards = []
    for (const criminal of criminals) {
        criminalCards.push(Criminal(criminal))
    }
    contentElement.innerHTML = criminalCards.join("")
}

// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals().then(() => {
        const criminals = useCriminals()
        render(criminals)
    })
}

// THIS IS THE OLD CODE WITH DEPENDENCIES
// export const CriminalList = () => {
//     getCriminals().then(() => {
    
//         const criminalArray = useCriminals()
    
//         const contentElement = document.querySelector(".criminalsContainer")

//         for (const criminalObject of criminalArray) {
//             const criminalHTML = Criminal(criminalObject)
//             contentElement.innerHTML += criminalHTML
//         }
//     }
// )

// THIS IS CODE TRYING TO WRITE THE RENDER FUNCTION ANOTHER WAY
// const render = (criminalCollection) => {
//     const taco = criminalCollection.map(criminalObject => {
//         Criminal(criminalObject)
//     })
//     return contentTarget.innerHTML += taco.join("")
// }

// const render = (criminalCollection) => contentTarget.innerHTML = criminalCollection.map( (criminalObj) => Criminal(criminalObj).join(""))

