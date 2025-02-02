const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output = " ";
const calculator = (btnValue) => {
	if((btnValue) === "=" && btnValue !== "") {
		try{
		output = eval(output.replace("%","/100"));	
		}catch(error) {
			output = "error";
		}
	}else if(btnValue === "AC") {
		output = "";
	}else if((btnValue === "DEL")) {
		output = output.toString().slice(0,-1);
	}else {
		if(output === "" && specialChars.includes(btnValue)) return;
		output += btnValue;
	}
	display.value = output;

}
buttons.forEach((button) => {
	button.addEventListener("click",(e) => calculator(e.target.dataset.value));
});

