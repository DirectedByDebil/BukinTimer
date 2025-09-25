import { shuffle } from "lodash";

const colors = [
    '#B7DA5D',
    '#FF5170',
    '#EFB391',
    '#BC4878',
    //? added more colors (maybe shit)
    '#50d5f7ff',
    '#6ee76eff',
    '#d2df1bff'
];

//? if we wanna change colors in runtime
let randomColors = [];

export default function selectRandomColor () {

    if(randomColors.length === 0) {
        randomColors = shuffle(colors);
    }

    return randomColors.pop();
};