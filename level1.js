// const firstName = 'Thomas'
// const lastName = 'Shelby'
// const country = 'UK'
// const city ='Birginham'
// const isMarried = true
// const year = 1965

// console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof isMarried, typeof year)

// const isIt10 = '10'
// console.log(isIt10 === 10)

// const isIt9 = 9.8
// console.log(isIt9 === 10)

// let num = 4 > 3
// console.log(num)

// let num1 = 4 >= 3
// console.log(num1)

// let num2 = 4 < 3
// console.log(num2)

// let num3 = 4 <= 3
// console.log(num3)

// let num4 = 4 == 4
// console.log(num4)

// let num5 = 4 === 4
// console.log(num5)

// let num6 = 4 != 4
// console.log(num6)

// let num7 = 4 !== 4
// console.log(num7)

// let num8 = 4 != '4'
// console.log(num8)

// let num9 = 4 == '4'
// console.log(num9)

// let num10 = 4 === '4'
// console.log(num10)

// let findLength1 = 'python'
// let findLength2 = 'jargon'

// console.log(findLength1.length, findLength2.length)

// let falsyLength = findLength1 === findLength2
// console.log(falsyLength)


/////////////Level 1 - 2nd part/////////////
// const tOrf = 4 > 3 && 10 < 12
// console.log(tOrf)

// const tOrf1 = 4 > 3 && 10 > 12
// console.log(tOrf1)

// const tOrf2 = 4 > 3 || 10 < 12
// console.log(tOrf2)

// const tOrf3 = 4 > 3 || 10 > 12
// console.log(tOrf3)

// const tOrf4 = !(4 > 3)
// console.log(tOrf4)

// const tOrf5 = !(false)
// console.log(tOrf5)

// const tOrf6 = !(4 > 3 && 10 < 12)
// console.log(tOrf6)

// const tOrf7 = !(4 > 3 && 10 > 12)
// console.log(tOrf7)

// const tOrf8 = !(4 === '4')
// console.log(tOrf8)

// const tOrf9 = !(4 > 3 && 10 > 12)
// console.log(tOrf9)

/////////////Level 1 - 3rd part/////////////
// const newDate = new Date()
// console.log(newDate.getFullYear())

// console.log(newDate.getMonth())

// console.log(newDate.getDate())

// console.log(newDate.getDay())

// console.log(newDate.getHours())

// console.log(newDate.getMinutes())

// const getAllSeconds = Date.now()
// console.log(getAllSeconds)


/////////////Level 2 - 1st part/////////////
// window.prompt()
// let areaOfTri = prompt.Number('Enter Base')
// console.log(areaOfTri)
// let areaOfTri1 = prompt('Enter Height')
// console.log(areaOfTri1)

// let newAre = Math.floor(0.5 * areaOfTri * areaOfTri1)
// alert(`the new area of triangle is ${newAre}`)
// console.log(newAre)

let thePerimeterA = Number(prompt('Enter side a:'))
console.log(typeof thePerimeterA)
let thePerimeterB = Number(prompt('Enter side b:'))
console.log(thePerimeterB)
let thePerimeterC = Number(prompt('Enter side c:'))
console.log(thePerimeterC)

let findPerimeter = Math.floor(thePerimeterA + thePerimeterB + thePerimeterC)
console.log(findPerimeter)