import genaImg from "../assets/gena.png";
import patrickImg from "../assets/patrick.png";
import igorImg from "../assets/igor.png"
import { IPerson, IPersonQuotes, IPersonDayProgressQuotes, IDaysQuotes } from "./iperson.ts";

export const persons: IPerson[] = [

    { id: 1, name: "Gena", title: "Гена Букин", topic: "Отец хуйни не скажет", img: genaImg },
    { id: 2, name: "Patrick", title: "Патрик Бейтман", topic: "Пора делать мьюинг", img: patrickImg },
    { id: 3, name: "Igor", title: "Игорь Войтенко", topic: "Запомни, Брат!", img: igorImg },
    
    //todo add characters from anecdots
    { id: 4, name: "Russian", title: "Новый русский", topic: "Саша Белый", img: genaImg },
    { id: 5, name: "Stirlitz", title: "Штирлиц", topic: "Советский шпион", img: patrickImg },
    { id: 6, name: "Rzhevskiy", title: "Поручик Ржевский", topic: "Гусары, молчать!", img: igorImg },
];

export const personsQuotes: IPersonQuotes[] = [
    {
        name:'Gena',
        quotes: [
            'Хочешь я в глаза, взгляну в твои глаза',
            'И слова припомню все, и снова повторю',
            'Кто тебе сказал, ну кто тебе сказал',
            'Кто придумал, что тебя я не люблю',
        ]
    },
    {
        name: 'Patrick', 
        quotes:[
            'Sigma-sigma boy, sigma boy, sigma boy',
            'Каждая девчонка хочет танцевать с тобой',
            'Sigma-sigma boy, sigma boy, sigma boy',
            'Я такая вся, что добиваться будешь год',
        ]
    },
    {
        name: 'Igor', 
        quotes:[
            'Пока они пили пиво на лавке, мы строили свое будущее!',
            'Создай стиль жизни, который ведет к величию!',
            'Возвращайся к работе!',
            'Есть только два дня в году, когда ты не можешь ничего сделать: вчера и завтра! Действуй сегодня!',
        ]
    },
    {
        name: 'Russian', 
        quotes:[   
            'Русские вперёд!'
        ]
    },
    {
        name: 'Stirlitz', 
        quotes:[
            'Порублю, суки!'
        ]
    },
    {
        name: 'Rzhevskiy', 
        quotes:[
            'Господа, прошу меня простить... Я закурю-с?'
        ]
    },
];

export const progressPersonsQuotes: IPersonDayProgressQuotes[] = [

    {
        name: 'Gena',
        quotes: [
            {
                dayState: 'Before work',
                topic: 'Перед пахотой',
                quotes: [
                    'Ещё не началось: кайфуй',
                    'Перед работой нужно крепко покемарить',
                    'Куда торопишься? Работа не волк - в лес не убежит'
                ]
            },
            {
                dayState: 'Before lunch',
                topic: 'Ждём Обед!!!',
                quotes: [
                    'Эх, когда там обед?', 
                    'Ещё чуть-чуть и обееед', 
                    'Самое главное в работе: не пропустить обед'
                ]
            },
            {
                dayState: 'After lunch',
                topic: 'Ждём дивана!!!',
                quotes: [
                    'Заморил червечка - полдня прошло',
                    'После плотного обеда, по закону Архимеда, надо плотно покурить',
                    'После плотного обеда, по закону Архимеда, надо сладко кемарнуть'
                ]
            },
            {
                dayState: 'After work',
                topic: 'На диване, с сиськой пива',
                quotes: [
                    'Можно выдохнуть: закончилось',
                    'Гуляй, Вася: от звонка до звонка',
                    'Уле! Уле-уле-уле!'
                ]
            }
        ]
    },
    {
        name: 'Patrick',
        quotes: [
            {
                dayState: 'Before work',
                topic: 'Утренняя разминка',
                quotes: ['Сигма ждёт работы?']
            },
            {
                dayState: 'Before lunch',
                topic: 'Сигма перед обедом',
                quotes: ['Сигма должен правильно питаться']
            },
            {
                dayState: 'After lunch',
                topic: 'Сигма восполнил баланс белков и углеводов',
                quotes: ['Сигма восполнил баланс белков и углеводов']
            },
            {
                dayState: 'After work',
                topic: 'Сигма никогда не отдыхает',
                quotes: ['Сигма никогда не отдыхает']
            }
        ]
    },
    {
        name: 'Igor',
        quotes: [
            {
                dayState: 'Before work',
                topic: 'Готовься!',
                quotes: ['Упал - отжался перед работой!']
            },
            {
                dayState: 'Before lunch',
                topic: 'Пашем до обеда, брат!',
                quotes: ['Работай, брат, скоро обед!']
            },
            {
                dayState: 'After lunch',
                topic: 'Пашем после обеда, брат!',
                quotes: ['Красава, работай, брат, осталось немного!']
            },
            {
                dayState: 'After work',
                topic: 'Отдых!',
                quotes: ['Всё, брат, можешь отдыхать - завтра снова будем вжаривать!']
            }
        ]
    },
    {
        name: 'Russian',
        quotes: [
            {
                dayState: 'Before work',
                topic: 'Блатные ещё дома',
                quotes: ['Вышли в один год с ним мы: он с завода - я с тюрьмы']
            },
            {
                dayState: 'Before lunch',
                topic: 'Обед для русских',
                quotes: ['Я, как Саша Белый']
            },
            {
                dayState: 'After lunch',
                topic: 'Я, как Томмас Шелби',
                quotes: ['Я, как Томмас Шелби']
            },
            {
                dayState: 'After work',
                topic: 'Плачу налом',
                quotes: ['Плачу налом']
            }
        ]
    },
    {
        name: 'Stirlitz',
        quotes: [
            {
                dayState: 'Before work',
                topic: 'Доброе утро, товарищ Сталин!',
                quotes: ['Да я советский шпион!']
            },
            {
                dayState: 'Before lunch',
                topic: 'Wann gibt es Mittagessen?',
                quotes: ['Стрелял вслепую']
            },
            {
                dayState: 'After lunch',
                topic: 'Осьминог стучит...',
                quotes: ['Осьминог стучит...']
            },
            {
                dayState: 'After work',
                topic: 'Вот же сволочь усатая',
                quotes: ['Вот же сволочь усатая']
            }
        ]
    },
    {
        name: 'Rzhevskiy',
        quotes: [
            {
                dayState: 'Before work',
                topic: 'Гусары, ещё не время!',
                quotes: ['Гусары, молчать!']
            },
            {
                dayState: 'Before lunch',
                topic: 'Господа, где перекус-с?',
                quotes: ['Фух, думал, туфля треснула']
            },
            {
                dayState: 'After lunch',
                topic: 'В точности анекдот не помню, но в конце всех четверых...',
                quotes: ['В точности анекдот не помню, но в конце всех четверых...']
            },
            {
                dayState: 'After work',
                topic: 'Наташа, а Вы что, без трусиков?',
                quotes: ['Наташа, а Вы что, без трусиков?']
            }
        ]
    }
];

export const dayQuotes: IDaysQuotes[] = [
    {
        day: 0,
        topic: 'Воскресенье',
        quotes: [
            "Воскресенье — чей-то день рожденья!",
            "Подготовься к новой неделе, может там будет лучше.",
            "План на понедельник — ждать пятницу.",
            "Бляяяяя, иди поспи дружок!"
        ]
    },
    {
        day: 1,
        topic: 'Понедельник',
        quotes: [
            "Понедельник — бездельник!",                    
            "Хороший день MONDAY не назовут…",             
            "Заебала эта ебатория!",                        
            "Харош, мужик! Тебе чучуть осталось и домой!"  
        ]
    },
    {
        day: 2,
        topic: 'Вторник',
        quotes: [
            "Вторник — обжорник!",
            "Спать хочешь? Нельзя нельзя… Люди надеются на тебя!",
            "Работай, работай, до выходных далеко!",
            "Наш аварец, красавчик!"
        ]
    },
    {
        day: 3,
        topic: 'Среда',
        quotes: [
            "Среда — день труда!",
            "Ты че-то можешь!",
            "Всё идёт по плану.",
            "Иди домой пивка попей!"
        ]
    },
    {
        day: 4,
        topic: 'Четверг',
        quotes: [
            "Четверг — в баню побег!",
            "Уже почти пятница!",
            "Сложно, понимаю, но тебя не ждёт дома жена-нимфоманка…",
            "Финишная прямая!"
        ]
    },
    {
        day: 5,
        topic: 'Пятница',
            quotes: [
            "Пятница — развратница!",
            "Не работай — это стыдно! ",
            "Вот-вот всё закончится!",
            "Ай user, ай красавчик, наш слоник!"
        ]
    },
    {
        day: 6,
        topic: 'Суббота',
        quotes: [
            "Суббота — охота!",
            "Ебать ты тип, что работаешь в субботу…",
            "Я тебе даю зелёнку ничего не делать!",
            "Вечер субботы. Заряди себя холодным пшеничным."
        ]
    },
];