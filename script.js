'use strict';

let money = prompt('Ваш бюджет на месяц?', '0');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');
let appData = {
  monye: money,
  timeData: time,
  expenses: {

  },
  optionalExpenses: {

  },
  income: [],
  savings: false,
  manyPerDay: 0
};

let countQuestion = 2;
for (let i = 0; i < countQuestion; i++) {
  let question1 = prompt('Введите обязательную статью расходов в этом месяце'),
    question2 = prompt('Во сколько обойдется?');

  if ((typeof(question1) === 'string') && (!isNaN(question2)) &&
    (typeof(question2) === 'string') && (question1 != '') && (question2 != '') &&
    (question1.length < 50)) {
      console.log(typeof(question2));
    appData.expenses[question1] = question2;
  } else {
    i--;
  }
}

// while (true) {
//   let question1 = prompt('Введите обязательную статью расходов в этом месяце');
//   question2 = prompt('Во сколько обойдется?');

//   if ((typeof (question1)) === 'string' && (typeof (question1)) != null &&
//     (typeof (question2)) != null && question1 != '' && question2 != '' &&
//     question1.length < 50) {
//     appData.expenses[question1] = question2;
//   } else {
//     i--;
//   }
// }

let moneyFDay = money;
for (var variable in appData.expenses) {
  if (appData.expenses[variable]) {
    moneyFDay -= appData.expenses[variable];
  }
}
appData.manyPerDay = moneyFDay / 30;
alert('Ваш бюджет на день: ' + money / 30 +
  '\nс учетом обязательных расходов: ' + appData.manyPerDay);

if (appData.manyPerDay < 100) {
  console.log('malo!!!');
} else if (appData.manyPerDay < 1000) {
  console.log('normalno!!!');
} else if (appData.manyPerDay > 2000) {
  console.log('good, very good!!!');
} else {
  console.log("ooops...what's wrong(");
}
