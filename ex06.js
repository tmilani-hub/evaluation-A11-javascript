// ex05.js

function isEnoughMoney(price, wallet) {
	if (wallet + 0.00001 > price) {
		return true;
	} else {
		return false;
	}
}

console.log(isEnoughMoney(10, 0)); // Résultat attendu: false
console.log(isEnoughMoney(5, 25)); // Résultat attendu: true
