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
    { ru: "ответ", en: "answer", type: "noun" },
    { ru: "спрашивать", en: "ask", type: "verb" },
    { ru: "другой", en: "other", type: "adjective" }
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