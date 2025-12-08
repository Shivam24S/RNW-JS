// document.getElementById("btn").addEventListener("click", () => {
//   const dog = fetch("https://dog.ceo/api/breeds/image/random").then((res) =>
//     res.json()
//   ).then((img)=>{

//     console.log(img)

//     document.getElementById("img").src = img.message

//   });
// });



document.getElementById("btn").addEventListener("click",async ()=>{

    try {

    const image = document.getElementById("img")

    const res = await fetch("https://dog.ceo/api/breeds/image/random")

    const data = await res.json()

    if(data.status !== "success"){

        throw new Error("failed to fetch dog image")
    }

    image.src = data.message
        
    } catch (error) {
        console.log(error)
    }

})