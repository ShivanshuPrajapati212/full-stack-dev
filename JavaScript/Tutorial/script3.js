const p = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello")
        }, 2000);
        setTimeout(() => {
            resolve("World")
        }, 4000);
    })
}

(async () => {
    let a = await p()
    console.log(a)
})()