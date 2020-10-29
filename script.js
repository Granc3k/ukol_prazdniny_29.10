function kvadraticka_rce() {
  let a = document.getElementById("a").valueAsNumber;
  let b = document.getElementById("b").valueAsNumber;
  let c = document.getElementById("c").valueAsNumber;
  let dis = (b*b)-(4*a*c);
  if (dis < 0){
    document.getElementById("diskriminant").innerHTML="Rovnice nemá řešení PepeHands";
    document.getElementById("x1").innerHTML="Neexistuje";
    document.getElementById("x2").innerHTML="Neexistuje";
  } else if (dis == 0){
    document.getElementById("diskriminant").innerHTML=dis;
    x1 = -b/(2*a);
    document.getElementById("x1").innerHTML=x1;
    document.getElementById("x2").innerHTML="Neexistuje"
  } else{
    document.getElementById("diskriminant").innerHTML=dis;
    x1 = (-b + Math.sqrt(dis))/(2*a);
    x2 = (-b - Math.sqrt(dis))/(2*a);
    document.getElementById("x1").innerHTML=x1;
    document.getElementById("x2").innerHTML=x2;
  }
}

function f_posloupnost() {
  let num = document.getElementById("num").valueAsNumber;
  let vypis = "Posloupnost: 0  ";
  let sum = 1;
  let num_1 = 0;
  let num_2 = 1;
  while (sum <= num) {
    vypis = vypis + sum + " ";
    sum = num_1 + num_2;
    num_1 = num_2;
    num_2 = sum; 
  }
  document.getElementById("vypis").innerHTML = vypis;
}

function Prvocisla(){
  let num_p = document.getElementById("num_p").valueAsNumber;
  let vypis_p = "";
  let count = 0;
  let num = 1;
  while (count <= num_p) {
    if (je_P(num)){
      vypis_p = vypis_p + num + " ";
      num = num + 1;
      count = count + 1;
    }
    else{
      num = num + 1;
    }
  }
  document.getElementById("vypis_p").innerHTML = vypis_p;
}


function je_P(c){
  for (let d=2; d<=Math.sqrt(c); d++){
    if (c % d == 0) {
      return false;
    }
  }
  return true;
}