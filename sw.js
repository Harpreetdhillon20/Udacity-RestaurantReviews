self.addEventListener('fetch', function (event) {

    event.respondWith(
        caches.match(event.request).then(function (response) {

            if (response) {
                //console.log('response found in cache');
                return response;
            }
            else {
                //console.log('Not in cache');
                return fetch(event.request).then(function (response) {
                    //console.log('fired a fetch request..');
                    let clone = response.clone();
                    caches.open('Stage-One-Review-V1').then(function (cache) {
                        cache.put(event.request, clone);

                    })
                    return response;
                }).catch(function (err) {
                    console.error(err);
                })

            }

        }).catch(function (err) {
            console.error(err);

        })

    );


});
