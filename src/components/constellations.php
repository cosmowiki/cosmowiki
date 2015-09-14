<?php include("header.php")?>
<script type="text/javascript">
$(document).ready(function() { 
	$("#constTable").tablesorter(); 
}
);
</script>
	<main role="main" class="pure-u-2-3">
		<div id="featured" class="const center">
			<h1>Sternbilder</h1>
			<p>Figuren am Firmament</p>
		</div>
		<div id="filter" class="const">
			<form id="filterNorthSouth">
				<span style="font-weight: bold; ">filtern nach Halbkugel:</span>
				<select name="northsouth">
					<option selected>beide</option>
					<option>n&ouml;rdlich</option>
					<option>s&uuml;dlich</option>
				</select>
			</form>
		</div>
		<div id="dataTable" class="const">
			<table id="constTable" class="tablesorter">
				<thead>
					<tr id="constHeader">
						<th class="constName left">Name</th>
						<th class="constLatin left">latein. Name</th>
						<th class="constShort left">kurz</th>
						<th class="constAuthor left">Autor</th>
						<th class="constY left">Jahr</th>
						<th class="constSphere left">N / S</th>
						<th class="constVisFrom left">von</th>
						<th class="constVisTo left">bis</th>
						<th class="constSqDeg left">deg<sup>2</sup></th>
						<th class="starsOver3Mag center">>3<sup>m</sup></th>
						<th class="starsOver4Mag center">>4<sup>m</sup></th>
						<th class="constBrightStar left">hellster Stern</th>
						<th class="constMagMax left">Mag<sub>max</sub></th>
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
$query = "SELECT constName, constLink, constMapLink, constListLink, constLatin,
constShort, constAuthor, constAuthorLink, constY, constSphere, constVisFrom,
constVisTo, constSqDeg, starsOver3Mag, starsOver4Mag, constMagMax,
constBrightStar, constBrightStarLink
FROM constellations ORDER by constName";
if ($result = mysqli_query($link, $query)) {
// fetch object array
	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
// set SPACE for every value = 0
		foreach ($row as $key => $value) {
			if (empty($value)) {
				$row[$key] = '&nbsp;';
			}
		}
		echo "<tr class=\"constRow\">
			<td class=\"constName\"><a href=$row[constLink]>$row[constName]</a></td>
			<td class=\"constLatin\">$row[constLatin]</td>
			<td class=\"constShort\">$row[constShort]</td>
			<td class=\"constAuthor\"><a href=$row[constAuthorLink]>$row[constAuthor]</a></td>
			<td class=\"constY\">$row[constY]</td>
			<td class=\"constSphere\">$row[constSphere]</td>
			<td class=\"constVisFrom\">$row[constVisFrom]</td>
			<td class=\"constVisTo\">$row[constVisTo]</td>
			<td class=\"constSqDeg\">$row[constSqDeg]</td>
			<td class=\"starsOver3Mag center\">$row[starsOver3Mag]</td>
			<td class=\"starsOver4Mag center\">$row[starsOver4Mag]</td>
			<td class=\"constBrightStar\"><a href=$row[constBrightStarLink]>$row[constBrightStar]</a></td>
			<td class=\"constMagMax\">$row[constMagMax]</td>
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
		</div>
		<div id="notes">
<?php include("notes.php")?>
			<ol class="small">
				<li>
					N / S - Lage des Sternbildes innerhalb der <a href="https://de.wikipedia.org/wiki/Himmelskugel" target="_blank" title="Himmeskugel">Himmelskugel.</a>
					Dabei steht N f&uuml;r die Nord- und S f&uuml;r die S&uuml;dhalbkugel. Mit N S oder S N gekennzeichnete Sternbilder liegen ziemlich mittig auf dem Himmels&auml;quator.
					Bei Ns und Sn liegt nur ein sehr kleiner Teil des Sternbildareals auf der mit dem Kleinbuchstaben bezeichneten Halbkugel.</li>
				<li>
					deg<sup>2</sup> - Gibt die Fl&auml;che (Raumwinkel) des Sternbildes in <a href="https://de.wikipedia.org/wiki/Quadratgrad" target="_blank" title="Quadratgrad">Quadratgrad an.</a>
					Das Himmelsgew&ouml;lbe umfasst 41.253 Quadratgrade, die sich auf die 88 Sternbilder verteilen.
					Die Grenzen der Sternbilder wurden 1928 von der IAU festgelegt und genehmigt.
				</li>
				<li>
					>3<sup>m</sup> - Zahl der Sterne im Sternbild mit <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbarer Helligkeit</a> &uuml;ber 3 mag
				</li>
				<li>
					>4<sup>m</sup> - Zahl der Sterne im Sternbild mit <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbarer Helligkeit</a> &uuml;ber 4 mag
				</li>
				<li>
					Mag<sub>max</sub> - <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbare Helligkeit</a> des hellsten Sterns im Sternbild in mag
				</li>
			</ol>
		</div>
	</main<!-- #main -->
<?php include("footer.php")?>