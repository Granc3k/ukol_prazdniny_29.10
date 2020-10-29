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
  let sum = "??"
  let num_1 = 0
  let num_2 = 1
  while num <= sum{
    sum = num_1
    if 

  } 
  
}

function is_P(c) {
  for (let d=2; d<=Math.sqrt(c); d++) {
    if (c % d == 0) {
      return false;
    }
  }
  return true;