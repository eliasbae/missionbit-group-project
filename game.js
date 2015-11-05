
var score1 = 0;
var score2 = 0;

var Game = {
    
    preload : function() {
        game.load.image('paddle1', 'assets/images/paddle.png');
        game.load.image('paddle2', 'assets/images/paddle.png');
        game.load.image ('ball', 'assets/images/ball.png');
    },
    
    create: function () { 
        this.add.button(0, 0, 'startTitle', this.continueGame, this);
        
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
        this.ball.body.velocity.x = 400 * Math.random();
        this.ball.body.velocity.y = 400 * Math.random();
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.x = 1;
        this.ball.body.bounce.y = 1;
        
        var style = {font: '80px Arial', fill:'#FFFFFF', align: 'center'};
        this.playerOneScore = game.add.text(100,100, score1.toString(), style);
        this.playerTwoScore = game.add.text(520,100, score2.toString(), style);
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
    
        if (this.ball.x === 0 || this.ball.x === 615) {
            this.ball.kill();
        }
    },
    
    continueGame: function() {
        this.state.start(this.state.current);
        if (this.ball.x === 615) {
            score1++;
        }
        if (this.ball.x === 0) {
        score2++;
        }
    }
};
  