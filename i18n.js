// /js/i18n.js
(function () {
  const DICT = {
    ru: {
  register_title: "Регистрация"
  ,role_passenger: "Пассажир"
  ,role_driver: "Водитель"
  ,upload_photo: "Загрузить фото"
  ,full_name: "ФИО"
  ,phone: "Телефон"
  ,password: "Пароль"
  ,password_confirm: "Повторите пароль"
  ,birthdate: "Дата рождения"
  ,city: "Город"
  ,gender: "Пол"
  ,male: "Мужской"
  ,female: "Женский"
  ,terms_switch: "Я принимаю условия и политику"
  ,create_account: "Создать аккаунт"
  ,have_account: "Уже есть аккаунт?"
  ,go_login_link: "Войти"
  ,pass_mismatch: "Пароли не совпадают"
  ,pass_short: "Пароль слишком короткий"
  ,required_fields: "Заполните все обязательные поля"
  ,email_invalid: "Некорректный email"
  ,user_exists: "Пользователь уже зарегистрирован"
  ,reg_error: "Ошибка регистрации. Попробуйте позже."
  ,profile_error: "Ошибка сохранения профиля. Аккаунт создан.",
    login_title: "Вход",
      login_with_google: "Войти через Google",
      login_with_apple: "Войти через Apple",
      or_email: "или по email",
      email_ph: "email@example.com",
      password_ph: "Пароль",
      remember_me: "Запомнить меня",
      forgot: "Забыли пароль?",
      login_cta: "Войти",
      terms_text: 'Нажимая «Войти», вы принимаете <a href="#" id="termsLink">Условия</a> и <a href="#" id="policyLink">Политику</a>.',
      no_acc: "Нет аккаунта?",
      create: "Создать",
      redir_title_connect: "Подключаем аккаунт…",
      redir_text_connect: "Готовим ваш профиль и синхронизацию c RideNow.",
      redir_title_google: "Открываем Google…",
      redir_text_google: "Подключаем аккаунт Google и настраиваем доступ к RideNow.",
      redir_title_apple: "Открываем Apple…",
      redir_text_apple: "Подключаем Apple ID и настраиваем доступ к RideNow.",
      redir_left: "Осталось",
      redir_sec: "сек"
      ,restore_title: "Восстановление пароля"
      ,restore_hint: "Укажите e-mail — отправим ссылку для смены пароля."
      ,send_link: "Отправить ссылку"
      ,back_to_login: "Назад ко входу"
      ,reset_title: "Смена пароля"
      ,link_invalid: "Ссылка недействительна или истекла."
      ,ask_new_link: "Запросить новую ссылку"
      ,new_pass: "Новый пароль"
      ,pass_rules: "Минимум 8 символов"
      ,confirm_pass: "Повторите пароль"
      ,show: "Показать"
      ,hide: "Скрыть"
      ,change_pass: "Сменить пароль"
      ,back_to_login_short: "Войти"
      ,done_title: "Пароль успешно изменён!"
      ,done_desc: "Теперь вы можете войти или перейти в профиль."
      ,go_profile: "В профиль"
      ,go_login: "Войти"
    },
    uk: {
    // ...existing code...
      register_title: "Реєстрація",
      role_passenger: "Пасажир",
      role_driver: "Водій",
      upload_photo: "Завантажити фото",
      full_name: "ПІБ",
      phone: "Телефон",
      password: "Пароль",
      password_confirm: "Повторіть пароль",
      birthdate: "Дата народження",
      city: "Місто",
      gender: "Стать",
      male: "Чоловіча",
      female: "Жіноча",
      terms_switch: "Я приймаю умови та політику",
      create_account: "Створити акаунт",
      have_account: "Вже є акаунт?",
      go_login_link: "Увійти",
      pass_mismatch: "Паролі не співпадають",
      pass_short: "Пароль занадто короткий",
      required_fields: "Заповніть всі обов'язкові поля",
      email_invalid: "Некоректний email",
      user_exists: "Користувач вже зареєстрований",
      reg_error: "Помилка реєстрації. Спробуйте пізніше.",
      profile_error: "Помилка збереження профілю. Акаунт створено.",
      login_with_google: "Увійти через Google",
      login_with_apple: "Увійти через Apple",
      or_email: "або за email",
      email_ph: "email@example.com",
      password_ph: "Пароль",
      remember_me: "Запам’ятати мене",
      forgot: "Забули пароль?",
      login_cta: "Увійти",
      terms_text: 'Натискаючи «Увійти», ви приймаєте <a href="#" id="termsLink">Умови</a> та <a href="#" id="policyLink">Політику</a>.',
      no_acc: "Немає акаунта?",
      create: "Створити",
      redir_title_connect: "Підключаємо акаунт…",
      redir_text_connect: "Готуємо ваш профіль і синхронізацію з RideNow.",
      redir_title_google: "Відкриваємо Google…",
      redir_text_google: "Підключаємо акаунт Google та налаштовуємо доступ до RideNow.",
      redir_title_apple: "Відкриваємо Apple…",
      redir_text_apple: "Підключаємо Apple ID та налаштовуємо доступ до RideNow.",
      redir_left: "Залишилось",
      redir_sec: "сек"
      ,restore_title: "Відновлення пароля"
      ,restore_hint: "Вкажіть e-mail — надішлемо посилання для зміни пароля."
      ,send_link: "Надіслати посилання"
      ,back_to_login: "Назад до входу"
      ,reset_title: "Зміна пароля"
      ,link_invalid: "Посилання недійсне або закінчилось."
      ,ask_new_link: "Запросити нове посилання"
      ,new_pass: "Новий пароль"
      ,pass_rules: "Мінімум 8 символів"
      ,confirm_pass: "Повторіть пароль"
      ,show: "Показати"
      ,hide: "Сховати"
      ,change_pass: "Змінити пароль"
      ,back_to_login_short: "Увійти"
      ,done_title: "Пароль успішно змінено!"
      ,done_desc: "Тепер ви можете увійти або перейти в профіль."
      ,go_profile: "До профілю"
      ,go_login: "Увійти"
    },
    en: {
        // ...existing code...
      gender: "Gender",
      male: "Male",
      female: "Female",
      terms_switch: "I accept the terms and privacy policy",
      create_account: "Create account",
      have_account: "Already have an account?",
      go_login_link: "Sign in",
      pass_mismatch: "Passwords do not match",
      pass_short: "Password is too short",
      required_fields: "Please fill all required fields",
      email_invalid: "Invalid email",
      user_exists: "User already registered",
      reg_error: "Registration error. Please try again later.",
      profile_error: "Profile save error. Account created.",
      login_with_google: "Continue with Google",
      login_with_apple: "Continue with Apple",
      or_email: "or by email",
      email_ph: "email@example.com",
      password_ph: "Password",
      remember_me: "Remember me",
      forgot: "Forgot password?",
      login_cta: "Sign in",
      terms_text: 'By clicking “Sign in” you accept our <a href="#" id="termsLink">Terms</a> and <a href="#" id="policyLink">Privacy</a>.',
      no_acc: "No account?",
      create: "Create",
      redir_title_connect: "Connecting your account…",
      redir_text_connect: "Preparing your profile and syncing with RideNow.",
      redir_title_google: "Opening Google…",
      redir_text_google: "Connecting your Google account and configuring access to RideNow.",
      redir_title_apple: "Opening Apple…",
      redir_text_apple: "Connecting Apple ID and configuring access to RideNow.",
      redir_left: "Left",
      redir_sec: "sec"
      ,restore_title: "Password reset"
      ,restore_hint: "Enter your email — we’ll send a link to reset your password."
      ,send_link: "Send link"
      ,back_to_login: "Back to login"
      ,reset_title: "Change password"
      ,link_invalid: "Link is invalid or expired."
      ,ask_new_link: "Request new link"
      ,new_pass: "New password"
      ,pass_rules: "Minimum 8 characters"
      ,confirm_pass: "Confirm password"
      ,show: "Show"
      ,hide: "Hide"
      ,change_pass: "Change password"
      ,back_to_login_short: "Sign in"
      ,done_title: "Password changed successfully!"
      ,done_desc: "You can now sign in or go to your profile."
      ,go_profile: "Go to profile"
      ,go_login: "Sign in"
    }
  };

  // внутреннее состояние
  let current = "ru";

  function applyLang(code) {
    const dict = DICT[code] || DICT.ru;
    current = code;

    // все текстовые узлы с data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (key === "terms_text") {
        // сюда приходит HTML (ссылки)
        el.innerHTML = dict[key] || "";
      } else {
        el.textContent = dict[key] || "";
      }
    });

    // плейсхолдеры
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      const key = el.getAttribute("data-i18n-ph");
      el.setAttribute("placeholder", dict[key] || "");
    });

    // aria-лейблы/подписи при необходимости можно расширить:
    // el.setAttribute('aria-label', dict['...'])

    // переключатели стилей активного языка
    document.querySelectorAll(".lang-btn").forEach(btn => {
      const on = btn.dataset.lang === code;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });

    // сохраняем выбор
    try { localStorage.setItem("ridenow_lang", code); } catch {}
    document.documentElement.lang = code;
  }

  function initI18n() {
    // начальный язык: из хранения или по умолчанию ru
    const saved = (localStorage.getItem("ridenow_lang") || "ru");
    applyLang(saved);

    // навешиваем обработчики на RU/UA/EN
    document.querySelectorAll(".lang-btn").forEach(btn => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });

    // экспортируем для других скриптов (если понадобится)
    window.RN_I18N = {
      set: applyLang,
      get: () => current,
      dict: DICT
    };
  }

  // Автоинициализация после готовности DOM
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initI18n);
  } else {
    initI18n();
  }
})();