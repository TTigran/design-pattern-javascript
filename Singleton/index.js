function Singletone () {
    if (Singletone.instance) {
        return Singletone.instance
    }
    Singletone.instance = this;
}
var singletone,


singletone = new Singletone();

s  = new Singletone();
s.j= 10;
console.log(singletone.j); // true
