function checkAge(age:number){
    if(age >= 18){
        console.log("You are an adult");
    }else{
        console.log("You are a minor")
    }
}

checkAge(20)
checkAge(15)

function checkNumber(number:number){
    if (number>0){
        console.log("positive")
    }else if (number<0){
        console.log("negative")
    }else{
        console.log("zero")
    }
}

checkNumber(0)
checkNumber(10)
checkNumber(-5)

function calculateDeliveryFee (distanceKilo:number){
    if(distanceKilo >= 0 && distanceKilo <= 5){
        console.log("Delivery fee N1000")
    }else if (distanceKilo > 5 && distanceKilo <= 10){
        console.log("Delivery fee N2000")
    }else if (distanceKilo > 10){
        console.log("Delivery fee N3500")
    }else{
        console.log("Invalid distance")
    }
}

calculateDeliveryFee(3)
calculateDeliveryFee(8)
calculateDeliveryFee(15)
calculateDeliveryFee(-2)