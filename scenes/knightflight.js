import k from '../kaboom.js'


// k.loadSprite('platforms',"../assets/Starter Tiles Platformer/BasicGreenGrid.png")
// k.loadTiledMap('ground',"../assets/Starter Tiles Platformer/Ground.json")


export default function Game () {{
    
    setGravity(2400)
k.add([
    k.sprite('background'),
    k.scale(k.width() / 320, k.height()/240),

])
k.add([
    k.rect(k.width(), 50),
    outline(10),
    k.area(),
    k.color(1,1,1),
    pos(0, k.height() - 50),
    body({isStatic: true}),
])
const player = k.add([
    k.sprite("knight", { anim: "idle" }),
    k.pos(80, 80),
    k.area(),
    k.body(),
])
k.onKeyDown("right",()=>{
    player.move(200,0)
    if(player.isGrounded() && player.curAnim() !== "frun"){
        player.play("frun")
    }
})
k.onKeyDown("left",()=>{
    player.move(-200,0)
    if(player.isGrounded() && player.curAnim() !== "rrun"){
        player.play("rrun")
    }
})
;["left", "right"].forEach((key) => {
	k.onKeyRelease(key, () => {
		if (player.isGrounded() && !isKeyDown("left") && !isKeyDown("right")) {
			player.play("idle")
        }
    })
})
player.onGround(() => {
    if(!isKeyDown('left') && !isKeyDown('right')){
        player.play("idle")
    }
    else if(isKeyDown('right')){
        player.play("frun")
    
    }
    else if(isKeyDown('left')){
        player.play("rrun")
    }
})


k.onKeyPress('space', () => {
    if(player.isGrounded()){
    player.jump()
    player.play("jump")
    }
})
console.log(player)
}
}