function fibonacci(limite){
	var arr = [0, 1];
	for (var i = 2; i<limite; i++){
		arr.push(arr[i - 2] + arr[i - 1])
	}
	return arr;
}
fibonacci(20);