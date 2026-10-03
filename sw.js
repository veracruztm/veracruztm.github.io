// Service worker mínimo: só existe para o Android oferecer "Instalar app".
// Não guarda nada em cache — o sistema sempre carrega a versão atual.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(){});
