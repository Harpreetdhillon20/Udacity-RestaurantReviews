# Restaurant Review: Stage 1

1. Took a static design that lacked accessibility and converted to the design to be responsive on different sized displays and accessible for screen reader use. 
2. Added a service worker to display visited pages from cache.

## Running the server

1. `cd` to project folder, start up a simple HTTP server to serve up the site files on local computer.

    * In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
2. With the server running, hit the URL: `http://localhost:8000`.
3. Try using app in offline mode after visiting few pages.
4. Try is on different viewport sizes.
5. Try using it with a screen reader and tab.

### Dependencies

Leaflet.js and Mapbox.

