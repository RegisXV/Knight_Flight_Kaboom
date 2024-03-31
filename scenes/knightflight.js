import k from '../kaboom.js'

k.loadSprite('knight',"../assets/knight.png")
// k.loadSprite('platforms',"../assets/Starter Tiles Platformer/BasicGreenGrid.png")
// k.loadTiledMap('ground',"../assets/Starter Tiles Platformer/Ground.json")
k.loadSprite('background',"../assets/oak_woods_v1.0/oak_woods_v1.0/background/background_layer_1.png")

export default function Game () {{
    setGravity(2400)
k.add([
    k.sprite('background'),
    k.scale(k.width() / 320, k.height()/240),

])
const player = k.add([
    k.rect(32, 32),
    k.pos(k.width() * 0.5, 0),
    k.area(),
    k.body()
])
k.onKeyPress('space', () => {
    player.jump()
})
console.log(player)
}
}