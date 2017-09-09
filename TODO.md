# Roadmap until first release
- [x] speed up local development, using watchify?
- make the map (places) work
- include shariff for private social linking
- document creation of new sites in README
- responsive nav menu with button on the right in branding bar (look at the pure js)
- make the sorters and filters work (filters with FilterRow as in stars)
- let the toggle switches for sort and filter hide each other on :hover on small screens
- [x] global scroll-to-top-button like [this][1]
- open the a href={item.name} in a vcard-page

# nice to have
- simple vcard-page with abstract of first(?) paragraph from wikipedia
- relations and breadcrumb on the vcard
- global search (form already in branding bar)

# general questions
- show content on a vcard? or on a page?
- list related items in spreadsheets only with their wikipedia url (semicolon separated) and decrypt them to get the real names?
- rather open item images in a pop-up or overlay instead of a blank site?

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
- collect item images
- complete data for launch

### astronauts
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- collect item images
- complete data for launch

### scientists
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- collect item images
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
- collect item images
- complete data for launch

### constellations
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] collect item images
- [x] complete data for launch

### stars
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- if stars are sorted by historical name then show only latin letters in LetterLinks
- if stars are sorted by constellations then only show greek letters in LetterLinks
- if stars are sorted by constellations, then sort them before by bayer name to get the correct alphabetical order of greek letters
- complete data for launch

### space stations
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- collect item images
- [x] complete data for launch

### space telescopes
- [x] create site
- [x] style it
- [x] make it responsive
- [x] create summary
- show month in endDate as word when there is no endday
- collect item images
- complete data for launch

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
- collect item images
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
- [x] remove scroll-up-arrows if global scroll-to-top-button is placed

## sort and filter
- let the toggle switches for sort and filter hide each other on hover on small screens

[1]: http://jsfiddle.net/yeyene/J3zyq/3/
