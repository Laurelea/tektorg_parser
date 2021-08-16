const wordsToExclude = ['канцеляр', 'запасн', 'шлагбаум', 'запасн', 'пожарн', "буров", "насос", "гараж", "почво",
    "пробозабор", "пожаротуш", "бурен", "химреакт", "громкоговор", "канализац", "керн", "метанол", "бытово", "вентиляц",
    "кислород", "пломбирово", "сантехнич", "электротовар", "трубопровод", "подшипник", "видео", "фильтр", "сантехн", "поставка инструмента",
    "поставка инструментов", "строп", "резервуар", "хозтовар", "емкост", "канцтовар", "хозяйственн", "орг. техника", "баня", "лаборатор",
    "мультиплексор", "национальн", "серы", "счетчиков воды", "геофизич", "программно-технич", "программно-аппарат", "компьютерн",
"коммуникацион", "дефектоскоп", "закупка комплектующих", "бинокл", "калориметр", "оргтехник", "расходных материалов", "неразрушающ", "сетевого",
"Поставка железа", "радиатор", "гвозди", "пружина", "трубка", "прокладк", "праздничн", "шестигранн", "стремянк", "вентилятор", "курен", "молекуляр",
"закупка стали", "опоры лэп", "скобян", "посуд", "удлинител", "дозиметр", "отвертк", "жк-телевиз", "цветног", "медикамент", "фотоаппарат", "дискретн",
"сетевой модуль", "панель оператора", "материнск", "фотобарабан", "сотов", "надзор", "серверн", "операторск", "организационн", "оптоволоконн", "баня",
"доступ", "школ", "термостат", "мед.осмотр", "бесперебойн", "принтер", "гель", "фонари", "полистирол", "Элемер", "радиосвяз", "аналогового", "топлив",
    "авиационн", "химическ", "реактив", "фонтан", "мебел", "столов", "автотрансп", "дорожн", "рабиц", "тормоз", "двер", "пикник", "малярн", "метиз",
"теплообмен", "сейф", "танкер", "жалюзи", "медицин", "аптечн", "молние", "лестниц", "клей", "цистерн", "сварочн", "холодильн", "баннер", "ветроуказ",
"водител", "телефон", "трассотечеискат", "пробоотбор", "наркотич", "биологич", "весы", "компьютер", "вибродатчик", "офисн", "тахеометр", "хлорорган", "ноутбук",
"монитор", "глонасс", "вискозиметр", "аспиратор", "картридж", "сервер", "вагон", "мегаомметр", "тепловизор", "хроматограф", "планшетн", "гигрометр",
"ветроуказат", "сканер", "рентген", "полиграфич", "телемеханик", "автоцистерн", "рециркулятор", "роутер", "картридер", "транспорт", "факельн",
    "строительные материалы", "фоторамк", "футбол", "навес", "урн", "стройматериал", "парковок", "парковка", "парковочн", "ящик", "строительных материалов",
"сэндвич", "сепаратор", "осушител", "выпрямит", "средства индивидуальной защиты", "анемометр", "бытовая техника", "химреагент", "комплектующие к ПК",
"конфиденциал", "оповещен", "люлька", "сушилк", "перфоратор", "строительн", "лакокрас", "общеобразоват", "огражден", "гидравлич", "кабеленес", "метчик", "освещен",
    "профилакт", "светодиод", "течеискат", "табло", "грызун", "гарнитур", "автомобил", "очистн", "парогенер", "центратор", "лубрикат", "триммер", "морозил",
"телевизор", "сварк", "нефтеотделит", "кондиционер", "гаечн", "катер", "блок-бокс", "дымов", "термос", "крепеж", "углеводород", "стеллаж", "кассир", "смартфон",
"маркировочн", "hdd", "мфу", "прослушив", "клещи", "зеркало", "сувенир", "охран", "термокос", "утилизац", "очистк", "пищи", "канат", "труборез", "акустич",
"ЭВМ", "больниц", "копировальн", "Wi-Fi", "шоифовал", "прачечн", "водогрейн", "уборк", "автобус", "геодезич", "радиостанц", "микрофон", "конференц",
"абонент", "тренажер", "аптеч", "взрывчат", "огнепреград", "Bradley", "разметк", "пропан", "рекламн", "ламинат", "детск", "плакат", "уплотнен", "сварн", "котельн"
, "биметалл", "бюджетн", "кабинет", "ребенк", "Hauser", "электродвиг", "пандус", "музыкал", "запорн", "вышка", "клапан", "арматур", "электрод",
"электроинструмент", "электромонтаж", "вышка", "эстакад", "металлопрокат", "катамаран", "абразив", "ключниц", "ограждающ", "печатн", "оснастк",
"слесарн", "опора", "бобыш", "сетка", "хозинвент", "санитарн", "вышек", "лечебн", "противогаз", "пожар", "пылесос", "огнетушит", "оружие", "планшет",
"мачт", "гайки", "хомут", "кухонн", "мраморн", "сальник", "гладильн", "моноблок", "спектр", "метео", "рыбо", "автосцеп", "ловильн", "канц", "ванн",
"почтов", "бритвен", "грузоподъем", "весов", "автотовар", "вывеск", "стенд", "многофункц", "проектор", "мультимед", "наушник", "пэвм", "спорт",
"химия", "паронит", "асбест", "автомойк", "окраск", "окрасочн", "ножницы", "лопата", "канистр", "уборочн", "мусор", "диафрагм", "закладн",
"хирург", "печатаю", "подарочн", "презентац", "вальцов", "якор", "фрез", "горелк", "печат", "таблич", "фрезерн", "писсуар", "оконн", "торгов",
"ресторан", "кухн", "ssd", "bluetooth", "wi-fi", "квадрокоп", "трассоискат", "алкотестер", "аудиорегистрат", "отдых", "фланцы", "отоплен", "значк", "фонар",
"dvd", "катушк", "bently", "электрообогрев", "лупа", "розетк", "тревожн", "жестк", "тонометр", "межсетев", "ледокол", "поручн", "гайковерт",
"автокабеленамат", "трактор", "потолок", "казан", "самокат", "складск", "сушил", "профнастил", "отделк", "рекатор", "клавиатур", "плоттер",
"печь", "осциллограф", "yokogawa", "rosemount", "спецодежд", "суда", "caterpillar", "скважин", "колонн", "герметик", "шпильк", "светильн",
"втулк", "процессор", "электрофорез", "криптограф", "кабель", "hart", "штуцер", "аварийн", "бочка", "учебн", "лопат", "судов", "ethernet",
"siemens", "опрыскивател", "указател", "сверло", "сверла", "плинтус", "цепь", "грузозахватн", "заглушек", "клининг", "антисептик", "трубной",
"трассопоиск", "спутников", "рулетк", "мешалка", "коалесц", "задвижк", "интерьер", "электроустановочн", "профлист", "напильник", "саморез",
"резак", "стойка", "баллон", "маслохозяйст", " контрольно-пропускн", "швеллер", "балка", "антенна", "линейк", "emerson", "cisco", "рутокен",
"быстроразъемн", "розлив", "измельч", "проволок", "ножовочн", "уголки", "проволочн", "гофротруб", "кусачки", "фототехник", "floboss",
"подарк", "коврик", "дезинфицир", "элеватор", "звукотехнич", "горелочн", "замок", "красочн", "болгарка", "диктофон", "перчатки", "страховочн",
"тройник", "муфта", "линолеум", "кастрюл", "флагшток", "заслонка", "часы", "usb", "розеток", "check", "понтон", "маслоочистит", "ворота", "опоры",
"трубы", "дырокол", "алкогол", "мерник", "гребенок", "патрубки", "сетки", "контейнер", "бюкс", "schneider", "кардиограф", "цемент",
"печи", "паяльник", "ведра", "муфты", "дыхательн", "кабеля", "садовый", "здания", "отвод", "заземлен", "пружины", "стройтовар", "шпилек",
"дезинфекц", "дератизац", "honeywell", "культиватор", "пистолет", "такелаж", "скобы", "кронштейн", "паяльн", "армстронг", "дефибрил", "дуршлаг",
"пружин", "знаки", "бензопил", "зданий", "шприц", "грабли", "замки", "бочки", "кисти", "шланг", "сайдинг", "кофеварк", "резцы",
"талреп", "рулеток", "фотоловуш", "знаков", "реабилитац", "домофон", "новорожден", "ручног", "пломбирующ", "шкафы", "шкафов",
"резцов", "кровл", "штанген", "запчасти", "абсорбер", "реанимац", "киоск", "холестерин", "окрасночн", "снегоплав", "чугун", "ленточн", "плашк", "сплит",
"гайка", "чрезвычайн", "медвед", "ленточн", "фитинг", "люки", "цепи", "мостик", "транспондер", "медоборуд", "экшн-кам", "факсимил", "кассов",
"мойки", "демонстрацион", "очиститель", "ликвидац", "болты", "поставка плит", "тэны", "траверс", "поставка опор", "тест-полосок",
"вертлюг", "умывальник", "теплы", "бытовк", "пропускног", "шлюза", "переговорн", "радиограф", "магнитн", "хранения данных",
"метан", "светофор", "грэс", "краска", "пиломат", "металлореж", "плом", "лента", "бочек", "валик", "инструмент ручной", "поставку опор",
"комплектующие ПК", "поставка панелей", "краны шаровые", "комплекс измерительный", "расходные материалы", "превентор",
"электротехнических материалов", "средств связи", "скобочн", "электротехнической продукции", "медиа конверторы", "воронок",
"ведер", "сендвич-панели", "рамок", "оборудования связи", "прокладок", "траншей", "металлоконструкции лэп", "шкурок", "кругов",
"расходники", "системный блок", "аккумуляторов", "элементов питания", "лазерный уровень", "панели", "накопителя", "систем связи",
"поставка ламп", "GPS-навигатор", "люстр", "режущего инструмента", "альпинизм", "шкурка", "утилизатор", "приборы электроизмерительные",
"поставка котла", "закупка электрооборудования", "радиорелейно", "образовательн", "радиодетал", "пластины", "рольставн",
"пластина", "пищев", "бытовые", "тиски", "шасси", "банкомат", "пк перенос", "поставка зип", "почвы", "вышки", "химчистк",
"пищеблок", "поставка котлов", "павильон", "окна", "системные блоки", "системных блоков", "гильза", "ручной инструмент",
"хоз. товаров", "гидроключ", "когти", "тепловой пункт", "затвор", "патрубк", "пакеров", "поставка сиз", "котла", "отделочн", "винтов",
"обжимн", "желонки", "станки", "потолочн", "люков", "декоративн", "воронка", "ворот", "светотехнич", "смазочн", "пиротехн",
"ершик", "ёршик", "степлер", "больнич", "лотков", "доводчик", "газонокосилк", "гипсокартон", "электротехнических изделий", "вычислительной техники",
"электрические материалы", "электроматериалы", "рукавов", "ороситель", "вычислительная техника", "ангар", "сетевой адаптер",
"неттоп", "лицензия", "флюорограф", "ит-оборудования"]



// const test1 = 'Запасные части к уборочно-моечному оборудованию'
module.exports.filter = function (stringToCheck ) {
    var flag = true
    for (word of wordsToExclude) {
        if (stringToCheck.toLowerCase().includes(word)) {
            flag = false
            // console.log("flag: ", flag)
            break
        }
    }
    return flag
}

// console.log(this.filter(test1))
// console.log(test1.includes('запасн'))