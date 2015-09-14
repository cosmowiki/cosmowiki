<?php include("header.php")?>
	<main role="main" class="pure-u-2-3">
		<div id="featured" class="places center">
			<h1>Orte</h1>
			<p>Fundst&auml;tten - Observatorien - Startpl&auml;tze</p>
		</div>
		<ul id="switch">
			<li id="mapSwitch">
				<a  class="center" href="javascript:showMap()">Karte</a>
			</li>
			<li id="tableSwitch">
				<a  class="center" href="javascript:showTable()">Tabelle</a>
			</li>
		</ul>
		<!--<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false&language=de"></script>
		<script type="text/javascript" src="http://de.cosmowiki.de/js/markerclusterer.js">
		<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
		<script type="text/javascript" src="http://de.cosmowiki.de/js/placesMap.js"></script>
		<script type="text/javascript" src="http://de.cosmowiki.de/js/placesTable.js"></script>-->
		<div id="map_canvas">
			<div style="text-align:center; position:relative; top:250px;">
				<!--<img src="http://cosmowiki.de/img/loading.gif" alt="" title="Bitte warten, Daten werden geladen."/></br>Bitte warten, Daten werden geladen.-->
				demn&auml;chst ...
			</div>
		</div>
		<div id="dataTable" class="places"></div>
		<!--<script src="http://de.cosmowiki.de/js/placesMapData.json"></script>
		<script src="http://de.cosmowiki.de/js/placesTableData.json"></script>-->
		<div id="notes">
<?php include("notes.php")?>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>