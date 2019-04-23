'use strict';

let money = prompt('Ваш бюджет на месяц?','0');
let time = prompt('Введите дату в формате YYYY-MM-DD','');
let appData ={
  monye: money,
  timeData: time,
  expenses :{

  },
  optionalExpenses: {

  },
  income:[],
  savings: false
};

let countQuestion = 2;
for(let i = 0; i < countQuestion; i++){
  let question1 = prompt('Введите обязательную статью расходов в этом месяце');
  let question2 = prompt('Во сколько обойдется?');
  appData.expenses[question1] = question2;
}

let moneyFDay = money;
for (var variable in appData.expenses) {
  if (appData.expenses[variable]) {
    moneyFDay -= appData.expenses[variable];
  }
}

alert('Ваш бюджет на день: ' + money/30 +'\nс учетом обязательных расходов: '
+ moneyFDay/30);
