# Roadmap until first release
- [x] speed up local development, using watchify?
- [x] include shariff for private social linking
- [x] global scroll-to-top-button like [this][1]
- [x] create welcome page
- [x] make the npm run data-from-spreadsheet work with nix
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

# general questions
- list related items _in spreadsheets_ only with their wikipedia url (semicolon separated) and decrypt them to get the real names?
- open item images in a pop-up or overlay instead of a blank page?
- does the new Firefox 59 affect the handover of certain values in the URL?

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

## events
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] rename the component, css and page files to "events"
- [x] create a vertical timeline like [this][2]
- [ ] complete data for launch

## people
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
- [ ] collect item images
- [ ] complete data for launch

### astronauts
- [x] create page
- [x] show astronauts like on business cards
- [x] style it
- [x] make it responsive
- [x] create summary
- [x] collect item images
- [ ] complete data for launch

### scientists
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
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

### stars
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
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
- [ ] collect item images

### space telescopes
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
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
- [ ] collect item images
- [ ] complete data for launch

### spacewalks
- [x] create page
- [x] style it
- [x] make it responsive
- [x] create summary
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
