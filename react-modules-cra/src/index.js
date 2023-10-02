import {choice, remove} from "./helper"
import foods from "./foods"

/**
 * Randomly draw a fruit from the array
    Log the message “I’d like one RANDOMFRUIT, please.”
    Log the message “Here you go: RANDOMFRUIT”
    Log the message “Delicious! May I have another?”
    Remove the fruit from the array of fruits
    Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
 */

const RANDOMFRUIT = choice(foods)

console.log(`I'd like one ${RANDOMFRUIT}, please`)
console.log(`Here you go: ${RANDOMFRUIT}`)
console.log(`Delicious! May I have another?`)

remove(foods, RANDOMFRUIT)
console.log(`I’m sorry, we’re all out. We have ${foods} left.`)



