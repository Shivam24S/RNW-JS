


const greeting = new Promise((resolve,reject)=>{

    setTimeout(() => {
        
        resolve("hello good morning 1")

    }, 5000);
})




const greeting2 = new Promise((resolve,reject)=>{

    setTimeout(() => {
        
        resolve("hello good morning 2")

    }, 10000);
})




// const getMessage = () =>{

    
//     const msg  = greeting

//     console.log("msg",msg);
    

//     console.log("this will print immediately")

// }


// getMessage()


// async- await





async function getMsg(){

    const msg = await greeting

    console.log(msg)

    const msg2 = await greeting2 

    console.log("msg2",msg2)

    console.log("this will wait until my async program complete")

}


getMsg()