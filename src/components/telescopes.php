<?php include("header.php")?>
	<main role="main" class="pure-u-2-3">
		<div id="featured" class="telescopes center">
			<h1>Teleskope</h1>
			<p>Augen und Ohren der Wissenschaft</p>
		</div>
		<script type="text/javascript" src="http://de.cosmowiki.de/js/telescopesTable.js"></script>
		<div id="dataArea" class="telescopes">
			<div style="text-align: center; position:relative; top:10px;">
				<img src="http://cosmowiki.de/img/loading.gif" alt="" title="Bitte warten, Daten werden geladen."/></br>Bitte warten, Daten werden geladen.
			</div>
		</div>
		<script src="http://de.cosmowiki.de/js/telescopesTableData.json"></script>
		<div id="notes">
<?php include("notes.php")?>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>