import genaImg from "../assets/gena.png";
import patrickImg from "../assets/patrick.png";
import igorImg from "../assets/igor.png"

export const persons = [

    { id: 1, name: "Gena", title: "Гена Букин", topic: "Отец хуйни не скажет", img: genaImg },
    { id: 2, name: "Patrick", title: "Патрик Бейтман", topic: "Пора делать мьюинг", img: patrickImg },
    { id: 3, name: "Igor", title: "Игорь Войтенко", topic: "Запомни, Брат!", img: igorImg },
    
    //todo add characters from anecdots
    { id: 4, name: "Russian", title: "Новый русский", topic: "Саша Белый", img: genaImg },
    { id: 5, name: "Stirlitz", title: "Штирлиц", topic: "Советский шпион", img: patrickImg },
    { id: 6, name: "Rzhevskiy", title: "Поручик Ржевский", topic: "Гусары, молчать!", img: igorImg },
];

//? maybe add topic to every quote
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