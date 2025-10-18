// js/supa.js
// Подключи CDN до этого файла:
// <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

const SUPABASE_URL = 'https://hgpeyrkvxsqacyfmkabi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJ...'; // твой ключ

(function () {
  const supa = window.supabase || globalThis.supabase;
  if (!supa || typeof supa.createClient !== 'function') {
    console.error('Supabase SDK not loaded. Put the CDN <script> BEFORE /js/supa.js');
    return;
  }

  // создаём клиента в глобале window.sb
  window.sb = supa.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: {
      persistsSession: true,
      autoRefreshToken: true,
      detectsSessionInUrl: true,
    },
  });

  // восстановление сессии из localStorage
  const saved = localStorage.getItem('sb_session');
  if (saved) {
    try {
      const session = JSON.parse(saved);
      if (session?.access_token) sb.auth.setSession(session);
    } catch (_) {}
  }

  // синхронизация сессии в localStorage
  sb.auth.onAuthStateChange((_ev, session) => {
    if (session) localStorage.setItem('sb_session', JSON.stringify(session));
    else localStorage.removeItem('sb_session');
  });
})();
