/*
  Здесь находятся слова.

  type:
    noun       = существительное = РОЗОВЫЙ
    verb       = глагол          = ГОЛУБОЙ
    adjective  = прилагательное  = ЖЁЛТЫЙ
    phrase     = фраза           = БЕЛЫЙ
    other      = другое          = ЗЕЛЁНЫЙ
*/


// ==============================
// СЛОВА
// ==============================

const units = {

  0: [
    { ru: "Введение", en: "Introduction", type: "noun" },
    { ru: "телефон", en: "(tele)phone", type: "noun" },
    { ru: "и", en: "and", type: "other" },
    { ru: "мебель", en: "bear", type: "noun" },
    { ru: "бой барабанов", en: "beat", type: "noun" },
    { ru: "книга", en: "book", type: "noun" },
    { ru: "мальчик", en: "boy", type: "noun" },
    { ru: "буфет", en: "buffet", type: "noun" },
    { ru: "гамбургер", en: "burger", type: "noun" },
    { ru: "автобус", en: "bus", type: "noun" },
    { ru: "кафе", en: "cafe", type: "noun" },
    { ru: "калькулятор", en: "calculator", type: "noun" },
    { ru: "фотоаппарат", en: "camera", type: "noun" },
    { ru: "кассета", en: "cassette", type: "noun" },
    { ru: "кофе", en: "coffee", type: "noun" },
    { ru: "компьютер", en: "computer", type: "noun" },
    { ru: "диск", en: "disk", type: "noun" },
    { ru: "электроника", en: "electronics", type: "noun" },
    { ru: "английский", en: "English", type: "adjective" },
    { ru: "потрясающе", en: "fantastic", type: "adjective" },
    { ru: "быстрая перемотка вперед", en: "fwd (fast forward)", type: "other" },
    { ru: "пленка", en: "film", type: "noun" },
    { ru: "находить", en: "find", type: "verb" },
    { ru: "футбол (американский)", en: "football", type: "noun" },
    { ru: "хорошо", en: "good", type: "adjective" },
    { ru: "булочка с котлетой, гамбургер", en: "hamburger", type: "noun" },
    { ru: "вертолет", en: "helicopter", type: "noun" },
    { ru: "булочка с сосиской, хот дог", en: "hot dog", type: "noun" },
    { ru: "джинсы", en: "jeans", type: "noun" },
    { ru: "реактивный самолет", en: "jet", type: "noun" },
    { ru: "язык", en: "language", type: "noun" },
    { ru: "главный", en: "main", type: "adjective" },
    { ru: "подбирать", en: "match", type: "verb" },
    { ru: "более, больше", en: "more", type: "other" },
    { ru: "мой, моя, мое", en: "my", type: "other" },
    { ru: "Оксфорд", en: "Oxford", type: "noun" },
    { ru: "картинка", en: "picture", type: "noun" },
    { ru: "пица", en: "pizza", type: "noun" },
    { ru: "проигрывание", en: "play", type: "noun" },
    { ru: "полиция", en: "police", type: "noun" },
    { ru: "полицейский", en: "police officer", type: "noun" },
    { ru: "нажимать", en: "press", type: "verb" },
    { ru: "радио", en: "radio", type: "noun" },
    { ru: "запись", en: "record", type: "noun" },
    { ru: "ресторан", en: "restaurant", type: "noun" },
    { ru: "перемотка назад", en: "rew (rewind)", type: "other" },
    { ru: "рок (музыка)", en: "rock", type: "noun" },
    { ru: "продажа", en: "sale", type: "noun" },
    { ru: "бутерброд, сэндвич", en: "sandwich", type: "noun" },
    { ru: "спутник", en: "satellite", type: "noun" },
    { ru: "спорт", en: "sports", type: "noun" },
    { ru: "квадрат", en: "square", type: "noun" },
    { ru: "стоп", en: "stop", type: "noun" },
    { ru: "улица", en: "street", type: "noun" },
    { ru: "супермаркет", en: "supermarket", type: "noun" },
    { ru: "кассета второй", en: "tape", type: "noun" },
    { ru: "такси", en: "taxi", type: "noun" },
    { ru: "телевизор (ТВ)", en: "television (TV)", type: "noun" },
    { ru: "десять", en: "ten", type: "other" },
    { ru: "теннис", en: "tennis", type: "noun" },
    { ru: "театр", en: "theater", type: "noun" },
    { ru: "очень хорошо", en: "very good", type: "phrase" },
    { ru: "видео", en: "video", type: "noun" },
    { ru: "слово", en: "word", type: "noun" },
    { ru: "писать", en: "write", type: "verb" },
    { ru: "изменение масштаба изображения", en: "zoom", type: "noun" }
  ],

  1: [
  { "ru": "от be (1 лицо, ед число)", "en": "am (*)", "type": "verb" },
  { "ru": "отвечать", "en": "answer", "type": "verb" },
  { "ru": "от be (2 лицо ед и мн число, 3 лицо мн число)", "en": "are (*)", "type": "verb" },
  { "ru": "Австралия", "en": "Australia", "type": "noun" },
  { "ru": "ремень", "en": "belt", "type": "noun" },
  { "ru": "Бразилия", "en": "Brazil", "type": "noun" },
  { "ru": "Канада", "en": "Canada", "type": "noun" },
  { "ru": "Китай", "en": "China", "type": "noun" },
  { "ru": "одноклассник", "en": "classmate", "type": "noun" },
  { "ru": "Кофе?", "en": "Coffee?", "type": "noun" },
  { "ru": "заполнить", "en": "complete", "type": "verb" },
  { "ru": "разговор, беседа", "en": "conversation", "type": "noun" },
  { "ru": "правильный", "en": "correct", "type": "adjective" },
  { "ru": "страна", "en": "country", "type": "noun" },
  { "ru": "Египет", "en": "Egypt", "type": "noun" },
  { "ru": "восемь", "en": "eight", "type": "numeral" },
  { "ru": "Англия", "en": "England", "type": "noun" },
  { "ru": "упражнение", "en": "exercise", "type": "noun" },
  { "ru": "выход", "en": "exit", "type": "noun" },
  { "ru": "знаменитый", "en": "famous", "type": "adjective" },
  { "ru": "пристегнуть", "en": "fasten", "type": "verb" },
  { "ru": "Пристегните ваши ремни безопасности.", "en": "Fasten your seat belts.", "type": "phrase" },
  { "ru": "пять", "en": "five", "type": "numeral" },
  { "ru": "четыре", "en": "four", "type": "numeral" },
  { "ru": "Франция", "en": "France", "type": "noun" },
  { "ru": "из", "en": "from", "type": "preposition" },
  { "ru": "Германия", "en": "Germany", "type": "noun" },
  { "ru": "Великобритания", "en": "Great Britain", "type": "noun" },
  { "ru": "Греция", "en": "Greece", "type": "noun" },
  { "ru": "он", "en": "he", "type": "pronoun" },
  { "ru": "Здравствуйте.", "en": "Hello.", "type": "interjection" },
  { "ru": "Голливуд", "en": "Hollywood", "type": "noun" },
  { "ru": "я", "en": "I", "type": "pronoun" },
  { "ru": "в", "en": "in", "type": "preposition" },
  { "ru": "от be (3 лицо ед число)", "en": "is (*)", "type": "verb" },
  { "ru": "это", "en": "it", "type": "pronoun" },
  { "ru": "Италия", "en": "Italy", "type": "noun" },
  { "ru": "Япония", "en": "Japan", "type": "noun" },
  { "ru": "слушать", "en": "listen (to ...)", "type": "verb" },
  { "ru": "смотреть", "en": "look (at ...)", "type": "verb" },
  { "ru": "составить", "en": "make", "type": "verb" },
  { "ru": "мужчина", "en": "man", "type": "noun" },
  { "ru": "Мексика", "en": "Mexico", "type": "noun" },
  { "ru": "нет", "en": "no", "type": "particle" },
  { "ru": "Не курить.", "en": "No smoking.", "type": "phrase" },
  { "ru": "Нет, спасибо.", "en": "No, thank you.", "type": "phrase" },
  { "ru": "не", "en": "not", "type": "particle" },
  { "ru": "цифра", "en": "number", "type": "noun" },
  { "ru": "ноль", "en": "Oh", "type": "numeral" },
  { "ru": "Ой?", "en": "Oh?", "type": "interjection" },
  { "ru": "один", "en": "one", "type": "numeral" },
  { "ru": "люди", "en": "people", "type": "noun" },
  { "ru": "место", "en": "place", "type": "noun" },
  { "ru": "пожалуйста", "en": "please", "type": "adverb" },
  { "ru": "Принцесса", "en": "Princess", "type": "noun" },
  { "ru": "вопрос", "en": "question", "type": "noun" },
  { "ru": "уборная, туалет", "en": "rest room", "type": "noun" },
  { "ru": "Россия", "en": "Russia", "type": "noun" },
  { "ru": "ремень безопасности", "en": "seat belt", "type": "noun" },
  { "ru": "она", "en": "she", "type": "pronoun" },
  { "ru": "шесть", "en": "six", "type": "numeral" },
  { "ru": "Испания", "en": "Spain", "type": "noun" },
  { "ru": "говорящий (о человеку)", "en": "speaker (person)", "type": "noun" },
  { "ru": "Швеция", "en": "Sweden", "type": "noun" },
  { "ru": "Швейцария", "en": "Switzerland", "type": "noun" },
  { "ru": "говорить", "en": "talk (to ...)", "type": "verb" },
  { "ru": "благодарить", "en": "thank", "type": "verb" },
  { "ru": "тот, та, то", "en": "that", "type": "pronoun" },
  { "ru": "Это (Мария Джексон)", "en": "That's (Maria Jackson)", "type": "phrase" },
  { "ru": "Нидерланды", "en": "the Netherlands", "type": "noun" },
  { "ru": "Соединенные Штаты", "en": "the United States (the US)", "type": "noun" },
  { "ru": "они", "en": "they", "type": "pronoun" },
  { "ru": "думать", "en": "think (of ...)", "type": "verb" },
  { "ru": "три", "en": "three", "type": "numeral" },
  { "ru": "Турция", "en": "Turkey", "type": "noun" },
  { "ru": "два", "en": "two", "type": "numeral" },
  { "ru": "глава", "en": "unit", "type": "noun" },
  { "ru": "мы", "en": "we", "type": "pronoun" },
  { "ru": "где", "en": "where", "type": "adverb" },
  { "ru": "Откуда...?", "en": "Where ... from?", "type": "phrase" },
  { "ru": "женщина", "en": "woman", "type": "noun" },
  { "ru": "рабочая книга", "en": "workbook", "type": "noun" },
  { "ru": "да", "en": "yes", "type": "particle" },
  { "ru": "Да, пожалуйста.", "en": "Yes, please.", "type": "phrase" },
  { "ru": "ты, вы", "en": "you", "type": "pronoun" },
  { "ru": "твой, ваш", "en": "your", "type": "pronoun" }
],
  9:[
  { "ru": "скорая помощь", "en": "ambulance", "type": "noun" },
  { "ru": "Амстердам", "en": "Amsterdam", "type": "noun" },
  { "ru": "позади", "en": "behind", "type": "preposition" },
  { "ru": "черно-белый", "en": "black and white", "type": "adjective" },
  { "ru": "звонить", "en": "call", "type": "verb" },
  { "ru": "нести", "en": "carry", "type": "verb" },
  { "ru": "класс", "en": "class", "type": "noun" },
  { "ru": "второй пилот", "en": "copilot", "type": "noun" },
  { "ru": "член экипажа", "en": "crewman", "type": "noun" },
  { "ru": "описание", "en": "description", "type": "noun" },
  { "ru": "ныряльщик, дайвер", "en": "diver", "type": "noun" },
  { "ru": "внизу", "en": "down", "type": "adverb" },
  { "ru": "там внизу", "en": "down there", "type": "phrase" },
  { "ru": "рисовать", "en": "draw", "type": "verb" },
  { "ru": "аварийный", "en": "emergency", "type": "adjective" },
  { "ru": "аварийные службы", "en": "emergency services", "type": "noun" },
  { "ru": "огонь", "en": "fire", "type": "noun" },
  { "ru": "пожарник", "en": "fire fighter", "type": "noun" },
  { "ru": "пожарная машина", "en": "fire truck", "type": "noun" },
  { "ru": "дружелюбный", "en": "friendly", "type": "adjective" },
  { "ru": "девочка", "en": "girl", "type": "noun" },
  { "ru": "ружье", "en": "gun", "type": "noun" },
  { "ru": "ее, ей", "en": "her", "type": "pronoun" },
  { "ru": "его, ему", "en": "him", "type": "pronoun" },
  { "ru": "больница", "en": "hospital", "type": "noun" },
  { "ru": "впереди", "en": "in front of", "type": "preposition" },
  { "ru": "Стамбул", "en": "Istanbul", "type": "noun" },
  { "ru": "только", "en": "just", "type": "adverb" },
  { "ru": "Кобе", "en": "Kobe", "type": "noun" },
  { "ru": "Берегись!", "en": "Look out!", "type": "interjection" },
  { "ru": "оценка", "en": "mark", "type": "noun" },
  { "ru": "меня, мне", "en": "me", "type": "pronoun" },
  { "ru": "метр", "en": "meter", "type": "noun" },
  { "ru": "деньги", "en": "money", "type": "noun" },
  { "ru": "газета", "en": "newspaper", "type": "noun" },
  { "ru": "океан", "en": "ocean", "type": "noun" },
  { "ru": "часто", "en": "often", "type": "adverb" },
  { "ru": "предлог", "en": "preposition", "type": "noun" },
  { "ru": "тянуть вверх", "en": "pull up", "type": "verb" },
  { "ru": "опускать вниз", "en": "put down", "type": "verb" },
  { "ru": "состязание в беге, забег", "en": "race", "type": "noun" },
  { "ru": "спасать", "en": "rescue", "type": "verb" },
  { "ru": "спасатель", "en": "rescue worker", "type": "noun" },
  { "ru": "результат", "en": "result", "type": "noun" },
  { "ru": "скала", "en": "rock", "type": "noun" },
  { "ru": "усаживание, рассадка", "en": "seating", "type": "noun" },
  { "ru": "служба, сервис", "en": "service", "type": "noun" },
  { "ru": "корабль", "en": "ship", "type": "noun" },
  { "ru": "начинать", "en": "start", "type": "verb" },
  { "ru": "стол", "en": "table", "type": "noun" },
  { "ru": "Это все.", "en": "That's it.", "type": "phrase" },
  { "ru": "их, им", "en": "them", "type": "pronoun" },
  { "ru": "под", "en": "under", "type": "preposition" },
  { "ru": "вверх", "en": "up", "type": "adverb" },
  { "ru": "нам, нас", "en": "us", "type": "pronoun" },
  { "ru": "доброволец", "en": "volunteer", "type": "noun" },
  { "ru": "вода", "en": "water", "type": "noun" },
  { "ru": "работать", "en": "work", "type": "verb" },
  { "ru": "рабочий", "en": "worker", "type": "noun" }
],
  10:[
  { "ru": "любой", "en": "any", "type": "pronoun" },
  { "ru": "Бангкок", "en": "Bangkok", "type": "noun" },
  { "ru": "Бразилиа", "en": "Brasilia (city)", "type": "noun" },
  { "ru": "столица", "en": "capital", "type": "noun" },
  { "ru": "количественные", "en": "cardinal", "type": "adjective" },
  { "ru": "выбирать", "en": "choose", "type": "verb" },
  { "ru": "служащий", "en": "clerk", "type": "noun" },
  { "ru": "Часы настенные", "en": "clock", "type": "noun" },
  { "ru": "кофеварка", "en": "coffee machine", "type": "noun" },
  { "ru": "кофейник", "en": "coffeepot", "type": "noun" },
  { "ru": "Поздравляю!", "en": "Congratulations!", "type": "interjection" },
  { "ru": "участник", "en": "contestant", "type": "noun" },
  { "ru": "прикрывать", "en": "cover", "type": "verb" },
  { "ru": "занавеска", "en": "curtain", "type": "noun" },
  { "ru": "определенный", "en": "definite", "type": "adjective" },
  { "ru": "водитель", "en": "driver", "type": "noun" },
  { "ru": "выражение", "en": "expression", "type": "noun" },
  { "ru": "осень", "en": "fall (autumn)", "type": "noun" },
  { "ru": "за десять секунд", "en": "for ten seconds", "type": "phrase" },
  { "ru": "Добрый вечер.", "en": "Good evening.", "type": "phrase" },
  { "ru": "грамматика", "en": "grammar", "type": "noun" },
  { "ru": "помощь", "en": "help", "type": "noun" },
  { "ru": "Вот...", "en": "Here's ...", "type": "phrase" },
  { "ru": "дом", "en": "house", "type": "noun" },
  { "ru": "неправильный", "en": "irregular", "type": "adjective" },
  { "ru": "головоломка", "en": "jigsaw", "type": "noun" },
  { "ru": "Дамы и господа,...", "en": "Ladies and gentlemen, ...", "type": "phrase" },
  { "ru": "последний", "en": "last", "type": "adjective" },
  { "ru": "список, перечень", "en": "list", "type": "noun" },
  { "ru": "местонахождение", "en": "location", "type": "noun" },
  { "ru": "любить", "en": "love(v)", "type": "verb" },
  { "ru": "город Мехико", "en": "Mexico city", "type": "noun" },
  { "ru": "микроволновая печь", "en": "microwave oven", "type": "noun" },
  { "ru": "гора", "en": "mountain", "type": "noun" },
  { "ru": "музыка", "en": "music", "type": "noun" },
  { "ru": "ожерелье", "en": "necklace", "type": "noun" },
  { "ru": "отрицательный", "en": "negative", "type": "adjective" },
  { "ru": "прекрасный", "en": "nice", "type": "adjective" },
  { "ru": "дополнение", "en": "object", "type": "noun" },
  { "ru": "картина написанная масляными красками", "en": "oil painting", "type": "noun" },
  { "ru": "порядковый", "en": "ordinal", "type": "adjective" },
  { "ru": "личное местоимение", "en": "personal pronoun", "type": "noun" },
  { "ru": "фотограф", "en": "photographer", "type": "noun" },
  { "ru": "игрок", "en": "player", "type": "noun" },
  { "ru": "множественное число", "en": "plural", "type": "noun" },
  { "ru": "очко", "en": "point", "type": "noun" },
  { "ru": "конверт", "en": "postcard", "type": "noun" },
  { "ru": "викторина", "en": "quiz", "type": "noun" },
  { "ru": "Готов?", "en": "Ready?", "type": "adjective" },
  { "ru": "правильный", "en": "regular", "type": "adjective" },
  { "ru": "ответ", "en": "response", "type": "noun" },
  { "ru": "кеды", "en": "running shoes", "type": "noun" },
  { "ru": "счет", "en": "score", "type": "noun" },
  { "ru": "единственное число", "en": "singular", "type": "noun" },
  { "ru": "ломтик", "en": "slice", "type": "noun" },
  { "ru": "несколько", "en": "some", "type": "determiner" },
  { "ru": "песня", "en": "song", "type": "noun" },
  { "ru": "весенняя пора", "en": "springtime", "type": "noun" },
  { "ru": "стоять", "en": "stand", "type": "verb" },
  { "ru": "делать поочередно", "en": "take turns", "type": "phrase" },
  { "ru": "теннисная ракетка", "en": "tennis racket", "type": "noun" },
  { "ru": "Таиланд", "en": "Thailand", "type": "noun" },
  { "ru": "Потрясающе!", "en": "That's terrific!", "type": "interjection" },
  { "ru": "наилучший", "en": "the best", "type": "adjective" },
  { "ru": "Есть.", "en": "There is/are ...", "type": "phrase" },
  { "ru": "пишущая машинка", "en": "typewriter", "type": "noun" },
  { "ru": "глагол", "en": "verb", "type": "noun" },
  { "ru": "неделя", "en": "week", "type": "noun" },
  { "ru": "Добро пожаловать...", "en": "Welcome to ...", "type": "phrase" },
  { "ru": "Что еще есть?", "en": "What else is there?", "type": "phrase" },
  { "ru": "Что есть...?", "en": "What is there ... ?", "type": "phrase" },
  { "ru": "Какова столица (Франции)?", "en": "What's the capital of (France)?", "type": "phrase" },
  { "ru": "который", "en": "which", "type": "pronoun" },
  { "ru": "твой, ваш", "en": "yours", "type": "pronoun" }
],
  11:[
  { "ru": "воздушный, воздух", "en": "air", "type": "noun" },
  { "ru": "анчоусы (вид рыбы)", "en": "anchovies", "type": "noun" },
  { "ru": "антибиотики", "en": "antibiotics", "type": "noun" },
  { "ru": "плохой", "en": "bad", "type": "adjective" },
  { "ru": "бинт, бандаж, повязка", "en": "bandage", "type": "noun" },
  { "ru": "быть на связи с", "en": "be on the phone with", "type": "phrase" },
  { "ru": "бутылка", "en": "bottle", "type": "noun" },
  { "ru": "чаша, миска", "en": "bowl", "type": "noun" },
  { "ru": "хлеб", "en": "bread", "type": "noun" },
  { "ru": "завтрак", "en": "breakfast", "type": "noun" },
  { "ru": "капуста брокколи", "en": "broccoli", "type": "noun" },
  { "ru": "сливочное масло", "en": "butter", "type": "noun" },
  { "ru": "оператор", "en": "cameraman", "type": "noun" },
  { "ru": "морковь", "en": "carrot", "type": "noun" },
  { "ru": "злаки, каша", "en": "cereal", "type": "noun" },
  { "ru": "чек", "en": "check(n.)", "type": "noun" },
  { "ru": "чистый", "en": "clean (adj.)", "type": "adjective" },
  { "ru": "одежда", "en": "clothing", "type": "noun" },
  { "ru": "печенье", "en": "cookie", "type": "noun" },
  { "ru": "кукурузные хлопья", "en": "corn flakes", "type": "noun" },
  { "ru": "исчисляемый", "en": "countable", "type": "adjective" },
  { "ru": "доставлять", "en": "deliver", "type": "verb" },
  { "ru": "оформление, дизайн", "en": "design", "type": "noun" },
  { "ru": "ужин", "en": "dinner", "type": "noun" },
  { "ru": "тесто", "en": "dough", "type": "noun" },
  { "ru": "пить", "en": "drink", "type": "verb" },
  { "ru": "кушать", "en": "eat", "type": "verb" },
  { "ru": "электричество", "en": "electricity", "type": "noun" },
  { "ru": "неверно, неправда", "en": "false", "type": "adjective" },
  { "ru": "бесплатный", "en": "free", "type": "adjective" },
  { "ru": "газ, бензин", "en": "gas", "type": "noun" },
  { "ru": "гольф клуб", "en": "golf club", "type": "noun" },
  { "ru": "половина", "en": "half", "type": "noun" },
  { "ru": "жарко, горячо", "en": "hot", "type": "adjective" },
  { "ru": "голодный", "en": "hungry", "type": "adjective" },
  { "ru": "Я уверен.", "en": "I'm sure.", "type": "phrase" },
  { "ru": "кувшин", "en": "jug", "type": "noun" },
  { "ru": "большой, крупный", "en": "large", "type": "adjective" },
  { "ru": "лава", "en": "lava", "type": "noun" },
  { "ru": "лимон", "en": "lemon", "type": "noun" },
  { "ru": "Подем...", "en": "Let's go (to...)", "type": "phrase" },
  { "ru": "вживую; прямая трансляция", "en": "live (adj)", "type": "adjective" },
  { "ru": "обед", "en": "lunch", "type": "noun" },
  { "ru": "мясо", "en": "meat", "type": "noun" },
  { "ru": "лекарство, медикаменты", "en": "medicine", "type": "noun" },
  { "ru": "средний", "en": "medium", "type": "adjective" },
  { "ru": "гриб", "en": "mushroom", "type": "noun" },
  { "ru": "репортаж новостей", "en": "news report", "type": "noun" },
  { "ru": "заметки", "en": "notes", "type": "noun" },
  { "ru": "медсестра, няня", "en": "nurse", "type": "noun" },
  { "ru": "олива", "en": "olive", "type": "noun" },
  { "ru": "лук", "en": "onion", "type": "noun" },
  { "ru": "заказ", "en": "order", "type": "noun" },
  { "ru": "перец", "en": "pepper", "type": "noun" },
  { "ru": "горох", "en": "pea(s)", "type": "noun" },
  { "ru": "безупречный, превосходный", "en": "perfect", "type": "adjective" },
  { "ru": "рассол, соленый огурец", "en": "pickle", "type": "noun" },
  { "ru": "ананас", "en": "pineapple", "type": "noun" },
  { "ru": "картофель", "en": "potato", "type": "noun" },
  { "ru": "довольно старый", "en": "pretty old", "type": "phrase" },
  { "ru": "ракетка", "en": "racket", "type": "noun" },
  { "ru": "на самом деле, действительно", "en": "really", "type": "adverb" },
  { "ru": "спасательное оборудование", "en": "rescue equipment", "type": "noun" },
  { "ru": "река", "en": "river", "type": "noun" },
  { "ru": "соль", "en": "salt", "type": "noun" },
  { "ru": "колбаса, сосиска", "en": "sausage", "type": "noun" },
  { "ru": "креветка", "en": "shrimp", "type": "noun" },
  { "ru": "сахар", "en": "sugar", "type": "noun" },
  { "ru": "уверенный", "en": "sure", "type": "adjective" },
  { "ru": "томатный соус", "en": "tomato sauce", "type": "noun" },
  { "ru": "город", "en": "town", "type": "noun" },
  { "ru": "неисчисляемый", "en": "uncountable", "type": "adjective" },
  { "ru": "овощ", "en": "vegetable", "type": "noun" },
  { "ru": "вулкан", "en": "volcano", "type": "noun" },
  { "ru": "А что на счет...?", "en": "What about... ?", "type": "phrase" }
],

};


// ==============================
// НАЗВАНИЯ ТИПОВ
// ==============================

const typeNames = {
  noun: "Существительное",
  verb: "Глагол",
  adjective: "Прилагательное",
  phrase: "Фраза",
  other: "Другое"
};


// ==============================
// ЦВЕТА
// ==============================

const typeColors = {
  noun: "#ff91b8",
  verb: "#7db7ff",
  adjective: "#ffe38a",
  phrase: "#f4f5f7",
  other: "#8be3ad"
};


// ==============================
// HTML ЭЛЕМЕНТЫ
// ==============================

const unitGrid =
  document.getElementById("unitGrid");

const startModal =
  document.getElementById("startModal");

const modalTitle =
  document.getElementById("modalTitle");

const modalInfo =
  document.getElementById("modalInfo");

const startBtn =
  document.getElementById("startBtn");

const closeModal =
  document.getElementById("closeModal");

const trainer =
  document.getElementById("trainer");

const backBtn =
  document.getElementById("backBtn");

const answerForm =
  document.getElementById("answerForm");

const answerInput =
  document.getElementById("answerInput");

const flashcard =
  document.getElementById("flashcard");

const russianWord =
  document.getElementById("russianWord");

const englishWord =
  document.getElementById("englishWord");

const backTranslation =
  document.getElementById("backTranslation");

const cardType =
  document.getElementById("cardType");

const typeLabel =
  document.getElementById("typeLabel");

const feedback =
  document.getElementById("feedback");

const userAnswerShown =
  document.getElementById("userAnswerShown");

const resultLabel =
  document.getElementById("resultLabel");

const nextBtn =
  document.getElementById("nextBtn");

const progressText =
  document.getElementById("progressText");

const progressFill =
  document.getElementById("progressFill");

const scoreEl =
  document.getElementById("score");

const finishScreen =
  document.getElementById("finishScreen");

const finishStats =
  document.getElementById("finishStats");

const finishTitle =
  document.getElementById("finishTitle");

const againBtn =
  document.getElementById("againBtn");

const finishBackBtn =
  document.getElementById("finishBackBtn");


// ==============================
// СОСТОЯНИЕ ИГРЫ
// ==============================

let selectedUnit = null;

let cards = [];

let currentIndex = 0;

let score = 0;

let locked = false;


// ==============================
// ПРОВЕРКА ОТВЕТА
// ==============================
//
// Здесь скобки считаются необязательными.
//
// Например:
//
// (tele)phone
//
// Можно написать:
//
// telephone
// phone
// (tele)phone
//
// Всё будет правильно.
//
// ==============================

function normalizeAnswer(text) {

  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");

}


function isAnswerCorrect(userAnswer, correctAnswer) {

  const user =
    normalizeAnswer(userAnswer);

  const correct =
    normalizeAnswer(correctAnswer);


  // Полное совпадение
  if (user === correct) {
    return true;
  }


  // Убираем содержимое скобок вместе со скобками.
  //
  // "(tele)phone" -> "phone"
  // "fwd (fast forward)" -> "fwd"
  //
  const withoutParentheses =
    normalizeAnswer(
      correct.replace(
        /\s*\([^)]*\)/g,
        ""
      )
    );


  if (user === withoutParentheses) {
    return true;
  }


  // Убираем только сами скобки,
  // но оставляем текст внутри.
  //
  // "(tele)phone" -> "telephone"
  // "fwd (fast forward)" -> "fwd fast forward"
  //
  const withoutBrackets =
    normalizeAnswer(
      correct.replace(/[()]/g, "")
    );


  if (user === withoutBrackets) {
    return true;
  }


  return false;

}


// ==============================
// СОЗДАНИЕ UNIT
// ==============================

function renderUnits() {

  unitGrid.innerHTML = "";

  Object.keys(units).forEach(unitNumber => {

    const button =
      document.createElement("button");

    button.className = "unit-card";

    const unitName =
      unitNumber === "0"
        ? "Introduction"
        : `Unit ${unitNumber}`;

    button.innerHTML = `

    <span class="unit-number">
      ENGLISH
    </span>

<span class="unit-name">
  ${unitName}
</span>

  `;

    button.addEventListener(
      "click",
      () => {
        openStartModal(
          Number(unitNumber)
        );
      }
    );

    unitGrid.appendChild(button);

  });

}


// ==============================
// ОКНО НАЧАЛА
// ==============================

function openStartModal(unitNumber) {

  selectedUnit = unitNumber;

  const count =
    units[unitNumber].length;

  modalTitle.textContent =
    `Unit ${unitNumber}`;

  modalInfo.textContent =
    `В этом Unit ${count} ${count === 1
      ? "слово"
      : "слов"
    }. Напиши английское слово для каждой карточки.`;

  startModal.classList.remove(
    "hidden"
  );

}


// ==============================
// ЗАКРЫТЬ ОКНО
// ==============================

function closeStartModal() {

  startModal.classList.add(
    "hidden"
  );

}


// ==============================
// ПЕРЕМЕШИВАНИЕ
// ==============================

function shuffleCards(array) {

  for (
    let i = array.length - 1;
    i > 0;
    i--
  ) {

    const randomIndex =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      array[i],
      array[randomIndex]
    ] = [
        array[randomIndex],
        array[i]
      ];

  }

  return array;

}


// ==============================
// НАЧАТЬ ТРЕНИРОВКУ
// ==============================

function startTrainer() {

  closeStartModal();


  // Создаём копию,
  // чтобы исходный Unit не менялся
  cards = [
    ...units[selectedUnit]
  ];


  // Новый случайный порядок
  // при каждом запуске
  shuffleCards(cards);


  currentIndex = 0;

  score = 0;

  locked = false;


  scoreEl.textContent =
    score;


  trainer.classList.remove(
    "hidden"
  );


  finishScreen.classList.add(
    "hidden"
  );


  resetTrainerView();

  showCard();

}


// ==============================
// ПОКАЗАТЬ КАРТОЧКУ
// ==============================

function showCard() {

  locked = false;


  // Сбрасываем зелёную/красную рамку
  flashcard.classList.remove(
    "answer-correct",
    "answer-wrong"
  );


  // Убираем переворот
  flashcard.classList.remove(
    "flipped"
  );


  const card =
    cards[currentIndex];


  // Русское слово
  russianWord.textContent =
    card.ru;


  // Английское слово
  englishWord.textContent =
    card.en;


  // Перевод
  backTranslation.textContent =
    card.ru;


  // Тип
  cardType.textContent =
    typeNames[card.type];

  typeLabel.textContent =
    typeNames[card.type];


  // Цвет карточки
  document
    .querySelector(".card-front")
    .style.background =
    typeColors[card.type];


  // Прогресс
  progressText.textContent =
    `${currentIndex + 1} / ${cards.length}`;


  progressFill.style.width =
    `${(currentIndex / cards.length) * 100}%`;


  // Сбрасываем сообщение
  feedback.textContent = "";

  feedback.className =
    "feedback";


  resultLabel.textContent =
    "✓ ПРАВИЛЬНО";


  userAnswerShown.textContent =
    "";


  nextBtn.classList.add(
    "hidden"
  );


  answerInput.value = "";


  answerForm.classList.remove(
    "hidden"
  );


  // На компьютере автоматически ставим курсор.
  // На телефоне клавиатура сама не открывается.
  if (
    !window.matchMedia(
      "(max-width: 750px)"
    ).matches
  ) {

    setTimeout(() => {
      answerInput.focus();
    }, 100);

  }

}


// ==============================
// ПРОВЕРКА ОТВЕТА
// ==============================

function checkAnswer(event) {

  event.preventDefault();


  if (locked) {
    return;
  }


  const userAnswer =
    answerInput.value.trim();


  const correctAnswer =
    cards[currentIndex]
      .en
      .trim();


  // Пустой ответ
  if (!userAnswer) {
    return;
  }


  // =====================================
  // ГЛАВНАЯ ПРОВЕРКА
  // =====================================

  if (
    isAnswerCorrect(
      userAnswer,
      correctAnswer
    )
  ) {


    // ==========================
    // ПРАВИЛЬНО
    // ==========================

    locked = true;


    // Зелёная рамка
    flashcard.classList.remove(
      "answer-wrong"
    );

    flashcard.classList.add(
      "answer-correct"
    );


    score++;

    scoreEl.textContent =
      score;


    feedback.textContent =
      "✓ Правильно!";

    feedback.className =
      "feedback correct";


    // Показываем правильный вариант
    englishWord.textContent =
      correctAnswer;


    userAnswerShown.textContent =
      `Ты написал: ${userAnswer}`;


    resultLabel.textContent =
      "✓ ПРАВИЛЬНО";


    flashcard.classList.add(
      "flipped"
    );


    progressFill.style.width =
      `${((currentIndex + 1) / cards.length) * 100}%`;


    // Следующая карточка
    setTimeout(() => {

      nextCard();

    }, 900);


  } else {


    // ==========================
    // НЕПРАВИЛЬНО
    // ==========================

    locked = true;


    // Красная рамка
    flashcard.classList.remove(
      "answer-correct"
    );

    flashcard.classList.add(
      "answer-wrong"
    );


    feedback.textContent =
      "✕ Неправильно";

    feedback.className =
      "feedback wrong";


    englishWord.textContent =
      correctAnswer;


    userAnswerShown.textContent =
      `Ты написал: ${userAnswer}`;


    resultLabel.textContent =
      "✕ НЕПРАВИЛЬНО";


    flashcard.classList.add(
      "flipped"
    );


    nextBtn.classList.remove(
      "hidden"
    );

  }

}


// ==============================
// СЛЕДУЮЩАЯ КАРТОЧКА
// ==============================

function nextCard() {

  currentIndex++;


  if (
    currentIndex >=
    cards.length
  ) {

    finishTrainer();

    return;

  }


  showCard();

}


// ==============================
// ЗАВЕРШЕНИЕ UNIT
// ==============================

function finishTrainer() {

  answerForm.classList.add(
    "hidden"
  );

  flashcard.classList.add(
    "hidden"
  );

  typeLabel.classList.add(
    "hidden"
  );

  nextBtn.classList.add(
    "hidden"
  );


  const percentage =
    Math.round(
      (score / cards.length) * 100
    );


  let title;

  let message;


  // ==========================
  // ОЦЕНКА
  // ==========================

  if (percentage >= 90) {

    title =
      "🔥 Отлично!";

    message =
      "Ты очень хорошо знаешь эти слова!";

  }

  else if (percentage >= 70) {

    title =
      "👍 Хорошо!";

    message =
      "Почти всё знаешь. Ещё немного практики — и будет отлично!";

  }

  else if (percentage >= 50) {

    title =
      "🙂 Неплохо!";

    message =
      "Основу уже знаешь, но некоторые слова стоит повторить.";

  }

  else {

    title =
      "📚 Нужно повторить";

    message =
      "Пока запомнилось мало слов. Повтори Unit и попробуй ещё раз.";

  }


  finishTitle.textContent =
    title;


  finishStats.innerHTML = `

    <strong>
      ${score} из ${cards.length}
    </strong>

    <span class="result-percent">
      ${percentage}%
    </span>

    <span class="result-message">
      ${message}
    </span>

  `;


  finishScreen.classList.remove(
    "hidden"
  );

}


// ==============================
// ВОССТАНОВЛЕНИЕ ТРЕНАЖЁРА
// ==============================

function resetTrainerView() {

  answerForm.classList.remove(
    "hidden"
  );

  flashcard.classList.remove(
    "hidden"
  );

  typeLabel.classList.remove(
    "hidden"
  );

  nextBtn.classList.add(
    "hidden"
  );

  finishScreen.classList.add(
    "hidden"
  );


  // Сбрасываем цвет рамки
  flashcard.classList.remove(
    "answer-correct",
    "answer-wrong"
  );

}


// ==============================
// НАЗАД К UNIT
// ==============================

function backToUnits() {

  trainer.classList.add(
    "hidden"
  );

  finishScreen.classList.add(
    "hidden"
  );

  resetTrainerView();

  selectedUnit = null;

}


// ==============================
// КНОПКИ
// ==============================


// Начать
startBtn.addEventListener(
  "click",
  startTrainer
);


// Закрыть окно
closeModal.addEventListener(
  "click",
  closeStartModal
);


// Проверить
answerForm.addEventListener(
  "submit",
  checkAnswer
);


// Назад
backBtn.addEventListener(
  "click",
  backToUnits
);


// Назад после окончания
finishBackBtn.addEventListener(
  "click",
  backToUnits
);


// ==============================
// КНОПКА «ДАЛЕЕ»
// ==============================

nextBtn.addEventListener(
  "click",
  () => {

    if (!locked) {
      return;
    }

    nextCard();

  }
);


// ==============================
// ПРОЙТИ ЕЩЁ РАЗ
// ==============================

againBtn.addEventListener(
  "click",
  () => {

    resetTrainerView();

    startTrainer();

  }
);


// ==============================
// ЗАКРЫТИЕ MODAL
// ==============================

startModal.addEventListener(
  "click",
  event => {

    if (
      event.target ===
      startModal
    ) {

      closeStartModal();

    }

  }
);


// ==============================
// ЗАПУСК
// ==============================

renderUnits();