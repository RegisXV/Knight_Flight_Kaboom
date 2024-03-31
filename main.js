import k from "./kaboom.js";

import HelloWorld from "./scenes/helloworld.js";
import Game from "./scenes/knightflight.js";

k.scene('hello_world',HelloWorld)
k.scene('game', Game)


k.loadSprite('background',"../assets/oak_woods_v1.0/oak_woods_v1.0/background/background_layer_1.png")
k.loadSprite("knight","../assets/knightspritesheet.png", { 
        sliceX: 11,
        sliceY: 3,
        width: 120,
        height: 80,
        anims: {
            
            "frun": {
                from: 0,
                to: 9,
                speed: 10,
                loop: true,
            },    
                "idle": {
                from: 10,
                to: 19,
                speed: 5,
                loop: true,
            },
            
            "jump": {
                from: 20,
                to: 22,
            },
            "rrun": {
                from: 32,
                to: 23,
                speed: 10,
                loop: true,
            },
        },
    })


console.log('hello check 1')

k.scene('main', () => {
    
    k.go('game')
})


k.go('main')