let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в фломате YYYY-MM-DD', '');


    while(isNaN(money) || money == "" || money ==null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}

start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses () {
   
    for (let i = 0; i <2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце?", ''),
        b = prompt("Во сколько обойдется?", '');
    if((typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50){
    
        appData.expenses[a] = b;
    } else {
    i = i -1;
    }
       
    }
}     
    
chooseExpenses ();


appData.moneyPerDay = (appData.budget /30).toFixed();

alert('Ваш ежедневный бюджет ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100){
    console.log("Minimal")
} else if ( appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Midle")
} else if ( appData.moneyPerDay > 2000) {
    console.log ("Hight")
} else {
    console.log("error")
}


function checkSavings (){
    if (appData.savings == true){
        let save =+ prompt("Какая сумма накоплений"),
        percent =+  prompt("Под какой процент");

        appData.monthInCome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthInCome)
    }
}

checkSavings();