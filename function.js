let who = ['Donald Trump','El Porcionzón','Ignacio Santos','Arnold Schwarzenegger'];
let action = ['burned','peed','crushed','kissed', 'took the axe and destroyed', 'smelled'];
let what = ['my 4Geeks homework', 'my laptop', 'my crotch', 'our family dinner', 'my internet'];
let when = ['before COVID-19','right when my crush was passing by','when I was taking a dump','during my karaoke session','while I was fishing'];

function randomValue(arr, x){
    let vindex = Math.floor(Math.random() * (x - 1));
    return arr[vindex];
} 
let htmlwho = randomValue(who, who.length);
let htmlaction = randomValue(action, action.length);
let htmlwhat = randomValue(what, what.length);
let htmlwhen = randomValue(when, when.length);

let finalExcuse = htmlwho.concat(" ", htmlaction, " ", htmlwhat, " ", htmlwhen, ".");
console.log(finalExcuse);

document.getElementById("excuse").innerHTML = finalExcuse;

