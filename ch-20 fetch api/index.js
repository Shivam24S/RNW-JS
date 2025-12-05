

// using promise

// const userData =  () =>{

//     const res = fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((user)=>console.log(user.map((user)=>user.username)))

//     console.log(res)

// }

// userData()


// using async await



async function fetchData() {
    try {

        const res = await fetch("https://jsonplaceholder.typicode.com/users")

        const data = await res.json();

        console.log(data)

        if(!data.ok){
            throw new Error("failed to fetch data")
        }
        
    } catch (error) {

        console.log(error)
        
    }
    
}


fetchData()