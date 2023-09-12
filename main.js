const btn = document.querySelector('#btn');
const input = document.querySelector("#inpValue");
const errorMsg = document.querySelector(".error-msg");

const evenArray = document.querySelector('.evenArray');
const oddArray = document.querySelector('.oddArray');

btn.addEventListener('click', () => {
    let value = input.value === "" ? "" : Number(input.value);


    if(value === ''){
        errorMsg.innerText = 'The Task Value field is required.';
    }else{
        if(isNaN(value)){
            errorMsg.innerText = "The Task Value field contains only numbers.";
        }else{
            errorMsg.innerText = '';

            if(value % 2 === 0){
                let li = document.createElement('li');
                li.textContent = value;
                evenArray.appendChild(li)
            }else{
                let li = document.createElement("li")
                li.textContent = value;
                oddArray.appendChild(li)
            }
        }
    }
    input.value = '';

});









// =====================Task Two=====================
const t2_btn = document.querySelector("#t2-btn");
const t2_input = document.querySelector("#t2-inpValue");
const t2_errorMsg = document.querySelector(".t2-error-msg");

const stringArray = document.querySelector(".stringArray");
const numberArray = document.querySelector(".numberArray");


let nums = [];
let strgs = [];



function renderValue(){
    errorMsg.innerText = '';
    document.querySelectorAll('.list-item').forEach(li => li.remove());
    strgs.forEach((item) => {
        let li = document.createElement('li');
        li.setAttribute('class', 'list-item');
        li.innerText = item;

        stringArray.insertAdjacentElement('afterbegin', li);
    });
    nums.forEach((num) => {
        let li = document.createElement('li');
        li.setAttribute('class', 'list-item');
        li.innerText = num;

        numberArray.insertAdjacentElement('afterbegin', li);
    });
};


t2_btn.addEventListener('click', () => {
    if(t2_input.value === ''){
        t2_errorMsg.innerText = "The Task Value field is required.";
    }else{
        t2_errorMsg.innerText = '';
        (isNaN(t2_input.value)) ? strgs.push(t2_input.value) : nums.push(t2_input.value);
    }
    renderValue();
    t2_input.value = '';
});



// =====================Task Three=====================
const t3_btn = document.querySelector("#t3-btn");
const t3_input = document.querySelector("#t3-inpValue");
const t3_errorMsg = document.querySelector(".t3-error-msg");

const totalSold = document.querySelector('.total-sold-price');
const totalProfit = document.querySelector('.total-profit');
const soldPriceList = document.querySelector(".sold-price-list");




const prices = [];

const updateRevenue = () => {

    document.querySelectorAll('.priceItem').forEach(priceiT => priceiT.remove());
    prices.forEach(price => {
        let priceLi = document.createElement('li');
        priceLi.setAttribute('class', 'priceItem');
        priceLi.innerText = price;

        soldPriceList.insertAdjacentElement('afterbegin', priceLi);
    });

    let totalSalePrice = prices.reduce((prevValue, curr) => {
        return prevValue + curr;
    });
    totalSold.innerText = totalSalePrice;

    let totProfit = 0;
    prices.map(price => {
        totProfit += price - 100;
    });
    totalProfit.innerText = totProfit;

};



t3_btn.addEventListener('click', () => {
    if(t3_input.value === ''){
        t3_errorMsg.innerText = "The Sale Price field is required.";
    }else{
        if(isNaN(t3_input.value)){
            t3_errorMsg.innerText = "The Sale Price field contains only numbers.";
            t3_input.value = '';
        }else if (Number(t3_input.value) < 100 || Number(t3_input.value) > 300) {
          t3_errorMsg.innerText =
            "The Sale Price field must be greater than or eqaul to 100 and less then or equal to 300.";
          t3_input.value = "";
        } else {
            prices.push(Number(t3_input.value));
            t3_input.value = '';
            updateRevenue();
        }
    }
});