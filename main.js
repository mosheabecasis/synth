
const $keyBoard = document.getElementById('keyboard');
const $audioTag = document.getElementById('audio');
const $display = document.getElementById('display');
//const $container = document.getElementById('container');
//const $ebonyKeyBoard = document.getElementById('ebonykeyboard');
let keys = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5'];
//let Keys = ['c4', 'd4','e4', 'f4', 'g4', 'a4','b4', 'c5', 'd5','f5','g5','a5'];
//let keys = ['C4', 'D4b', 'D4', 'E4b', 'E4', 'F4', 'G4b', 'G4', 'A4b', 'A4', 'B4b', 'B4', 'C5', 'D5b', 'D5', 'E5b', 'E5'];
//let keys = ['c','d','e','f','g','a','b'];
// const sound = {
//     C4: './sounds/C4.mp3',
//     D4b: './sounds/Db4.mp3',
//     D4: './sounds/D4.mp3',
//     E4b: './sounds/Eb4.mp3',
//     E4: './sounds/E4.mp3',
//     F4: './sounds/F4.mp3',
//     G4b: './sounds/Gb4.mp3',
//     G4: './sounds/G4.mp3',
//     A4b: './sounds/Ab4.mp3',
//     A4: './sounds/A4.mp3',
//     B4b: './sounds/Bb4.mp3',
//     B4: './sounds/B4.mp3',
//     C5: './sounds/C5.mp3',
//     D5b: './sounds/Db5.mp3',
//     D5: './sounds/D5.mp3',
//     E5b: './sounds/Eb5.mp3',
//     E5: './sounds/E5.mp3'
// };
const sound = {
    C4: './sounds/C4.mp3',
    C4sharp: './sounds/Db4.mp3',
    D4: './sounds/D4.mp3',
    D4sharp: './sounds/Eb4.mp3',
    E4: './sounds/E4.mp3',
    F4: './sounds/F4.mp3',
    F4sharp: './sounds/Gb4.mp3',
    G4: './sounds/G4.mp3',
    G4sharp: './sounds/Ab4.mp3',
    A4: './sounds/A4.mp3',
    A4sharp: './sounds/Bb4.mp3',
    B4: './sounds/B4.mp3',
    C5: './sounds/C5.mp3',
    C5sharp: './sounds/Db5.mp3',
    D5: './sounds/D5.mp3',
    D5sharp: './sounds/Eb5.mp3',
    E5: './sounds/E5.mp3'
};


// keys.forEach((key) => {
//     const ivorykey = document.createElement('li');
//     ivorykey.classList.add('ivory');
//     ivorykey.dataset.id = key;
//     $keyBoard.appendChild(ivorykey);
// });
const play = ($event) => {
    let note = $event.target.dataset.id;
    console.log(note);
    $audioTag.src = sound[note];
    $audioTag.play();
    $display.innerText=note;
    
};

keys.forEach((key) => {
    if(key === 'B4' || key === 'E4' || key === 'E5'){
        const ivorykey = document.createElement('li');
        ivorykey.classList.add('ivory');
        ivorykey.dataset.id = key;
        $keyBoard.appendChild(ivorykey);
    }else
    {
        const ivorykey = document.createElement('li');
        ivorykey.classList.add('ivory');
        ivorykey.dataset.id = key;
        const sharpKey = document.createElement('div');
        sharpKey.classList.add('ebony');
        sharpKey.dataset.id =key+'sharp';
        ivorykey.appendChild(sharpKey);
        $keyBoard.appendChild(ivorykey);
    }
});

// keys.forEach((key) => {
//     if (!key.includes('b')) {
//         const ivorykey = document.createElement('li');
//         ivorykey.classList.add('ivory');
//         ivorykey.dataset.id = key;
//         $keyBoard.appendChild(ivorykey);

//     } else {
//         const ebonykey = document.createElement('li');
//         ebonykey.classList.add('ebony');

//         ebonykey.dataset.id = key;
//         $keyBoard.appendChild(ebonykey);
//     }
// });

$keyBoard.addEventListener('click', play);


