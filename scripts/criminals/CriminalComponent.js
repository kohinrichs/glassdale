export const Criminal = (criminal) => {
    return `
            <section class= "criminal">
                <h3 class= "criminal__name">${criminal.name}</h3>
                <div class= "criminal__age">Age: ${criminal.age}</div>
                <div class= "criminal__conviction">${criminal.conviction}</div>
                <div class= "criminal__term-start">Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
                <div class= "criminal__term-end">Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
            </section>
        `
}