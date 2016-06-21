function getEntero(numero){
	numero = ""+numero; // Para tratarlo como string
	var entero = "";
	for(var i in numero){
		if(numero[i] != '.'){
			entero += numero[i] != ' ' ? numero[i] : '';
		} else {
			break;
		}
	}
	return entero;
}

function burbuja(arreglo, orden){
	var limit = arreglo.length, aux;
	var contador = limit - 1;
	for(var j=0; j < limit; j++){
		for(i = 0; i<(limit-1); i++){
			if(orden == 'asc'){
				if(arreglo[i] > arreglo[i+1]){
					aux  = arreglo[i];
					arreglo[i] = arreglo[i+1];
					arreglo[i+1] = aux;
				}
			} else {
				if(arreglo[i] < arreglo[i+1]){
					aux  = arreglo[i];
					arreglo[i] = arreglo[i+1];
					arreglo[i+1] = aux;
				}
			}
				
		}
	}
	return arreglo;
}

/*
For workingHours = 2 and tasks = [1, 2, 1], the output should be
tasksScheduling(workingHours, tasks) = 2.

For workingHours = 3 and tasks = [2, 2, 2], the output should be
tasksScheduling(workingHours, tasks) = 3.

For workingHours = 2 and tasks = [1, 1, 3], the output should be
tasksScheduling(workingHours, tasks) = -1.
*/



function tasksScheduling(workingHours, tasks){
	tasks = burbuja(tasks, 'desc');
	// primera validación, si alguna tarea sobre pasa el limite de horas por día
	var continuar = true;
	tasks.forEach(function(item, index){
		if(item > workingHours){
			continuar = false;
		}
	});

	if(!continuar){
		return -1;
	}
	var dias = [], asignada;
	

	for(var i=0; i<tasks.length; i++){
		horas_tarea = tasks[i];
		asignada = 0;
		
		for(var j=0; j<dias.length; j++){
		 	if(horas_tarea <= dias[j]){
				dias[j] -= horas_tarea;
				asignada = 1;
				break;
			}
		}

		if(!asignada){// no hubo espacio para esta tarea en los días existentes
			dias.push((workingHours-horas_tarea));
		}
	}

	return dias.length;

}

tasksScheduling(2, [1, 2, 1]);
tasksScheduling(3, [2, 2, 2]);
tasksScheduling(2, [1, 1, 3]);



