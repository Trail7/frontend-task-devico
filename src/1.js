const foo = (function f () {
    let i = 1
    return function g() {
        console.log(i++)
    }
})()


foo()
foo()
foo()
