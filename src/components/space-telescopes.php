<?php include("header.php")?>
	<main role="main" class="pure-u-2-3">
		<div id="featured" class="spacetele">
			<h1>Weltraumteleskope</h1>
			<p>Augen und Ohren im All</p>
		</div>
		<script type="text/javascript" src="http://de.cosmowiki.de/js/spaceteleTable.js"></script>
		<div id="dataArea" class="spacetele">
			<div style="text-align: center; position:relative; top:10px;">
				<img src="http://cosmowiki.de/img/loading.gif" alt="" title="Bitte warten, Daten werden geladen."/></br>Bitte warten, Daten werden geladen.
			</div>
		</div>
		<script src="http://de.cosmowiki.de/js/spaceteleTableData.json"></script>
		<div id="notes">
<?php include("notes.php")?>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>
