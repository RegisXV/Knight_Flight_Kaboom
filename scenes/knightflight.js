import k from '../kaboom.js'


// k.loadSprite('platforms',"../assets/Starter Tiles Platformer/BasicGreenGrid.png")
// k.loadTiledMap('ground',"../assets/Starter Tiles Platformer/Ground.json")


export default function Game () {{
    
    setGravity(2400)
    const FALL_DEATH = 1000
    
k.add([
    k.sprite('background'),
    k.scale(k.width() / 320, k.height()/240),

])
addLevel([
        "  =  ",
        "=====",
    ], {
        tileWidth:16,
        tileHeight:16,
        pos: vec2(100,200),
        tiles: {
            "=" : () => [
                sprite('platforms'),
                scale(vec2(1,1)),
                area(),
                body({isStatic: true}),
                
            ],

        },
    })
k.add([
    k.rect(k.width(), 50),
    outline(10),
    k.area(),
    pos(0, k.height() - 50),
    body({isStatic: true}),
])
const player = k.add([
    k.sprite("knight", { anim: "idle" }),
    k.pos(80, 80),
    k.area(), //need to resize knight hitbox to be smaller
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

player.onUpdate(()=>{
    camPos(player.pos)

    if(player.pos.y >= FALL_DEATH){
        player.pos = vec2(80,80)
    }
})
console.log(player)
}
}