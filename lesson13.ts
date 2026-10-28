type UserId = string | number

function displayUserId( id: UserId): void{
    if(typeof id === "string"){
        console.log( `Your ID is: ${id.toUpperCase()}`)
    }else if(typeof id === "number"){
        console.log(`Your ID is: ${id*10}`)
    }
}

displayUserId("user101");
displayUserId(25);