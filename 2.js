const fs = require('fs');
const os = require('os');

// 2 masala 1-topshiriq
const writeNumbers = () => {
    let data = '';
    for (let i = 0; i < 100; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        data += randomNumber.toString() + '\n'; 
    }
    fs.writeFileSync('sonlar.txt', data);
    console.log('100 ta tasodifiy son sonlar.txt fayliga muvaffaqiyatli yozildi.');
};

// 2-masala 2-topshiriq
const readNumbers = () => {
    try {
        const data = fs.readFileSync('sonlar.txt', 'utf-8').trim().split('\n').map(Number);
        console.log(data);
    } catch (err) {
        console.error('Fayl o\'qish xatosi:', err);
    }
};

//2-masala 3-topshiriq  
const createFileAndReadContent = () => {
    const dir = 'my_nodejs_files';
    const file = 'hello_world.txt';
    const content = 'Hello, world!';
    
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    
    fs.writeFileSync(`${dir}/${file}`, content);
    
    const fileContent = fs.readFileSync(`${dir}/${file}`, 'utf-8');
    console.log(fileContent);

    // Bonus: Hozirgi sana va vaqtni qo'shamiz
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const additionalContent = `\nCurrent Date: ${currentDate}, Current Time: ${currentTime}`;
    fs.appendFileSync(`${dir}/${file}`, additionalContent);
};

// 2-masala 4-topshiriq
const getSystemInfo = () => {
    const hostname = os.hostname();
    const username = os.userInfo().username;
    console.log(`Hostname: ${hostname}, Username: ${username}`);
};

// 2-masala 5-topshiriq
const createFileInDirectory = () => {
    const directory = 'docs';
    const file = 'readme.md';
    const content = 'This is a readme file in the docs directory.';
    
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }
    
    fs.writeFileSync(`${directory}/${file}`, content);
    
    // Bonus: "docs" katalogi mavjudligini tekshiring.
    const isDirectoryExist = fs.existsSync(directory);
    if (isDirectoryExist) {
        console.log(`${directory} katalogi mavjud.`);
    } else {
        console.log(`${directory} katalogi yaratildi.`);
    }
};

// 2-masala 6-topshiriq
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

const receiveData = (data) => {
    console.log('Data Received:', data);
};

eventEmitter.on('dataReceived', receiveData);

// 2-masala 7-topshiriq
const readAndProcessFile = () => {
    const fileName = process.argv[2];
    if (!fileName) {
        console.error('Fayl nomini kiritishingiz kerak.');
        return;
    }
    
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if (err) {
            console.error('Fayl o\'qish xatosi:', err);
        } else {
            console.log(data);
        }
    });
};

// 2-masala  8-topshiriq
const writeFile = () => {
    const fileName = 'message.txt';
    const content = 'Hello World!';
    try {
        fs.writeFileSync(fileName, content);
        console.log(`${fileName} fayliga muvaffaqiyatli yozildi.`);
    } catch (err) {
        console.error('Fayl yozish xatosi:', err);
    }
};

// 2-masala 9-topshiriq
const appendContent = () => {
    const fileName = 'message.txt';
    const additionalContent = ' This is appended content.';
    try {
        fs.appendFileSync(fileName, additionalContent);
        console.log(`${fileName} fayliga muvaffaqiyatli qo'shildi.`);
    } catch (err) {
        console.error('Qo\'shimcha yozish xatosi:', err);
    }
};

// 2-masala 10-topshiriq
const readDirectory = () => {
    const directory = '.';
    fs.readdir(directory, (err, files) => {
        if (err) {
            console.error('Katalogni o\'qish xatosi:', err);
        } else {
            
            console.log('Katalogdagi fayllar:');
            files.forEach(file => {
                console.log(file);
            });
        }
    });
};

writeNumbers();
readNumbers();
createFileAndReadContent();
getSystemInfo();
createFileInDirectory();
eventEmitter.emit('dataReceived', 'New data');
readAndProcessFile();
writeFile();
appendContent();
readDirectory();
