<?php include("header.php")?>
	<main role="main" class="pure-u-2-3">
		<div id="featured" class="chronicle center">
			<h1>Chronik</h1>
			<p>Meilensteine der Astronomie und Raumfahrt</p>
		</div>
		<div id="dataTable">
			<div id="timeline">
				<div id="timelineHeader"></div>

<?php
$link = mysqli_connect("localhost", "d01d6726", "tAdbJYXJhykvY7bR", "d01d6726");
mysqli_set_charset($link, "utf8");
// check connection
if (mysqli_connect_errno()) {
	printf("Keine Verbindung zur Datenbank: %s\n", mysqli_connect_error());
	exit();
}
$query = "SELECT chronicleY, chronicleM, chronicleD, chronicleLoc,
chronicleEvent, chronicleLink, chronicleLat, chronicleLong, type
FROM chronicle";
if ($result = mysqli_query($link, $query)) {
/* fetch object array */
	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		$date = array($row[chronicleD], $row[chronicleM], $row[chronicleY]);
		$date = implode('.', array_filter($date));
		echo "<div class=\"timelineRow\">
		<div class=\"timelineDate right\">$date</div>
		<div class=\"timelinePlace\">$row[chronicleLoc]</div>
		<div class=\"timelineEvent\"><a href=$row[chronicleLink]>$row[chronicleEvent]</a></div>
		</div>";
	}
// free result set
	mysqli_free_result($result);
}
// close connection
mysqli_close($link);
?>

				<div id="timelineFooter"></div>
			</div>
		</div>
		<div id="notes">
<?php include("notes.php")?>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>