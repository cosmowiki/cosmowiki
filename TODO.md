#Roadmap until first release
- [x] speed up local development, using watchify?
- make the map (places) work
- include shariff for private social linking
- document creation of new sites in README
- responsive nav menu with button on the right in branding bar (look at the pure js)
- make the sorters and filters work (with FilterRow as in stars)
- global scroll-to-top-button on right side when scrolled down below 100% height

#nice to have
- simple vcard with abstract of first paragraph from wikipedia
- relations and breadcrum on the vcard
- global search with form in branding bar (best without submit button)

#General questions
- show content really in a vcard? rather on a page?
- list related items only with their wikipedia url (semicolon separated) and decrypt them to get the real names?

#currently to do

##branding
- [x] fix the branding on top
- [x] insert search form
- insert toggle button for responsive nav menu on small screens (look at the pure js)

##home
- [x] create site
- [x] style it
- [x] make it responsive
- spread the #homeNav links evenly in height on small screens or use tiles

##events
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] rename the component, css and site files to "events"
- hide the span id="coordinates" from embedded article in vcard (i.e. Lascaux)
- hide the img src="//de.wikipedia.org/wiki/Special:CentralAuto..." (on bottom) of embedded article in vcard
- complete data for launch

##people
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- complete data for launch
- save images locally
- [x] set comma only if itemname2 exists
- open the href={item.name} in vcard

##places
- create site
- style it
- make it responsive
- create summary
- complete data for launch

##objects
- [x] create site
- [x] style it
- [x] make it responsive

##astronomy
- [x] create site
- [x] style it
- [x] make it responsive

##spaceflight
- [x] create site
- [x] style it
- [x] make it responsive

###astronauts
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- complete data for launch
- save images locally
- open the href={item.name} in vcard

###scientists
- [x] create site
- [x] style it
- [x] make it responsive
- create summary
- complete data for launch
- save images locally
- open the href={item.name} in vcard

###solar system
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- complete data for launch
- save images locally
- make it work according to the conditions in sites/solar-system.js
- complete data for launch

###constellations
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] complete data for launch
- [x] save images locally
- show more data on large screens?
- open the href={item.name} in vcard

###stars
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- complete data for launch
- open the href={item.name} in vcard
- solution for greek letters

###space stations
- [x] create site
- [x] style it
- [x] make it responsive
- create summary
- [x] complete data for launch
- [x] save images locally
- [x] show station image and small only if imageUrl exists
- open the href={item.name} in vcard

###space telescopes
- [x] create site
- [x] style it
- [x] make it responsive
- create summary
- complete data for launch
- save images locally
- open the href={item.name} in vcard

###missions
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- complete data for launch
- save images locally
- open the href={item.name} in vcard

###spacewalks
- [x] create site
- [x] style it
- [x] make it responsive
- create summary
- complete data for launch
- open the href={item.name} in vcard

####about
- [x] create site
- [x] style it
- [x] make it responsive
- [x] jump to anchor + 40 px (height of branding) when clicking internal link
- [x] create contact form
- make the contact form work, send mail to admin@cosmowiki.org

####footer
- [x] style it
- [x] make it responsive
- [x] let the links in #footerElse open the appropriate answers in the about-site

#####imprint
- [x] as a transparent .gif or .png

#####.letter-section-header
- scroll-up-arrow on small screens as buttons

#####sort and filter
- let the toggle-switches for sort and filter hide each other on hover on small screens

#####sort
- [x] label "Sortieren nach:"
- [x] sort up / sort down with arrows

#####notes
- [x] insert arrows to scroll up
- [x] constellationNotes ul review
