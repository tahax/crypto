// variables
const ui = new UI;
const crypto = new Crypto;

//event listeners
eventListener();

function eventListener() {
    document.querySelector('.submit-btn').addEventListener('click', submitBtn)
}

//functions

function submitBtn(e){
    e.preventDefault();
    let realMoney = document.querySelector('#real-money').value;
    let coin = document.querySelector('#coin').value;
    let day = document.querySelector('#day').value;
    if (coin === '' || realMoney === '' || day === ''){
        ui.printMessage('plz enter all values', 'err')
    }else if(coin !== '' && realMoney !== '' && day !== ''){
        crypto.createURL(coin, realMoney, day)
            .then(data=>{
                console.log(data.data[0])
                ui.creatBoxValu(data.data[0], day, realMoney)
            })
    }
    console.log(realMoney);
    console.log(day);
    console.log(coin);
}