// const generateName = require('sillyname')

import generateName from 'sillyname'
const newCharacter = generateName()

console.log(`My name is: ${newCharacter}`)

// const heroName = require('superheroes')
import {random as heroName} from 'superheroes'
let myHeroName = heroName()

console.log(`Hello, ${newCharacter}, It is  I, THE ${myHeroName}!`)