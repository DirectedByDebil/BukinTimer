import { shuffle } from "lodash";

const themes = [
    { id: 'picnic', color: '#A8D85A', title: 'Пикник' },
    { id: 'rose', color: '#FF4D6D', title: 'Роза' },
    { id: 'peach', color: '#F4A87A', title: 'Персик' },
    { id: 'bordeaux', color: '#9E2A4A', title: 'Бордо' },
    { id: 'sky', color: '#5BC0EB', title: 'Небеса' },
    { id: 'emerald', color: '#2DC65B', title: 'Изумруд' },
    { id: 'lemon', color: '#E3D64A', title: 'Лимон' }
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