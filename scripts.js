let food = 0;
let beverage = 0;
let dessert = 0;

function activeOrderFood(classOrder) {
    const active = document.querySelector(".order-food .activeli");
    const activeicon = document.querySelector(".order-food .activeicon")

    if(active !== null){
        active.classList.remove("activeli");
        activeicon.classList.replace("activeicon","checkicon")
    }

    const selector = document.querySelector(classOrder);
    selector.classList.toggle("activeli");

    const checkmark = ".order-food " + classOrder + " .checkicon"
    
    const selectoricon = document.querySelector(checkmark)
    selectoricon.classList.replace("checkicon","activeicon")

    food = 1;
    count(food, beverage, dessert)
}

function activeOrderBeverage(classOrder) {
    const active = document.querySelector(".order-beverage .activeli");
    const activeicon = document.querySelector(".order-beverage .activeicon");
        
    if(active !== null){
        active.classList.remove("activeli");
        activeicon.classList.replace("activeicon","checkicon")
    }

    const selector = document.querySelector(classOrder);
    selector.classList.add("activeli");
    
    const checkmark = ".order-beverage " + classOrder + " .checkicon"
    
    const selectoricon = document.querySelector(checkmark)
    selectoricon.classList.replace("checkicon","activeicon")

    beverage = 1;
    count(food, beverage, dessert)
}

function activeOrderDessert(classOrder) {
    const active = document.querySelector(".order-dessert .activeli");
    const activeicon = document.querySelector(".order-dessert .activeicon");
    
    if(active !== null){
        active.classList.remove("activeli")
        activeicon.classList.replace("activeicon","checkicon")
    }

    const selector = document.querySelector(classOrder);
    selector.classList.add("activeli");

    const checkmark = ".order-dessert " + classOrder + " .checkicon"
    
    const selectoricon = document.querySelector(checkmark)
    selectoricon.classList.replace("checkicon","activeicon")

    dessert =1;
    count(food, beverage, dessert)
}

function count(countFood, countBeverage, countDessert){
    const countTotal = countFood + countBeverage + countDessert;
    if (countTotal === 3) {
    const selectButton = document.querySelector(".select-item")
    selectButton.classList.add("hide")
    const confirmButton = document.querySelector(".end-order")
    confirmButton.classList.replace("hide","unhide")
}
}

function confirmOrder(){
    
    const food = document.querySelector(".order-food .activeli .dishes").innerHTML;
    const foodPrice = document.querySelector(".order-food .activeli .price").innerHTML;

    const beverage = document.querySelector(".order-beverage .activeli .dishes").innerHTML;
    const beveragePrice = document.querySelector(".beverage-price").innerHTML = document.querySelector(".order-beverage .activeli .price").innerHTML;

    const dessert = document.querySelector(".order-dessert .activeli .dishes").innerHTML; 
    const dessertPrice = document.querySelector(".order-dessert .activeli .price").innerHTML;


    document.querySelector(".food").innerHTML = food;
    document.querySelector(".food-price").innerHTML = "&#82;&#36; " + foodPrice
    
    document.querySelector(".beverage").innerHTML = beverage;
    document.querySelector(".beverage-price").innerHTML = "&#82;&#36; " + beveragePrice
    
    document.querySelector(".dessert").innerHTML = dessert;
    document.querySelector(".dessert-price").innerHTML = "&#82;&#36; " + dessertPrice

   
    const total = (parseFloat(foodPrice.replace(",",".")) + parseFloat(beveragePrice.replace(",",".")) + parseFloat(dessertPrice.replace(",","."))).toFixed(2)


    document.querySelector(".total").innerHTML = ("&#82;&#36; " + total).replace(".",",")
    
    
    const stringFood = "- Prato: " + food
    const stringBeverage = "- Bebida: " + beverage
    const stringDessert = "- Sobremesa: " + dessert
    const stringTotal = "Total: R$ " + total.replace(".",",")
    
    const stringMessage = "Olá, gostaria de fazer o pedido: " + stringFood + "&nbsp;" + stringBeverage + "&nbsp;" + stringDessert + "&nbsp;" + stringTotal

    const msgWhtsapp = encodeURIComponent(stringMessage)
    const linkWtsapp = "https://wa.me/5521990624815?text=" + msgWhtsapp

    document.querySelector(".message").setAttribute("href",linkWtsapp)

    const blank = document.querySelector(".blank")
    blank.classList.replace("hide", "unhide")
}

function cancelOrder(){
    const blank = document.querySelector(".blank")
    blank.classList.replace("unhide", "hide")
}
