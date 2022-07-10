// Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент

function eqlTwoArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}

	return arr1.every((item, index) => (item === arr2[index]));
}
