const calculateAgeinDogYears = (age) => {
    const ageInDogYears = age / 7

    return ageInDogYears
}

const dogAge = calculateAgeinDogYears(22)
// console.log(dogAge)

const favDogBreed = (dogBreed) => {
    let myFav = `My favorite dog breed is ${dogBreed}`
    if (dogBreed === "meow") {
        let myFav = "I like cats"
        return myFav
    }
    return myFav
}

const huskeyFav = favDogBreed("huskey")
// console.log(`When it comes to pets, ${huskeyFav}`)
const catFav = favDogBreed("meow")
// console.log(catFav)
const noFav = favDogBreed()
// console.log(noFav)

const addThree = (number2, number3, number1) => {
    addedNum = number1 + number2 + number3
    return addedNum
}

const addednum = addThree (17, 4, 11)
// console.log(addedNum)

const selfDrive = (direction, speed) => {
    if (speed > 75) {
        const drive = `The car is moving ${direction} at ${speed} mph. SLOW DOWN!`
        return drive
    }
    const drive = `The car is moving ${direction} at ${speed} mph.`
        return drive
}

const mySpeed = selfDrive("backward", 20)
// console.log(mySpeed)

const evenOrOdd = (num) => {
    const remainder = num % 2
    if (remainder === 0) {
        remainderString = "Even"
        return remainderString
    } 
    if (remainder === 1) {
        remainderString = "Odd"
        return remainderString
    }    
}

const whatIsMyInteger = evenOrOdd(1209)
// console.log(whatIsMyInteger)

const words = ["The", "killing","complex","houses","married","kittens","and","single","soldiers","and","their","kleptomaniacal","families"]

const noKs = (array) => {
    const newArray=[]
    for (const word of array) {
        if (word.startsWith("k"))
        { continue; }
        else newArray.push(word)
    }
    return newArray
}
const myWords = noKs(words)
// console.log(myWords)

newString = myWords.join(" ")
// console.log(newString)

const catchTuna = () => {

    randomNum = Math.floor(Math.random() * 3)

    if (randomNum === 2) {
        console.log(`Sven hooked a tuna!`)
        return true
    }
    else console.log("Sven came up empty-handed.")
    return false
}
// catchTuna()

const orderMeal = (sandwich, side, drink, dessert) => {
    const myMeal = {
        sandwich: sandwich,
        side: side,
        drink: drink,
        dessert: dessert,
    }
    return myMeal
}

myMeal = orderMeal("Chickpea Salad", "Potato Chips", "Green Tea", "Chocolate Chip Cookie")
// console.log(myMeal)

// Chores

const timesFive = number => number * 5
const square = number => number * number
const twice = number => number * 2
// console.log(timesFive(2))
// console.log(square(5))

const bigify = (number, operationFunction) => {
    const result = operationFunction(number)
    return result
}
const number = 7
const by2 = bigify(number, twice)
const by5 = bigify(number, timesFive)
const byItself = bigify(number, square)
// console.log(by2, by5, byItself)

const cube = number => number * number * number
const cubeIt = bigify(number, cube)
// console.log(cubeIt)

const groceryStore = (personObj) => {
    const chore = `${personObj.firstName} ${personObj.lastName} went to the grocery store`
    return chore
}
const oilChange = (personObj) => {
    const chore = `${personObj.firstName} ${personObj.lastName} got the engine oil changed`
    return chore
}
const mowLawn = (personObj) => {
    const chore = `${personObj.firstName} ${personObj.lastName} mowed the lawn`
    return chore
}
const vacuumHouse = (personObj) => {
    const chore = `${personObj.firstName} ${personObj.lastName} vacuumed the house`
    return chore
}
const washDishes = (personObj) => {
    const chore = `${personObj.firstName} ${personObj.lastName} washed the dishes`
    return chore
}
const dustSurfaces = (personObj) => {
    const chore = `${personObj.firstName} ${personObj.lastName} dusted the surfaces`
    return chore
}

const dayPlanner = (chore1, chore2, chore3, person, day) => {
    const plan = `On ${day}, ${chore1(person)}, and ${chore2(person)}, and ${chore3(person)}.`
    return plan
}

const sam = {
    firstName: "Samuel",
    lastName: "Friesen"
}

const todaysPlan = dayPlanner(washDishes, dustSurfaces, vacuumHouse, sam, "Thursday")
console.log (todaysPlan)


