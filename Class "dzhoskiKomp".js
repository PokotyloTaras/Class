class dzhoskiKomp{
    videocard;
    ramType;
    CPU;

    constructor (a, b, c){
        this.videocard = a;
        this.ramType = b;
        this.CPU = c;
    }

    getName(){
        return this.CPU
    }
}
const dzhoskiKomp1 = new dzhoskiKomp(`5060Ti`, `DDR5 32GB`, `Ryzen 5 7500F`)

console.log(dzhoskiKomp1)
