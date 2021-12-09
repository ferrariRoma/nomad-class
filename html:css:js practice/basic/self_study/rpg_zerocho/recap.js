const div = document.getElementById("log");

// 메시지 생성
function logMessage(content, color) {
  if (!color) {
    color = "black";
  }
  const messageBox = document.createElement("div");
  messageBox.innerHTML = content;
  messageBox.style.color = color;
  div.appendChild(messageBox);
}

let battle = false; // 전투 종료
let gameover = false; // 전투 시작

function Character(name, hp, att) {
  this.name = name;
  this.hp = hp;
  this.att = att;
}

// 공격받음
Character.prototype.attacked = function (damage) {
  this.hp -= damage;
  logMessage(
    this.name +
      "이(가) 공격을 받았습니다. " +
      "체력이 " +
      this.hp +
      "남았습니다."
  );
  if (this.hp <= 0) {
    battle = false;
  }
};

// 공격함
Character.prototype.attack = function (target) {
  logMessage(this.name + "이(가) " + target.name + "을(를) 공격했습니다!");
  target.attacked(this.att);
};

function Hero(name, hp, att, lev, xp) {
  Character.apply(this, arguments);
  this.lev = lev || 1;
  this.xp = xp || 0;
}
Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;
// 공격받음 함수의 확장
Hero.prototype.attacked = function (damage) {
  this.hp -= damage;
  if (this.hp <= 0) {
    logMessage(
      this.name + "이(가) 공격받았습니다. " + 0 + " 체력이 되었습니다!",
      "red"
    );
    battle = false;
    gameover = true;
  }
  logMessage(
    this.name + "이(가) 공격받았습니다. " + this.hp + " 체력이 남았습니다."
  );
};
// 공격 함수의 확장
Hero.prototype.attack = function (target) {
  logMessage(this.name + "을(를) 공격했습니다! " + target.name);
  target.attacked(this.att);
  if (target.hp <= 0) {
  }
};
// 함수획득 함수
Hero.prototype.gainXp = function (target) {
  logMessage(
    "전투에서 승리하여 " + target.xp + "경험치를 획득하였습니다.",
    "blue"
  );
  this.xp += target.xp;
  if (this.xp > 100 + 10 * this.lev) {
    this.lev++;
    logMessage(this.name + "님의 레벨업!! 레벨이 " + this.lev + "되었습니다!");
    this.hp = 100 + this.lev * 10;
    this.xp -= 10 * this.lev + 100;
  }
};

// 몬스터 생성자
function Monster(name, hp, att, lev, xp) {
  Character.apply(this, arguments);
  this.lev = lev || 1;
  this.xp = xp || 10;
}
Monster.prototype = Object.create(Character.prototype);
Monster.prototype.constructor = Monster;
// 몬스터 생성함수
function makeMonster(name, hp, att, lev, xp) {
  const monsterArray = [
    ["nanayang", 100, 30, 20, 20],
    ["wyuly", 80, 20, 15, 15],
    ["rayl", 60, 15, 10, 12],
    ["kimas", 40, 10, 8, 10],
    ["hakey po", 20, 5, 5, 7],
  ];
  let monster = [Math.floor(Math.random * monsterArray.length)];
  return new Monster(
    monster[0],
    monster[1],
    monster[2],
    monster[3],
    monster[4]
  );
}

function battleSystem(player, monster) {
  battle = true;
  player = logMessage(
    player.name + "이(가) " + monster.name + "와 전투를 시작합니다!",
    "green"
  );
  while (battle) {
    player.attack(monster);
    if (monster.hp > 0) {
      monster.attack(player);
    }
  }
}

// 게임 실현
const hero = new Hero(prompt("닉네임을 입력해주세요"), 100, 10);
logMessage("어서오세요, " + hero.name + "게임을 시작합니다.");
while (!gameover) {
  if (confirm("다음 턴을 계속 진행할까요?")) {
    let monster = makeMonster();
    if (confirm(monster.name + "을 마주쳤습니다! 전투를 시작할까요?")) {
      battleSystem(hero, monster);
    } else if (Math.floor(Math.random * 20) % 2 === 0) {
      logMessage(hero.name + "이(가) 도망에 실패했습니다");
      battleSystem(hero, monster);
    } else {
      logMessage("전장을 벗어났습니다!");
    }
  }
}
