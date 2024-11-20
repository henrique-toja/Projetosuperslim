// Evento de instalação do Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker instalado.');
  event.waitUntil(
    caches.open('super-slim-cache').then((cache) => {
      return cache.addAll([
        '/', // Página inicial
        '/app/index.html', // Página inicial do app
        '/app/app.css', // CSS principal
        '/assets/icon-192x192.png', // Ícone para dispositivos
        '/assets/icon-512x512.png', // Ícone de maior resolução
      ]);
    }).then(() => {
      console.log('Arquivos armazenados em cache com sucesso.');
    }).catch((err) => {
      console.error('Erro ao armazenar em cache:', err);
    })
  );
});

// Evento de fetch para interceptar requisições
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Retorna do cache se disponível, ou busca da rede
      return cachedResponse || fetch(event.request).catch(() => {
        console.warn('Recurso não encontrado na rede e não está em cache:', event.request.url);
      });
    })
  );
});

// Evento de ativação (opcional para limpar caches antigos)
self.addEventListener('activate', (event) => {
  const cacheWhitelist = ['super-slim-cache'];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            console.log(`Cache antigo removido: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});