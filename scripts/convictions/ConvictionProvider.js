let crimes = []

export const useCrimes = () => {
    return crimes.slice()
}

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(
            parsedConvictions => {
                console.table(parsedConvictions)
                crimes = parsedConvictions
            }
        )
}