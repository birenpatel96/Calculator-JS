var tag = 0;
var a = 0;
var b = 0;
var c = 0;
var f = 1;
var mp= 0.0;


var elclear = document.getElementById("clear");
elclear.addEventListener('click', clear, false);

function clear() {
    display.value = "";
}

var elone = document.getElementById('one');
elone.addEventListener('click', one, false);

function one() {
    if (f == 0) {
        display.value = 1;
    } else {
        display.value += 1;
    }
}

var eltwo = document.getElementById('two');
eltwo.addEventListener('click', two, false);

function two() {
    display.value += 2;
}

var elthree = document.getElementById('three');
elthree.addEventListener('click', three, false);

function three() {
    display.value += 3;
}

var elfour = document.getElementById('four');
elfour.addEventListener('click', four, false);

function four() {
    display.value += 4;
}

var elfive = document.getElementById('five');
elfive.addEventListener('click', five, false);

function five() {
    display.value += 5;
}

var elsix = document.getElementById('six');
elsix.addEventListener('click', six, false);

function six() {
    display.value += 6;
}

var elseven = document.getElementById('seven');
elseven.addEventListener('click', seven, false);

function seven() {
    display.value += 7;
}

var eleight = document.getElementById('eight');
eleight.addEventListener('click', eight, false);

function eight() {
    display.value += 8;
}

var elnine = document.getElementById('nine');
elnine.addEventListener('click', nine, false);

function nine() {
    display.value += 9;
}

var elzero = document.getElementById('zero');
elzero.addEventListener('click', zero, false);

function zero() {
    display.value += 0;
}

var eldot = document.getElementById('dot');
eldot.addEventListener('click', dot, false);
function dot(){
    var store = document.getElementById("display").value;
    var m = store.indexOf(".");
    if(m != -1){
        document.getElementById("display").innerHTML = '.';
    }else{
        display.value += '.';
    }
}

// Operation + - / *

function back() {
    var value = document.getElementById("display").value;
    document.getElementById("display").value = value.substr(0, value.length - 1);
}

function add() {
    a = parseFloat(document.getElementById("display").value);
    document.getElementById("display").value = "";

    tag = 1;
    c = c + a;
    a = c;
}

function sub() {

    a = parseFloat(document.getElementById("display").value);
    document.getElementById("display").value = "";

    tag = 2;
    if (c == 0) {
        c += a;
    } else {
        c -= a;
    }
    a = c;
}

function mul() {
    a = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = "";
    if (c == 0 || c == 1) {
        c = 1;
    }
    tag= 3;
    c *= a;
    a = c;
}

function div() {
    a = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = "";
    tag = 4;

    if (c == 0 || c == 1) {
        c = 1;
        c = a / c;
    } else {
        c /= a;
    }
    a = c;
}




var butsqr = document.getElementById("squar");
butsqr.addEventListener('click', squar,false);
function squar(){
    z = document.getElementById("display").value;
    display.value = z * z;
}

var butexp = document.getElementById("exp");
butexp.addEventListener('click', exp, false);
function exp(){
    display.value = Math.exp(display.value);
}

var butsin = document.getElementById("sin");
butsin.addEventListener('click', sin, false);
function sin(){
    display.value = Math.sin(display.value);
}

var buttan = document.getElementById("tan");
buttan.addEventListener('click', tan, false);
function tan(){
    display.value = Math.tan(display.value);
}

var butcos = document.getElementById("cos");
butcos.addEventListener('click', cos, false);
function cos(){
    display.value = Math.cos(display.value);
}

var butper = document.getElementById("per");
butper.addEventListener('click',per,false);
function per(num, amount){
    return num * amount/100;
}

var butpi = document.getElementById("pi");
butpi.addEventListener('click',pi,false);
function pi(){
    var x = document.getElementById("display").value;
    var ans;
    
    if(x)
        ans = Math.PI * x; 
        else
            ans = Math.PI;
    display.value = ans;
}

var butroot = document.getElementById("root");
butroot.addEventListener('click', root, false);
function root(){
    var p = document.getElementById("display").value;
    display.value = Math.sqrt(p);
}

var butlog = document.getElementById("log");
butlog.addEventListener('click', log,false);
function log(){
    var l = document.getElementById("display").value;
    display.value = Math.log(l);
}








function result() {

    b = parseFloat(document.getElementById("display").value);

    if (tag == 1) {

        c = a + b;
        document.getElementById("display").value = eval(c);
        c = 0;
    } 
    else if (tag == 2) {
        
        c = a - b;
        document.getElementById("display").value = eval(c);
        c = 0;
    } 
    else if (tag == 3) {
        c = a * b;
        document.getElementById("display").value = c;
        c = 1;
    }
    else if (tag == 4) {
        c = a / b;
        document.getElementById("display").value = c;
        c = 1;
    } 

}