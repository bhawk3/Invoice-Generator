/* There may be an issue with class and id in 
the html for the line items/buttons/prices */
let serviceContainer = document.getElementById("service-container"); 
const services = []

const totalAmountString = document.getElementById("total-amount")
let totalAmount = 0



//Car Wash function
function carWash() {

    const newCarWashServiceContent = document.createElement('div');
    newCarWashServiceContent.className = "d-flex"
    newCarWashServiceContent.innerHTML = `<div class="col-6"style="justify-content: center;"><p class="line-item-service">Car Wash</p><button type="button" class="line-item-service-btn" onclick="removeService(this, 10)">Remove</button></div>
        <div class="col-6" style="justify-content: center;" id="line-item-price">$ 10</div>`

    serviceContainer.appendChild(newCarWashServiceContent)
    services.push(newCarWashServiceContent)

    totalAmount += 10
    totalAmountString.innerHTML = `$ ${totalAmount}`    
}

//Car Detail function
function carDetail() {
    
    const newCarDetailServiceContent = document.createElement('div');
    newCarDetailServiceContent.className = "d-flex"
    newCarDetailServiceContent.innerHTML = `<div class="col-6"style="justify-content: center;"><p class="line-item-service">Car Detail</p><button type="button" class="line-item-service-btn" onclick="removeService(this, 20)">Remove</button></div>
        <div class="col-6" style="justify-content: center;" id="line-item-price">$ 20</div>`

    serviceContainer.appendChild(newCarDetailServiceContent)
    services.push(newCarDetailServiceContent)
   
    totalAmount += 20
    totalAmountString.innerHTML = `$ ${totalAmount}` 
   }

//Car Shine function
function carShine() {

    const newCarShineServiceContent = document.createElement('div')
    newCarShineServiceContent.className = "d-flex"
    newCarShineServiceContent.innerHTML = `<div class="col-6"style="justify-content: center;"><p class="line-item-service">Car Shine</p><button type="button" class="line-item-service-btn" onclick="removeService(this, 30)">Remove</button></div>
        <div class="col-6" style="justify-content: center;" id="line-item-price">$ 30</div>`

    serviceContainer.appendChild(newCarShineServiceContent)
    services.push(newCarShineServiceContent)

    console.log(services)

    totalAmount += 30
    totalAmountString.innerHTML = `$ ${totalAmount}` 
}

function removeService(button, price ) {

    const serviceElement = button.parentElement.parentElement;
    serviceContainer.removeChild(serviceElement);

    const index = services.indexOf(serviceElement);
    if (index > -1) {
        services.splice(index, 1)
    }

    totalAmount -= price;
    totalAmountString.innerHTML = `$ ${totalAmount}`;
}
    let cwRemove = services.findlastIndex(carWashHTML).pop() //the html that needs to be removed here isnt in an array so lastIndexOf doesnt work
    //let cwRemoved = services.pop()


   for (let i = 0; i < services.length; i++) {
    
        if (cwRemove) {
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
}*/