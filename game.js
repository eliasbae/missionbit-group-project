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
        this.ball.body.velocity.y = 200;
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.x = 1;
        this.ball.body.bounce.y = 1;
    },
    
    update: function() {
        if (this.cursor.up.isDown) {
            this.paddle1.body.velocity.y = -350;
        } else if (this.cursor.down.isDown) { 
            this.paddle1.body.velocity.y = 350;
        } else { 
            this.paddle1.body.velocity.y = 0;
        }
        game.physics.arcade.collide(this.paddle1, this.ball);
        game.physics.arcade.collide(this.paddle2, this.ball);
        
        }

};
  