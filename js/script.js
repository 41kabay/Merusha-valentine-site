/********************************************************
 * 1) ПАРОЛЬ
 ********************************************************/
function checkPassword() {
  // Укажите желаемый пароль
  const CORRECT_PASSWORD = "secret123";

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

// По умолчанию выбираем английский
let selectedLanguage = 'en';

// Эта функция вызывается при нажатии кнопок EN / RU
function setLanguage(lang) {
  selectedLanguage = lang;

  // Объект перевода для каждой страницы
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
        title: "Станешь моей Валентинкой?",
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
        subtitle: "Я так счастлив(а), что ты согласилась!",
        next: "Дальше"
      }
    },
    thanks2: {
      en: {
        title: "Thank you for being my girlfriend!",
        subtitle: "I cherish every moment with you!"
      },
      ru: {
        title: "Спасибо, что стала моей девушкой!",
        subtitle: "Я ценю каждое мгновение, проведённое с тобой!"
      }
    }
  };

  if (!translations[currentPage]) return;
  const t = translations[currentPage][lang];

  switch (currentPage) {
    case 'index':
      document.getElementById("title-login").textContent = t.titleLogin;
      document.getElementById("password").placeholder = t.placeholder;
      document.getElementById("login-btn").textContent = t.submit;
      // Если была ошибка при другом языке, очистим/переведём её
      let errorMsg = document.getElementById("error-msg");
      if (errorMsg) {
        errorMsg.textContent = "";
      }
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
      break;
  }
}
