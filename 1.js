const fs = require('fs');
const writeNumbers = () => {
    let data = '';
    for (let i = 0; i < 100; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        data += randomNumber.toString() + '\n'; 
    }
    fs.writeFileSync('sonlar.txt', data);
    console.log('100 ta tasodifiy son sonlar.txt fayliga muvaffaqiyatli yozildi.');
};
const readNumbers = () => {
    try {
        const data = fs.readFileSync('sonlar.txt', 'utf-8').trim().split('\n').map(Number);
        console.log(data);
    } catch (err) {
        console.error('Fayl o\'qish xatosi:', err);
    }
};
writeNumbers();
readNumbers();
