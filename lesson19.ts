async function getUserName(): Promise<string>{
    return "samad"
}

async function displayUserName():Promise<void>{
    const name:string = await getUserName();
    console.log(`Hello ${name}`)
}

displayUserName()
