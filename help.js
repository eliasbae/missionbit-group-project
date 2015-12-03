var Help = {
    preload : function() {
    game.load.image('helpTitle', '/assets/images/needhelp.png');
    game.load.image('returnTitle', '/assets/images/rsz_backt.png');
    },
    
    create: function () {
      this.add.sprite(150, 0, 'helpTitle');
      this.add.button(0, 350, 'returnTitle', this.titleScreen, this);
      var style = {font: '50px Sans Serif', fill:'#FFFFFF', align: 'center'};
      var styleStep = {font: '20px Sans Serif', fill:'#FFFFFF', align: 'center'};
      this.instructions = game.add.text(140,180, 'INSTRUCTIONS', style);
      this.step1 = game.add.text(140,230, '1. Player 1 uses up and down arrow keys to move.', styleStep);
      this.step2 = game.add.text(140,270, '2. Player 2 uses W and S keys to move.', styleStep);
      this.step3 = game.add.text(140,310, '3. Use the paddle to block the ball from hitting your side.', styleStep);
      this.step4 = game.add.text(140,350, '4. You get a point when it hits the opposite wall.', styleStep);
      this.step5 = game.add.text(140,390, '5. Try to reach 30 points to win.', styleStep);
      this.step6 = game.add.text(140,430, '6. HAVE FUN!', styleStep);
   },
    
    titleScreen: function() {
       game.state.start('TitleScreen');
    },
};