<?php include("header.php")?>
	<main role="main" class="pure-u-2-3">
		<div id="siteTitle" class="satellites">
			<h1>Satelliten</h1>
			<p>messen, beobachten, &uuml;bertragen</p>
		</div>
		<script type="text/javascript" src="http://de.cosmowiki.de/js/satellitesTable.js"></script>
		<div id="dataArea" class="satellites">
			<div style="text-align: center; position:relative; top:10px;">
				<img src="http://cosmowiki.de/img/loading.gif" alt="" title="Bitte warten, Daten werden geladen."/></br>Bitte warten, Daten werden geladen.
			</div>
		</div>
		<script src="http://de.cosmowiki.de/js/satellitesTableData.json"></script>
		<div id="notes" className="pure-u-1">
<?php include("notes.php")?>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>
