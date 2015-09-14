<?php include("header.php")?>
<script type="text/javascript">
$(document).ready(function() { 
	$("#missionsTable").tablesorter( {dateFormat: 'yyyy/MM/dd'} ); 
}
);
</script>
	<main role="main" class="pure-u-2-3">
		<div id="featured" class="missions center">
			<h1>Missionen</h1>
			<p>bemannte und unbemannte Raumfahrtmissionen</p>
		</div>
		<div id="filter" class="missions">
			<form id="filterCountry">
				<span style="font-weight: bold; ">filtern nach L&auml;ndern:</span>
			</form>
			<form id="filterDestination">
				<span style="font-weight: bold; ">filtern nach Zielen:</span>
			</form>
		</div>
		<div id="dataTable" class="missions">
			<table id="missionsTable" class="tablesorter">
				<thead>
					<tr id="missionsHeader">
						<th class="missionLaunch center">Start</th>
						<th class="missionName left">Name</th>
						<th class="missionCountry left">Land</th>
						<th class="missionRocket left">Tr&auml;ger</th>
						<th class="missionPad left">Startplatz</th>
						<th class="missionDest left">Ziel</th>
						<th class="missionCrew left">Crew</th>
						<th class="missionDuration left">Dauer</th>
						<th class="missionEnd center">Ende</th>
					</tr>
				</thead>
				<tbody>

<?php
$link = mysqli_connect("localhost", "d01d6726", "tAdbJYXJhykvY7bR", "d01d6726");
mysqli_set_charset($link, "utf8");
// check connection
if (mysqli_connect_errno()) {
	printf("Keine Verbindung zur Datenbank: %s\n", mysqli_connect_error());
	exit();
}
$query = "SELECT missionLaunch, missionName, missionCountry, missionRocket,
rocketLink, missionPad, padLink, missionCrew, missionDest, missionLat,
missionLong, missionDuration, missionEnd, missionLink, missionDescript
FROM missions ORDER by missionLaunch";
if ($result = mysqli_query($link, $query)) {
// fetch object array
	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
// set SPACE for every value = 0
		foreach ($row as $key => $value) {
			if (empty($value)) {
				$row[$key] = '&nbsp;';
			}
		}
// change date format from yyyy-mm-dd to dd.mm.yyyy
		$launch = explode("-", $row[missionLaunch]);
		if ($launch[1] != 0) {
			$launch = $launch[2].".".$launch[1].".".$launch[0];
		}
		else {
			$launch = '&nbsp;';
		}
		$end = explode("-", $row[missionEnd]);
		if ($end[1] != 0) {
			$end = $end[2].".".$end[1].".".$end[0];
		}
		else {
			$end = '&nbsp;';
		}
		echo "<tr class=\"missionsRow\">
		<td class=\"missionLaunch center\">$launch</td>
		<td class=\"missionName\"><a href=$row[missionLink]>$row[missionName]</a></td>
		<td class=\"missionCountry\">$row[missionCountry]</td>
		<td class=\"missionRocket\"><a href=$row[rocketLink]>$row[missionRocket]</a></td>
		<td class=\"missionPad\"><a href=$row[padLink]>$row[missionPad]</a></td>
		<td class=\"missionDest\">$row[missionDest]</td>
		<td class=\"missionCrew center\">$row[missionCrew]</td>
		<td class=\"missionDuration\">$row[missionDuration]</td>
		<td class=\"missionEnd center\">$end</td>
		</tr>";
	}
// free result set
	mysqli_free_result($result);
}
// close connection
mysqli_close($link);
?>
			</tbody>
		</table>
		<div id="notes">
<?php include("notes.php")?>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>