'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a429c3dc440d6022560eb5df1014d51e",
"assets/assets/11.png": "98468ca8f8651bc4ef5efcfe75fc195f",
"assets/assets/12.png": "abfc58acf87a46681dcd1b350950077e",
"assets/assets/13.png": "24f88fc42f27943ab1682de8f8baa126",
"assets/assets/14.png": "c2516d6ba6248584cf0e1aca019f459e",
"assets/assets/aboutbg.png": "d83201ec255cd7c4c427598e08175e1b",
"assets/assets/aboutmobile.png": "220234986b1c2f0a80ef7a5af10f1552",
"assets/assets/aboutweb.png": "ba786ca75fb0aa1b62f2a1b86a84259e",
"assets/assets/bed.png": "a0b4aab40e7993975644c8c9eefb56d2",
"assets/assets/bitcoin.png": "ebdeac6cb5c5e658f02a51d475177ee4",
"assets/assets/blog1.png": "c75a204882d23298799770040c2a92c9",
"assets/assets/blog2.png": "3859ad732a6aa85f2d7f406983a058d3",
"assets/assets/blog3.png": "97882428c4c37ce0b63ce76adf086b7e",
"assets/assets/blog4.png": "36302a54ce0c99250f8c8ba3aae51de1",
"assets/assets/blog5.png": "feacadd2394b9e540fdee1bff37e6596",
"assets/assets/blogpic.jpg": "e572f962e752a00a9cb29a892ed6fb9b",
"assets/assets/blogpic1.png": "3f7e4f56c5c46d8104e6a35389627e7c",
"assets/assets/blogpic2.png": "80ad5b44f23a859a4c1c3cf920c5a8ce",
"assets/assets/blogpic3.png": "c4c448ab1cdd15a6882ccf6782548a49",
"assets/assets/blogpic4.png": "7e137055fd49639c7a9052055e34278d",
"assets/assets/blogpic5.png": "9573e2a9ddacf453edee6cab38a347a2",
"assets/assets/blue.png": "6ca5816d8c1f2ef96334c9f73cd4cd73",
"assets/assets/bluehome.png": "0e348149d68baef1ba259df118f39fe2",
"assets/assets/calendar.png": "f3123533000d9581f6b44a2e6ee9d84c",
"assets/assets/certificate.png": "e39ea62fdf1f15fdc6bdd8c894ed82a6",
"assets/assets/facebook.png": "76a6b4294edeec48c9d616fa5c384adc",
"assets/assets/hall.png": "a7e04580df17de750e3d249702c4c60f",
"assets/assets/hall2.png": "30fd2b705bdff6ba17a0c815f1e290f7",
"assets/assets/insta.png": "25ae123a19ef11fcbed541c033cb5376",
"assets/assets/kitchen.png": "4415d4002f48ab6ae41bffc32b363910",
"assets/assets/left.png": "d750d460297b978f7886a8640ada8ec6",
"assets/assets/linkedin.png": "082ed6d5d00a1048d5268b1ce3136115",
"assets/assets/logo.png": "1a674a12a5b3e020c7d82a65f5ce945e",
"assets/assets/mobile_about.png": "116372f73a427718811056bbf39e9790",
"assets/assets/office.png": "075f77be418357c43d8e7890f42f791a",
"assets/assets/person.png": "0fddacb47c3ffb95c60af50e57f3124c",
"assets/assets/right.png": "ea47ab0205c52b2f2c199e7f96590985",
"assets/assets/room.png": "1bb75d0d473198462f1cf9ff74690134",
"assets/assets/show.svg": "7d762f8cccaaa1a03d28fbeee1c7fa6d",
"assets/assets/smilyhome.png": "0349f40e7b6c89e08db8e7d956dbe903",
"assets/assets/twitter.png": "2b3c009eb7897b16288510245d2dbe99",
"assets/assets/youtube.png": "4e977349137300db1cb5b49afbf363ad",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "68cc06bc55b3bdc70131a660a619f4a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6ab8a01bb2d91c671a64e4e69924a02b",
"/": "6ab8a01bb2d91c671a64e4e69924a02b",
"main.dart.js": "60a6dbd40a0193cf67ef55da135b26ff",
"manifest.json": "41c0fd832a62ef2d79da185db21180e9",
"version.json": "397b325241089b82fd8ccb3d7201c781"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
