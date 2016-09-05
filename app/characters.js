var goldItem = function () {
   return Math.floor((Math.random() * 20) + 10);
}
/**
 * @class
 * This is the base Character class for all characters
 */
function Character(name, level) {
    this.armor = 10;
    this.exp = 0;
    this.element = $('<span></span>');
    this.gold = 0;
    this.hp = 12;
    this.hpMax = 12;
    this.level = level || 1;
    this.name = name || '';
    this.str = 16;
    this.strMod = 0;
    this.tnl = 10;

}

Character.prototype.toHit = function () {
    return Math.floor((Math.random() * 10) + 1) >= 3;
}

Character.prototype.pickUpGold = function () {
    gold = goldItem() * this.level;
    this.gold += gold;
    updateMessage("You picked up " + gold + " gold!");
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
// attack function
Character.prototype.attack = function (target) {
    if (Character.prototype.toHit()) {
        var damage = this.damage();
        target.hp -= damage;
        if (this instanceof Enemy) {
            updateMessage(this.name + " hit you for " + damage + "!")
        } else {
            updateMessage("You hit the " + target.name + " for " + damage + "!")
        }
    }
};

/**
 * Checks to see if the character is able to do the pressed move.
 * Am able to tell by viewing the current position of the character
 * @param {string} direction
 */
Character.prototype.checkMove = function (direction) {
    switch (direction) {
        case 'up': return this.element.position().top !== 0;
        case 'down': return this.element.position().top + 20 !== $('.room').height();
        case 'left': return this.element.position().left !== 0;
        case 'right': return this.element.position().left + 15 !== $('.room').width();
        default: return false;
    }
}

Character.prototype.damage = function () {
    return Math.floor((Math.random() * 8 + 1));
};

/**
 * Moves the character in the passed direction
 * Valid values: 'up' | 'down' | 'left' | 'right'
 * @param {string} direction - The direction to move
 */
Character.prototype.move = function (direction) {
    var moves = {
        'up': { top: '-=20' },
        'down': { top: '+=20' },
        'left': { left: '-=15' },
        'right': { left: '+=15' }
    };
    if (this.checkMove(direction)) {
        this.element.animate(moves[direction], 10, 'linear');
    }
};

/**
 * Renders the character element to the DOM
 */
Character.prototype.render = function () {
    $('.room').append(this.element);
};

// Character class for the enemy

function Enemy(name, level) {
    Character.call(this, name, level);
    this.expAward = 1 * this.level;
}
Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy.constructor;

function Bat(name, level) {
    name = name || 'bat';
    Enemy.call(this, name, level);
}
Bat.prototype = Object.create(Enemy.prototype);
Bat.prototype.constructor = Bat.constructor;

// lvl 1 enemies
var bat = new Enemy('bat', 1);
var bat2 = bat;
var skeleton = new Enemy('skeleton', 1);