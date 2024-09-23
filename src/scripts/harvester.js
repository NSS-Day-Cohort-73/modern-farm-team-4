// export a harvestPlants() that returns an array of seed objects
// iterate over the fieldArray and for each element add the current object to the finalFieldArray based on the output property
// return finalFieldArray

export const harvestPlants = (fieldArray) => {
    const finalFieldArray = [];

    for (const plant of fieldArray) {
        let count = 0;
        if(plant.type === "Corn"){
            while (count < (plant.output/2)) {
                finalFieldArray.push({ ...plant});
                count++;
            }   
        } else{
            while (count < plant.output) {
                finalFieldArray.push({ ...plant});
                count++;
            }
        }       
    }
    return finalFieldArray
}