import { Witness } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessesProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

let appStateWitnesses = []

const render = () => {
    contentTarget.innerHTML = appStateWitnesses.map(witness => Witness(witness)).join("")
}

const WitnessList = () => {
    contentTarget.innerHTML = ""

    getWitnesses()
        .then(() => {
            appStateWitnesses = useWitnesses()
            render()
        })
}

eventHub.addEventListener("showWitnessList", event => {
    WitnessList()
})