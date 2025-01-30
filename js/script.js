/********************************************************
 * 1) ПРОВЕРКА ПАРОЛЯ
 ********************************************************/
function checkPassword() {
  // Пароль, который нужно ввести
  const CORRECT_PASSWORD = "03032004";

  let pass = document.getElementById("password").value;
  let errorMsg = document.getElementById("error-msg");

  if (pass === CORRECT_PASSWORD) {
    // Если пароль верен, переходим на страницу question.html
    window.location.href = "question.html";
  } else {
    // Неверный пароль
    errorMsg.textContent = (selectedLanguage === 'ru')
      ? "Неправильный пароль!"
      : "Invalid password!";
  }
}

/********************************************************
 * 2) ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
 ********************************************************/

// По умолчанию - английский
let selectedLanguage = 'en';

function setLanguage(lang) {
  selectedLanguage = lang;

  // Все переводы для каждой страницы
  const translations = {
    index: {
      en: {
        titleLogin: "Enter the secret password",
        placeholder: "Password",
        submit: "Submit",
        error: "Invalid password!"
      },
      ru: {
        titleLogin: "Введите секретный пароль",
        placeholder: "Пароль",
        submit: "Отправить",
        error: "Неправильный пароль!"
      }
    },
    question: {
      en: {
        title: "Will you be my valentine?",
        yes: "Yes",
        no: "No"
      },
      ru: {
        title: "Ты будешь моей Валентинкой?",
        yes: "Да",
        no: "Нет"
      }
    },
    thanks: {
      en: {
        title: "Thank you!",
        subtitle: "I'm so happy you said yes!",
        next: "Next"
      },
      ru: {
        title: "Спасибо!",
        subtitle: "Я очень рад, что ты согласилась!",
        next: "Дальше"
      }
    },
    thanks2: {
      en: {
        title: "Thank you for being my girlfriend!",
        subtitle: "I cherish every moment with you!"
      },
      ru: {
        title: "Спасибо тебе за то, что ты моя девушка!",
        subtitle: "Я дорожу каждым мгновением с тобой!"
      }
    },
    collage: {
      en: {
        title: "Our Memories"
      },
      ru: {
        title: "Наши воспоминания"
      }
    },
    letters: {
      en: {
        title: "My Letters to You",
        subtitle1: "Thank you letter",
        text1: "Thank you for being in my life.",
        subtitle2: "When I miss you",
        text2: "Another letter sharing my feelings when we're apart...",
        subtitle3: "Our Future",
        text3: "Some dreams and plans for our wonderful future together..."
      },
      ru: {
        title: "Мои письма для тебя",
        subtitle1: "Письмо благодарности",
        text1: "Спасибо за то, что ты есть в моей жизни...",
        subtitle2: "Когда я скучаю по тебе",
        text2: "Другое письмо, в котором делюсь чувствами, когда мы в разлуке...",
        subtitle3: "Наше будущее",
        text3: "Пару мечтаний и планов о нашем прекрасном общем будущем..."
      }
    }
  };

  if (!translations[currentPage]) return; // если не описан в объекте, выходим
  const t = translations[currentPage][lang];

  switch (currentPage) {
    case 'index':
      document.getElementById("title-login").textContent = t.titleLogin;
      document.getElementById("password").placeholder = t.placeholder;
      document.getElementById("login-btn").textContent = t.submit;
      // Ошибку (если была) обнулим
      let errorMsg = document.getElementById("error-msg");
      if (errorMsg) errorMsg.textContent = "";
      break;

    case 'question':
      document.getElementById("title-question").textContent = t.title;
      document.getElementById("yes-btn").textContent = t.yes;
      document.getElementById("no-btn").textContent = t.no;
      break;

    case 'thanks':
      document.getElementById("title-thanks").textContent = t.title;
      document.getElementById("subtitle-thanks").textContent = t.subtitle;
      document.getElementById("next-btn").textContent = t.next;
      break;

    case 'thanks2':
      document.getElementById("title-thanks2").textContent = t.title;
      document.getElementById("subtitle-thanks2").textContent = t.subtitle;
      // кнопка музыки можете вручную отредактировать
      break;

    case 'collage':
      document.getElementById("title-collage").textContent = t.title;
      break;

    case 'letters':
      document.getElementById("title-letters").textContent = t.title;
      document.getElementById("letters-subtitle1").textContent = t.subtitle1;
      document.getElementById("letters-text1").textContent = t.text1;
      document.getElementById("letters-subtitle2").textContent = t.subtitle2;
      document.getElementById("letters-text2").textContent = t.text2;
      document.getElementById("letters-subtitle3").textContent = t.subtitle3;
      document.getElementById("letters-text3").textContent = t.text3;
      break;
  }
}
const bars = document.querySelectorAll('.bar');

function updateVisualizer() {
  let volume = Math.random() * 20 + 10;
  bars.forEach(bar => {
    bar.style.height = `${volume}px`;
  });
}

setInterval(updateVisualizer, 200);
setInterval(() => {
  let petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 5000);
}, 300);
document.getElementById("no-btn").addEventListener("mouseover", function() {
  let x = Math.random() * (window.innerWidth - this.offsetWidth);
  let y = Math.random() * (window.innerHeight - this.offsetHeight);
  this.style.position = "absolute";
  this.style.left = `${x}px`;
  this.style.top = `${y}px`;
});
document.getElementById("yes-btn").addEventListener("click", (e) => {
  for (let i = 0; i < 10; i++) {
    let star = document.createElement("div");
    star.classList.add("star");
    star.style.left = `${e.clientX + Math.random() * 50 - 25}px`;
    star.style.top = `${e.clientY + Math.random() * 50 - 25}px`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 1000);
  }
});
function showMessage() {
  document.getElementById("hidden-message").style.display = "block";
}
const compliments = [
  "Ты самая красивая 💖",
  "Ты делаешь меня счастливым 😊",
  "Солнышко ☀️",
  "У тебя самая милая улыбка 😍",
  "Я тебя люблю 💕",
  "Мне повезло, что ты есть в моей жизни! ❤️",
  "Когда ты улыбаешься, весь мир становится прекраснее! 😊",
  "Я не могу оторвать от тебя взгляд… Ты прекрасна! 💃"
];


setInterval(() => {
  let compliment = document.createElement("div");
  compliment.classList.add("compliment");
  compliment.textContent = compliments[Math.floor(Math.random() * compliments.length)];
  compliment.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(compliment);
  setTimeout(() => compliment.remove(), 5000);
}, 3000);
// Функция для создания падающих эмодзи
setInterval(() => {
  let emoji = document.createElement("div");
  emoji.classList.add("falling-emoji");

  // Список эмодзи (можно заменить на другие)
  const emojis = ["🍆", "💦", "😏", "🔥"];
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

  // Рандомное расположение по ширине
  emoji.style.left = Math.random() * 100 + "vw";

  // Добавляем случайное время анимации, чтобы они падали с разной скоростью
  emoji.style.animationDuration = Math.random() * 3 + 2 + "s";

  document.body.appendChild(emoji);

  // Удаляем через 5 секунд, чтобы не загружать страницу
  setTimeout(() => emoji.remove(), 5000);
}, 500);
document.addEventListener("mousemove", (e) => {
  document.body.style.backgroundPositionX = -e.clientX / 50 + "px";
  document.body.style.backgroundPositionY = -e.clientY / 50 + "px";
});
document.getElementById("no-btn").addEventListener("mouseover", function () {
  let x = Math.random() * (window.innerWidth - this.offsetWidth);
  let y = Math.random() * (window.innerHeight - this.offsetHeight);

  this.style.position = "absolute";
  this.style.left = `${x}px`;
  this.style.top = `${y}px`;
});

// Блокируем клик
document.getElementById("no-btn").addEventListener("click", function (event) {
  event.preventDefault();
  event.stopPropagation();
});

