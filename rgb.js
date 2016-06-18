function rgbToHex(r, g, b){
	var rgb = (r*65536)+(g*256)+b;
	var hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
	var res = 0;
	var base_16 = [];
	do{
		if(rgb > 16){
			res = rgb%16;
			base_16.push(hex[res]);
		} else{
			base_16.push(hex[rgb]);
		}
		rgb = parseInt(rgb/16);
	}while(rgb>0);

	var color = "#";
	for (var i=5; i>=0; i--)
		color += base_16[i];
	return color;
}
rgbToHex(40,32,200);
