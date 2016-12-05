<?php include("header.php")?>
	<main role="main" class="pure-u-2-3">
		<div id="featured" class="observ center">
			<h1>Observatorien</h1>
			<p>Zentren der Beobachtung</p>
		</div>
		<script type="text/javascript" src="http://de.cosmowiki.de/js/observTable.js"></script>
		<div id="dataArea" class="observ">
			<div style="text-align: center; position:relative; top:10px;">
				<img src="http://cosmowiki.de/img/loading.gif" alt="" title="Bitte warten, Daten werden geladen."/></br>Bitte warten, Daten werden geladen.
			</div>
		</div>
		<script src="http://de.cosmowiki.de/js/observTableData.json"></script>
		<div id="notes">
<?php include("notes.php")?>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>