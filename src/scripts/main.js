console.log("Welcome to the main module")
// imports: createPlan(), plantSeeds(), usePlants(), harvestPlants(), createCatalog()
// variables: yearlyPlan[], fieldArray[], finalFieldArray[]

import {createPlan} from "./plan.js"
import {plantSeeds} from "./tractor.js"
import {usePlants} from "./field.js"
import {harvestPlants} from "./harvester.js"
import {Catalog} from "./catalog.js"

// invoke createPlan() from plan.js into the yearlyPlan variable
const yearlyPlan = createPlan()

// invoke plantSeeds() from tractor.js to convert yearlyPlan to an array of plant objects
plantSeeds(yearlyPlan)


// invoke usePlants() in field.js to return a copy of the array of plant objects 
let fieldArray = usePlants()


// invoke harvestPlants() in harvester.js to convert the fieldArray[] into the final list of crops
let finalFieldArray = harvestPlants(fieldArray)


// invoke catalog(finalFieldArray) to pass the final field array to the HTML builder
// return the final array after passing though catalog() to convert into an HTML string to add to the DOM using innerHTML

// console.log(Catalog(finalFieldArray));

const catalogHTML = Catalog(finalFieldArray)

let catalogDOM = document.getElementById('plantContainer')
catalogDOM.innerHTML = catalogHTML

// const cropContainer = document.getElementsByClassName('harvestPlants(fieldArray)')
// cropContainer.innerHTML = finalFieldArray