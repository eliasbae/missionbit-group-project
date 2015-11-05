var currentVelocity = 200;
var time = 0;

var Game = {
    
    preload : function() {
        game.load.image('paddle1', 'assets/images/paddle.png');
        game.load.image('paddle2', 'assets/images/paddle.png');
        game.load.image ('ball', 'assets/images/ball.png');
    },
    
    create: function () { 
        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursor = game.input.keyboard.createCursorKeys();
        this.paddle1 = game.add.sprite(50, 200, 'paddle1');
        this.paddle2 = game.add.sprite(570, 200, 'paddle2');
        game.physics.arcade.enable(this.paddle1);
        game.physics.arcade.enable(this.paddle2);
        this.paddle1.body.immovable = true;
        this.paddle2.body.immovable = true;
        this.paddle1.body.collideWorldBounds = true;
        this.paddle2.body.collideWorldBounds = true;
        
        this.ball = game.add.sprite(300, 240, 'ball');
        game.physics.arcade.enable(this.ball);
        this.ball.body.velocity.x = 200;
        this.ball.body.velocity.y = 2
        00;
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.x = 1;
        this.ball.body.bounce.y = 1;
        
        this.wasd = {
            up: game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: game.input.keyboard.addKey(Phaser.Keyboard.D)
        }
    },
    
    update: function() {
        if (this.cursor.up.isDown) {
            this.paddle1.body.velocity.y = -350;
        } else if (this.cursor.down.isDown) { 
            this.paddle1.body.velocity.y = 350;
        } else { 
            this.paddle1.body.velocity.y = 0;
        }
        
        if (this.wasd.up.isDown) {
            this.paddle2.body.velocity.y = -350;
        } else if (this.wasd.down.isDown) {
            this.paddle2.body.velocity.y = 350;
        } else {
            this.paddle2.body.velocity.y = 0;
        }
        
        if (this.ball.body.velocity.x > currentVelocity || this.ball.body.velocity.y > currentVelocity) {
            this.ball.body.velocity.x = currentVelocity;
            this.ball.body.velocity.y = currentVelocity;
        }
        game.physics.arcade.collide(this.paddle1, this.ball);
        game.physics.arcade.collide(this.paddle2, this.ball);
        
//        if (score > 9) {
//            if (time > 600) {
//                var bsize = game.rnd.realInRange(-2, 6);
//                this.ball.scale.setTo(bsize, bsize);
//                time = 0;
//            }
//            time++;
//        }
        
        //won't work until scoring process implemented
//        if (score > 4) {
//            this.ball.body.velocity.x = 500;
//            this.ball.body.velocity.y = 500;
//            currentVelocity = 500;
//        }
    }
    

};