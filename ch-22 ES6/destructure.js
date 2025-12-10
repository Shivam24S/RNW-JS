


const person = {
    name:"alice",
    age:22,
    address:"bvn",
    profession:"eng"
}

console.log(person)


console.log("person name",person.name)
console.log("person age",person.age)
console.log("person address",person.address)
console.log("person profession",person.profession)


const {address,name,profession,age} = person

// renaming
const {address:ads} = person


console.log("address",ads)


console.log("person name",name)
console.log("person age",age)
console.log("person address",address)
console.log("person profession",profession)


const students =  ["utsav","dharmik","vaishali","brij","pratik"] 


console.log("student 1",students[0])
console.log("student 2",students[1])
console.log("student 3",students[2])
console.log("student 4",students[3])
console.log("student 5",students[4])


const [first,second,third,fourth,fifth] = students


console.log("student 1",first)
console.log("student 2",second)
console.log("student 3",third)
console.log("student 4",fourth)
console.log("student 5",fifth)


