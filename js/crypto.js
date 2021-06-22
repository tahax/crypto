class Crypto{

    constructor() {
        this.APIKey = '57379de7b1ce55eb510b5819e6806eba9d863278'
    }

    async createURL(coin, realMoney, day){
        let url = `https://api.nomics.com/v1/currencies/ticker?key=${this.APIKey}&`;
        url += `&convert=${realMoney}`;
        url += `&ids=${coin}`;
        url += `&&interval=${day}`;
        let myUrl = await fetch(url);
        let data = await myUrl.json()
        return {
            data
        }
    }

}