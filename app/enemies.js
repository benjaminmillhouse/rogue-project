// Character class for the enemy

function Enemy(name, level) {
    this.name = name;
    this.level = level;
    this.hp = 10 + (level - 1) * 5;
    this.hpMax = this.hp;
    this.armor = level;
    this.str = 10 + (level - 1);
    this.strMod = 0;
    this.expAward = 1 * level;
}

// lvl 1 enemies
var bat = new Enemy('bat', 1);
var skeleton = new Enemy('skeleton', 1);

