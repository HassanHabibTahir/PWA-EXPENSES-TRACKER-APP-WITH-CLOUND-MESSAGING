//first   version and install the service worker
const staticCacheName = 'site-v1';
// install event  


const assets = [
  '/static/js/main.chunk.js',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/index.html',
  '/',

];

//install service worker
this.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});



// activate event
this.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticCacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});


// fetch event
this.addEventListener('fetch', evt => {
  //console.log('fetch event', evt);
  if (!navigator.onLine) {
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request).then(fetchRes => {

        });
      })
    );
  }
});

//if you wannat to get data from Api offline 


//push notification
//how it work
//what is vapid PublicKey (Voluntary Application Server Identification)
//what is application server key
//understand already made  function
//Allow notification 
//write Code

//data form the backend to ---->service Worker --->webpage
