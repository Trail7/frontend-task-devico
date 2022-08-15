function bar(n) {
    let arr = new Array(n).fill('a').map(() => {
        return new Array(n).fill('b')
    })

    arr.forEach((el, index) => {
        let status = false
        el.forEach((item, ind) => {
            if (ind === index || ind === el.length - (index + 1)) {
                el[ind] = 2
                if (ind === index && index === Math.floor(n/2) && n%2 !== 0) return
                status = !status
                return
            }
            el[ind] = +status

        })
    })
    return arr
}
console.log(bar(4))
console.log(bar(5))
console.log(bar(6))