document.write("Hello, world!")

function sayHello(){
  var response = prompt("Kimi no namae ha ?");
  alert("Konnitiha,"+ response + "sama!");
}

function plus(a,b){
  return a + b;
}
console.log(plus(20,30))
console.log(plus(13,16))

function showTopic(){
  var x = document.getElementById('demo');
  x.style.fontSize = "25px";
  x.style.color = "red";
}
