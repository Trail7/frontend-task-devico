const d = {
    left: {
        left: {
            left: 1,
            right: {
                left: 0,
                right: 1,
            },
        },
        right: {
            left: 0,
            right: 1,
        },
    },
    right: 1,
}

function foo(obj){
    for(const [key, value] of Object.entries(obj)){
        if (value instanceof Object){
            foo(value)
        } else {
            if (obj[key] !== 0 || obj[key] !== 1 ) return
            obj[key] === 0 ? obj[key] = 1 : obj[key] = 0
        }

    }
}

foo(d)

console.log(d)
// console.log(JSON.stringify(d))