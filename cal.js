function appendTODisplay(value){ // menampilkan angka ke display kalkulator
	document.getElementById('display').value += value;          
}
function clearDisplay(){ // menghapus semua elemen pada kalkulator
	document.getElementById('display').value ='';
}
function deletel(){   //menghapus satu baris pada angka kalkulaltor
	document.getElementById('display');
	display.value=display.value.slice(0, -1);
}
function arialate(){//menampilakan angka yang ada dalam kalkulator
	let display=document.getElementById('display');
	try{
		display.value=eval(display.value);

	}catch(e){
		display.value='Error'; // menampilkan pesan error bila terjadi kesalahan pada kalkulator.

	}
}