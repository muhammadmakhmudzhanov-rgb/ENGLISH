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
2: [
{ "ru": "...пожалуйста.", "en": "... please.", "type": "phrase" },
{ "ru": "неопределенный артикль", "en": "an", "type": "article" },
{ "ru": "А вы?", "en": "And you?", "type": "phrase" },
{ "ru": "что-нибудь", "en": "anything", "type": "pronoun" },
{ "ru": "Что-нибудь еще?", "en": "Anything else?", "type": "phrase" },
{ "ru": "Что-нибудь на десерт?", "en": "Anything for dessert?", "type": "phrase" },
{ "ru": "Что-нибудь попить?", "en": "Anything to drink?", "type": "phrase" },
{ "ru": "яблоко", "en": "apple", "type": "noun" },
{ "ru": "артикль", "en": "article", "type": "noun" },
{ "ru": "банан", "en": "banana", "type": "noun" },
{ "ru": "напиток", "en": "beverage", "type": "noun" },
{ "ru": "пустое место (для заполнения)", "en": "blank", "type": "noun" },
{ "ru": "коробка", "en": "box", "type": "noun" },
{ "ru": "торт", "en": "cake", "type": "noun" },
{ "ru": "уметь, мочь", "en": "can", "type": "verb" },
{ "ru": "Могу ли я вам помочь?", "en": "Can I help you?", "type": "phrase" },
{ "ru": "цент", "en": "cent (¢)", "type": "noun" },
{ "ru": "отмечать галочкой", "en": "check (v)", "type": "verb" },
{ "ru": "сыр", "en": "cheese", "type": "noun" },
{ "ru": "чизбургер, булочка с сыром", "en": "cheeseburger", "type": "noun" },
{ "ru": "вишня", "en": "cherry", "type": "noun" },
{ "ru": "куриный", "en": "chicken", "type": "adjective" },
{ "ru": "шоколадный", "en": "chocolate", "type": "adjective" },
{ "ru": "столбик", "en": "column", "type": "noun" },
{ "ru": "рожок", "en": "cone", "type": "noun" },
{ "ru": "день", "en": "day", "type": "noun" },
{ "ru": "десерт", "en": "dessert", "type": "noun" },
{ "ru": "доллар", "en": "dollar ($)", "type": "noun" },
{ "ru": "яйцо", "en": "egg", "type": "noun" },
{ "ru": "сэндвич с яичным салатом", "en": "egg salad sandwich", "type": "noun" },
{ "ru": "восемнадцать", "en": "eighteen", "type": "numeral" },
{ "ru": "восемьдесят", "en": "eighty", "type": "numeral" },
{ "ru": "одиннадцать", "en": "eleven", "type": "numeral" },
{ "ru": "еще", "en": "else", "type": "adverb" },
{ "ru": "извинять", "en": "excuse", "type": "verb" },
{ "ru": "Простите?", "en": "Excuse me?", "type": "phrase" },
{ "ru": "быстрый", "en": "fast", "type": "adjective" },
{ "ru": "еда быстрого приготовления", "en": "fast food", "type": "noun" },
{ "ru": "пятнадцать", "en": "fifteen", "type": "numeral" },
{ "ru": "пятьдесят", "en": "fifty", "type": "numeral" },
{ "ru": "вставить", "en": "fill in", "type": "verb" },
{ "ru": "прекрасный", "en": "fine", "type": "adjective" },
{ "ru": "Хорошо, спасибо.", "en": "Fine, thanks.", "type": "phrase" },
{ "ru": "еда", "en": "food", "type": "noun" },
{ "ru": "сорок", "en": "forty", "type": "numeral" },
{ "ru": "четырнадцать", "en": "fourteen", "type": "numeral" },
{ "ru": "картофель фри", "en": "fries", "type": "noun" },
{ "ru": "фрукт", "en": "fruit", "type": "noun" },
{ "ru": "фруктовый салат", "en": "fruit salad", "type": "noun" },
{ "ru": "Дайте мне...", "en": "Give me ...", "type": "phrase" },
{ "ru": "идти", "en": "go", "type": "verb" },
{ "ru": "Доброе утро.", "en": "Good morning.", "type": "interjection" },
{ "ru": "Спокойной ночи.", "en": "Good night.", "type": "interjection" },
{ "ru": "иметь", "en": "have", "type": "verb" },
{ "ru": "Хорошего дня!", "en": "Have a nice day!", "type": "phrase" },
{ "ru": "помогать", "en": "help", "type": "verb" },
{ "ru": "здесь", "en": "here", "type": "adverb" },
{ "ru": "Вот возьмите.", "en": "Here it is.", "type": "phrase" },
{ "ru": "Вот возьмите.", "en": "Here you are.", "type": "phrase" },
{ "ru": "Вот возьмите.", "en": "Here you go.", "type": "phrase" },
{ "ru": "Здравствуйте.", "en": "Hi.", "type": "interjection" },
{ "ru": "как", "en": "how", "type": "adverb" },
{ "ru": "Как вы?", "en": "How are you?", "type": "phrase" },
{ "ru": "рожок мороженого", "en": "ice-cream cone", "type": "noun" },
{ "ru": "Это все?", "en": "Is that all?", "type": "phrase" },
{ "ru": "сок", "en": "juice", "type": "noun" },
{ "ru": "лист салата", "en": "lettuce", "type": "noun" },
{ "ru": "мне", "en": "me", "type": "pronoun" },
{ "ru": "меню", "en": "menu", "type": "noun" },
{ "ru": "молоко", "en": "milk", "type": "noun" },
{ "ru": "утро", "en": "morning", "type": "noun" },
{ "ru": "приятно", "en": "nice", "type": "adjective" },
{ "ru": "ночь", "en": "night", "type": "noun" },
{ "ru": "девятнадцать", "en": "nineteen", "type": "numeral" },
{ "ru": "девяносто", "en": "ninety", "type": "numeral" },
{ "ru": "Ладно.", "en": "OK.", "type": "interjection" },
{ "ru": "луковое кольцо", "en": "onion ring", "type": "noun" },
{ "ru": "апельсин", "en": "orange (n)", "type": "noun" },
{ "ru": "пирог", "en": "pie", "type": "noun" },
{ "ru": "положить", "en": "put", "type": "verb" },
{ "ru": "салат", "en": "salad", "type": "noun" },
{ "ru": "семнадцать", "en": "seventeen", "type": "numeral" },
{ "ru": "семьдесят", "en": "seventy", "type": "numeral" },
{ "ru": "коктейль", "en": "shake", "type": "noun" },
{ "ru": "гарнир", "en": "side order", "type": "noun" },
{ "ru": "шестнадцать", "en": "sixteen", "type": "numeral" },
{ "ru": "шестьдесят", "en": "sixty", "type": "numeral" },
{ "ru": "газированная вода", "en": "soda", "type": "noun" },
{ "ru": "чай", "en": "tea", "type": "noun" },
{ "ru": "Спасибо.", "en": "Thank you.", "type": "phrase" },
{ "ru": "Благодарю.", "en": "Thanks.", "type": "phrase" },
{ "ru": "Это стоит (6$)", "en": "That's ($6).", "type": "phrase" },
{ "ru": "Это все.", "en": "That's all.", "type": "phrase" },
{ "ru": "там", "en": "there", "type": "adverb" },
{ "ru": "Вот возьмите.", "en": "There you are.", "type": "phrase" },
{ "ru": "Вот возьмите.", "en": "There you go.", "type": "phrase" },
{ "ru": "эти", "en": "these", "type": "pronoun" },
{ "ru": "тринадцать", "en": "thirteen", "type": "numeral" },
{ "ru": "тридцать", "en": "thirty", "type": "numeral" },
{ "ru": "помидор", "en": "tomato", "type": "noun" },
{ "ru": "тунец", "en": "tuna", "type": "noun" },
{ "ru": "двенадцать", "en": "twelve", "type": "numeral" },
{ "ru": "двадцать", "en": "twenty", "type": "numeral" },
{ "ru": "ааа...(сомнение)", "en": "Uh ... (hesitation)", "type": "interjection" },
{ "ru": "ванильный", "en": "vanilla", "type": "adjective" },
{ "ru": "Вы можете расплатиться вон там", "en": "You can pay over there.", "type": "phrase" },
{ "ru": "Пожалуйста.", "en": "You're welcome.", "type": "phrase" },
{ "ru": "самолет", "en": "(air)plane", "type": "noun" },
{ "ru": "внизу, ниже", "en": "below", "type": "preposition" },
{ "ru": "между", "en": "between", "type": "preposition" },
{ "ru": "бинго", "en": "bingo", "type": "noun" },
{ "ru": "автобусная остановка", "en": "bus stop", "type": "noun" },
{ "ru": "машина", "en": "car", "type": "noun" },
{ "ru": "магнитофон", "en": "cassette player", "type": "noun" },
{ "ru": "СД проигрыватель", "en": "CD player", "type": "noun" },
{ "ru": "округлить", "en": "circle", "type": "verb" },
{ "ru": "закрывать", "en": "close", "type": "verb" },
{ "ru": "чашка", "en": "cup", "type": "noun" }
],
3: [
{ "ru": "самолет", "en": "(air)plane", "type": "noun" },
{ "ru": "внизу, ниже", "en": "below", "type": "preposition" },
{ "ru": "между", "en": "between", "type": "preposition" },
{ "ru": "бинго", "en": "bingo", "type": "noun" },
{ "ru": "автобусная остановка", "en": "bus stop", "type": "noun" },
{ "ru": "машина", "en": "car", "type": "noun" },
{ "ru": "магнитофон", "en": "cassette player", "type": "noun" },
{ "ru": "СД проигрыватель", "en": "CD player", "type": "noun" },
{ "ru": "округлить", "en": "circle", "type": "verb" },
{ "ru": "закрывать", "en": "close", "type": "verb" },
{ "ru": "чашка", "en": "cup", "type": "noun" },
{ "ru": "словарь", "en": "dictionary", "type": "noun" },
{ "ru": "разный, различный", "en": "different", "type": "adjective" },
{ "ru": "двигатель, мотор", "en": "engine", "type": "noun" },
{ "ru": "для, за", "en": "for", "type": "preposition" },
{ "ru": "вилка", "en": "fork", "type": "noun" },
{ "ru": "игра", "en": "game", "type": "noun" },
{ "ru": "стакан", "en": "glass", "type": "noun" },
{ "ru": "Я не знаю.", "en": "I don't know.", "type": "phrase" },
{ "ru": "остров", "en": "island", "type": "noun" },
{ "ru": "ключ", "en": "key", "type": "noun" },
{ "ru": "нож (ножи)", "en": "knife (knives)", "type": "noun" },
{ "ru": "знать", "en": "know", "type": "verb" },
{ "ru": "Мужчина (мужчины)", "en": "man (men)", "type": "noun" },
{ "ru": "мили в час", "en": "miles per hour", "type": "phrase" },
{ "ru": "Парковка запрещена.", "en": "No parking.", "type": "phrase" },
{ "ru": "существительное", "en": "noun", "type": "noun" },
{ "ru": "О, нет!", "en": "Oh, no!", "type": "interjection" },
{ "ru": "открыто", "en": "open", "type": "adjective" },
{ "ru": "или", "en": "or", "type": "conjunction" },
{ "ru": "оркестр", "en": "orchestra", "type": "noun" },
{ "ru": "вон там", "en": "over there", "type": "adverb" },
{ "ru": "часть", "en": "part", "type": "noun" },
{ "ru": "партнер", "en": "partner", "type": "noun" },
{ "ru": "пешеходный переход", "en": "PED XING (pedestrian crossing)", "type": "noun" },
{ "ru": "ручка", "en": "pen", "type": "noun" },
{ "ru": "тарелка", "en": "plate", "type": "noun" },
{ "ru": "множественный", "en": "plural", "type": "adjective" },
{ "ru": "полицейская машина", "en": "police car", "type": "noun" },
{ "ru": "предложение", "en": "sentence", "type": "noun" },
{ "ru": "единственный", "en": "singular", "type": "adjective" },
{ "ru": "громкоговоритель (механизм)", "en": "speaker (machine)", "type": "noun" },
{ "ru": "ложка", "en": "spoon", "type": "noun" },
{ "ru": "звезда", "en": "star", "type": "noun" },
{ "ru": "изучать", "en": "study", "type": "verb" },
{ "ru": "учитель", "en": "teacher", "type": "noun" },
{ "ru": "ТВ (телевизор)", "en": "TV (television)", "type": "noun" },
{ "ru": "НЛО (неопознанный летающий объект)", "en": "UFO (unidentified flying object)", "type": "noun" },
{ "ru": "зонт", "en": "umbrella", "type": "noun" },
{ "ru": "используя", "en": "using", "type": "verb" },
{ "ru": "видеомагнитофон", "en": "VCR (video cassette recorder)", "type": "noun" },
{ "ru": "наручные часы", "en": "watch", "type": "noun" },
{ "ru": "что", "en": "what", "type": "pronoun" },
{ "ru": "Что...?", "en": "What ... ?", "type": "phrase" },
{ "ru": "Что это? (во множественном числе)", "en": "What are they?", "type": "phrase" },
{ "ru": "Что это? (в единственном числе)", "en": "What is it/that?", "type": "phrase" },
{ "ru": "с", "en": "with", "type": "preposition" },
{ "ru": "женщина (женщины)", "en": "woman (women)", "type": "noun" },
{ "ru": "Да. (разг.)", "en": "Yeah.", "type": "particle" }
],
4: [
{ "ru": "быть вне", "en": "(be) out of", "type": "phrase" },
{ "ru": "(Меня) зовут...", "en": "(My) name is ...", "type": "phrase" },
{ "ru": "номер телефона", "en": "(tele)phone number", "type": "noun" },
{ "ru": ".... правильно?", "en": "... right?", "type": "phrase" },
{ "ru": "сокращение", "en": "abbreviation", "type": "noun" },
{ "ru": "о, об", "en": "about", "type": "preposition" },
{ "ru": "допустимый", "en": "acceptable", "type": "adjective" },
{ "ru": "адрес", "en": "address", "type": "noun" },
{ "ru": "снова", "en": "again", "type": "adverb" },
{ "ru": "авиалиния", "en": "airline", "type": "noun" },
{ "ru": "Алабама (штат)", "en": "Alabama", "type": "noun" },
{ "ru": "все", "en": "all", "type": "pronoun" },
{ "ru": "Хорошо.", "en": "All right.", "type": "phrase" },
{ "ru": "алфавит", "en": "alphabet", "type": "noun" },
{ "ru": "подходящий", "en": "applicable", "type": "adjective" },
{ "ru": "заявитель", "en": "applicant", "type": "noun" },
{ "ru": "обращаться за", "en": "apply", "type": "verb" },
{ "ru": "апрель", "en": "April", "type": "noun" },
{ "ru": "код области", "en": "area code", "type": "noun" },
{ "ru": "спрашивать", "en": "ask", "type": "verb" },
{ "ru": "проспект, авеню", "en": "avenue", "type": "noun" },
{ "ru": "мост", "en": "bridge", "type": "noun" },
{ "ru": "профессия", "en": "business", "type": "noun" },
{ "ru": "рядом", "en": "by", "type": "preposition" },
{ "ru": "кабель", "en": "cable", "type": "noun" },
{ "ru": "Вы не можете мне помочь?", "en": "Can you help me?", "type": "phrase" },
{ "ru": "центральный", "en": "central", "type": "adjective" },
{ "ru": "таблица", "en": "chart", "type": "noun" },
{ "ru": "гражданин", "en": "citizen", "type": "noun" },
{ "ru": "большой город", "en": "city", "type": "noun" },
{ "ru": "приходить", "en": "come", "type": "verb" },
{ "ru": "Идите сюда.", "en": "Come here.", "type": "phrase" },
{ "ru": "Пойдемте со мной.", "en": "Come with me.", "type": "phrase" },
{ "ru": "объединение", "en": "community", "type": "noun" },
{ "ru": "компактный", "en": "compact", "type": "adjective" },
{ "ru": "завершать", "en": "complete", "type": "verb" },
{ "ru": "заполненный", "en": "completed", "type": "adjective" },
{ "ru": "дата (месяц/день/год)", "en": "date (month/day/year)", "type": "noun" },
{ "ru": "дата прибытия", "en": "date of arrival", "type": "noun" },
{ "ru": "дата рождения", "en": "date of birth", "type": "noun" },
{ "ru": "дата отъезда", "en": "date of departure", "type": "noun" },
{ "ru": "отделение", "en": "department", "type": "noun" },
{ "ru": "делать", "en": "do", "type": "verb" },
{ "ru": "участник", "en": "entrant", "type": "noun" },
{ "ru": "европейский", "en": "European", "type": "adjective" },
{ "ru": "имя", "en": "first name", "type": "noun" },
{ "ru": "полет", "en": "flight", "type": "noun" },
{ "ru": "идти", "en": "go (to ...)", "type": "verb" },
{ "ru": "гость", "en": "guest", "type": "noun" },
{ "ru": "здоровье", "en": "health", "type": "noun" },
{ "ru": "ее", "en": "her", "type": "pronoun" },
{ "ru": "таким образом", "en": "hereby", "type": "adverb" },
{ "ru": "его", "en": "his", "type": "pronoun" },
{ "ru": "домашний адрес", "en": "home address", "type": "noun" },
{ "ru": "Гонконг", "en": "Hong Kong", "type": "noun" },
{ "ru": "Как вы произнесете это по буквам?", "en": "How do you spell it?", "type": "phrase" },
{ "ru": "сто", "en": "hundred", "type": "numeral" },
{ "ru": "Я потерялся.", "en": "I'm lost.", "type": "phrase" },
{ "ru": "На попечении", "en": "in care of", "type": "preposition" },
{ "ru": "информация", "en": "information", "type": "noun" },
{ "ru": "инициал", "en": "initial", "type": "noun" },
{ "ru": "чернила", "en": "ink", "type": "noun" },
{ "ru": "интеллект", "en": "intelligence", "type": "noun" },
{ "ru": "международный", "en": "international", "type": "adjective" },
{ "ru": "его", "en": "its", "type": "pronoun" },
{ "ru": "посадочный талон", "en": "landing card", "type": "noun" },
{ "ru": "фамилия", "en": "last name", "type": "noun" },
{ "ru": "раздевалка", "en": "locker room", "type": "noun" },
{ "ru": "механизм", "en": "machine", "type": "noun" },
{ "ru": "почта", "en": "mail", "type": "noun" },
{ "ru": "марафон", "en": "marathon", "type": "noun" },
{ "ru": "Мэриленд (штат)", "en": "Maryland", "type": "noun" },
{ "ru": "инициал отчества, первая буква второго имени", "en": "middle initial", "type": "noun" },
{ "ru": "мотель", "en": "motel", "type": "noun" },
{ "ru": "мистер", "en": "Mr.", "type": "noun" },
{ "ru": "миссис", "en": "Mrs.", "type": "noun" },
{ "ru": "мисс", "en": "Ms.", "type": "noun" },
{ "ru": "сеть", "en": "network", "type": "noun" },
{ "ru": "новости", "en": "news", "type": "noun" },
{ "ru": "сейчас", "en": "now", "type": "adverb" },
{ "ru": "няня", "en": "nurse", "type": "noun" },
{ "ru": "ноль", "en": "oh", "type": "numeral" },
{ "ru": "на", "en": "on", "type": "preposition" },
{ "ru": "организация", "en": "organization", "type": "noun" },
{ "ru": "другой", "en": "other", "type": "adjective" },
{ "ru": "наш", "en": "our", "type": "pronoun" },
{ "ru": "страница", "en": "page", "type": "noun" },
{ "ru": "заявка на паспорт", "en": "passport application", "type": "noun" },
{ "ru": "карандаш", "en": "pencil", "type": "noun" },
{ "ru": "Пенсильвания (штат)", "en": "Pennsylvania", "type": "noun" },
{ "ru": "Филадельфия (штат)", "en": "Philadelphia", "type": "noun" },
{ "ru": "Питсбург", "en": "Pittsburgh", "type": "noun" },
{ "ru": "место рождения", "en": "place of birth", "type": "noun" },
{ "ru": "притяжательное прилагательное", "en": "possessive adjective(s)", "type": "noun" },
{ "ru": "печатать", "en": "print", "type": "verb" },
{ "ru": "программа", "en": "program", "type": "noun" },
{ "ru": "провинция", "en": "province", "type": "noun" },
{ "ru": "коэффициент", "en": "quotient", "type": "noun" },
{ "ru": "заказной", "en": "registered", "type": "adjective" },
{ "ru": "няня на заказ", "en": "registered nurse", "type": "noun" },
{ "ru": "регистрационная карта", "en": "registration card", "type": "noun" },
{ "ru": "дорога", "en": "road", "type": "noun" },
{ "ru": "Ротчестер", "en": "Rochester", "type": "noun" },
{ "ru": "комната", "en": "room", "type": "noun" },
{ "ru": "бегун", "en": "runner", "type": "noun" },
{ "ru": "сказать", "en": "say", "type": "verb" },
{ "ru": "Извините.", "en": "Sorry.", "type": "interjection" },
{ "ru": "произносить по буквам", "en": "spell", "type": "verb" },
{ "ru": "Произнесите это по буквам, пожалуйста.", "en": "Spell it, please.", "type": "phrase" },
{ "ru": "государственный", "en": "state", "type": "noun" },
{ "ru": "студент", "en": "student", "type": "noun" },
{ "ru": "Конечно.", "en": "Sure.", "type": "adverb" },
{ "ru": "Техас (штат)", "en": "Texas", "type": "noun" },
{ "ru": "Все в порядке.", "en": "That's OK.", "type": "phrase" },
{ "ru": "Это правильно.", "en": "That's right.", "type": "phrase" },
{ "ru": "их", "en": "their", "type": "pronoun" },
{ "ru": "печатать на машинке", "en": "type", "type": "verb" },
{ "ru": "Соединенные Штаты", "en": "U.S.", "type": "noun" },
{ "ru": "Соединенное Королевство", "en": "United Kingdom", "type": "noun" },
{ "ru": "Юта (штат)", "en": "Utah", "type": "noun" },
{ "ru": "номер водительских прав", "en": "vehicle license no.", "type": "noun" },
{ "ru": "Венесуэла", "en": "Venezuela", "type": "noun" },
{ "ru": "Ну, в любом случае...", "en": "Well, anyway ...", "type": "phrase" },
{ "ru": "Как (вас) зовут?", "en": "What's (your) name?", "type": "phrase" },
{ "ru": "кто", "en": "who", "type": "pronoun" },
{ "ru": "Кто это?", "en": "Who is that?", "type": "phrase" },
{ "ru": "мир, вселенная", "en": "world", "type": "noun" },
{ "ru": "индекс", "en": "ZIP code", "type": "noun" }
],
5: [
{ "ru": "быть вне", "en": "(be) out of", "type": "phrase" },
{ "ru": "(Меня) зовут...", "en": "(My) name is ...", "type": "phrase" },
{ "ru": "номер телефона", "en": "(tele)phone number", "type": "noun" },
{ "ru": ".... правильно?", "en": "... right?", "type": "phrase" },
{ "ru": "сокращение", "en": "abbreviation", "type": "noun" },
{ "ru": "о, об", "en": "about", "type": "preposition" },
{ "ru": "допустимый", "en": "acceptable", "type": "adjective" },
{ "ru": "адрес", "en": "address", "type": "noun" },
{ "ru": "снова", "en": "again", "type": "adverb" },
{ "ru": "авиалиния", "en": "airline", "type": "noun" },
{ "ru": "Алабама (штат)", "en": "Alabama", "type": "noun" },
{ "ru": "все", "en": "all", "type": "pronoun" },
{ "ru": "Хорошо.", "en": "All right.", "type": "phrase" },
{ "ru": "алфавит", "en": "alphabet", "type": "noun" },
{ "ru": "подходящий", "en": "applicable", "type": "adjective" },
{ "ru": "заявитель", "en": "applicant", "type": "noun" },
{ "ru": "обращаться за", "en": "apply", "type": "verb" },
{ "ru": "апрель", "en": "April", "type": "noun" },
{ "ru": "код области", "en": "area code", "type": "noun" },
{ "ru": "спрашивать", "en": "ask", "type": "verb" },
{ "ru": "проспект, авеню", "en": "avenue", "type": "noun" },
{ "ru": "мост", "en": "bridge", "type": "noun" },
{ "ru": "профессия", "en": "business", "type": "noun" },
{ "ru": "рядом", "en": "by", "type": "preposition" },
{ "ru": "кабель", "en": "cable", "type": "noun" },
{ "ru": "Вы не можете мне помочь?", "en": "Can you help me?", "type": "phrase" },
{ "ru": "центральный", "en": "central", "type": "adjective" },
{ "ru": "таблица", "en": "chart", "type": "noun" },
{ "ru": "гражданин", "en": "citizen", "type": "noun" },
{ "ru": "большой город", "en": "city", "type": "noun" },
{ "ru": "приходить", "en": "come", "type": "verb" },
{ "ru": "Идите сюда.", "en": "Come here.", "type": "phrase" },
{ "ru": "Пойдемте со мной.", "en": "Come with me.", "type": "phrase" },
{ "ru": "объединение", "en": "community", "type": "noun" },
{ "ru": "компактный", "en": "compact", "type": "adjective" },
{ "ru": "завершать", "en": "complete", "type": "verb" },
{ "ru": "заполненный", "en": "completed", "type": "adjective" },
{ "ru": "дата (месяц/день/год)", "en": "date (month/day/year)", "type": "noun" },
{ "ru": "дата прибытия", "en": "date of arrival", "type": "noun" },
{ "ru": "дата рождения", "en": "date of birth", "type": "noun" },
{ "ru": "дата отъезда", "en": "date of departure", "type": "noun" },
{ "ru": "отделение", "en": "department", "type": "noun" },
{ "ru": "делать", "en": "do", "type": "verb" },
{ "ru": "участник", "en": "entrant", "type": "noun" },
{ "ru": "европейский", "en": "European", "type": "adjective" },
{ "ru": "имя", "en": "first name", "type": "noun" },
{ "ru": "полет", "en": "flight", "type": "noun" },
{ "ru": "идти", "en": "go (to ...)", "type": "verb" },
{ "ru": "гость", "en": "guest", "type": "noun" },
{ "ru": "здоровье", "en": "health", "type": "noun" },
{ "ru": "ее", "en": "her", "type": "pronoun" },
{ "ru": "таким образом", "en": "hereby", "type": "adverb" },
{ "ru": "его", "en": "his", "type": "pronoun" },
{ "ru": "домашний адрес", "en": "home address", "type": "noun" },
{ "ru": "Гонконг", "en": "Hong Kong", "type": "noun" },
{ "ru": "Как вы произнесете это по буквам?", "en": "How do you spell it?", "type": "phrase" },
{ "ru": "сто", "en": "hundred", "type": "numeral" },
{ "ru": "огромный", "en": "huge", "type": "adjective" },
{ "ru": "Я думаю...", "en": "I think ...", "type": "phrase" },
{ "ru": "Простите меня.", "en": "I'm sorry.", "type": "phrase" },
{ "ru": "Я потерялся.", "en": "I'm lost.", "type": "phrase" },
{ "ru": "удостоверение личности", "en": "ID (Identity card)", "type": "noun" },
{ "ru": "На попечении", "en": "in care of", "type": "preposition" },
{ "ru": "указатель", "en": "index", "type": "noun" },
{ "ru": "информация", "en": "information", "type": "noun" },
{ "ru": "инициал", "en": "initial", "type": "noun" },
{ "ru": "чернила", "en": "ink", "type": "noun" },
{ "ru": "интеллект", "en": "intelligence", "type": "noun" },
{ "ru": "международный", "en": "international", "type": "adjective" },
{ "ru": "Шесть часов.", "en": "It's (six o'clock).", "type": "phrase" },
{ "ru": "его", "en": "its", "type": "pronoun" },
{ "ru": "посадочный талон", "en": "landing card", "type": "noun" },
{ "ru": "Лас Вегас", "en": "Las Vegas", "type": "noun" },
{ "ru": "фамилия", "en": "last name", "type": "noun" },
{ "ru": "письмо", "en": "letter", "type": "noun" },
{ "ru": "раздевалка", "en": "locker room", "type": "noun" },
{ "ru": "Лос Анжелес", "en": "Los Angeles", "type": "noun" },
{ "ru": "механизм", "en": "machine", "type": "noun" },
{ "ru": "почта", "en": "mail", "type": "noun" },
{ "ru": "марафон", "en": "marathon", "type": "noun" },
{ "ru": "Мэриленд (штат)", "en": "Maryland", "type": "noun" },
{ "ru": "встречать", "en": "meet", "type": "verb" },
{ "ru": "инициал отчества, первая буква второго имени", "en": "middle initial", "type": "noun" },
{ "ru": "мотель", "en": "motel", "type": "noun" },
{ "ru": "мистер", "en": "Mr.", "type": "noun" },
{ "ru": "миссис", "en": "Mrs.", "type": "noun" },
{ "ru": "мисс", "en": "Ms.", "type": "noun" },
{ "ru": "рядом", "en": "near", "type": "preposition" },
{ "ru": "сеть", "en": "network", "type": "noun" },
{ "ru": "Невада (штат)", "en": "Nevada", "type": "noun" },
{ "ru": "новый", "en": "new", "type": "adjective" },
{ "ru": "новости", "en": "news", "type": "noun" },
{ "ru": "сейчас", "en": "now", "type": "adverb" },
{ "ru": "няня", "en": "nurse", "type": "noun" },
{ "ru": "ноль", "en": "oh", "type": "numeral" },
{ "ru": "О да?", "en": "Oh yeah?", "type": "phrase" },
{ "ru": "О, это великолепно!", "en": "Oh, this is great!", "type": "phrase" },
{ "ru": "на", "en": "on", "type": "preposition" },
{ "ru": "вовремя", "en": "on time", "type": "adverb" },
{ "ru": "организация", "en": "organization", "type": "noun" },
{ "ru": "другой", "en": "other", "type": "adjective" },
{ "ru": "наш", "en": "our", "type": "pronoun" },
{ "ru": "страница", "en": "page", "type": "noun" },
{ "ru": "живопись, картина", "en": "painting", "type": "noun" },
{ "ru": "стоянка автомашин", "en": "parking garage", "type": "noun" },
{ "ru": "заявка на паспорт", "en": "passport application", "type": "noun" },
{ "ru": "карандаш", "en": "pencil", "type": "noun" },
{ "ru": "Пенсильвания (штат)", "en": "Pennsylvania", "type": "noun" },
{ "ru": "Филадельфия (штат)", "en": "Philadelphia", "type": "noun" },
{ "ru": "Пикассо (художник)", "en": "Picasso", "type": "noun" },
{ "ru": "Питсбург", "en": "Pittsburgh", "type": "noun" },
{ "ru": "место рождения", "en": "place of birth", "type": "noun" },
{ "ru": "удовольствие", "en": "pleasure", "type": "noun" },
{ "ru": "притяжательное прилагательное", "en": "possessive adjective(s)", "type": "noun" },
{ "ru": "печатать", "en": "print", "type": "verb" },
{ "ru": "программа", "en": "program", "type": "noun" },
{ "ru": "провинция", "en": "province", "type": "noun" },
{ "ru": "коэффициент", "en": "quotient", "type": "noun" },
{ "ru": "читать", "en": "read", "type": "verb" },
{ "ru": "Разве?", "en": "Really?", "type": "adverb" },
{ "ru": "заказной", "en": "registered", "type": "adjective" },
{ "ru": "няня на заказ", "en": "registered nurse", "type": "noun" },
{ "ru": "регистрационная карта", "en": "registration card", "type": "noun" },
{ "ru": "регистрационный бланк", "en": "registration form", "type": "noun" },
{ "ru": "С пожеланиями,...", "en": "Regards, ...", "type": "phrase" },
{ "ru": "дорога", "en": "road", "type": "noun" },
{ "ru": "Ротчестер", "en": "Rochester", "type": "noun" },
{ "ru": "играть роль, ролевая игра", "en": "role play", "type": "noun" },
{ "ru": "комната", "en": "room", "type": "noun" },
{ "ru": "номер комнаты", "en": "room number", "type": "noun" },
{ "ru": "бегун", "en": "runner", "type": "noun" },
{ "ru": "Сан Франциско", "en": "San Francisco", "type": "noun" },
{ "ru": "сказать", "en": "say", "type": "verb" },
{ "ru": "школа", "en": "school", "type": "noun" },
{ "ru": "подпись", "en": "signature", "type": "noun" },
{ "ru": "певец, певица", "en": "singer", "type": "noun" },
{ "ru": "Извините.", "en": "Sorry.", "type": "interjection" },
{ "ru": "произносить по буквам", "en": "spell", "type": "verb" },
{ "ru": "Произнесите это по буквам, пожалуйста.", "en": "Spell it, please.", "type": "phrase" },
{ "ru": "государственный", "en": "state", "type": "noun" },
{ "ru": "рассказ", "en": "story", "type": "noun" },
{ "ru": "студент", "en": "student", "type": "noun" },
{ "ru": "чемодан", "en": "suitcase", "type": "noun" },
{ "ru": "Конечно.", "en": "Sure.", "type": "adverb" },
{ "ru": "Техас (штат)", "en": "Texas", "type": "noun" },
{ "ru": "тот же самый", "en": "the same", "type": "adjective" },
{ "ru": "их", "en": "their", "type": "pronoun" },
{ "ru": "время", "en": "time", "type": "noun" },
{ "ru": "должность", "en": "title", "type": "noun" },
{ "ru": "Токио", "en": "Tokyo", "type": "noun" },
{ "ru": "сегодня вечером", "en": "tonight", "type": "adverb" },
{ "ru": "тоже", "en": "too (also)", "type": "adverb" },
{ "ru": "транспортное управление", "en": "traffic control", "type": "noun" },
{ "ru": "печатать на машинке", "en": "type", "type": "verb" },
{ "ru": "Соединенные Штаты", "en": "U.S.", "type": "noun" },
{ "ru": "Соединенное Королевство", "en": "United Kingdom", "type": "noun" },
{ "ru": "Юта (штат)", "en": "Utah", "type": "noun" },
{ "ru": "номер водительских прав", "en": "vehicle license no.", "type": "noun" },
{ "ru": "Венесуэла", "en": "Venezuela", "type": "noun" },
{ "ru": "словарь", "en": "vocabulary", "type": "noun" },
{ "ru": "Ну,...", "en": "Well, ...", "type": "interjection" },
{ "ru": "Ну, в любом случае...", "en": "Well, anyway ...", "type": "phrase" },
{ "ru": "Который час?", "en": "What time is it?", "type": "phrase" },
{ "ru": "Как (вас) зовут?", "en": "What's (your) name?", "type": "phrase" },
{ "ru": "Где это? (во множественном числе)", "en": "Where are they?", "type": "phrase" },
{ "ru": "Где это? (в единственном числе)", "en": "Where is it?", "type": "phrase" },
{ "ru": "кто", "en": "who", "type": "pronoun" },
{ "ru": "Кто это?", "en": "Who is that?", "type": "phrase" },
{ "ru": "мир, вселенная", "en": "world", "type": "noun" },
{ "ru": "индекс", "en": "ZIP code", "type": "noun" }
],
6: [
{ "ru": "время до полудня", "en": "AM (00:00-12:00)", "type": "noun" },
{ "ru": "объявление", "en": "announcement", "type": "noun" },
{ "ru": "Эти места заняты?", "en": "Are these seats taken?", "type": "phrase" },
{ "ru": "В 5:30", "en": "at (5:30)", "type": "preposition" },
{ "ru": "сесть в поезд, трамвай, самолет.", "en": "board (v)", "type": "verb" },
{ "ru": "кафетерий, кафе-закусочная", "en": "cafeteria", "type": "noun" },
{ "ru": "отправляться", "en": "depart", "type": "verb" },
{ "ru": "отъезд", "en": "departure", "type": "noun" },
{ "ru": "пункт назначения", "en": "destination", "type": "noun" },
{ "ru": "дверь", "en": "door", "type": "noun" },
{ "ru": "каждый", "en": "each", "type": "pronoun" },
{ "ru": "плата проезд", "en": "fare", "type": "noun" },
{ "ru": "свободный", "en": "free", "type": "adjective" },
{ "ru": "магазин подарков", "en": "gift shop", "type": "noun" },
{ "ru": "Сколько стоит/стоят...?", "en": "How much is/are ... ?", "type": "phrase" },
{ "ru": "не в своей очереди", "en": "in (the wrong) line", "type": "phrase" },
{ "ru": "покидать, оставлять, уезжать", "en": "leave", "type": "verb" },
{ "ru": "Позвольте посмотреть.", "en": "Let me see.", "type": "phrase" },
{ "ru": "очередь, линия", "en": "line", "type": "noun" },
{ "ru": "газетный киоск", "en": "newsstand", "type": "noun" },
{ "ru": "следующий", "en": "next", "type": "adjective" },
{ "ru": "рядом", "en": "next to", "type": "preposition" },
{ "ru": "офис", "en": "office", "type": "noun" },
{ "ru": "на рельсовом пути (12)", "en": "on (track 12)", "type": "phrase" },
{ "ru": "в один конец (билет)", "en": "one way (ticket)", "type": "noun" },
{ "ru": "вот здесь", "en": "over here", "type": "adverb" },
{ "ru": "пассажир", "en": "passenger", "type": "noun" },
{ "ru": "платформа", "en": "platform", "type": "noun" },
{ "ru": "время после полудня", "en": "PM (12:00-24:00)", "type": "noun" },
{ "ru": "готовый", "en": "ready", "type": "adjective" },
{ "ru": "получать", "en": "receive", "type": "verb" },
{ "ru": "туда и обратно (билет)", "en": "round trip (ticket)", "type": "noun" },
{ "ru": "место (сидение)", "en": "seat", "type": "noun" },
{ "ru": "это, этот, эта", "en": "this", "type": "pronoun" },
{ "ru": "те", "en": "those", "type": "pronoun" },
{ "ru": "билет", "en": "ticket", "type": "noun" },
{ "ru": "в", "en": "to", "type": "preposition" },
{ "ru": "рельсовый путь", "en": "track", "type": "noun" },
{ "ru": "поезд", "en": "train", "type": "noun" },
{ "ru": "железнодорожная станция", "en": "train station", "type": "noun" },
{ "ru": "зал игровых автоматов", "en": "video arcade", "type": "noun" },
{ "ru": "зал ожидания", "en": "waiting room", "type": "noun" },
{ "ru": "Когда следующий поезд в...?", "en": "When is the next train to ... ?", "type": "phrase" },
{ "ru": "Где (туалет)? (во множественном числе)", "en": "Where're (the restrooms)?", "type": "phrase" },
{ "ru": "Где (киоск)? (в единственном числе)", "en": "Where's (the newsstand)?", "type": "phrase" },
{ "ru": "окно", "en": "window", "type": "noun" },
{ "ru": "змейка из слов", "en": "word snake", "type": "noun" },
{ "ru": "неправильный", "en": "wrong", "type": "adjective" },
{ "ru": "Да?", "en": "Yes?", "type": "particle" }
],
7: [
{ "ru": "... лет", "en": "... years old", "type": "phrase" },
{ "ru": "над", "en": "above", "type": "preposition" },
{ "ru": "добавлять", "en": "add", "type": "verb" },
{ "ru": "возраст", "en": "age", "type": "noun" },
{ "ru": "аэропорт", "en": "airport", "type": "noun" },
{ "ru": "алфавитный порядок", "en": "alphabetical order", "type": "noun" },
{ "ru": "американец, американский", "en": "American", "type": "noun" },
{ "ru": "космонавт", "en": "astronaut", "type": "noun" },
{ "ru": "астроном", "en": "astronomer", "type": "noun" },
{ "ru": "мяч", "en": "ball", "type": "noun" },
{ "ru": "бразилец, бразильский", "en": "Brazilian", "type": "noun" },
{ "ru": "Британец, британский", "en": "British", "type": "noun" },
{ "ru": "китаец, китайский", "en": "Chinese", "type": "noun" },
{ "ru": "компьютерный специалист, программист", "en": "computer specialist", "type": "noun" },
{ "ru": "экипаж", "en": "crew", "type": "noun" },
{ "ru": "член экипажа", "en": "crew member", "type": "noun" },
{ "ru": "офицер таможни", "en": "customs officer", "type": "noun" },
{ "ru": "директор, кинорежиссер", "en": "director", "type": "noun" },
{ "ru": "врач, доктор", "en": "doctor", "type": "noun" },
{ "ru": "собака", "en": "dog", "type": "noun" },
{ "ru": "планета Земля", "en": "Earth", "type": "noun" },
{ "ru": "инженер", "en": "engineer", "type": "noun" },
{ "ru": "факт", "en": "fact", "type": "noun" },
{ "ru": "модельер", "en": "fashion designer", "type": "noun" },
{ "ru": "француз, французский", "en": "French", "type": "noun" },
{ "ru": "угадывать", "en": "guess", "type": "verb" },
{ "ru": "родной город", "en": "hometown", "type": "noun" },
{ "ru": "Сколько лет...?", "en": "How old ... ?", "type": "phrase" },
{ "ru": "собеседование, интервью", "en": "interview", "type": "noun" },
{ "ru": "японец, японский", "en": "Japanese", "type": "noun" },
{ "ru": "профессия, работа", "en": "job", "type": "noun" },
{ "ru": "совместный", "en": "joint", "type": "adjective" },
{ "ru": "мексиканец, мексиканский", "en": "Mexican", "type": "noun" },
{ "ru": "миля", "en": "mile (≈ 1.6 km)", "type": "noun" },
{ "ru": "луна", "en": "moon", "type": "noun" },
{ "ru": "режиссер", "en": "movie director", "type": "noun" },
{ "ru": "гражданство, национальность", "en": "nationality", "type": "noun" },
{ "ru": "орбитальный", "en": "orbital", "type": "adjective" },
{ "ru": "паспорт", "en": "passport", "type": "noun" },
{ "ru": "летчик, пилот", "en": "pilot", "type": "noun" },
{ "ru": "проект", "en": "project", "type": "noun" },
{ "ru": "корреспондент, репортер", "en": "reporter", "type": "noun" },
{ "ru": "русский, россиянин", "en": "Russian", "type": "noun" },
{ "ru": "футболист", "en": "soccer player", "type": "noun" },
{ "ru": "космос", "en": "space", "type": "noun" },
{ "ru": "космический корабль", "en": "space shuttle", "type": "noun" },
{ "ru": "космическая станция", "en": "space station", "type": "noun" },
{ "ru": "испанец, испанский", "en": "Spanish", "type": "noun" },
{ "ru": "предложение", "en": "statement", "type": "noun" },
{ "ru": "теннисист", "en": "tennis player", "type": "noun" },
{ "ru": "затем", "en": "then", "type": "adverb" },
{ "ru": "тысяча", "en": "thousand", "type": "numeral" },
{ "ru": "путешествие", "en": "travel", "type": "noun" },
{ "ru": "путешественник", "en": "traveler", "type": "noun" },
{ "ru": "Какое у (нее) гражданство?", "en": "What's (her) nationality?", "type": "phrase" },
{ "ru": "Какая у (него) профессия?", "en": "What's (his) job?", "type": "phrase" },
{ "ru": "Кто...?", "en": "Who ... ?", "type": "phrase" },
{ "ru": "Кто это?", "en": "Who is it?", "type": "phrase" },
{ "ru": "год", "en": "year", "type": "noun" }
],
8: [
{ "ru": "прилагательное", "en": "adjective (adj)", "type": "noun" },
{ "ru": "австралиец, австралийский", "en": "Australian", "type": "noun" },
{ "ru": "красивый", "en": "beautiful", "type": "adjective" },
{ "ru": "большой", "en": "big", "type": "adjective" },
{ "ru": "черный", "en": "black", "type": "adjective" },
{ "ru": "синий", "en": "blue", "type": "adjective" },
{ "ru": "лодка", "en": "boat", "type": "noun" },
{ "ru": "коричневый", "en": "brown", "type": "adjective" },
{ "ru": "стул", "en": "chair", "type": "noun" },
{ "ru": "классический", "en": "classic", "type": "adjective" },
{ "ru": "колумбиец, колумбийский", "en": "Colombian", "type": "noun" },
{ "ru": "цвет", "en": "color", "type": "noun" },
{ "ru": "удобный", "en": "comfortable", "type": "adjective" },
{ "ru": "запятая", "en": "comma (,)", "type": "noun" },
{ "ru": "соревнование, конкурс", "en": "contest", "type": "noun" },
{ "ru": "кабриолет (авто с откидным верхом)", "en": "convertible", "type": "noun" },
{ "ru": "описывать", "en": "describe", "type": "verb" },
{ "ru": "голландец, голландский, нидерландец, нидерландский", "en": "Dutch", "type": "noun" },
{ "ru": "египтянин, египетский", "en": "Egyptian", "type": "noun" },
{ "ru": "восьмой", "en": "eighth", "type": "numeral" },
{ "ru": "входить", "en": "enter", "type": "verb" },
{ "ru": "дорогой (о цене)", "en": "expensive", "type": "adjective" },
{ "ru": "семейная машина", "en": "family car", "type": "noun" },
{ "ru": "пятый", "en": "fifth", "type": "numeral" },
{ "ru": "первый", "en": "first", "type": "numeral" },
{ "ru": "флаг", "en": "flag", "type": "noun" },
{ "ru": "класс", "en": "form", "type": "noun" },
{ "ru": "четвертый", "en": "fourth", "type": "numeral" },
{ "ru": "немец, немецкий", "en": "German", "type": "noun" },
{ "ru": "давать", "en": "give", "type": "verb" },
{ "ru": "распродажа", "en": "giveaway", "type": "noun" },
{ "ru": "золотистый, золотой", "en": "gold", "type": "adjective" },
{ "ru": "Хорошие новости!", "en": "Good news!", "type": "phrase" },
{ "ru": "серый", "en": "gray", "type": "adjective" },
{ "ru": "грек, греческий", "en": "Greek", "type": "noun" },
{ "ru": "зеленый", "en": "green", "type": "adjective" },
{ "ru": "если", "en": "if", "type": "conjunction" },
{ "ru": "воображение", "en": "imagination", "type": "noun" },
{ "ru": "ирландец, ирландский", "en": "Irish", "type": "noun" },
{ "ru": "итальянец, итальянский", "en": "Italian", "type": "noun" },
{ "ru": "марка", "en": "kind (n)", "type": "noun" },
{ "ru": "кореец, корейский", "en": "Korean", "type": "noun" },
{ "ru": "роскошный", "en": "luxury", "type": "adjective" },
{ "ru": "журнал", "en": "magazine", "type": "noun" },
{ "ru": "более чем", "en": "more than", "type": "phrase" },
{ "ru": "девятый", "en": "ninth", "type": "numeral" },
{ "ru": "старый", "en": "old", "type": "adjective" },
{ "ru": "оранжевый", "en": "orange (color)", "type": "adjective" },
{ "ru": "собственный", "en": "own", "type": "adjective" },
{ "ru": "пара", "en": "pair (of ...)", "type": "noun" },
{ "ru": "розовый", "en": "pink", "type": "adjective" },
{ "ru": "приз", "en": "prize", "type": "noun" },
{ "ru": "фиолетовый", "en": "purple", "type": "adjective" },
{ "ru": "красный", "en": "red", "type": "adjective" },
{ "ru": "холодильник", "en": "refrigerator", "type": "noun" },
{ "ru": "Правильно.", "en": "Right.", "type": "adverb" },
{ "ru": "второй", "en": "second", "type": "numeral" },
{ "ru": "седан (авто с закрытым кузовом)", "en": "sedan", "type": "noun" },
{ "ru": "посылать, отправлять", "en": "send", "type": "verb" },
{ "ru": "рубашка", "en": "shirt", "type": "noun" },
{ "ru": "туфли", "en": "shoes", "type": "noun" },
{ "ru": "серебристый, серебряный", "en": "silver", "type": "adjective" },
{ "ru": "шестой", "en": "sixth", "type": "numeral" },
{ "ru": "маленький", "en": "small", "type": "adjective" },
{ "ru": "автомобиль с кузовом универсал", "en": "station wagon", "type": "noun" },
{ "ru": "солнцезащитные очки", "en": "sunglasses", "type": "noun" },
{ "ru": "свитер", "en": "sweater", "type": "noun" },
{ "ru": "швед, шведский", "en": "Swedish", "type": "noun" },
{ "ru": "швейцарец, швейцарский", "en": "Swiss", "type": "noun" },
{ "ru": "чайная чашка", "en": "teacup", "type": "noun" },
{ "ru": "десятый", "en": "tenth", "type": "numeral" },
{ "ru": "вещь", "en": "thing(s)", "type": "noun" },
{ "ru": "третий", "en": "third", "type": "numeral" },
{ "ru": "галстук", "en": "tie", "type": "noun" },
{ "ru": "вместе", "en": "together", "type": "adverb" },
{ "ru": "грузовик", "en": "truck", "type": "noun" },
{ "ru": "правда", "en": "true", "type": "adjective" },
{ "ru": "турок, турецкий", "en": "Turkish", "type": "noun" },
{ "ru": "фургон", "en": "van", "type": "noun" },
{ "ru": "конец недели", "en": "weekend", "type": "noun" },
{ "ru": "Какой они?", "en": "What are they like?", "type": "phrase" },
{ "ru": "Какого они цвета?", "en": "What color are they?", "type": "phrase" },
{ "ru": "Какого это цвета?", "en": "What color is it?", "type": "phrase" },
{ "ru": "Какой это?", "en": "What is it like?", "type": "phrase" },
{ "ru": "Какой они марки?", "en": "What kind are they?", "type": "phrase" },
{ "ru": "Какой это марки?", "en": "What kind is it?", "type": "phrase" },
{ "ru": "белый", "en": "white", "type": "adjective" },
{ "ru": "победитель", "en": "winner", "type": "noun" },
{ "ru": "стоящий", "en": "worth", "type": "adjective" },
{ "ru": "желтый", "en": "yellow", "type": "adjective" }
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

    // Убираем точки, вопросительные,
    // восклицательные знаки и многоточия
    .replace(/[.!?]+/g, "")

    // Убираем лишние пробелы
    .replace(/\s+/g, " ");
}


function isAnswerCorrect(userAnswer, correctAnswer) {

  const user =
    normalizeAnswer(userAnswer);

  const correct =
    normalizeAnswer(correctAnswer);


  // =====================================
  // 1. Полное совпадение
  // =====================================

  if (user === correct) {
    return true;
  }


  // =====================================
  // 2. Содержимое в скобках НЕОБЯЗАТЕЛЬНО
  //
  // (tele)phone
  //
  // telephone ✅
  // phone     ✅
  // =====================================

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


  // =====================================
  // 3. Убираем только скобки,
  //    но оставляем текст внутри
  //
  // (tele)phone → telephone
  // =====================================

  const withoutBrackets =
    normalizeAnswer(
      correct.replace(/[()]/g, "")
    );

  if (user === withoutBrackets) {
    return true;
  }


  return false;
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