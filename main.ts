namespace SpriteKind {
    export const Ninja = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ninja, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate)
    scene.cameraShake(4, 500)
    sprite.say(randomSayings._pickRandom(), 500)
})
function makeEnemy () {
    info.changeScoreBy(1)
    evilNinja = sprites.create(img`
        ..............ffffff....
        .............fffffffff..
        ............fffffffffff.
        ............ffffffffffff
        ...........fffffffffffff
        ...........ffffffffffff.
        ...........fffeeefffffff
        ...........fee44fbe44eff
        ............feccf14d4eef
        .............fcccc4eeef.
        .............fe444eccf..
        .............ccc22eccf..
        .............cdc22fee...
        ............cddc4444f...
        ...........cddcfffff....
        ..........cddc..fff.....
        ..........cdc...........
        ..........cc............
        ........................
        ........................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Ninja)
    evilNinja.vx = 40
    evilNinja.vy = 60
    evilNinja.y = 0
    evilNinja.x = randint(0, 160)
    evilNinja.setBounceOnWall(true)
}
let evilNinja: Sprite = null
let randomSayings: string[] = []
randomSayings = ["YEET", "RASENGAN", "CHIDORI", "BRUH", "RASENGAN"]
info.setLife(10)
info.setScore(0)
let monkeyLeftImg = img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `
let monkeyRightImg = monkeyLeftImg.clone()
monkeyRightImg.flipX()
let monkey = sprites.create(monkeyLeftImg, SpriteKind.Player)
controller.moveSprite(monkey, 100, 0)
monkey.y = 110
monkey.setStayInScreen(true)
makeEnemy()
scene.setBackgroundColor(1)
game.onUpdateInterval(2000, function () {
    makeEnemy()
})
