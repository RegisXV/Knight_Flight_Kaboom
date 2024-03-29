import k from '../kaboom.js'

loadSprite('knight',"../assets/knight.png")
loadSprite('background',"../assets/oak_woods_v1.0/oak_woods_v1.0/background/background_layer_1.png")

export default function HelloWorld () {
    k.add([
        k.sprite('background'),
        k.scale(k.width() / 320, k.height()/240),
    
    ])
    k.add([
        k.text('Hello, Kaboom!', 32),
        k.pos(k.width() / 2, k.height() / 2),
    ])
    const player = k.add([
        k.sprite('knight'),
        k.pos(80, 80),
        k.scale(2),
    ])
}
