// js/auth.js
const RN_TARGET = window.location.origin + '/passenger-search.html';
const RN_RESET_DONE = window.location.origin + '/reset-done.html';

// --- Базовые функции ---
async function rnSignUp(email, password) {
  const { data, error } = await sb.auth.signUp({ email, password });
  if (error) throw error;
  // если в проекте включено подтверждение почты — логина не будет, пока юзер не подтвердит
  return data;
}

async function rnSignIn(email, password) {
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return data;
}

async function rnSignOut() {
  await sb.auth.signOut();
  localStorage.removeItem('sb_session');
}

async function rnGetSession() {
  const { data: { session }, error } = await sb.auth.getSession();
  if (error) throw error;
  return session;
}

async function rnEnsureAuth(redirectTo = '/signup-login.html') {
  const session = await rnGetSession();
  if (!session) window.location.href = redirectTo;
  return session;
}

// --- Обработка возврата с OAuth/маг.ссылки ---
async function rnHandleSupabaseRedirect(redirectAfter = RN_TARGET) {
  const hash = window.location.hash || '';
  // после OAuth Supabase кладёт токены в hash
  if (hash.includes('access_token=')) {
    const { data: { session }, error } = await sb.auth.getSession();
    if (!error && session) {
      localStorage.setItem('sb_session', JSON.stringify(session));
      window.location.replace(redirectAfter);
      return true;
    }
  }
  return false;
}

// --- Умный логин по паролю с понятными ошибками ---
async function rnSmartSignIn(email, password, redirectTo = RN_TARGET) {
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) {
    const msg = (error.message || '').toLowerCase();
    if (msg.includes('invalid login credentials')) {
      alert('Неверный e-mail или пароль, либо e-mail не подтверждён.');
      return;
    }
    if (msg.includes('email not confirmed')) {
      alert('Подтверди e-mail и попробуй снова.');
      return;
    }
    alert('Ошибка входа: ' + error.message);
    return;
  }
  localStorage.setItem('sb_session', JSON.stringify(data.session));
  window.location.href = redirectTo;
}

// --- Запуск OAuth (Google/Apple) ---
async function rnStartOAuth(provider, redirectTo = RN_TARGET) {
  const { error } = await sb.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: window.location.origin + redirectTo,
      scopes: provider === 'apple' ? 'name email' : undefined
    }
  });
  if (error) console.error('[OAuth]', error);
}

// --- Сброс пароля ---
async function rnResetPassword(email) {
  const { data, error } = await sb.auth.resetPasswordForEmail(email, {
    redirectTo: RN_RESET_DONE
  });
  if (error) throw error;
  return data;
}

// --- Авторедирект, если уже залогинен ---
async function rnRedirectIfAuthed(redirectTo = RN_TARGET) {
  const session = await rnGetSession();
  if (session?.user) window.location.href = redirectTo;
}

function ensureLegacyBridge(){
  if (window.I18N && !window.RN_I18N) {
    window.RN_I18N = {
      set: lang => window.I18N.setLang(lang),
      get: () => localStorage.getItem(window.I18N.LS_KEY) || 'ru',
      apply: () => {},
      dict: {}
    };
  }
}

ensureLegacyBridge();
if (!window.RN_I18N) {
  window.addEventListener('i18n:changed', function legacyBridgeHandler(){
    ensureLegacyBridge();
    if (window.RN_I18N) window.removeEventListener('i18n:changed', legacyBridgeHandler);
  });
}
