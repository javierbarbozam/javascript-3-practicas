import { initEvents } from "../components/event/getEvents.js";
import { initTabs } from "../components/tabs/tabs.js";

initTabs();
initEvents();

import { cacheEvent } from "../components/cache/cache.js";

// const value =
//   "https://knassbani2.execute-api.us-east-2.amazonaws.com/events/business";
// const prueba = (item) => {
//   caches.match(item).then(async (response) => {
//     if (response) {
//       const res = await Promise.resolve(response);
//       const data = await res.json();
//       console.log("using cache");
//       return data;
//     }
//     caches.open("events").then((cache) => {
//       cache.add(item);
//     });
//     console.log("using fetch");
//     return item;
//   });
// };
// prueba(value);


// console.log(await caches)

// caches.open('events').then( async function(cache) {
//   // Cache opened successfully
//   console.log( await caches)
// }).catch(function(error) {
//   // Failed to open cache
// });


// let url = "/src/components/cache/cache.js"
// eventProxy.food
// let url = "/src/components/cache/cache.js";
// caches.open("prueba").then((cache) => {
//   cache.add(url).then(() => {
//     console.log("Data cached ");
//   });
// });

caches.open('events').then(cache => {
  
})

const cachehandler = {
  get: (target, key) => {
		caches.open(key).then(cache => {cache.add(url)}).then(
			caches.match(key).then(function (response) {
				if (response) {
					// Resource found in cache
					console.log(response);
				} else {
					// Resource not found in cache
					console.log('not found')
				}
			})
		)
  },
};

const eventProxy = new Proxy(cacheEvent, cachehandler);

// self.addEventListener("fetch", (event) => {
//   event.respondWith(
//     caches.match(event.request).then((response) => {
//       if (response) {
//         return response; // Devuelve la respuesta almacenada en caché si está disponible
//       }
//       // Si no hay una respuesta en caché, realiza la solicitud a la API y almacena la respuesta en caché
//       return fetch(event.request).then((response) => {
//         const clonedResponse = response.clone();
//         caches.open("api-cache").then((cache) => {
//           cache.put(event.request, clonedResponse);
//         });
//         return response;
//       });
//     })
//   );
// });
