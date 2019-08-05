'use strict';

let money = prompt('Ваш бюджет на месяц?', '0'),
  time = prompt('Введите дату в формате YYYY-MM-DD', ''),
  appData = {
    monye: money,
    timeData: time,
    expenses: {

    },
    optionalExpenses: {

    },
    income: [],
    savings: false,
    manyPerDay: 0
  },
  question1, question2, question3, question4;

function detectDayBudget() {
  let moneyFDay = money;
  for (var variable in appData.expenses) {
    if (appData.expenses[variable]) {
      moneyFDay -= appData.expenses[variable];
    }
  }
  appData.manyPerDay = moneyFDay / 30;
  alert('Ваш бюджет на день: ' + money / 30 +
    '\nс учетом обязательных расходов: ' + appData.manyPerDay);
}

function detectLevel() {
  if (appData.manyPerDay < 100) {
    console.log('malo!!!');
  } else if (appData.manyPerDay < 1000) {
    console.log('normalno!!!');
  } else if (appData.manyPerDay > 1000) {
    console.log('good, very good!!!');
  } else {
    console.log("ooops...what's wrong(");
  }
}

function chooseOptExpenses(countQuestionLocal) {
  // question4 = prompt();
  while (countQuestionLocal > 0) {
    question3 = prompt('Статья необязательных расходов?');
    if ((typeof (question3) == 'string') && (isNaN(question3)) &&
      (question3 != '')) {
      console.log('true -> countQLocal:' + countQuestionLocal);
      appData.optionalExpenses[countQuestionLocal]=question3;
    } else {
      console.log('false ^|^');
      continue;
    }
    countQuestionLocal--;
    console.log('itheration -> countQLocal:' + countQuestionLocal);
  }
}

let countQuestion = 2;
for (let i = 0; i < countQuestion; i++) {
  question1 = prompt('Введите обязательную статью расходов в этом месяце');
  question2 = prompt('Во сколько обойдется?');

  if ((typeof (question1) === 'string') && (!isNaN(question2)) &&
    (typeof (question2) === 'string') && (question1 != '') && (question2 != '') &&
    (question1.length < 50)) {
    console.log(typeof (question2));
    appData.expenses[question1] = question2;
  } else {
    console.log(typeof (question2) != null);
    i--;
  }
}
detectDayBudget();
chooseOptExpenses(3);
detectLevel();
// console.log(typeof (null) === null);