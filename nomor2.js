//untuk inputan tabel 
var Nama = prompt("Nama Barang 1:", "");
var Harga = prompt("Harga Barang 1:", "");
var Jumlah = prompt("Jumlah Barang 1:", "");

//untuk inputan tabel
var Nama2 = prompt("Nama Barang 2:", "");
var Harga2 = prompt("Harga Barang 2:", "");
var Jumlah2 = prompt("Jumlah Barang 2:", "");

//untuk inputan tabel
var Nama3 = prompt("Nama Barang 3:", "");
var Harga3 = prompt("Harga Barang 3:", "");
var Jumlah3 = prompt("Jumlah Barang 3:", "");

parseFloat(Nama);
parseInt(Harga);
parseInt(Jumlah);

parseFloat(Nama2);
parseInt(Harga2);
parseInt(Jumlah2);

parseFloat(Nama3);
parseInt(Harga3);
parseInt(Jumlah3);


var Sub_Total = Harga * Jumlah
var Sub_Total2 = Harga2 * Jumlah2
var Sub_Total3 = Harga3 * Jumlah3

var Total = Sub_Total + Sub_Total2 + Sub_Total3 //prosesnya

var table = document.getElementsByTagName('table')[0];
var nerRow = table.insertRow(1);
var Row = table.insertRow(2);
var Row2 = table.insertRow(3);
var Rowtotal = table.insertRow(4);


var cell = nerRow.insertCell(0);
var cell2 = nerRow.insertCell(1);
var cell3 = nerRow.insertCell(2);
var cell4 = nerRow.insertCell(3);

var cell5 = Row.insertCell(0);
var cell6 = Row.insertCell(1);
var cell7 = Row.insertCell(2);
var cell8 = Row.insertCell(3);

var cell13 = Row2.insertCell(0);
var cell14 = Row2.insertCell(1);
var cell15 = Row2.insertCell(2);
var cell16 = Row2.insertCell(3);

var cell9 = Rowtotal.insertCell(0);
var cell10 = Rowtotal.insertCell(1);
var cell11 = Rowtotal.insertCell(2);
var cell12 = Rowtotal.insertCell(3);

cell.innerHTML = Nama;
cell2.innerHTML = Harga;
cell3.innerHTML = Jumlah;
cell4.innerHTML = Sub_Total;

cell5.innerHTML = Nama2;
cell6.innerHTML = Harga2;
cell7.innerHTML = Jumlah2;
cell8.innerHTML = Sub_Total2;

cell13.innerHTML = Nama3;
cell14.innerHTML = Harga3;
cell15.innerHTML = Jumlah3;
cell16.innerHTML = Sub_Total3;

cell9.innerHTML = "";
cell10.innerHTML = "";
cell11.innerHTML = "TOTAL";
cell12.innerHTML = Total;