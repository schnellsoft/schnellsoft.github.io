function f(s = "") {
    this.s = s;
    if(s) console.log(s);
}

const ob = new f("Lumm");

console.log(typeof ob);
console.dir(ob);
console.log(typeof f);
console.dir(f);


