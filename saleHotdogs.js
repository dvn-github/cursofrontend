function saleHotdogs(ncustomers){
	if(isNaN(ncustomers)){
		return 0;
	}
	// SACAMOS EL VALOR ABSOLUTO POR SI ESTAN DE CHISTOSITOS PONIENDO NEGATIVOS
	ncustomers = Math.sqrt(ncustomers*ncustomers);
	var price = 90;
	if(ncustomers > 0 && ncustomers < 5){
		price = 100;
	} else if(ncustomers >= 5 && ncustomers < 10){
		price = 95;
	}
	return price*ncustomers;
}
saleHotdogs(5);