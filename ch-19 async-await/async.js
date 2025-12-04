



// async  function getData(){



//   return "hello"

// }


// const result  = getData()

// console.log(result)




const greeting = new Promise((resolve,reject)=>{

    resolve("promise is resolved")
})


async  function getData(){

    return greeting; 
}


const result2 = getData()


result2.then((res)=>{
    console.log(res)
})

// console.log("result 2",result2)