import React from 'react';

const WelcomeComponent = ({ appUrl }) => {
    return ( <
        main role ="main"
        className ="pure-u-1" >
        <
        div id ="siteTitle"
        className ="pure-u-1 welcome center" >
        <
        div id ="siteTitleContainer" >
        <
        h1 > Willkommen < /h1> <
        h3 > auf CosmoWiki.org < /h3> <
        /div> <
        /div> <
        div id ="todo"
        className ="pure-u-1" >
        <
        p > @wolfram: pls find a way to calculate the numbers inside the[brackets] < /p> <
        /div> <
        div id ="welcomeArea"
        className ="pure-u-1" >
        <
        div id ="welcomeCosmowiki" >
        <
        div className ="welcome-cosmowiki" >
        <
        p >
        <
        a href ="#welcomeEvents" > 423 Ereignisse < /a> <
        a href ="#welcomeScientists" > 638 Wissenschaftler < /a> <
        a href ="#welcomeAstronauts" > 387 Raumfahrer < /a> <
        a href ="#welcomePlaces" > 365 Orte < /a> <
        a href ="#welcomeSolsys" > 226 Himmelskörper < /a> <
        a href ="#welcomeConstellations" > 88 Sternbilder < /a> <
        a href ="#welcomeStars" > 446 Sterne < /a> <
        a href ="#welcomeSpacestations" > 22 Raumstationen < /a> <
        a href ="#welcomeSpacetelescopes" > 98 Weltraumteleskope < /a> <
        a href ="#welcomeSpacewalkes" > 389 Weltraumausstiege < /a> <
        a href ="#welcomeMissions" > 742 Missionen < /a> <
        /p> <
        /div> <
        /div> <
        div id ="welcomeEvents"
        className ="welcome-container" >
        <
        h4 > < a href ="/chronicle" > 7. Januar 1610 < /a></h
        4 >
        <
        div className ="welcome-text pure-u-1" >
        <
        p >
        An diesem Tag entdeckte Galileo Galilei in Padua mit einem Nachbau des nur ein Jahr zuvor von Hans Lipperhey in Holland erfundenen Fernrohres die vier größten Monde des Jupiter - Io, Europa, Ganymed und Kallisto.Seine Beobachtungen und bahnbrechenden Erkenntnisse über den Mond,
        das Jupiter - System und die Sterne veröffentlichte er noch im gleichen Jahr in seinem Werk < i >"Sidereus nuncius" < /i> - der Sternenbote. <
        /p> <
        p >
        Wie alt ist die Himmelsscheibe von Nebra ? Wann und wo wurden die ersten Raketen gestartet ? Was geschah am 30. Juni 1908 in Sibirien, und wann startete das letzte Space - Shuttle ?
        <
        /p> <
        p >
        <
        code > [numberOfEvents] < /code> spannende Ereignisse aus der Geschichte
        von Astronomie und Raumfahrt finden Sie < a href ="/chronicle" > hier in der Chronik < /a>. <
        /p> <
        /div> <
        /div> <
        div id ="welcomeScientists"
        className ="welcome-container" >
        <
        h4 > < a href ="/scientists" > < code > [countAstronomers] < /code> Astronomen!</a > < /h4> <
        div className ="welcome-text pure-u-1" >
        <
        p >
        Hier finden Sie zwar nicht alle, aber zumindest die bedeutendsten Astronomen der Menschheitsgeschichte.Bereits die frühen Menschen dürften sich gefragt haben, was dort oben am Himmel Tag für Tag und Nacht für Nacht vorüberzieht.In Babylonien, dem antiken China, Ägypten und Griechenland entstand aus der Astrologie allmälig die Astronomie als vielleicht älteste Wissenschaft. <
        /p> <
        p >
        Wer war Aryabhata und wo lebte er ? Wofür legten Johannes Müller und Nikolaus von Kues im 15. Jahrhundert die Grundsteine ? Welche Erkenntnisse verdanken wir Ole Rømer, und welche Edwin Hubble ?
        <
        /p> <
        p >
        Erfahren Sie mehr über < a href ="/scientists" > < code > [countScientists] < /code> Astronomen</a > ,
        Astrophysiker, Kosmologen, Mathematiker und viele weitere Wissenschaftler. <
        /p> <
        /div> <
        /div> <
        div id ="welcomeAstronauts"
        className ="welcome-container" >
        <
        h4 > < a href ="/astronauts" > < code > [totalAstronautsHoursInSpace] < /code></a > < /h4> <
        div className ="welcome-text pure-u-1" >
        <
        p >
        Eine unglaubliche Zahl!So viele Stunden haben alle < code > [countAstronauts] < /code>
        Astronauten zusammengerechnet bis heute im All verbracht.Sie reisen in hauchdünnen Röhren aus Aluminium auf hunderten Tonnen hochentzündlicher Treibstoffe mit mehreren Kilometern pro Sekunde ins All.Dort leben und arbeiten sie, manchmal monatelang. <
        /p> <
        p >
        Wer sind diese mutigen Frauen und Männer ? An welcher Mission nahm Neil Armstrong vor Apollo 11 teil ?
        Welcher Astronaut absolvierte die längste Zeit im All, welcher die meisten Außenbordeinsätze ?
        <
        /p> <
        p >
        Auf unserer Seite über < a href ="/astronauts" > Raumfahrer < /a> finden Sie die Antworten.<br / >
        <
        /p> <
        /div> <
        /div> <
        div id ="welcomePlaces"
        className ="welcome-container" >
        <
        h4 > < a href ="/places" > 28° 37 & prime; 4 & Prime; N, 80° 36 & prime; 45 & Prime; W < /a></h
        4 >
        <
        div className ="welcome-text pure-u-1" >
        <
        p >
        Genau dort befindet sich der Launch Complex 39, und von dort starteten Neil Armstrong, Buzz Aldrin und Michael Collins am 16. Juli 1969 mit Apollo 11 zu ihrem legendären Flug zum Mond.Doch hier begannen nicht nur sämtliche Apollo - Missionen, auch alle 135 Space - Shuttle - Flüge zwischen 1981 und 2011 starteten hier. <
        /p> <
        p >
        Wo auf der Welt gibt es weitere Raketenstartplätze ? Welche Forschungseinrichtungen gehören zur ESA ? Was verbirgt sich hinter dem Namen Rasad - e Khan,
        und was war Uraniborg ?
        <
        /p> <
        p >
        Erkunden Sie < code > [countPlaces] < /code> interessante <a href="/places
       ">Orte</a> der
        Astronomie und Raumfahrt. <
        /p> <
        /div> <
        /div> <
        div id ="welcomeSolsys"
        className ="welcome-container" >
        <
        h4 > < a href ="/solar-system" > Götter und Nymphen... < /a></h
        4 >
        <
        div className ="welcome-text pure-u-1" >
        <
        p >
        ...sind die Namensgeber vieler Himmelskörper in unserem Sonnensytem.Die Planeten tragen die Namen römischer Götter.Lediglich Uranus wurde von seinem Entdecker Wilhelm Herschel im Jahr 1781 nach dem griechischen Himmelsgott Uranos benannt.Sein Sohn John Herschel gab zwei Uranus - Monden die Namen von Figuren aus Shakespeares Sommernachtstraum -
        Titania und Oberon. <
        /p> <
        p >
        Wieviele Monde umkreisen den Saturn, wieviele den Jupiter ? Was sind Zentauren und wo befindet sich die Oortsche Wolke ?
        <
        /p> <
        p >
        Entdecken Sie < code > [countSolsysBodies] < /code> Himmelskörper unseres <a href="/solar - system">Sonnensystems</a>. <
        /p> <
        /div> <
        /div> <
        div id ="welcomeConstellations"
        className ="welcome-container" >
        <
        h4 > < a href ="/constellations" > Wegweiser am Nachthimmel < /a></h
        4 >
        <
        div className ="welcome-text pure-u-1" >
        <
        p >
        Fünfmal wird die Strecke zwischen den beiden hinteren Sternen des Großen Wagens nach oben verlängert, und wir sehen den Polarstern,
        der gleichzeitig auch der letzte an der Deichsel des Kleinen Wagens ist.Auch die Kassiopeia - das Himmels - W - zeigt auf ihn. <
        /p> <
        p >
        Welches ist das kleinste aller Sternbilder ? Warum trägt eines den merkwürdigen Namen"Luftpumpe" ? Welcher Stern ist der hellste im Orion,
        und welche Sternbilder sind noch am Südpol zu sehen ?
        <
        /p> <
        p >
        Die Antworten darauf und viele weitere Informationen finden Sie auf unserer Seite < a href ="/constellations" > zu allen 88 Sternbildern < /a>. <
        /p> <
        /div> <
        /div> <
        div id ="welcomeStars"
        className ="welcome-container" >
        <
        h4 > < a href ="/stars" > 70.000 .000 .000 .000 .000 .000 .000! < /a></h
        4 >
        <
        div className ="welcome-text pure-u-1" >
        <
        p >
        Die Zahl aller Sterne im Universum wird auf etwa 7 & times; 10 < sup > 22 < /sup> geschätzt.
        70 Trilliarden Sterne in 100 Milliarden Galaxien - einfach unglaublich!
        Hier auf CosmoWiki.org finden Sie natürlich nicht alle dieser Sonnen, aber immerhin < code > [countStars] < /code> von ihnen, die wichtigsten Angaben,
        wie zum Beispiel ihre Entfernung zu uns, ihre Größe, Masse, Leuchtkraft und viele weitere Daten. <
        /p> <
        p >
        Wie weit entfernt von uns ist der Polarstern ? Aus wievielen einzelnen Sternen besteht der Zwilling Castor ? In welchem Sternbild ist Sirius zu finden, und welcher Stern verbirgt sich hinter α Lyrae ?
        <
        /p> <
        p >
        Wir holen Ihnen die Sterne vom Himmel - besuchen Sie die < a href ="/stars" > Seite < /a>. <
        /p> <
        /div> <
        /div> <
        div id ="welcomeSpacestations"
        className ="welcome-container" >
        <
        h4 > < a href ="/space-stations" > Hätten Sie gedacht, ... < /a></h
        4 >
        <
        div className ="welcome-text pure-u-1" >
        <
        p >
        ...dass die Sowjets in den 1970e r Jahren bereits sieben Weltraumstationen erfolgreich gestartet hatten ? Fünf davon wurden sogar bemannt und lieferten wichtige Erkenntnisse über die Auswirkungen längerer Aufenthalte von Menschen im All.Heute ist das Leben auf Weltraumstationen scheinbar zur Routine geworden, doch tatsächlich ist es nur eine sehr kleine Elite,
        die erst nach mehrjährigen Studiengängen und jahrelangem Training Plätze auf den aktuellen Stationen im Orbit belegen darf. <
        /p> <
        p >
        Wie sahen die ersten sowjetischen Stationen aus ? Wieviele Besatzungen besuchten das Skylab ? Wie lange umkreiste die Raumstation Mir die Erde und wann wird die nächste chinesische Station gestartet ?
        <
        /p> <
        p >
        Erkunden Sie hier bei uns vergangene und künftige < a href ="/space-stations" > Weltraumstationen < /a>! <
        /p> <
        /div> <
        /div> <
        div id ="welcomeSpacetelescopes"
        className ="welcome-container" >
        <
        h4 > < a href ="/space-telescopes" > Alles schwingt. < /a></h
        4 >
        <
        div className ="welcome-text pure-u-1" >
        <
        p >
        Von Gammastrahlen bis Radiowellen, über Röntgenstrahlung, ultraviolettes,
        sichtbares und infrarotes Licht und Mikrowellen erstreckt sich der Bereich des elektromagnetischen Spektrums, aus dem Wissenschaftler rund um den Globus immer wieder neue Erkenntnisse über den Aufbau und die Entstehung des Universums gewinnen.Enorm viele Daten liefern ihnen dabei Weltraumteleskope,
        die in Zukunft auch Gravitationswellen detektieren werden. <
        /p> <
        p >
        Welches Land spezialisierte sich schon sehr früh auf Röntgenteleskope im All ? In welchen Wellenlängen arbeitet Hubble und wann wird sein Nachfolger, das James - Webb - Weltraumteleskop starten ?
        <
        /p> <
        p >
        Ausführliche Informationen zu < code > [countSpacetelescopes] < /code> Augen
        und Ohren im All gibt es auf unserer Seite über < a href ="/space-telescopes" > Weltraumteleskope < /a>. <
        /p> <
        /div> <
        /div> <
        div id ="welcomeMissions"
        className ="welcome-container" >
        <
        h4 > < a href ="/missions" > Einmal ins Weltall und wieder zurück, bitte. < /a></h
        4 >
        <
        div className ="welcome-text pure-u-1" >
        <
        p >
        Mit dem Start von Sputnik 1 am 4. Oktober 1957 begann das Zeitalter der Raumfahrt.Seit diesem Tag wurden Tausende Satelliten, Transportraumschiffe,
        Sonden, bemannte Raumkapseln, Module für Weltraumstationen und Weltraumteleskope in den Erdorbit, zu anderen Planeten oder sogar an das Ende unseres Sonnensystems befördert. <
        /p> <
        p >
        Von wo startete Voyager 1 ? Welches Land erkundete als erstes die Venus mit einer Raumsonde ? Wann kehrten die Astronauten von Apollo 13 zurück, und wie hieß der erste indische Satellit ?
        <
        /p> <
        p >
        Hier finden Sie umfassende Informationen über < a href ="/missions" > < code > [countMissions] < /code> spannende Missionen</a > ,
        ihre Ziele und Ergebnisse. <
        /p> <
        /div> <
        /div> <
        /div> <
        /main>
    )
};

export default WelcomeComponent;