//ex09.js

function encodePassword(password, encodeFunction) {
	return encodeFunction(password);
}

function encodeRot8(password) {
	for (
		let a = "\n"
		;
		"a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z"
		;
		a++
	) {
		console.log(a)
	}
}

function encodeRot16(password) {
	// Écrire le code ici
}

console.log(encodePassword("abc", encodeRot8)); // Résultat attendu: "ijk";
console.log(encodePassword("abc", encodeRot16)); // Résultat attendu: "qrs";
console.log(encodePassword("xyz", encodeRot8)); // Résultat attendu: "fgh";
console.log(encodePassword("xyz", encodeRot16)); // Résultat attendu: "nop";
