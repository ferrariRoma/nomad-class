function logMessage(msg, color) {
  if (!color) {
    color = "black";
  }
  const div = document.createElement("div");
  const log = document.getElementById("log");
  div.innerHTML = msg;
  div.style.color = color;
  log.appendChild(div);
}

let gameover = false;
let battle = false;

function Character(name, hp, att) {
  this.name = name;
  this.hp = hp;
  this.att = att;
}
Character.prototype.attacked = function (damage) {
  this.hp -= damage;
  logMessage(
    this.name + "이(가) 공격받았습니다. " + "체력이 " + this.hp + "남았습니다."
  );
  if (this.hp <= 0) {
    battle = false;
  }
};
Character.prototype.attack = function (target) {
  logMessage(this.name + "이(가) " + target.name + "을 공격합니다.");
  target.attacked(this.att);
};
const nana = new Character("nana", 300, 40);
const yang = new Character("yang", 300, 100);

function Hero(name, hp, att, lev, xp) {
  Character.apply(this, arguments);
  this.lev = lev || 1;
  this.xp = xp || 0;
}
Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;
Hero.prototype.attacked = function (damage) {
  this.hp -= damage;
  logMessage(this.name + ": 체력이 " + this.hp + "남았습니다.");
  if (this.hp <= 0) {
    logMessage(this.name + "이(가) 죽었습니다!", "red");
    battle = false;
    gameover = true;
  }
};
Hero.prototype.attack = function (target) {
  logMessage(this.name + "이(가)" + target.name + "을(를) 공격합니다!");
  target.attacked(this.att);
  if (target.hp <= 0) {
    this.gainXp(target);
  }
};
Hero.prototype.gainXp = function (target) {
  logMessage(
    "전투에서 승리하여 " + target.xp + "의 경험치를 얻습니다!",
    "blue"
  );
  this.xp += target.xp;
  if (this.xp > 100 + 10 * this.lev) {
    this.lev++;
    logMessage("레벨업! " + this.lev + " 레벨이 되었습니다.", "blue");
    this.hp = 100 + this.lev * 10;
    this.xp -= 10 * this.lev + 100;
  }
};

function Monster(name, hp, att, lev, xp) {
  Character.apply(this, arguments);
  this.lev = lev || 1;
  this.xp = xp || 10;
}
Monster.prototype = Object.create(Character.prototype);
Monster.prototype.constructor = Monster;

function makeMonster() {
  const monsterArray = [
    ["rabbit", 25, 3, 1, 35],
    ["Azir", 100, 20, 10, 60],
    ["anty", 50, 10, 5, 50],
    ["devil", 200, 40, 15, 80],
  ];
  let monster = monsterArray[Math.floor(Math.random() * 4)];
  return new Monster(
    monster[0],
    monster[1],
    monster[2],
    monster[3],
    monster[4]
  );
}

const hero = new Hero(prompt("이름을 입력해주세요"), 100, 10);
logMessage(
  hero.name + "님이 모험을 시작합니다! 어느 정도까지 성장할 수 있을까요?"
);
while (!gameover) {
  let monster = makeMonster();
  logMessage(monster.name + "을 마주쳤습니다. 전투가 시작됩니다.", "green");
  battle = true;
  while (battle) {
    hero.attack(monster);
    if (monster.hp > 0) {
      monster.attack(hero);
    }
  }
}
