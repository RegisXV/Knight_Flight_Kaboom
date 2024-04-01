import k from '../kaboom.js'

export default function Game () {{
    
    setGravity(2400)
    let score = 0
    const FALL_DEATH = 1000
k.add([
    k.sprite('background'),
    k.scale(k.width() / 320, k.height()/240),

])
addLevel([
    "             $$                ",
    "             ==                ",
    "                               ",
    "        $                      ",
    "       ==                      ",
    "                          $    ",
    "                          $    ",
    "           $$             $    ",
    "         ====             $    ",
    "                               ",
    "                             $ ",
    "     ==============     =======",
    "                               ",
    "                               ",
    "                          $    ",
    "                      =   $    ",
    "                          $    ",
    "                       =  $    ",
    "                               ",
    "                               ",
    "                               ",
    "           $       $       $ $",
    "====   =   =   =   =   ========",
    ], {
        tileWidth:16,
        tileHeight:16,
        pos: vec2(0,50),
        tiles: {
            "=" : () => [
                sprite('platforms'),
                scale(vec2(1,1)),
                area(),
                body({isStatic: true}),
                'platforms',
                
            ],
            "$": () => [
                sprite('coin'),
                scale(vec2(1,1)),
                area(),
                'coin',
            ],

        },
    })
const player = k.add([
    k.sprite("knight", { anim: "idle" }),
    k.pos(10, 80),
    k.area({ scale: 0.3 }),  // Define a square hitbox //need to resize knight hitbox to be smaller
    k.anchor("bot"),
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
player.onCollide('coin', (coin) => {
	destroy(coin),
    score += 1,
    coinsLabel.text = score
    
})
const coinsLabel = add([
    text(score),
    pos(24, 24),
    fixed(),
])

player.onUpdate(()=>{
    camPos(player.pos)

    if(player.pos.y >= FALL_DEATH){
        player.pos = vec2(80,80)
    }
    if(score==18){
        k.go('main')
    }
})

}
}