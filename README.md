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
- include the first 1000 characters of Wikipedia article in vcard

nice to have
- simple vcard with abstract of first paragraph from wikipedia
- relations and breadcrum on the vcard


[1]: https://nodejs.org
