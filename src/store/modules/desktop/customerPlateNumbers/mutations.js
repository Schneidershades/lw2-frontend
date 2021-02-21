export const setPlateNumbers = (state, plate_numbers) =>{
	state.plate_numbers = plate_numbers
}

export const setPlateNumber = (state, plate_number) =>{
	var plate_numberList = state.plate_numbers.data 
	var item = plate_numberList.find(item => item.plate_number === plate_number);

	console.log(item)


	var details = {
		id: item ? item.id : null, 
		plate_number: item ? item.plate_number : plate_number, 
		vehicle_type: item ? item.vehicle_type : null, 
		vehicle_model: item ? item.vehicle_model : null, 
		first_name: item ? item.first_name : null, 
		last_name: item ? item.last_name : null, 
		phone: item ? item.phone : null, 
		email: item ? item.email : null, 
		userId: item ? item.userId : null, 
		freeWash: item ? item.freeWash : null, 
		vehicleWashes: item ? item.vehicleWashes : null,
		vehicleFreeWash: item ? item.vehicleFreeWash : null,
	}

	if (details.freeWash == true || details.vehicleFreeWash == true){
		state.freeWash = true
		state.useFreeWash = 'no'
	}else{
		state.freeWash = false
		state.useFreeWash = 'no'
	}

	
	state.plate_number = details
}

export const updatePlateNumber = (state, plate_number) =>{
	var plate_numberList = state.plate_numbers.data 

	if(plate_number.phone){
		var item = plate_numberList.find(item => item.phone === plate_number.phone);

		var details = {
			id: item ? item.id : null, 
			plate_number: item ? item.plate_number : plate_number, 
			vehicle_type: item ? item.vehicle_type : null, 
			vehicle_model: item ? item.vehicle_model : null, 
			first_name: item ? item.first_name : null, 
			last_name: item ? item.last_name : null, 
			phone: item ? item.phone : null, 
			email: item ? item.email : null, 
			userId: item ? item.userId : null, 
			freeWash: item ? item.freeWash : null, 
		}
		
		// if (details.freeWash == true){
		// 	state.freeWash = true
		// }else{
		// 	state.freeWash = false
		// }
	}
	
	state.plate_number = plate_number
}

export const clearPlateNumber = (state) =>{
	state.plate_number = []
	state.useFreeWash = null
	state.freeWash = null
}

export const setFreeWashStatus = (state, status) =>{
	state.useFreeWash = status
}
