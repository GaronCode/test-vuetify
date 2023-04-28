export default class LocalStorageSave {
    static loadProducts() {
        if (!localStorage.getItem('Products')) LocalStorageSave.saveTestProducts()
        return JSON.parse(localStorage.getItem('Products'))
    }
    static saveTestProducts() {
        const data = [
            {
                tittle: "Картины эпохи Возрождения",
                list: [
                    {
                        id: "434234",
                        name: "«Рождение Венеры» Сандро Боттичелли",
                        price: {value: 1000000, old: 2000000, currency: "$" },
                        img: 'product_001.png',
                        images: ['0010.jpg','0011.jpg','0012.jpg'],
                        description: '«Рождение Венеры» (итал. Nascita di Venere) — картина итальянского художника тосканской школы Сандро Боттичелли. Представляет собой живопись темперой на холсте размером 172,5 × 278,5 см. В настоящее время хранится в галерее Уффици, Флоренция. '
                    },
                    {
                        id: "56432",
                        name: "«Тайная вечеря»  Леонардо да Винчи",
                        price: {value: 3000000, currency: "$" },
                        img: 'product_002.png',
                        images: ['0020.jpg','0021.jpg','0022.jpg'],
                        description: '«Та́йная ве́черя» (итал. Il Cenacolo или L’Ultima Cena) — монументальная роспись работы Леонардо да Винчи, изображающая сцену последней трапезы Христа со своими учениками. Создана в 1495—1498 годы в доминиканском монастыре Санта-Мария-делле-Грацие в Милане. Ранее ошибочно называлась фреской, однако было установлено, что роспись выполнена не фреской, и не «а-секко», а в особой технике, придуманной художником: яичной темперой по масляному грунту из свинцовых белил. '
                    },
                    {
                        id: "55643",
                        name: "«Сотворение Адама» Микеланджело",
                        price: {value: 5000000, old: 6000000, currency: "$" },
                        img: 'product_003.png',
                        images: ['0030.jpg','0031.jpg','0032.jpg'],
                        description: '«Сотворение Адама» (итал. La creazione di Adamo) — фреска Микеланджело, написанная около 1511 года. Фреска является четвёртой из девяти центральных композиций потолка Сикстинской капеллы, посвящённых девяти сюжетам книги Бытия.'
                    },
                    {
                        id: "87932",
                        name: "«Урок анатомии»  Рембрандт",
                        price: {sold: true },
                        img: 'product_004.png',
                        images: ['0040.jpg','0041.jpg','0042.jpg'],
                        description: '«Урок анатомии доктора Тульпа» — картина Рембрандта, написанная в 1632 году. Центральная фигура картины — доктор Николас Тульп, который показывает собравшимся устройство мускулатуры руки человека. '
                    }
                ]
            }
            
        ]
        localStorage.setItem('Products', JSON.stringify(data));
    }

    static loadUserData() {
        return JSON.parse(localStorage.getItem('UserData'))
    }
    static saveUserData(data) {
        localStorage.setItem('UserData', JSON.stringify(data));
    }
}