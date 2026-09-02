import { shuffle } from "lodash";

const themes = [
    { id: 'picnic', color: '#77aa24', title: 'Пикник' },
    { id: 'rose', color: '#e2b10e', title: 'Горчица' },
    { id: 'peach', color: '#e49e73', title: 'Персик' },
    { id: 'bordeaux', color: '#9E2A4A', title: 'Бордо' },
    { id: 'sky', color: '#39a0cc', title: 'Небеса' },
    { id: 'emerald', color: '#0d0c20', title: 'Ночь' }
];

//? if we wanna change colors in runtime
let randomTheme = [];

export default function selectRandomColor () {

    if(randomTheme.length === 0) {
        randomTheme = shuffle(themes);
    }

    return randomTheme.pop();
};

export const getThemes = () => Array.from(themes);