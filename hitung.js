function hitungHutang() {
    const jumlahHutang = parseFloat(document.getElementById('jumlahHutang').value);
    const bunga = parseFloat(document.getElementById('bunga').value);
    const mataUang = document.getElementById('mataUang').value;

    if (isNaN(jumlahHutang) || isNaN(bunga)) {
        alert('Mohon masukkan nilai yang valid');
        return;
    }

    const totalHutang = jumlahHutang + (jumlahHutang * (bunga / 100));
    const formattedTotalHutang = totalHutang.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById('result').innerText = `Total Hutang: ${formattedTotalHutang} ${mataUang}`;
}

// test

/*function hitungHutang() {
    const jumlahHutang = parseFloat(document.getElementById('jumlahHutang').value);
    const bunga = parseFloat(document.getElementById('bunga').value);
    const mataUang = document.getElementById('mataUang').value;

    if (isNaN(jumlahHutang) || isNaN(bunga)) {
        alert('Mohon masukkan nilai yang valid');
        return;
    }

    const totalHutang = jumlahHutang + (jumlahHutang * (bunga / 100));
    const formattedTotalHutang = totalHutang.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById('result').innerText = `Total Hutang: ${formattedTotalHutang} ${mataUang}`;
}function hitungHutang() {
    const jumlahHutang = parseFloat(document.getElementById('jumlahHutang').value);
    const bunga = parseFloat(document.getElementById('bunga').value);
    const mataUang = document.getElementById('mataUang').value;

    if (isNaN(jumlahHutang) || isNaN(bunga)) {
        alert('Mohon masukkan nilai yang valid');
        return;
    }

    const totalHutang = jumlahHutang + (jumlahHutang * (bunga / 100));
    const formattedTotalHutang = totalHutang.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById('result').innerText = `Total Hutang: ${formattedTotalHutang} ${mataUang}`;
}function hitungHutang() {
    const jumlahHutang = parseFloat(document.getElementById('jumlahHutang').value);
    const bunga = parseFloat(document.getElementById('bunga').value);
    const mataUang = document.getElementById('mataUang').value;

    if (isNaN(jumlahHutang) || isNaN(bunga)) {
        alert('Mohon masukkan nilai yang valid');
        return;
    }

    const totalHutang = jumlahHutang + (jumlahHutang * (bunga / 100));
    const formattedTotalHutang = totalHutang.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById('result').innerText = `Total Hutang: ${formattedTotalHutang} ${mataUang}`;
}
