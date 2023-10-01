// main.js

const readline = require('readline');
const geometry = require('./geometry');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateAndDisplay() {
  rl.question('Apakah Anda ingin menghitung luas dan keliling persegi (p), persegi panjang (pp), atau keluar (q)? ', (choice) => {
    if (choice === 'p') {
      rl.question('Masukkan panjang sisi persegi: ', (side) => {
        const squareArea = geometry.calculateSquareArea(Number(side));
        const squarePerimeter = geometry.calculateSquarePerimeter(Number(side));

        console.log('Luas persegi:', squareArea);
        console.log('Keliling persegi:', squarePerimeter);
        calculateAndDisplay(); // Kembali ke menu utama
      });
    } else if (choice === 'pp') {
      rl.question('Masukkan panjang persegi panjang: ', (length) => {
        rl.question('Masukkan lebar persegi panjang: ', (width) => {
          const rectangleArea = geometry.calculateRectangleArea(Number(length), Number(width));
          const rectanglePerimeter = geometry.calculateRectanglePerimeter(Number(length), Number(width));

          console.log('Luas persegi panjang:', rectangleArea);
          console.log('Keliling persegi panjang:', rectanglePerimeter);
          calculateAndDisplay(); // Kembali ke menu utama
        });
      });
    } else if (choice === 'q') {
      rl.close();
    } else {
      console.log('Pilihan tidak valid.');
      calculateAndDisplay(); // Kembali ke menu utama
    }
  });
}

calculateAndDisplay(); // Memulai program
