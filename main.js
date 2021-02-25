
const $keyBoard = document.getElementById('keyboard');
const $audioTag = document.getElementById('audio');
const $display = document.getElementById('display');

let keys = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5'];

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



const play = ($event) => {
    let note = $event.target.dataset.id;
    console.log(note);
    $audioTag.src = sound[note];
    $audioTag.play();
    $display.innerText=note.replace('sharp','#');
    
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



$keyBoard.addEventListener('click', play);


