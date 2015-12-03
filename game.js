var score1 = 0;
var score2 = 0;
var flag = false;
var flag50 = false;
var flagEnding = false;

var currentVelocity = 200;
var time = 301;
var time2 = 121;

var Game = {

    preload : function() {
        game.load.image('paddle', 'assets/images/paddle.png');
        game.load.image('upperPaddle', 'assets/images/paddle2.png');
        game.load.image ('ball1', 'assets/images/ball.png');
        game.load.image ('ball2', 'assets/images/ball2.png');
        game.load.image ('ball3', 'assets/images/ball3.png');
        game.load.image('blackout', 'assets/images/blackout.jpg');
    },

    create: function () { 
        this.add.button(0, 0, 'startTitle', this.continueGame, this);

        game.physics.startSystem(Phaser.Physics.ARCADE);
        this.cursor = game.input.keyboard.createCursorKeys();
        this.paddle1 = game.add.sprite(50, 200, 'paddle');
        this.paddle2 = game.add.sprite(570, 200, 'paddle');
        game.physics.arcade.enable(this.paddle1);
        game.physics.arcade.enable(this.paddle2);
        this.paddle1.body.immovable = true;
        this.paddle2.body.immovable = true;
        this.paddle1.body.collideWorldBounds = true;
        this.paddle2.body.collideWorldBounds = true;

        this.upperPaddle = game.add.sprite(100, 50, 'upperPaddle');
        game.physics.arcade.enable(this.upperPaddle);
        this.upperPaddle.body.immovable = true;
        this.upperPaddle.body.velocity.x = 350;
        this.upperPaddle.body.velocity.x = -350;
        this.upperPaddle.body.collideWorldBounds = true;
        this.upperPaddle.body.bounce.x = 1;
        this.upperPaddle.visible = false;

        this.blackout = game.add.sprite(0,0, 'blackout');
        this.blackout.visible = false;

        this.ball1 = game.add.sprite(300, 240, 'ball1');
        game.physics.arcade.enable(this.ball1);
        this.ball1.body.velocity.x = currentVelocity
        this.ball1.body.velocity.y = currentVelocity;
        this.ball1.body.collideWorldBounds = true;
        this.ball1.body.bounce.x = 1;
        this.ball1.body.bounce.y = 1;

        this.ball2 = game.add.sprite(300, 240, 'ball2');
        game.physics.arcade.enable(this.ball2);
        this.ball2.body.velocity.x = currentVelocity
        this.ball2.body.velocity.y = currentVelocity;
        this.ball2.body.collideWorldBounds = true;
        this.ball2.body.bounce.x = 1;
        this.ball2.body.bounce.y = 1;
        this.ball2.visible = false;

        this.endingBall = game.add.group();
        
        var style = {font: '80px Arial', fill:'#FFFFFF', align: 'center'};
        this.playerOneScore = game.add.text(100,100, score1.toString(), style);
        this.playerTwoScore = game.add.text(520,100, score2.toString(), style);
        this.endingScore = game.add.text(25,100, "", style);

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
        
        if (!flag50) {

       if (this.ball1.body.velocity.x > currentVelocity || this.ball1.body.velocity.y > currentVelocity) {
            this.ball1.body.velocity.x = currentVelocity;
            this.ball1.body.velocity.y = currentVelocity;
        }

         if (this.ball2.body.velocity.x > currentVelocity || this.ball2.body.velocity.y > currentVelocity) {
            this.ball2.body.velocity.x = currentVelocity;
            this.ball2.body.velocity.y = currentVelocity;
         }


        game.physics.arcade.collide(this.paddle1, this.ball1);
        game.physics.arcade.collide(this.paddle2, this.ball1);

       if (this.ball1.x <= 0) {
            score2++;
            this.ball1.reset(300,300);
            this.ball1.body.velocity.x = currentVelocity * (Math.round(Math.random()) * 2 - 1);
            this.ball1.body.velocity.y = currentVelocity * (Math.round(Math.random()) * 2 - 1); 
            this.playerTwoScore.text = score2;
        }


        if (this.ball1.x >= game.world.width - this.ball1.width) {
            score1++;
            this.ball1.reset(300,300);
            this.ball1.body.velocity.x = currentVelocity * (Math.round(Math.random()) * 2 - 1); 
            this.ball1.body.velocity.y = currentVelocity * (Math.round(Math.random()) * 2 - 1);
            this.playerOneScore.text = score1;
        }

        if (score1 + score2 > 20) {
            if (time > 300) {
                var bsize = game.rnd.realInRange(0.3, 4);
                console.log(bsize);
                this.ball1.scale.setTo(bsize, bsize);
                time = 0;
            }
            time++;
        }

                 if (score1 + score2 > 5) {
            if (time > 300) {
                var bsize = game.rnd.realInRange(0.3, 4);
                console.log(bsize);
                this.ball2.scale.setTo(bsize, bsize);
                time = 0;
            }
            time++;
        }

        if (score1 + score2 > 9) {
            if (!flag) {
                currentVelocity = 500;
            flag = true;
            }
        }

        if (score1 + score2 > 4) {
            this.upperPaddle.visible = true;
            game.physics.arcade.collide(this.upperPaddle, this.ball1);
            game.physics.arcade.collide(this.upperPaddle, this.ball2);

        }

                if (score1 + score2 > 14) {
            this.ball2.visible = true;
            game.physics.arcade.collide(this.paddle1, this.ball2);
            game.physics.arcade.collide(this.paddle2, this.ball2);

            if (this.ball2.x <= 0) {
                score2++;
                this.ball2.reset(300,300);
                this.ball2.body.velocity.x = currentVelocity * (Math.round(Math.random()) * 2 - 1);
                this.ball2.body.velocity.y = currentVelocity * (Math.round(Math.random()) * 2 - 1); 
                this.playerTwoScore.text = score2;
            }


            if (this.ball2.x >= game.world.width - this.ball2.width) {
                score1++;
                this.ball2.reset(300,300);
                this.ball2.body.velocity.x = currentVelocity * (Math.round(Math.random()) * 2 - 1); 
                this.ball2.body.velocity.y = currentVelocity * (Math.round(Math.random()) * 2 - 1);
                this.playerOneScore.text = score1;
            }

        }


        if (score1 + score2 > 19) {
                this.blackout.visible = false;
                if (time2 > 120) {
                    this.blackout.visible = true;
                    if (time2 > 240) {
                        time2 = 0;
                    }
                }
                time2++;
        }
            
        }
        
            
        
        if (score1 + score2 > 29) {
            if (!flagEnding){
                flag50 = true;
                this.blackout.visible = false;
                this.ball2.kill();
                this.upperPaddle.kill();
                this.ball1.kill();


                for (var i = 1; i < score1 + 1; i++) {
                    console.log(i);
                    this.newBall();
                }
                
                this.playerOneScore.text = "";
                this.playerTwoScore.text = "";
                
                    if (score1 > score2) {
                        this.endingScore.text = "PLAYER 1 WINS"
                    }
                    if (score2 > score1) {
                        this.endingScore.text = "PLAYER 2 WINS"}
                    if (score2 === score1) {
                        this.endingScore.text = "BOTH PLAYERS LOSE"}
                flagEnding = true;
                 
            }
            
        }
            

    },

    
    continueGame: function() {
        this.state.start(this.state.current);
        score1 = 0;
        score2 = 0;
        this.playerOneScore.text = score1;
        this.playerTwoScore.text = score2;
        
        flagEnding = false;
    },
     newBall: function() {
        this.ball3 = game.add.sprite (600, -740, 'ball3', this.endingBall);
                game.physics.arcade.enable(this.ball3);
                this.ball3.body.velocity.x = currentVelocity + Math.floor(Math.random() * 100) + 3  ; 
                this.ball3.body.velocity.y = currentVelocity + Math.floor(Math.random() * 100) + 3 ; 
                this.ball3.body.collideWorldBounds = true;
                this.ball3.body.bounce.x = 1;
                this.ball3.body.bounce.y = 1;


         
    }

};
