let str = "DFJIGJREJWEPSADQWERTYGREGPJREGBNPSDFLBTINJNQWERTYGRESDFIGEROPJSDFWEF";

console.log(findRepeatedLongSubStr(str));


function kasai(str, sa) {
	let n = sa.length;
	let lcp = [];
	let isa = [];

	for (let i = 0; i < n; i++) {
		isa[sa[i][1]] = i;
	}

	let k = 0;

	for (let i = 0; i < n; i++) {
		if (isa[i] == n - 1) {
			k = 0;
			continue;
		}

		let j = sa[isa[i] + 1][1];

		while (i + k < n && j + k < n && str[i + k] == str[j + k]) {
			k++;
		}

		lcp[isa[i]] = k;

		if (k > 0) {
			k--;
		}
	}

	return lcp;
}


function findRepeatedLongSubStr (str) {
	let arr = [];
	let i = 0;

	while (i < str.length) {
		let subStr = str.slice(i, str.length);
		arr.push([subStr, i]);
		i++;
	}

	arr.sort();

	let k = kasai(str, arr);
	let maxElIndex = arr[k.indexOf(Math.max(...k))][1];

	return str.slice(maxElIndex, maxElIndex + Math.max(...k));
}