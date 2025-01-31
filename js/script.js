document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded successfully!");

  /********************************************************
   * 1) ПРОВЕРКА ПАРОЛЯ
   ********************************************************/
  function checkPassword() {
    const CORRECT_PASSWORD = "03032004"; // Убедись, что пароль правильный
    let pass = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");

    if (pass === CORRECT_PASSWORD) {
      window.location.href = "question.html"; // Переход на следующий экран
    } else {
      errorMsg.textContent = "Неправильный пароль!";
      errorMsg.style.color = "red";
    }
  }

  // Назначаем обработчик клика на кнопку "Submit"
  let loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", checkPassword);
  }

  /********************************************************
   * 2) ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА
   ********************************************************/
  let selectedLanguage = 'en';

  function setLanguage(lang) {
    selectedLanguage = lang;
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
      }
    };

    if (!translations[currentPage]) return;
    const t = translations[currentPage][lang];

    document.getElementById("title-login").textContent = t.titleLogin;
    document.getElementById("password").placeholder = t.placeholder;
    document.getElementById("login-btn").textContent = t.submit;
    document.getElementById("error-msg").textContent = "";
  }

  /********************************************************
   * 3) КНОПКА "NO" (ЧТОБЫ НЕ ИСЧЕЗАЛА И УБЕГАЛА ПРАВИЛЬНО)
   ********************************************************/
  let noBtn = document.getElementById("no-btn");
  let yesBtn = document.getElementById("yes-btn");

  if (noBtn) {
    noBtn.addEventListener("mouseover", function () {
      let buttonWidth = noBtn.offsetWidth;
      let buttonHeight = noBtn.offsetHeight;

      let yesBtnRect = yesBtn.getBoundingClientRect(); // Координаты кнопки "YES"

      // Границы экрана
      let maxX = window.innerWidth - buttonWidth - 20; // Отступ 20px от края
      let maxY = window.innerHeight - buttonHeight - 20;

      let newX, newY;

      do {
        newX = Math.max(20, Math.random() * maxX);
        newY = Math.max(20, Math.random() * maxY);
      } while (
        newX + buttonWidth > yesBtnRect.left &&
        newX < yesBtnRect.right &&
        newY + buttonHeight > yesBtnRect.top &&
        newY < yesBtnRect.bottom
      ); // Убеждаемся, что кнопка "NO" не наложится на "YES"

      noBtn.style.position = "absolute";
      noBtn.style.left = `${newX}px`;
      noBtn.style.top = `${newY}px`;
    });

    // Блокируем клик по "NO"
    noBtn.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();
    });
  }

  /********************************************************
   * 4) ПАДАЮЩИЕ КОМПЛИМЕНТЫ
   ********************************************************/
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

  /********************************************************
   * 5) ПАДАЮЩИЕ ЭМОДЗИ
   ********************************************************/
  setInterval(() => {
    let emoji = document.createElement("div");
    emoji.classList.add("falling-emoji");
    const emojis = ["🍆", "💦", "😏", "🔥"];
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + "vw";
    emoji.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 5000);
  }, 500);

  /********************************************************
   * 6) ПАРАЛЛАКС-ЭФФЕКТ ФОНА
   ********************************************************/
  document.addEventListener("mousemove", (e) => {
    document.body.style.backgroundPositionX = -e.clientX / 50 + "px";
    document.body.style.backgroundPositionY = -e.clientY / 50 + "px";
  });

  /********************************************************
   * 7) АНИМАЦИЯ КНОПКИ "YES"
   ********************************************************/
  if (yesBtn) {
    yesBtn.addEventListener("click", (e) => {
      for (let i = 0; i < 10; i++) {
        let star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${e.clientX + Math.random() * 50 - 25}px`;
        star.style.top = `${e.clientY + Math.random() * 50 - 25}px`;
        document.body.appendChild(star);
        setTimeout(() => star.remove(), 1000);
      }
    });
  }

  /********************************************************
   * 8) ПОКАЗ СЕКРЕТНОГО СООБЩЕНИЯ
   ********************************************************/
  function showMessage() {
    document.getElementById("hidden-message").style.display = "block";
  }

  let messageBtn = document.getElementById("message-btn");
  if (messageBtn) {
    messageBtn.addEventListener("click", showMessage);
  }
});
