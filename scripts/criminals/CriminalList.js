import { getCriminals, useCriminals } from './CriminalDataProvider.js'
import { Criminal } from './CriminalComponent.js'

export const CriminalList = () => {
    getCriminals().then(() => {
    
        const criminalArray = useCriminals()
    
        const contentElement = document.querySelector(".criminalsContainer")

        for (const criminalObject of criminalArray) {
            const criminalHTML = Criminal(criminalObject)
            contentElement.innerHTML += criminalHTML
        }
    }
    ) 
}