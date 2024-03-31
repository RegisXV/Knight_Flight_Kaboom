import k from "./kaboom.js";

import HelloWorld from "./scenes/helloworld.js";
import Game from "./scenes/knightflight.js";

k.scene('hello_world',HelloWorld)
k.scene('game', Game)
console.log('hello check 1')

k.scene('main', () => {
    
    k.go('game')
})


k.go('main')