const MAX_HEALTH = 100;
const MIN_HEALTH = 0;

var getHealthClass = function (health) {
  return {
    green: health >= 70,
    yellow: health >= 40 && health < 70,
    red: health < 40,
  };
};

var getHealthWidth = function (health) {
  return {
    width: health > 0 ? health + '%' : '0px'
  };
};

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var getAttackDamage = function () {
  return getRandomInt(1, 5);
};

var getSpecialAttackDamage = function () {
  return getRandomInt(6, 15);
};

var getHealingHealth = function () {
  return getRandomInt(1, 15);
};

new Vue({
  el: '#app',
  data: {
    PLAYER_NAME: 'You',
    MONSTER_NAME: 'Monster',
    gameInProgress: false,
    monsterTurn: false,
    playerHealth: MAX_HEALTH,
    monsterHealth: MAX_HEALTH,
    actionLogs: []
  },

  watch: {
    monsterTurn: function () {
      if (this.monsterTurn && !this.winner) {
        var vm = this;

        setTimeout(function () {
          var chance = getRandomInt(1, 100);

          if (chance <= 66) {
            var dmg = chance <= 33 ? getAttackDamage() : getSpecialAttackDamage();
            vm.playerHealth = vm.takeDamage(vm.playerHealth, dmg);
            vm.logAttack(vm.MONSTER_NAME, 'hits', vm.PLAYER_NAME, dmg);
          } else {
            var health = vm.gainHealth(vm.monsterHealth);
            var healthLog = health - vm.monsterHealth;
            vm.monsterHealth = health;
            vm.logHeal(vm.MONSTER_NAME, 'heals', healthLog);
          }
          vm.monsterTurn = false;
        }, 1000);
      }
    }
  },

  computed: {
    monsterCurrentHealthClass: function () {
      return getHealthClass(this.monsterHealth)
    },

    playerCurrentHealthClass: function () {
      return getHealthClass(this.playerHealth)
    },

    monsterCurrentHealthWidth: function () {
      return getHealthWidth(this.monsterHealth)
    },

    playerCurrentHealthWidth: function () {
      return getHealthWidth(this.playerHealth)
    },

    winner: function() {
      var gameWinner = '';

      if(this.monsterHealth === 0) {
        gameWinner = this.PLAYER_NAME;
        this.actionLogs = [];
      }

      if(this.playerHealth === 0) {
        gameWinner =  this.MONSTER_NAME;
        this.actionLogs = [];
      }
      
      return gameWinner;
    }
  },

  methods: {
    startGame: function () {
      this.monsterTurn = false;
      this.playerHealth = MAX_HEALTH;
      this.monsterHealth = MAX_HEALTH;
      this.actionLogs = [];
      this.gameInProgress = true;
    },

    endGame: function () {
      this.playerHealth = MAX_HEALTH;
      this.monsterHealth = MAX_HEALTH;
      this.monsterTurn = false;
      this.actionLogs = [];
      this.gameInProgress = false;
    },

    logAction: function (action) {
      this.actionLogs.unshift(action);
    },

    logAttack: function (attacker, attackVerb, receiver, damage) {
      this.logAction(attacker + ' ' + attackVerb + ' ' + receiver + ' for ' + damage + '.');
    },

    logHeal: function (subject, healVerb, heal) {
      this.logAction(subject + ' ' + healVerb + ' for ' + heal + '.');
    },

    takeDamage: function(currentHealth, dmg) {
      if (currentHealth - dmg <= MIN_HEALTH) {
        currentHealth = MIN_HEALTH;
      } else {
        currentHealth -= dmg;
      }

      return currentHealth;
    },

    gainHealth: function(currentHealth) {
      var health = getHealingHealth();
      if (currentHealth + health >= MAX_HEALTH) {
        currentHealth = MAX_HEALTH;
      } else {
        currentHealth += health;
      }
      return currentHealth;
    },

    attackMonster: function (dmg) {
      this.monsterHealth = this.takeDamage(this.monsterHealth, dmg);
      this.logAttack(this.PLAYER_NAME, 'hit', this.MONSTER_NAME, dmg);
    },

    takePlayerTurn: function (takeAction) {
      if (!this.monsterTurn && !this.winner) {
        if (takeAction) takeAction();
        this.monsterTurn = true;
      }
    },

    performPlayerAttack: function () {
      var vm = this;
      this.takePlayerTurn(function () {
        vm.attackMonster(getAttackDamage());
      })
    },

    performPlayerSpecialAttack: function () {
      var vm = this;
      this.takePlayerTurn(function() {
        vm.attackMonster(getSpecialAttackDamage());
      })
    },

    healPlayer: function () {
      var vm = this;
      this.takePlayerTurn(function() {
        var health = vm.gainHealth(vm.playerHealth);
        var healthLog = health - vm.playerHealth;
        vm.playerHealth = health;
        vm.logHeal(vm.PLAYER_NAME, 'heal', healthLog);
      });
    }
  }
});