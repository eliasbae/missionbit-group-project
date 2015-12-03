var Help = {
    preload : function() {
    game.load.image('helpTitle', '/assets/images/needhelp.png');
    game.load.image('returnTitle', '/assets/images/rsz_backt.png');
    },
    
    create: function () {
      this.add.sprite(150, 0, 'helpTitle');
      this.add.button(0, 350, 'returnTitle', this.titleScreen, this);
   },
    
    titleScreen: function() {
       game.state.start('TitleScreen');
    },
};