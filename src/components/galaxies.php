<?php include("header.php")?>
	<main role="main" class="pure-u-2-3">
		<div id="featured" class="galaxies">
			<h1>Galaxien</h1>
			<p>ferne Sternenwelten</p>
		</div>
		<script type="text/javascript" src="http://de.cosmowiki.de/js/galaxiesTable.js"></script>
		<div id="dataArea" class="galaxies">
			<div style="text-align: center; position:relative; top:10px;">
				<img src="http://cosmowiki.de/img/loading.gif" alt="" title="Bitte warten, Daten werden geladen."/></br>Bitte warten, Daten werden geladen.
			</div>
		</div>
		<script src="http://de.cosmowiki.de/js/galaxiesTableData.json"></script>
		<div id="notes">
<?php include("notes.php")?>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>
