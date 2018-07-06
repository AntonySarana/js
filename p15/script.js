// инициализация поля

var normalCards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,null];
var startCards = shuffleArray(normalCards);
console.log(startCards);



// Формируем игровое поле - таблица 4х4.

var table = [ [],[],[],[] ];
var boxesArr = Array.prototype.slice.call(document.querySelectorAll('.box'));
boxesArr.map(function(element, index) {
	let idxI = Math.floor(index/4);
	let idxJ = index%4;
	element.addEventListener('click',function(){click(index)})
	if (startCards[index]) element.innerText = startCards[index];
		else element.classList.add('emptyBox');
	table[idxI][idxJ] = element;
});

// обрабатываем КЛИК
function click(index) {
	let idxI = Math.floor(index/4); //stroka
	let idxJ = index%4; // stolbec
	let emptyCard; // pustoy
	let isNear = true; // sosedniy
	// poisk pustogo
	
	boxesArr.map((element,idx) => {
		if (element.innerText == '') emptyCard = idx;
	})
		// проверка на соседний
			isNear = true;
			if ( Math.abs( Math.floor(emptyCard/4) + emptyCard%4 - (idxI+idxJ)) != 1) isNear = false; 
			if ( Math.abs( Math.floor(emptyCard/4) - idxI) > 1) isNear = false;
			if ( Math.abs(emptyCard%4 - idxJ) > 1 ) isNear = false;
			if (isNear) {
					// swap card
					boxesArr[emptyCard].innerText = boxesArr[index].innerText;
					boxesArr[emptyCard].classList.remove('emptyBox');
					boxesArr[index].innerText = '';
					boxesArr[index].classList.add('emptyBox');
					}
}




// ------------------------
// рабочие функции
// shaffle 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
	return array;
}
//