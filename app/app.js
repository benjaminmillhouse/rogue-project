$(document).ready(function () {
    var character = new Character();
    $('input[name="name-input"]').keypress(function (event) {
        // If enter is pressed, save character name and load dungeon
        if (event.keyCode === 13) {
            var name = event.target.value;
            character.name = name;
            getMap('./dungeon.html');
        }
    });

    /**
     * This function loads the HTML file for the passed-in map, and udpates
     * the view to show it.
     *
     * @param {string} url - The url of the map that you want to display
     */
    function getMap(url) {
        $.get(url, function (data) {
            $('#game-window').html(data);
            $('#message-box').text('Hello ' + character.name + ', Welcome to the Dungeons of Doom!');
            updateStatusBar();
        });
    }

    /**
     * Call this to update the values of the status bar
     */    
    function updateStatusBar() {
        $('#sb-level').text(character.level);
        $('#sb-hp').text(character.hp + '(' + character.hpMax + ')');
        $('#sb-str').text(character.str + '(' + (character.str + character.strMod) + ')');
        $('#sb-gold').text(character.gold);
        $('#sb-armor').text(character.armor);
        $('#sb-exp').text(character.exp + '/' + character.tnl);
    }
});

/**
 * @class
 * This is the base Character class for the hero character
 */
function Character() {
    this.armor = 5;
    this.exp = 0;
    this.gold = 0;
    this.hp = 12;
    this.hpMax = 12;
    this.level = 1;
    this.name = '';
    this.str = 16;
    this.strMod = 0;
    this.tnl = 10;
}
/**
 * This processes a level increase for the character
 */
Character.prototype.levelUp = function () {
    this.level += 1;
    this.hpMax += 10;
    this.hp = this.hpMax;
    this.str += 1;
    this.exp = 0;
};