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

export default function selectRandomColor () {
    const color = Math.floor(Math.random() * colors.length);
    return colors[color];
};