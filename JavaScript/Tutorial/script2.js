const findInterest = async (principal, rate, time) => {
    return new Promise((resolve, reject) => {
        resolve((principal*rate*time)/100)
    })
}

(async () => {
    let a = await  findInterest(1000,5,10)
    console.log(a)
})()