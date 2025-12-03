

const cart= ["shoes","cloth","smartPhone"]

// const cart= []




// producing code 

const createCart = new Promise((resolve,reject)=>{

    if(cart.length >0){

        const orderId=15454

       setTimeout(() => {

      resolve(orderId)
        
       }, 3000);
    }else {
        reject("cart is empty")
    }

})



const paymentInitiated = (orderId) =>{



return new Promise((resolve,reject)=>{

    let balance = 5000;

    if(orderId && balance>0){

    setTimeout(() => {

        resolve("payment initiated")
        
    }, 2000);

    }else {
        reject("insufficient balance")
    }

})


}

// consuming code 

createCart.then((orderId)=>{
    console.log("order Id:",orderId)

   return  paymentInitiated(orderId)

})
.then((paymentStatus)=>{
    console.log(paymentStatus)
})
.catch((err)=>{
    console.log(err)
})
