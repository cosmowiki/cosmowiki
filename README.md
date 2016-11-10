# what is it?
an online encyclopedia about astronomy and space flight
http://cosmowiki.de/

# run

On a Mac OS X you can double-click the `app.command` file in your Finder
this will start the application, you can go to http://localhost:8080
in your browser to open the site.

# installation

You will need nodejs and npm, which you can get from [here][1].
To install cosmowiki, run `npm install` which installs all dependencies.

# development

Run `npm start` which starts a server on http://localhost:8080
where the site will be reachable locally.

# update of JSON files

Run `npm run data-from-spreadsheet` to update all JSON files locally from the spreadsheet.
Run `npm run data-from-spreadsheet name-of-the-page` to update a single JSON file locally from the spreadsheet.


# Roadmap until first release
- [x] speed up local development, using watchify?
- make the map (places) work
- include shariff for private social linking
- document creation of new sites
- responsive nav menu
- include the first 1000 characters of Wikipedia article in vcard
- replace tables with lists of items

nice to have
- simple vcard with abstract of first paragraph from wikipedia
- relations and breadcrum on the vcard
- on constellations-site: filter for northern / southern / both hemispheres
- on stars-site: filter for northern / southern / both hemispheres
- on stars-site: filter for single constellations / all constellations
- on astronauts-site: filter for single countries / all countries
- on astronauts-site: filter for single spaceflight programs / all spaceflight programs
- on missions-site: filter for single operating countries / all countries
- on missions-site: filter for single destinations / all destinations

[1]: https://nodejs.org
