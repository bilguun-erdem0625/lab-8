var pcoint = document.querySelector(".pcoint");
var ccoint = document.querySelector(".ccoint");
var player = document.querySelector(".player");
var computer = document.querySelector(".computer");
var winner = document.querySelector(".winner");
var pcoint = document.querySelector(".pcoint");
var ccoint = document.querySelector(".ccoint");
console.log(pcoint);
console.log(ccoint);
function play(pchoice){
	var cchoice = ["tsaas","haich","chuluu"];
	var random = Math.floor (Math.random()*3);
	player.innerText = "plyer choise: " + pchoice;
	computer.innerText = "computer choice: " +cchoice[random];
	if(
		(pchoice=="tsaas"&&cchoice[random]=="chuluu") ||
		(pchoice=="chuluu"&&cchoice[random]=="haich") ||
		(pchoice=="haich"&&cchoice[random]=="tsaas") 
	){
			winner.innerText = "winner : player!";
	}else if(
		(pchoice=="tsaas"&&cchoice[random]=="tsaas") ||
		(pchoice=="chuluu"&&cchoice[random]=="chuluu") ||
		(pchoice=="haich"&&cchoice[random]=="haich") 
	){
		winner.innerText = "winner : tie";;
	}
	else{
		winner.innerText = "winner : computer";
	}
}
var pcoint = document.querySelector(".pcoint1");
var pcoint = document.querySelector(".ccoint2");