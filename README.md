# what is it?
an online encyclopedia about astronomy and space flight
http://cosmowiki.de/

# run

On a Mac OS X you can double-click the `app.command` file in your Finder
this will start the application, you can go to [http://localhost:8080]
in your browser to open the site.

# installation

Currently it's easiest to use nix as package manager, to create a reproducible environment.
Install it like so `curl https://nixos.org/nix/install | sh`. Once this is done run the 
command `nix-shell` which opens a shell that has (or on first run installs) nodejs and all 
required packages.
To install cosmowiki, run `npm install` which installs all JavaScript dependencies.

[1]: https://nixos.org/nix/

# development

Make sure you ran `nix-shell` from the project's root directory before continuing.
Run `npm start` which starts a server on http://localhost:8080
where the site will be reachable locally.

# update of JSON files

Make sure you ran `nix-shell` from the project's root directory before continuing.
Run `npm run data-from-spreadsheet` to update all JSON files locally from the spreadsheet.
Run `npm run data-from-spreadsheet name-of-the-page` to update a single JSON file locally from the spreadsheet.


# Roadmap until first release
- [x] speed up local development, using watchify?
- make the map (places) work
- include shariff for private social linking
- document creation of new sites
- responsive nav menu (look at the pure manual)

# nice to have
- simple vcard with abstract of first paragraph from wikipedia
- relations and breadcrum on the vcard
