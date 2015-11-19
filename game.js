var score1 = 0;
var score2 = 0;
var flag = false;

var currentVelocity = 200;
var time = 301;

var Game = {
    
    preload : function() {
        game.load.image('paddle1', 'assets/images/paddle.png');
        game.load.image('paddle2', 'assets/images/paddle.png');
        game.load.image('upperPaddle', 'assets/images/paddle.png');
        game.load.image ('ball', 'assets/images/ball.png');
        game.load.image('blackout', 'assets/images/blackout.jpg');
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
        
        this.blackout = game.add.sprite(0,0, 'blackout');
        this.blackout.visible = false;
        
        this.ball = game.add.sprite(300, 240, 'ball');
        game.physics.arcade.enable(this.ball);
        this.ball.body.velocity.x = currentVelocity
        this.ball.body.velocity.y = currentVelocity;
        this.ball.body.collideWorldBounds = true;
        this.ball.body.bounce.x = 1;
        this.ball.body.bounce.y = 1;
        
        var style = {font: '80px Arial', fill:'#FFFFFF', align: 'center'};
        this.playerOneScore = game.add.text(100,100, score1.toString(), style);
        this.playerTwoScore = game.add.text(520,100, score2.toString(), style);
        
        this.wasd = {
            up: game.input.keyboard.addKey(Phaser.Keyboard.W),
            down: game.input.keyboard.addKey(Phaser.Keyboard.S),
            left: game.input.keyboard.addKey(Phaser.Keyboard.A),
            right: game.input.keyboard.addKey(Phaser.Keyboard.D)
        }
    },
    
    update: function() {
        if (this.cursor.up.isDown) {
            this.paddle2.body.velocity.y = -350;
        } else if (this.cursor.down.isDown) { 
            this.paddle2.body.velocity.y = 350;
        } else { 
            this.paddle2.body.velocity.y = 0;
        }
        
        if (this.wasd.up.isDown) {
            this.paddle1.body.velocity.y = -350;
        } else if (this.wasd.down.isDown) {
            this.paddle1.body.velocity.y = 350;
        } else {
            this.paddle1.body.velocity.y = 0;
        }
        
        if (this.ball.body.velocity.x > currentVelocity || this.ball.body.velocity.y > currentVelocity) {
            this.ball.body.velocity.x = currentVelocity;
            this.ball.body.velocity.y = currentVelocity;
        }
        
        game.physics.arcade.collide(this.paddle1, this.ball);
        game.physics.arcade.collide(this.paddle2, this.ball);
    
        if (this.ball.x <= 0) {
            score2++;
            this.ball.reset(300,300);
            this.ball.body.velocity.x = currentVelocity * (Math.round(Math.random()) * 2 - 1);
            this.ball.body.velocity.y = currentVelocity * (Math.round(Math.random()) * 2 - 1); 
            this.playerTwoScore.text = score2;
        }
            
        if (this.ball.x >= game.world.width - this.ball.width) {
            score1++;
            this.ball.reset(300,300);
            this.ball.body.velocity.x = currentVelocity * (Math.round(Math.random()) * 2 - 1); 
            this.ball.body.velocity.y = currentVelocity * (Math.round(Math.random()) * 2 - 1);
            this.playerOneScore.text = score1;
        }
        
        if (score1 + score2 > 5) {
            if (time > 300) {
                var bsize = game.rnd.realInRange(0.3, 4);
                console.log(bsize);
                this.ball.scale.setTo(bsize, bsize);
                time = 0;
            }
            time++;
        }

        if (score1 + score2 > 10) {
            if (!flag) {
                currentVelocity = 500;
            flag = true;
            }
        }
            
        if (score1 + score2 > 20) {
			this.blackout.visible = false;
            if (time > 30) {
                this.blackout.visible = true;
                { if (time > 60)
                {
                time = 0;}
                }
            }
        }

    },
    
    continueGame: function() {
        this.state.start(this.state.current);
    }
        
};
  