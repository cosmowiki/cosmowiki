# general questions
- how to list the related items _in spreadsheets_ to get them logically arranged in the vcard? (e.g. rockets: link, link; astronauts: link, link)
- open item images in a pop-up or overlay instead of a blank page?
- does the new Firefox 59 affect the handover of certain values in the URL?

# Roadmap until first release
- [x] speed up local development, using watchify?
- [x] include shariff for private social linking
- [x] global scroll-to-top-button like [this][1]
- [x] create welcome page
- [x] make the npm run data-from-spreadsheet work with nix
- [ ] re-organize the spreadsheets (same columns, same related items)
- [ ] make the map (places) work
- [ ] make the solar system site work
- [ ] make the sorters and filters work (filters with FilterRow as in stars)
- [ ] let the toggle switches for sort and filter hide each other onClick / :hover on small screens
- [ ] open the a href={item.name} in an overlay-vcard or in a separate page

# nice to have
- simple vcard-page with abstract of first(?) paragraph from wikipedia
- relations and breadcrumb on the vcard
- global search
- global switch to toggle day/night vision & hand over the state on reload etc

# currently to do

## header
- [x] fix the branding on top
- [x] place the header with nav fixed on top
- [x] insert search form
- responsive nav menu for small screens (look at the pure js)

## welcome
- [x] create page
- [x] style it
- [x] make it responsive
- [x] write content
- [ ] set links from welcome-container to sites

## events
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] rename the component, css and page files to "events"
- [x] create a vertical timeline like [this][2]
- [ ] let the locations open in a map (on places site or in an overlay?)
- [ ] set anchor to each event div
- [ ] complete data for launch

## people
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [ ] set anchor to each person div
- [ ] collect item images
- [ ] complete data for launch

### astronauts
- [x] create page
- [x] show astronauts like on business cards
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] collect item images
- [ ] set anchor to each astronaut div
- [ ] complete data for launch

### scientists
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [ ] set anchor to each scientist div
- [ ] collect item images
- [ ] complete data for launch

## places
- [ ] create page
- [ ] style it
- [ ] make it responsive
- [ ] create summary
- [ ] complete data for launch

## objects
- [x] create page
- [x] style it
- [x] make it responsive

### solar system
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [ ] set anchor to each body div
- [ ] make it work according to the conditions in pages/solar-system.js
- [ ] collect item images
- [ ] complete data for launch

### constellations
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] collect item images
- [x] complete data for launch
- [ ] set anchor to each constellation div

### stars
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [ ] set anchor to each star div
- [ ] if stars are sorted by historical name then show only latin letters in LetterLinks
- [ ] if stars are sorted by constellations then only show greek letters in LetterLinks
- [ ] if stars are sorted by constellations, then sort them before by bayer name to get the correct alphabetical order of greek letters
- [ ] complete data for launch

### space stations
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] complete data for launch
- [ ] set anchor to each station div
- [ ] collect item images

### space telescopes
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [ ] set anchor to each telescope div
- [ ] show month in endDate as word when there is no endday
- [ ] collect item images
- [ ] complete data for launch

## astronomy
- [x] create page
- [x] style it
- [x] make it responsive

## spaceflight
- [x] create page
- [x] style it
- [x] make it responsive

### missions
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [ ] set anchor to each mission div
- [ ] collect item images
- [ ] complete data for launch

### spacewalks
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [ ] set anchor to each spacewalk div
- [ ] complete data for launch

## about
- [x] create page
- [x] style it
- [x] make it responsive
- [x] when clicking about-link on footer, then jump to anchor + height of header
- [x] create contact form
- [ ] make the contact form work, send mail to admin@cosmowiki.org

## footer
- [x] style it
- [x] make it responsive
- [x] let the self-links in footer open the appropriate answers in the about-page

#### imprint
- [x] as a transparent .gif or .png

## sort and filter
- [x] add a toggle switch for sorting both ascending and descending
- [ ] let the toggle switches for sort and filter hide each other onClick and :hover on small screens

[1]: http://jsfiddle.net/yeyene/J3zyq/3/
[2]: https://www.w3schools.com/howto/howto_css_timeline.asp
