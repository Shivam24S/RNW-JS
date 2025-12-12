


function scope(){

    var msg="good morning"

    function greet(){

        var person = "alice"
        

        console.log("hello" + person + msg)
    }


    greet()

   
}


scope()


//  console.log(msg)


var greet;


greet = "hello"

console.log(greet)

greet = "hi"

console.log(greet)