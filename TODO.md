# Roadmap until first release
- [x] speed up local development, using watchify?
- make the map (places) work
- include shariff for private social linking
- document creation of new sites in README
- responsive nav menu with button on the right in branding bar (look at the pure js)
- make the sorters and filters work (filters with FilterRow as in stars)
- let the toggle switches for sort and filter hide each other on :hover on small screens
- global scroll-to-top-button like [this][1]
- open the a href={item.name} in vcard

# nice to have
- simple vcard with abstract of first paragraph from wikipedia
- relations and breadcrum on the vcard
- global search with form in branding bar (best without submit button)

# general questions
- show content really in a vcard? rather on a page?
- list related items only with their wikipedia url (semicolon separated) and decrypt them to get the real names?
- rather open item images in a pop-up/overlay?

# currently to do

## branding
- [x] fix the branding on top
- [x] insert search form
- insert toggle button for responsive nav menu on small screens (look at the pure js)

## home
- [x] create site
- [x] style it
- [x] make it responsive

## events
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] rename the component, css and site files to "events"
- hide the span id="coordinates" from embedded article in vcard (i.e. Lascaux)
- hide the img src="//de.wikipedia.org/wiki/Special:CentralAuto..." (on bottom) of embedded article in vcard
- complete data for launch

## people
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] set comma only if itemname2 exists
- complete data for launch

### astronauts
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- complete data for launch

### scientists
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- complete data for launch

## places
- create site
- style it
- make it responsive
- create summary
- complete data for launch

## objects
- [x] create site
- [x] style it
- [x] make it responsive

### solar system
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- make it work according to the conditions in sites/solar-system.js
- complete data for launch

### constellations
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] complete data for launch
- show more data on large screens?

### stars
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- find a solution for the greek letters / bayer names vs. historical names
- complete data for launch

### space stations
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] complete data for launch

### space telescopes
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- complete data for launch
- show month in endDate as month name when there is no endday

## astronomy
- [x] create site
- [x] style it
- [x] make it responsive

## spaceflight
- [x] create site
- [x] style it
- [x] make it responsive

### missions
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- complete data for launch

### spacewalks
- [x] create site
- [x] style it
- [x] make it responsive
- create summary
- complete data for launch

## about
- [x] create site
- [x] style it
- [x] make it responsive
- [x] jump to anchor + 40 px (height of branding) when clicking internal link
- [x] create contact form
- make the contact form work, send mail to admin@cosmowiki.org

## footer
- [x] style it
- [x] make it responsive
- [x] let the links in #footerElse open the appropriate answers in the about-site

#### imprint
- [x] as a transparent .gif or .png

## .letter-section-header
- remove scroll-up-arrows if global scroll-to-top-button is placed

## sort and filter
- let the toggle switches for sort and filter hide each other on hover on small screens

[1]: http://jsfiddle.net/yeyene/J3zyq/3/
