


document.querySelector("body").addEventListener("mousemove", (e) => {
    // document.querySelector("body").style.backgroundColor = `rgb(${e.screenX % 255}, ${e.screenY %255}, ${e.screenX %255 + e.screenY %255})`
    
    document.querySelector(".container1").style.backgroundColor = `rgb(${e.screenX % 255}, ${e.screenY %20}, ${e.screenX %255 + e.screenY %255})`
    
    document.querySelector(".container2").style.backgroundColor = `rgb(${e.screenX % 255}, ${e.screenY %111}, ${e.screenX %200 + e.screenY %255})`
    
    document.querySelector(".container3").style.backgroundColor = `rgb(${e.screenX % 55}, ${e.screenY %3}, ${e.screenX %150 + e.screenY %255})`
    
    document.querySelector(".container4").style.backgroundColor = `rgb(${e.screenX % 255}, ${e.screenY %200}, ${e.screenX %100 + e.screenY %25})`
    
    



})

