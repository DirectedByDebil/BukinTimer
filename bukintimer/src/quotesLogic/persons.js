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

export const progressPersonsQuotes = {

    'Gena':{
        'Before work':[
            'Ещё не началось: кайфуй',
            'Перед работой нужно крепко покемарить',
            'Куда торопишься? Работа не волк - в лес не убежит'
        ],
        'Before lunch':[
            'Эх, когда там обед?', 
            'Ещё чуть-чуть и обееед', 
            'Самое главное в работе: не пропустить обед'],
        'After lunch':[
            'Заморил червечка - полдня прошло',
            'После плотного обеда, по закону Архимеда, надо плотно покурить',
            'После плотного обеда, по закону Архимеда, надо сладко кемарнуть'
        ],
        'After work':[
            'Можно выдохнуть: закончилось',
            'Гуляй, Вася: от звонка до звонка',
            'Уле! Уле-уле-уле!'
        ]
    },

    'Patrick':{
        'Before work':['Сигма ждёт работы?'],
        'Before lunch':['Сигма должен правильно питаться'],
        'After lunch':['Сигма восполнил баланс белков и углеводов'],
        'After work':['Сигма никогда не отдыхает']
    },

    'Igor':{
        'Before work':['Упал - отжался перед работой!'],
        'Before lunch':['Работай, брат, скоро обед!'],
        'After lunch':['Красава, работай, брат, осталось немного!'],
        'After work':['Всё, брат, можешь отдыхать - завтра снова будем вжаривать!']
    },
    
    'Russian':{
        'Before work':['Вышли в один год с ним мы: он с завода - я с тюрьмы'],
        'Before lunch':['Я, как Саша Белый'],
        'After lunch':['Я, как Томмас Шелби'],
        'After work':['Плачу налом']
    },

    'Stirlitz': {
        'Before work':['Да я советский шпион!'],
        'Before lunch':['Стрелял вслепую'],
        'After lunch':['Осьминог стучит...'],
        'After work':['Вот же сволочь усатая']
    },

    'Rzhevskiy': {
        'Before work':['Гусары, молчать!'],
        'Before lunch':['Фух, думал, туфля треснула'],
        'After lunch':['В точности анекдот не помню, но в конце всех четверых...'],
        'After work':['Наташа, а Вы что, без трусиков?']
    }
};

export const personsTimeConditions = {
    


    'Gena':{
        'Before work':'Перед пахотой',
        'Before lunch':'Ждём Обед!!!',
        'After lunch':'Ждём дивана!!!',
        'After work':'На диване, с сиськой пива'
    },

    'Patrick':{
        'Before work':'Утренняя разминка',
        'Before lunch':'Сигма перед обедом',
        'After lunch':'Сигма восполнил баланс белков и углеводов',
        'After work':'Сигма никогда не отдыхает'
    },

    'Igor':{
        'Before work':'Готовься!',
        'Before lunch':'Пашем до обеда, брат!',
        'After lunch':'Пашем после обеда, брат!',
        'After work':'Отдых!'
    },
    
    'Russian':{
        'Before work':['Блатные ещё дома'],
        'Before lunch':'Обед для русских',
        'After lunch':['Я, как Томмас Шелби'],
        'After work':['Плачу налом']
    },

    'Stirlitz': {
        'Before work':['Доброе утро, товарищ Сталин!'],
        'Before lunch':'Wann gibt es Mittagessen?',
        'After lunch':['Осьминог стучит...'],
        'After work':['Вот же сволочь усатая']
    },

    'Rzhevskiy': {
        'Before work':['Гусары, ещё не время'],
        'Before lunch':'Господа, где перекус-с?',
        'After lunch':['В точности анекдот не помню, но в конце всех четверых...'],
        'After work':['Наташа, а Вы что, без трусиков?']
    }
};