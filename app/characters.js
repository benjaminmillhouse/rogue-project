
/**
 * @class
 * This is the base Character class for all characters
 */
function Character(name, level) {
    this.armor = 10;
    this.exp = 0;
    this.gold = 0;
    this.hp = 12;
    this.hpMax = 12;
    this.level = level || 1;
    this.name = name || '';
    this.str = 16;
    this.strMod = 0;
    this.tnl = 10;
    this.damage = Math.floor((Math.random() * 8 + 1));
}

Character.prototype.toHit = function () {
    return Math.floor((Math.random() * 10) + 1) >= 3;
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

Character.prototype.attack = function (target) {
    if (Character.prototype.toHit()) {
        target.hp -= this.damage;
    }
}




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