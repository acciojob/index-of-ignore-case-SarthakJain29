function indexOfIgnoreCase(s1, s2) {
	let s1low = s1.toLowerCase();
	let s2low = s2.toLowerCase();
    return s1low.indexOf(s2low);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
