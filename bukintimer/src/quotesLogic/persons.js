import genaImg from "../assets/gena.png";
import patrickImg from "../assets/patrick.png";
import igorImg from "../assets/igor.png"

export const persons = [
    //todo id, name, title
    { id: 1, name: "Гена Букин", img: genaImg },
    { id: 2, name: "Патрик Бейтман", img: patrickImg },
    { id: 3, name: "Игорь Войтенко", img: igorImg },
    
    //todo add characters from anecdots
    { id: 4, name: "Новый русский", img: genaImg },
    { id: 5, name: "Штирлиц", img: patrickImg },
    { id: 6, name: "Поручик Ржевский", img: igorImg },
];


export const personsQuotes = {

    'Gena': [
        'Хочешь я в глаза, взгляну в твои глаза',
        'И слова припомню все, и снова повторю',
        'Кто тебе сказал, ну кто тебе сказал',
        'Кто придумал, что тебя я не люблю',
    ],
    'Patrick': [
        'Sigma-sigma boy, sigma boy, sigma boy',
        'Каждая девчонка хочет танцевать с тобой',
        'Sigma-sigma boy, sigma boy, sigma boy',
        'Я такая вся, что добиваться будешь год',
    ],
    'Igor': [
        'Пока они пили пиво на лавке, мы строили свое будущее!',
        'Создай стиль жизни, который ведет к величию!',
        'Возвращайся к работе!',
        'Есть только два дня в году, когда ты не можешь ничего сделать: вчера и завтра! Действуй сегодня!',
    ],

    'Russian': ['Русские вперёд!'],
    'Stirlitz': ['Порублю, суки!'],
    'Rzhevskiy': ['Господа, прошу меня простить... Я закурю-с?']
};