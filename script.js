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

1: [
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
  { ru: "пища", en: "pizza", type: "noun" },
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
  { ru: "кассета", en: "tape", type: "noun" },
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

  2: [
    { ru: "ответ", en: "answer", type: "noun" },
    { ru: "спрашивать", en: "ask", type: "verb" },
    { ru: "другой", en: "other", type: "adjective" }
  ],

  3: [
    { ru: "адрес", en: "address", type: "noun" },
    { ru: "комната", en: "room", type: "noun" },
    { ru: "печатать", en: "print", type: "verb" }
  ],

  4: [
    { ru: "пассажир", en: "passenger", type: "noun" },
    { ru: "платформа", en: "platform", type: "noun" },
    { ru: "пункт назначения", en: "destination", type: "noun" },
    { ru: "отправление", en: "departure", type: "noun" },
    { ru: "билет", en: "ticket", type: "noun" }
  ],

  5: [
    { ru: "Австралия", en: "Australia", type: "noun" },
    { ru: "восемь", en: "eight", type: "other" }
  ]

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
// СОЗДАНИЕ UNIT
// ==============================

function renderUnits() {

  unitGrid.innerHTML = "";

  Object.keys(units).forEach(unitNumber => {

    const button =
      document.createElement("button");

    button.className = "unit-card";

    button.innerHTML = `

      <span class="unit-number">
        ENGLISH
      </span>

      <span class="unit-name">
        Unit ${unitNumber}
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
    `В этом Unit ${count} ${
      count === 1
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
// НАЧАТЬ ТРЕНИРОВКУ
// ==============================

function startTrainer() {

  closeStartModal();

  // Берём слова выбранного Unit
  cards = [
    ...units[selectedUnit]
  ];

  // Перемешиваем
  cards.sort(
    () => Math.random() - 0.5
  );

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


  // Перевод на обратной стороне
  backTranslation.textContent =
    card.ru;


  // Тип слова
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


  // Очищаем сообщение
  feedback.textContent = "";

  feedback.className =
    "feedback";


  // Возвращаем стандартную надпись
  resultLabel.textContent =
    "✓ ПРАВИЛЬНО";


  // Очищаем ответ пользователя
  userAnswerShown.textContent =
    "";


  // Прячем кнопку Далее
  nextBtn.classList.add(
    "hidden"
  );


  // Очищаем поле
  answerInput.value = "";


  // Показываем форму
  answerForm.classList.remove(
    "hidden"
  );



    // Фокус автоматически только на компьютере.
  // На телефоне клавиатура открывается только после
  // нажатия пользователя на поле.
  if (!window.matchMedia("(max-width: 750px)").matches) {

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


  // Если уже проверяем —
  // ничего не делаем
  if (locked) {
    return;
  }


  const userAnswer =
    answerInput.value.trim();

  const correctAnswer =
    cards[currentIndex]
      .en
      .trim();


  // Ничего не написано
  if (!userAnswer) {
    return;
  }


  // ==========================
  // ПРАВИЛЬНО
  // ==========================

  if (
    userAnswer.toLowerCase() ===
    correctAnswer.toLowerCase()
  ) {

    locked = true;

    score++;

    scoreEl.textContent =
      score;


    feedback.textContent =
      "✓ Правильно!";

    feedback.className =
      "feedback correct";


    // Показываем правильный ответ
    englishWord.textContent =
      correctAnswer;


    // Показываем то,
    // что написал пользователь
    userAnswerShown.textContent =
      `Ты написал: ${userAnswer}`;


    resultLabel.textContent =
      "✓ ПРАВИЛЬНО";


    // Переворот
    flashcard.classList.add(
      "flipped"
    );


    // Полный прогресс
    progressFill.style.width =
      `${((currentIndex + 1) / cards.length) * 100}%`;


    // Через 0.9 секунды дальше
    setTimeout(() => {

      nextCard();

    }, 900);

  }


  // ==========================
  // ОШИБКА
  // ==========================

  else {

    locked = true;


    feedback.textContent =
      "✕ Неправильно";

    feedback.className =
      "feedback wrong";


    // Правильный ответ
    englishWord.textContent =
      correctAnswer;


    // Ответ пользователя
    userAnswerShown.textContent =
      `Ты написал: ${userAnswer}`;


    // Надпись
    resultLabel.textContent =
      "✕ НЕПРАВИЛЬНО";


    // Переворачиваем
    flashcard.classList.add(
      "flipped"
    );


    // Показываем Далее
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


  // Если карточки закончились
  if (
    currentIndex >=
    cards.length
  ) {

    finishTrainer();

    return;

  }


  // Показываем следующую
  showCard();

}


// ==============================
// ЗАВЕРШЕНИЕ UNIT
// ==============================

function finishTrainer() {

  answerForm.classList.add("hidden");

  flashcard.classList.add("hidden");

  typeLabel.classList.add("hidden");

  nextBtn.classList.add("hidden");


  // Считаем процент
  const percentage =
    Math.round(
      (score / cards.length) * 100
    );


  let title;
  let message;


  // =========================
  // ОЦЕНКА
  // =========================

  if (percentage >= 90) {

    title = "🔥 Отлично!";

    message =
      "Ты очень хорошо знаешь эти слова!";

  }

  else if (percentage >= 70) {

    title = "👍 Хорошо!";

    message =
      "Почти всё знаешь. Ещё немного практики — и будет отлично!";

  }

  else if (percentage >= 50) {

    title = "🙂 Неплохо!";

    message =
      "Основу уже знаешь, но некоторые слова стоит повторить.";

  }

  else {

    title = "📚 Нужно повторить";

    message =
      "Пока запомнилось мало слов. Повтори Unit и попробуй ещё раз.";

  }


  // Заголовок
  finishTitle.textContent =
    title;


  // Статистика
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


  // Показываем экран
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


// Проверить ответ
answerForm.addEventListener(
  "submit",
  checkAnswer
);


// Назад
backBtn.addEventListener(
  "click",
  backToUnits
);


// Назад после завершения
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

    // Защита от двойного нажатия
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
// ПРИ НАЖАТИИ ВНЕ ОКНА
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