const currencyOne = document.getElementById("currency-one");
const currencyTwo = document.getElementById("currency-two");
const getBtn = document.getElementById("convert-btn");
const Input = document.getElementById("amount")
const ansOne = document.getElementById("Ans-one");
const andTwo = document.getElementById("Ans-second");

function calculate() {
    let currOne = currencyOne.value;
    let currTwo = currencyTwo.value;
    let input = Input.value;
    //console.log(input);
    fetch(` https://v6.exchangerate-api.com/v6/1e359e6846cdc9f51560acce/latest/${currOne}`)
        .then(res => res.json())
        .then(data => {
            const rateAll = input * data.conversion_rates[currTwo];
            const rate = data.conversion_rates[currTwo];

            ansOne.innerText = `${input} ${currOne} = ${rateAll} ${currTwo}`;
            andTwo.innerText = `1 ${currOne} = ${rate} ${currTwo}`;
        })
}