var Credits = {
    
    preload : function() {
        game.load.image('returnTitle', '/assets/images/rsz_backt.png');
    },
    
    create: function() {
        this.add.button(0,400, 'returnTitle', this.titleScreen, this);
        var style = {font: '200px Brush Script MT', fill:'#660066', align: 'center'};
        var styleWords = {font: '40px Courier New', fill:'#006633', align: 'center'};
        this.credits = game.add.text(82,-40, 'Credits', style);
        this.by = game.add.text(150,170, 'Produced By...', styleWords);
        this.elias = game.add.text(190,210, 'Elias Bae', styleWords);
        this.maddie =game.add.text(190,250, 'Madison Woo', styleWords);
        this.mona = game.add.text(190,290, 'Mona Xu', styleWords);
        this.thanks = game.add.text(40,330, 'And Special Thanks To...', styleWords);
        this.ruellia = game.add.text(90,380, 'Ruellia & MissionBit', styleWords);
    },
    
    titleScreen: function() {
       game.state.start('TitleScreen');
    },
};