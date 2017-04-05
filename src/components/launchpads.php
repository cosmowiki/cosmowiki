<?php include("header.php")?>
	<main role="main" class="pure-u-2-3">
		<div id="siteTitle" class="launchpads">
			<h1>Startpl&auml;tze</h1>
			<p>3 ... 2 ... 1 ... Lift-off!</p>
		</div>
		<script type="text/javascript" src="http://de.cosmowiki.de/js/launchpadsTable.js"></script>
		<div id="dataArea" class="launchpads">
			<div style="text-align: center; position:relative; top:10px;">
				<img src="http://cosmowiki.de/img/loading.gif" alt="" title="Bitte warten, Daten werden geladen."/></br>Bitte warten, Daten werden geladen.
			</div>
		</div>
		<script src="http://de.cosmowiki.de/js/launchpadsTableData.json"></script>
		<div id="notes" className="pure-u-1">
<?php include("notes.php")?>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>
