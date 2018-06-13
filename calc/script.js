//declaration
var number = document.getElementsByClassName('number');
var action = document.getElementsByClassName('action');
var service = document.getElementsByClassName('service');
var argument = document.getElementById('#argument');
var resolt = document.getElementById('#resolt');
var x1,x2,x3;

// initilise
		//num
for (let i=0; i<number.length; i++) {
	let element = number[i];
	element.addEventListener("click", function() {
		number_click(element);
		});
}
		//act
for (let i=0; i<action.length; i++ ) {
	let element = action[i];
	if (element.innerHTML == 'k' || element.innerHTML == '^2') {
		element.addEventListener("click", function() {
			action_step_click(element);
		});
	} else {
		element.addEventListener("click", function() {
			action_click(element);
		});
	}
	
}
		//serv
for (let i=0; i<service.length; i++ ) {
	let element = service[i];
	if (element.innerHTML == '=') {
		element.addEventListener("click", function() {
			ravno_click();
		});	} else {
			element.addEventListener("click", function() {
		service_click(element);
	});
		}
}



//number
function number_click (element) {
	argument.value += element.innerHTML;
	if (!x1) {
		resolt.value = '';
	}
}

function action_click (element) {
	if (!argument.value && !resolt.value) { // pustie oba
		return;
	}
	if (argument.value && !resolt.value) {	// est argument, net resultata
		x0 = element.innerHTML;
		x1 = argument.value; // polu4aem perviy operand X1 i operator X0
		argument.value = '';
        resolt.value = x1 + ' ' + x0;
        return;
	}
	if (!argument.value && resolt.value) { 
		if (x0) { // razli4ie mejdu RESOLT i X1+X0 
			return;
		} else { // novaya iteraciya vi4isleniy
			x0 = element.innerHTML; 
			x1 = resolt.value;
            resolt.value = x1 + ' ' + x0;
            return;
		}
	}
	if (argument.value && resolt.value) { // obyavlyaem vtoroy operand X2 i s4itaem
		x2 = argument.value;
		ravno_click();
		x1 = resolt.value;
		x0 = element.innerHTML;
        resolt.value = x1 + ' ' + x0;
        return; 
	}
}

function action_step_click(element) {
	if (!argument.value && !resolt.value) { // pustie oba
		return;
	}
	if (argument.value && !resolt.value) {	// est argument, net resultata
		x0 = element.innerHTML;
		ravno_click();
		return;
	}
	if (!argument.value && resolt.value) { 
		if (x0) { // razli4ie mejdu RESOLT i X1+X0 
			return;
		} else { // novaya iteraciya vi4isleniy
			x0 = element.innerHTML; 
            argument.value = resolt.value;
            resolt.value = '';
            ravno_click();
            return;
		}
	}
	if (argument.value && resolt.value) { // obyavlyaem vtoroy operand X2 i s4itaem
		x0 = element.innerHTML;
		ravno_click();
		x1 = parseFloat(resolt.value);
		x0 = resolt.value[resolt.value.length-1];
		resolt.value = x1 + ' ' + x0; 
	}
}

// najatie na ravvno
function ravno_click () {
	x2 = argument.value;
	argument.value = '';
	switch (x0) {
		case '+': 
			resolt.value= (+x1) + (+x2);
			break;
		case '-': 
			resolt.value= (+x1) - (+x2);
			break;
		case '*': 
			resolt.value= (+x1) * (+x2);
			break;
		case '/': 
			resolt.value= (+x1) / (+x2);
			break;
		case 'k':
			argument.value= Math.sqrt(+x2);
			break;
		case '^2':
			argument.value= (+x2) * (+x2);
			break;
	}
	x1 = x0 = x2 = '';
}

// service
function service_click (element) {
	if (element.innerHTML == 'C') {
		x1 = x0 = x2 = '';
		argument.value = '';
		resolt.value = '';
	}
	if (element.innerHTML == 'CE') {
		x2 = '';
		argument.value = '';
	}
}