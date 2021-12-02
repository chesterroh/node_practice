
// 1. async
async function fetchUser() {
    // do network request in 10 secs 
    return 'Chester'
}

const user = fetchUser()
console.log(user)


// 2.await .. this function can be only used inside the "async" function block

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getApple() {
    await delay(3000)
    return 'apple'
}

async function getBanana() {
    await delay(2000)
    return 'banana'
}

async function pickFruits() {
    try {
        const applePromise = getApple()
        const bananaPromise = getBanana()
        const apple = await applePromise
        const banana = await bananaPromise
        return `${apple} + ${banana}`
        } catch {
        return new Error("fuck the world")
    }
    
}
//pickFruits().then(console.log)

// 3. Useful Promise API

function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then( fruits => 
        { return fruits.join(' ++ ')})
    
}
pickAllFruits().then(console.log)

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]).then( fruit => fruit)
}

pickOnlyOne().then(console.log)