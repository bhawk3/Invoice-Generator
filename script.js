/* There may be an issue with class and id in 
the html for the line items/buttons/prices */
let serviceContainer = document.getElementById("service-container"); 
const services = []

const totalAmountString = document.getElementById("total-amount")
let totalAmount = 0

const carWashHTML = `<div class="col-6"style="justify-content: center;"><p class="line-item-service">Car Wash</p><button type="button" class="line-item-service-btn" onclick="cwRemoveBtn()">Remove</button></div>
        <div class="col-6" style="justify-content: center;" id="line-item-price">$ 10</div>`

const newCarWashServiceContent = document.createElement('div');


//Car Wash function
function carWash() {
   
    newCarWashServiceContent.className = "d-flex"
    newCarWashServiceContent.innerHTML = carWashHTML
    serviceContainer.appendChild(newCarWashServiceContent)
    services.push(newCarWashServiceContent)

    let amount = totalAmount += 10
    totalAmountString.innerHTML = amount    
}

//Car Detail function
function carDetail() {
    
    const newCarDetailServiceContent = document.createElement('div');
    newCarDetailServiceContent.className = "d-flex"
    newCarDetailServiceContent.innerHTML = `<div class="col-6"style="justify-content: center;"><p class="line-item-service">Car Detail</p><button type="button" class="line-item-service-btn" onclick="cdRemoveBtn()">Remove</button></div>
        <div class="col-6" style="justify-content: center;" id="line-item-price">$ 20</div>`

    serviceContainer.appendChild(newCarDetailServiceContent)
    services.push(newCarDetailServiceContent)
   
    let amount = totalAmount += 20
    totalAmountString.innerHTML = amount
   }

//Car Shine function
function carShine() {


    const newCarShineServiceContent = document.createElement('div')
    newCarShineServiceContent.className = "d-flex"
    newCarShineServiceContent.innerHTML = `<div class="col-6"style="justify-content: center;"><p class="line-item-service">Car Shine</p><button type="button" class="line-item-service-btn" onclick="csRemoveBtn()">Remove</button></div>
        <div class="col-6" style="justify-content: center;" id="line-item-price">$ 30</div>`

    serviceContainer.appendChild(newCarShineServiceContent)
    services.push(newCarShineServiceContent)

    console.log(services)

    let amount = totalAmount += 30
    totalAmountString.innerHTML = amount
}

//Car Wash Remove Btn
function cwRemoveBtn() {
    let cwRemove = serviceContainer.lastIndexOf(carWashHTML) //the html that needs to be removed here isnt in an array so lastIndexOf doesnt work
    let cwRemoved = services.pop()


   for (let i = 0; i < services.length; i++) {
        if (cwRemove && cwRemoved) {
            serviceContainer.removeChild(cwRemove)
            
            totalAmountString.innerHTML = totalAmount - 10
        } 
   }

    
}

//Car Detail Remove Btn
function cdRemoveBtn() {
    let cdRemove = services.pop()

    if (cdRemove) {
        serviceContainer.removeChild(cdRemove)
       // totalAmount - 20

        totalAmountString.innerHTML = totalAmount - 20
    }
}

//Car Shine Remove Btn
function csRemoveBtn() {
    let csRemove = services.pop()

    if (csRemove) {
        serviceContainer.removeChild(csRemove)
      //  totalAmount - 30
      totalAmountString.innerHTML = totalAmount - 30
    }
}