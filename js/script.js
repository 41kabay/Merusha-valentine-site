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
