document.addEventListener("onload", initSite())

function initSite() { 
getYear()
}

function getYear() {
    fetch("http://sholiday.faboul.se/dagar/v2.1/2006").then((Response) => {
        console.log(Response)
        return Response.json()

    }).then((resJsonConvert) => {
        console.log(resJsonConvert)
      
        let array = resJsonConvert
            for (let i = 0; i < array.dagar.length; i++) {
            
                if(array.dagar[i]["arbetsfri dag"] == "Ja")
                    console.log(array.dagar[i].veckodag + " " + array.dagar[i].datum)
                    let container = document.getElementById("container")
                    let text = document.createElement("li")
                    text.innerText = array.dagar[i].veckodag + " " + array.dagar[i].datum    
                    container.appendChild(text)        
        }
    })
}


















/* let testPromise = new Promise((resolve, reject) => {
    resolve("success") //.then kör denna funktion
    reject("Error") //.catch kör denna. 
})

testPromise.then((value) => {
    console.log(value)
}).catch((error) => {
    console.log(error)
})  */