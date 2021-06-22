class UI {

    printMessage(msg, classes) {
        let body = document.querySelector('body');
        let showAlert = document.createElement("div");
        showAlert.className = 'showalert';
        if (classes === 'acc') {
            showAlert.innerHTML = `<div class='accept-box tak-iranyekan-bold'>${msg}</div>`;
        } else if (classes === 'err') {
            showAlert.innerHTML = `<div class='alertBox tak-iranyekan-bold'>${msg}</div>`;
        }
        body.appendChild(showAlert);
        setTimeout(() => {
            showAlert.classList.add('opacity-come');
        }, 10)
        setTimeout(() => {
            showAlert.classList.add('opacity-out');
            setTimeout(() => {
                showAlert.remove();
            }, 1000)
        }, 2000)
    }

    creatBoxValu(obj, day, realMoney) {
        document.querySelector('.cart-parents').innerHTML = `
            <div class="tak-cart">
              <img src="${obj.logo_url}" style="height: 100px;margin-bottom: 20px" class="card-img-top" alt="...">
              
                <h3 class="card-title text-center">${obj.name}</h3>
                <p class="card-text text-center">price in ${realMoney} : ${obj.price}</p>
                <p class="card-text text-center">price change in ${day} : ${obj[day].price_change}</p>
              
            </div>
        `
    }

}