
const statVar = 1

const aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (statVar == 1) {
            console.log("things resolved")
            resolve(1)
        } else {
            reject(new Error("shut the fuck up"))
        }
    }, 2000)
})

aPromise //
    .then((a) => {
        console.log(a)
        return a + 10
    })
    .then((a) => {
        console.log(a)
        return a + 20
    }).then((a) => {
        console.log(a)
    })
    .catch(console.log())








