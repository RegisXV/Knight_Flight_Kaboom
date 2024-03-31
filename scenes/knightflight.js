import k from '../kaboom.js'


// k.loadSprite('platforms',"../assets/Starter Tiles Platformer/BasicGreenGrid.png")
// k.loadTiledMap('ground',"../assets/Starter Tiles Platformer/Ground.json")
k.loadSprite('background',"../assets/oak_woods_v1.0/oak_woods_v1.0/background/background_layer_1.png")
k.loadSpriteAtlas("../assets/knight.png", {
    sliceX: 6,
    sliceY: 1,
    anims: {
        idle: {
            from: 11,
            to: 19,
        },
        frun: {
            from: 0,
            to: 9,
        },
        jump: {
            from: 20,
            to: 22,
        },
        rrun: {
            from: 23,
            to: 32,
        },
    },
})


export default function Game () {{
    setGravity(2400)
k.add([
    k.sprite('background'),
    k.scale(k.width() / 320, k.height()/240),

])
const player = k.add([
    k.sprite('knight'),
    k.pos(80, 80),
    k.area(),
    k.body(),
])

player.play('idle')
k.onKeyPress('space', () => {
    player.jump()
    player.play('jump')
})
console.log(player)
}
}