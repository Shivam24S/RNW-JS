

let message1 = Symbol("hello")


let message2 = Symbol("hello")


console.log(message1 === message2)



 message1 = ("hello")


 message2 = ("hello")

 console.log(message1 === message2)


 const num = Symbol(123456)


 console.log(typeof num)

 console.log(num)


 console.log(num.description)




 const id = Symbol("id")


 let personDetail = {

    id:1,
    name:"alice",
    [id]:100
    
 }




console.log(personDetail)


 for(let key in personDetail){
    console.log([key],personDetail[key])
 }