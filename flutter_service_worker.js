'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c75c297b6c7c72bc23f97f0715e9e10e",
"index.html": "c342463894acde984699b6483d974141",
"/": "c342463894acde984699b6483d974141",
"main.dart.js": "85b26094d3e4eac700334443311e1079",
"icons/Icon-192.png": "af95ffe168fd4935d61440c075ce0a40",
"icons/Icon-512.png": "faf539d1efd89eff22bcabea8acab479",
".git/config": "6183217bb625f73b97265c4b51c65bc8",
".git/objects/3d/99a5a0994eeb9e5b2b825a6b970385fed57534": "e4f9635abcf196fa73b17dfff8330d7a",
".git/objects/93/2d1131fad209b330e9cb3331840fad9f65f5c2": "7bf79a9b3145a3454e3dff78ddd543ae",
".git/objects/5f/7c066b93229c7c7a926e804796f3b29d3ae14c": "8583976975acbf250a57a63023a9b223",
".git/objects/a3/f2886bab64d934bed4883b31868e02687b7b6f": "e3d99a94fa3ffcbbc7d5a7a74ebf47c2",
".git/objects/d9/a6a776660a82d95bad0497cb6700c5f37ae798": "89de29fd3c47a974f6cf0c17521368fa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/29/95f533e50f9ef4f228cfa0dfd0621c3075e154": "ddce49f07d779028ef823e8e37e20345",
".git/objects/4d/346a5f1c232f47869fd786d11e5b9ad070d986": "25bdb50e208023e9b712756ef315add7",
".git/objects/81/0d584cf953ba5026779ef2d6d2ac53322b4578": "a6c9361d21c4695bee89109d49055962",
".git/objects/88/09b65f9ff6941239cc20857fa288e26666d83e": "3af35bef74461e1a13f0bb1af21f4c4d",
".git/objects/9f/64c89545d6933534ecc01db8b6027683f0983d": "78378755020832efc700f99bbadfe8fe",
".git/objects/9f/0d8935b79d92766d00ba7fd5cacac7df880aaa": "e668ece2e56161b579d815f9e2132a4e",
".git/objects/6e/4c84e0661ba9a1227e76f1a67ac2cb6bb2fddc": "50a5dd02c9ca1fbb6eca75ee2a9d933f",
".git/objects/36/8c25e21365f8add976c5ec5ad870004d40216b": "3d153794359284de420b331a39c810bc",
".git/objects/54/ffe6222b1d1f04a7fe932b2caaa7cc4b98c99d": "415556fadb8ec81250fdbe91cc48e756",
".git/objects/5b/21a80aaebf35475c3185ca752387b84887bd5d": "017dba089391335148f085ca34258e57",
".git/objects/08/72e8fbad6842258a2d811ce941e0007cade7d5": "5786a2f7d780648a8d92221bb74a0142",
".git/objects/01/0791de1226f7af4ad54299c3794f11925c6b2e": "51883a312847d18b280c2fba3ac149cd",
".git/objects/06/09255502821a0145da44a228c419768eb47244": "6da187f04101b586922b8cf1c6cd9e62",
".git/objects/52/8034b549ab8416dd413eef9b0d7bb018a0fc27": "a056f2d7a79d6cd1005d227732d635a5",
".git/objects/d2/b47461965de05ab8e66da60df65e3f2796cd59": "f08513a8341fd206ece47628a47d2234",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/de/fee0052ac0bb6e54874523dd70125b6fe1fad3": "ccf58df28ed28e1c39d7c72587814512",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/fa/ace9a8c031c2e73f2bcaefae884225dfed57f5": "d6c5b98370b99f010756460929c8384c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/1b/1160f8f058371b44360e692900d2e35b45f292": "8b6fb6c9ccbd662a2d9d43fea155cc07",
".git/objects/4a/6cd70e006ee85265cdb8de489c6bc0b31f0470": "342450fa147ad93b9796966d9b8c47a3",
".git/objects/1d/214866af1ab3f2e43b9fe6f591949043ecb60f": "af629ac1994f7d6cbbdf5f285e429cb3",
".git/objects/71/08a549eb5a3275ed8bf473f3ca33c7d6976dd5": "69a87e024dff1f24b682ae970a0329cf",
".git/objects/82/687f1198432008c0663a7d2530ccd1fc3946b7": "bb44c63a1829de61de9486a8aeee0884",
".git/objects/13/8d213630637915472966f88c6fde2dbcba11ce": "348a245f9bcf1fa4daabfbe4d1a9c2c2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "127e43611c6788a6e427e9fea7fb4292",
".git/logs/refs/heads/main": "da34a6b7a1e7dfde36c7890d8919ab54",
".git/logs/refs/remotes/origin/main": "5d97c2f29159d4ae83868e15c194d4b9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "1a1d25f81e63c48f984a98c41a9158ef",
".git/refs/remotes/origin/main": "1a1d25f81e63c48f984a98c41a9158ef",
".git/index": "b6a73886cdfc6fce2c1747105c6e210c",
".git/COMMIT_EDITMSG": "bc36b19c53b1dad4369fd544e6b5b5a0",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "dbbe785f29a27eed819070d29e845ffa",
"assets/NOTICES": "dbd7901c5bcf765c31f6784f0a013d2d",
"assets/FontManifest.json": "fe2f3ce9896ad834972652740cb00495",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/font0.ttf": "9e06bf8e4155ad3a942a9ff38f59fbc4",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/rls": "5f3228f511781b69b1590f48e6675e24",
"assets/assets/instagram.png": "5bfcb5390c6f0722634db648bdb6a298",
"assets/assets/github.png": "2c2da7ebf21b1781a5ccdd3cad8bd13f",
"assets/assets/medium.png": "e9fd843a6896bf6f140f510bae41a412",
"assets/assets/red": "f8ef288e8f7a9a6c051e313716366133",
"assets/assets/stack.png": "631e5311ba0dc920c2c94681249d2a79",
"assets/assets/c1.png": "f5f7bf334275706b9e098e9dd725adbb",
"assets/assets/yellow": "a6d5c8b9b2211474dac7f6d8e1e3117e",
"assets/assets/c2.png": "b6f0c66f2d2ab1108652dfc19b7486dc",
"assets/assets/c3.png": "f3045a9fe695a8bf292b4a34a119ae19",
"assets/assets/white": "4bef4da2a866d5fce30744da9ea674ea"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
