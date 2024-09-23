//iterate over food objects build HTML based on element and make a flexbox CSS grid to house it

export const Catalog = (finalFieldArray) => {
    let cropHTML = ""

    for (const plant of finalFieldArray) {
        cropHTML += `<section class="plant">${plant.type}</section>`
        // cropHTML += `<li>${plant.height}</li>`
        // cropHTML += `<li>${plant.output}</li>`
    }

    return cropHTML
}