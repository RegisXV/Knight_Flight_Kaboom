import k from "./kaboom.js";

import HelloWorld from "./scenes/helloworld.js";
console.log('hello check 0')

k.scene('hello_world',HelloWorld)
console.log('hello check 1')

k.scene('main', () => {
    
    k.go('hello_world')
})


k.go('main')