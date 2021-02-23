
const $keyBoard = document.getElementById('keyboard');
const $audioTag = document.getElementById('audio');
const $container = document.getElementById('container');
//const $ebonyKeyBoard = document.getElementById('ebonykeyboard');
//let Keys = ['c4', 'c#4', 'd4', 'd#4', 'e4', 'f4', 'f#4', 'g4', 'g#4', 'a4', 'a#4', 'b4', 'c5', 'c#5', 'd5', 'd#5', 'e5', 'f5', 'f#5', 'g5', 'g#5', 'a5', 'a#5','b5','c5'];
//let ebonyKeys = ['c#4', 'd#4', 'f#4', 'g#4', 'a#4', 'c#5', 'd#5','f#5','g#5','a#5'];
let keys = ['C4', 'D4b', 'D4', 'E4b', 'E4', 'F4', 'G4b', 'G4', 'A4b', 'A4', 'B4b', 'B4', 'C5', 'D5b', 'D5', 'E5b', 'E5'];
//let keys = ['c','d','e','f','g','a','b'];
const sound = {
    C4: './sounds/C4.mp3',
    D4b: './sounds/Db4.mp3',
    D4: './sounds/D4.mp3',
    E4b: './sounds/Eb4.mp3',
    E4: './sounds/E4.mp3',
    F4: './sounds/F4.mp3',
    G4b: './sounds/Gb4.mp3',
    G4: './sounds/G4.mp3',
    A4b: './sounds/Ab4.mp3',
    A4: './sounds/A4.mp3',
    B4b: './sounds/Bb4.mp3',
    B4: './sounds/B4.mp3',
    C5: './sounds/C5.mp3',
    D5b: './sounds/Db5.mp3',
    D5: './sounds/D5.mp3',
    E5b: './sounds/Eb5.mp3',
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
};

keys.forEach((key) => {
    if (!key.includes('b')) {
        const ivorykey = document.createElement('li');
        ivorykey.classList.add('ivory');
        ivorykey.dataset.id = key;
        $keyBoard.appendChild(ivorykey);

    } else {
        const ebonykey = document.createElement('li');
        ebonykey.classList.add('ebony');

        ebonykey.dataset.id = key;
        $keyBoard.appendChild(ebonykey);
    }
});

$keyBoard.addEventListener('click', play);


