var TitleScreen = {
    
    preload : function() {
        game.load.image('titleImage', '/assets/images/missionbit.png')
    },
    
    create: function () { 
        //button at position (0,0) that looks like titleImage and, when clicked, executes the options function
        this.add.button(0, 0, 'titleImage', this.options, this);
    },
    
    options: function () {
        //begins the Options state
        this.state.start('Options');
    },

    startGame: function() {
        this.state.start('Game');
    }
    
};