scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . 5 1 1 5 1 1 . . . . . 
    . . . . 5 5 1 f 5 f 1 . . . . . 
    . . . . 5 5 1 f 5 f 1 . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . e e e 5 5 5 5 5 e . . . 
    . . . e e e e e 5 5 5 e e e . . 
    . . . . e e e . . . e e e . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setCurrentTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile3`)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . . e e e e . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        . . . . . 5 1 1 5 1 1 . . . . . 
        . . . . 5 5 1 f 5 f 1 . . . . . 
        . . . . 5 5 1 f 5 f 1 . . . . . 
        . . . . 5 5 5 5 5 5 . . . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . 5 5 5 5 5 5 5 . . . . 
        . . . . e e e 5 5 5 5 5 e . . . 
        . . . e e e e e 5 5 5 e e e . . 
        . . . . e e e . . . e e e . . . 
        `)
    controller.moveSprite(mySprite, 100, 100)
    if (mySprite.tileKindAt(TileDirection.Bottom, sprites.castle.tileGrass2)) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 1 1 5 1 1 . . . . . 
            . . . . 5 5 1 f 5 f 1 . . . . . 
            . . . . 5 5 1 f 5 f 1 . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . 5 5 5 5 5 5 5 . . . . 
            . . . . e e e 5 5 5 5 5 e . . . 
            . . . e e e e e 5 5 5 e e e . . 
            . . . . e e e . . . e e e . . . 
            `)
    } else {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . e e e e . . . . . . 
            . . . . . . 5 5 5 5 . . . . . . 
            . . . . . 5 1 1 5 1 1 . . . . . 
            . . . . 5 5 1 f 5 f 1 . . . . . 
            . . . . 5 5 1 f 5 f 1 . . . . . 
            . . . . 5 5 5 5 5 5 . . . . . . 
            . . . . 5 5 5 5 e e 5 . e e . . 
            . . . . . 5 5 e e e 5 e e e . . 
            . . . . . 5 e e e e e e e e . . 
            . . . . . . e e e 5 e e e . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
    if (controller.left.isPressed()) {
        mySprite.image.flipX()
    }
    if (controller.B.isPressed() || controller.A.isPressed()) {
        controller.moveSprite(mySprite, 175, 125)
    }
})
