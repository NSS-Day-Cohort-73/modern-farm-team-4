// define and export plantSeeds(yearlyPlan) function
// this will iterate over the yearlyPlan string array
// for each element invoke relevant createVegetable() function in seeds directory and return object 
// invoke the addPlant(xObject) function to push to fieldArray

import {createAsparagus} from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createWheat} from "./seeds/wheat.js"
import {addPlant} from "./field.js"

// iterate over the yearlyPlan[] multidimensional array
// for each element of the sub-arrays call the correct create function, create a plant object, and pass it to the addPlant() function 
export const plantSeeds = (yearlyPlan) => {
    for(let row of yearlyPlan){
        let vegetable = ""
        for(let plot of row){
            switch(plot){
                case "Asparagus":
                    vegetable = createAsparagus()
                    break
                case "Corn":
                    vegetable = createCorn()
                    break
                case "Potato":
                    vegetable = createPotato()
                    break
                case "Soybean":
                    vegetable = createSoybean()
                    break
                case "Sunflower":
                    vegetable = createSunflower()
                    break
                case "Wheat":
                    vegetable = createWheat()
                    break
            }           
            addPlant(vegetable)       
        }
    }
}