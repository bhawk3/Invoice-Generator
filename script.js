/* There may be an issue with class and id in 
the html for the line items/buttons/prices */


//Car Wash function
function carWash() {
    document.getElementById("service-container").innerHTML += `<div class="col-6"style="justify-content: center;"><p class="line-item-service">Car Wash</p><button type="button" class="line-item-service-btn" onclick="cwRemoveBtn()">Remove</button></div>
        <div class="col-6" style="justify-content: center;" id="line-item-price">$ 10</div>`     
}
//Car Detail function
function carDetail() {
    //innerHTML should work fine in this use case bc youre not getting user input
    document.getElementById("service-container").innerHTML += `<div class="col-6"style="justify-content: center;"><p class="line-item-service">Car Detail</p><button type="button" class="line-item-service-btn" onclick="cdRemoveBtn()">Remove</button></div>
        <div class="col-6" style="justify-content: center;" id="line-item-price">$ 20</div>`
}

//Car Shine function
function carShine() {
    document.getElementById("service-container").innerHTML += `<div class="col-6"style="justify-content: center;"><p class="line-item-service">Car Shine</p><button type="button" class="line-item-service-btn" onclick="csRemoveBtn()">Remove</button></div>
        <div class="col-6" style="justify-content: center;" id="line-item-price">$ 30</div>`   
}

//Car Wash Remove Btn
function cwRemoveBtn() {
   let cwRemove = document.getElementById("service-container").innerHTML = ''

    cwRemove.remove()
}

//Car Detail Remove Btn
function cdRemoveBtn() {
    document.getElementById("service-container").innerHTML = ''

}

//Car Shine Remove Btn
function csRemoveBtn() {
    document.getElementById("service-container").innerHTML = ''

}