<?php include("header.php")?>
	<main role="main" class="pure-u-2-3">
		<div id="featured" class="stations center">
			<h1>Raumstationen</h1>
			<p>k&uuml;nstliche Habitate im All</p>
		</div><!--
		<div id="filter" class="stats">
			<form id="filterCountry">
				<span style="font-weight: bold; ">filtern nach L&auml;ndern:</span>
			</form>
			<form id="filterDestination">
				<span style="font-weight: bold; ">filtern nach Zielen:</span>
			</form>
		</div>-->
		<div id="dataTable" class="stats">
			<div id="statsTable">

<?php
$link = mysqli_connect("localhost", "d01d6726", "tAdbJYXJhykvY7bR", "d01d6726");
mysqli_set_charset($link, "utf8");
// check connection
if (mysqli_connect_errno()) {
	printf("Keine Verbindung zur Datenbank: %s\n", mysqli_connect_error());
	exit();
}
$query = "SELECT statname, statLink, statImgLink, statImgSource, statImgLic,
statImgLicLink, statOperator, statLaunchY, statLaunchM, statLaunchD,
statDaysInOrbit, statReenterY, statReenterM, statReenterD, statCrewSize,
statDaysOccu, statVisitors, statManVis, statUnmanVis, statApo, statPeri,
statIncli, statMass, statPressVol, statDescript
FROM spacestats ORDER by id";
if ($result = mysqli_query($link, $query)) {
// fetch object array
	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		// merge the date array elements yyyy mm dd to a dd.mm.yyyy string
		$launch = array($row[statLaunchD], $row[statLaunchM], $row[statLaunchY]);
		$reenter = array($row[statReenterD], $row[statReenterM], $row[statReenterY]);
		$launch = implode('.', array_filter($launch));
		$reenter = implode('.', array_filter($reenter));
		echo "<div class=\"statRow\">
		<div class=\"statImg\"><img src=$row[statImgLink] width=\"300\"></div>
		<div class=\"statName\"><a href=$row[statLink]>$row[statName]</a></div>
		<div class=\"statOperator\">$row[statOperator]</div>
		<div class=\"statLaunch\">$launch</div>
		<div class=\"statDaysInOrbit\">$row[statDaysInOrbit]</div>
		<div class=\"statReenter\">$reenter</div>
		<div class=\"statCrewSize center\">$row[statCrewSize]</div>
		<div class=\"statDaysOccu center\">$row[statDaysOcuu]</div>
		<div class=\"statVisitors center\">$row[statVisitors]</div>
		<div class=\"statManVis center\">$row[statManVis]</div>
		<div class=\"statUnmanVis center\">$row[statUnmanVis]</div>
		<div class=\"statApo\">$row[statApo]</div>
		<div class=\"statPeri\">$row[statPeri]</div>
		<div class=\"statIncli\">$row[statIncli]</div>
		<div class=\"statMass\">$row[statMass]</div>
		<div class=\"statPressVol\">$row[statPressVol]</div>
		</div>";
	}
// free result set
	mysqli_free_result($result);
}
// close connection
mysqli_close($link);
?>

		</div>
		<div id="notes">
<?php include("notes.php")?>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>