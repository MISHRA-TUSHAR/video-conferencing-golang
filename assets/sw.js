self.addEventListener('install', e => {
  e.waitUntil(caches.open('static').then(cache => {
    return cache.addAll([
      '/favicon.ico',
      '/icon.png',
      'D:\Go\Go_Projects\video\assets\javascript\chat.js',
      'D:\Go\Go_Projects\video\assets\javascript\peer.js',
      'D:\Go\Go_Projects\video\assets\javascript\stream.js',
      'D:\Go\Go_Projects\video\assets\javascript\viewer.js',
      '/font/v.eot',
      '/font/v.svg',
      '/font/v.ttf',
      '/font/v.woff',
      '/font/v.woff2',
      'D:\Go\Go_Projects\video\assets\stylesheets\main.css',
      'D:\Go\Go_Projects\video\assets\stylesheets\fonts.css',
      '/stylesheets/bulma/css/bulma.min.css'
    ])
  }))
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});