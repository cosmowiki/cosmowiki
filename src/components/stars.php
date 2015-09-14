<?php include("header.php")?>
<script type="text/javascript">
$(document).ready(function() { 
	$("#starsTable").tablesorter(); 
}
);
</script>
	
	<main role="main" class="pure-u-2-3">
		<div id="featured" class="stars center">
			<h1>Sterne</h1>
			<p>strahlende Objekte im All</p>
		</div>
		<div id="filter" class="stars">
			<form id="filterNorthSouth">
				<span style="font-weight: bold; ">filtern nach Halbkugel:</span>
				<select name="northsouth">
					<option selected>beide</option>
					<option>n&ouml;rdlich</option>
					<option>s&uuml;ddlich</option>
				</select>
			</form>
			<form id="filterConstellation">
				<span style="font-weight: bold; ">filtern nach Sternbild:</span>
				<select name="const">
					<option selected>alle</option>
					<option>foo</option>
					<option>bar</option>
				</select>
			</form>
		</div>
		<div id="dataTable" class="stars">
			<table id="starsTable" class="tablesorter">
				<thead>
					<tr id="starsHeader">
						<th class="starHistName left">historischer Name</th>
						<th class="starBay left">Bayer-Bezeichnung</th>
						<th class="starShort left">kurz</th>
						<th class="starConst left">Sternbild</th>
						<th class="starRekt left">Rektaszension</th>
						<th class="starDekli left">Deklination</th>
						<th class="starAppMag left">mag</th>
						<th class="starSpektr left">Klasse</th>
						<th class="starDist left">Lj</th>
						<th class="starMass left">M<sub>&#9737;</sub></th>
						<th class="starRadius left">R<sub>&#9737;</sub></th>
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
$query = "SELECT starHistName, starLink, starAltName, starBay, starShort,
starFlam, starHr, starHd, starHip, starSao, starConst, constLink, starAppMag,
starSpektr, starDist, starRekt, starDekli, starMass, starRadius
FROM stars";
if ($result = mysqli_query($link, $query)) {
// fetch object array
	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
// set SPACE for every value = 0
		foreach ($row as $key => $value) {
			if (empty($value)) {
				$row[$key] = '&nbsp;';
			}
		}
		echo "<tr class=\"starsRow\">
			<td class=\"starHistName\">
				<a href=$row[starLink] onMouseOver=\"showTooltip(this)\" onMouseOut=\"hideTooltip(this)\">$row[starHistName]</a>
				<div class=\"starInfoBox\">
					<p>
						<strong>alternative Namen:</strong> $row[starAltName]</p>
					<p>
						<strong>Bezeichnung nach:</strong><br>
						<a href=\"https://de.wikipedia.org/wiki/Bright-Star-Katalog\" target=\"_blank\" title=\"Bright-Star-Katalog\">Bright-Star-Katalog</a>: HR $row[starHr]<br>
						<a href=\"https://de.wikipedia.org/wiki/Henry-Draper-Katalog\" target=\"_blank\" title=\"Henry-Draper-Katalog\">Henry-Draper-Katalog</a>: HD $row[starHd]<br>
						<a href=\"https://de.wikipedia.org/wiki/Hipparcos-Katalog\" target=\"_blank\" title=\"Hipparcos-Katalog\">Hipparcos-Katalog</a>: HIP $row[starHip]<br>
						<a href=\"https://de.wikipedia.org/wiki/SAO-Katalog\" target=\"_blank\" title=\"SAO-Katalog\">SAO-Katalog</a>: SAO $row[starSao]
					</p>
				</div>
			</td>
			<td class=\"starBay\">$row[starBay]</td>
			<td class=\"starShort\">$row[starShort]</td>
			<td class=\"starConst\"><a href=$row[constLink]>$row[starConst]</a></td>
			<td class=\"starRekt\">$row[starRekt]</td>
			<td class=\"starDekli\">$row[starDekli]</td>
			<td class=\"starAppMag\">$row[starAppMag]</td>
			<td class=\"starSpektr\">$row[starSpektr]</td>
			<td class=\"starDist\">$row[starDist]</td>
			<td class=\"starMass\">$row[starMass]</td>
			<td class=\"starRadius\">$row[starRadius]</td>
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
					α = Alpha, β = Beta, γ = Gamma, δ = Delta, ε = Epsilon, ζ = Zeta, η = Eta, θ = Theta, ι = Iota, κ = Kappa, λ = Lambda,
					μ = My, ν = Ny, ξ = Xi, ο = Omikron, π = Pi, ρ = Rho, σ = Sigma, τ = Tau, υ = Ypsilon, φ = Phi, χ = Chi, ψ = Psi, ω = Omega
				</li>
				<li>
					Rekt = <a href="https://de.wikipedia.org/wiki/Rektaszension" target="_blank" title="Rektaszension">Rektaszension</a>
				</li>
				<li>
					Dekli = <a href="https://de.wikipedia.org/wiki/Deklination_(Astronomie)" target="_blank" title="Deklination">Deklination</a>
				</li>
				<li>
					mag = <a href="https://de.wikipedia.org/wiki/Scheinbare_Helligkeit" target="_blank" title="scheinbare Helligkeit">scheinbare Helligkeit</a> in mag
				</li>
				<li>
					Klasse = <a href="https://de.wikipedia.org/wiki/Spektralklasse" target="_blank" title="Spektralklasse">Spektralklasse</a>
				</li>
				<li>
					Lj = <a href="https://de.wikipedia.org/wiki/Lichtjahr" target="_blank" title="Lichtjahr">Entfernung Erde-Stern in Lichtjahren</a>
				</li>
				<li>
					M<sub>&#9737;</sub> = <a href="https://de.wikipedia.org/wiki/Sonnenmasse" target="_blank" title="Sonnenmassen">Sonnenmassen</a>
				</li>
				<li>
					R<sub>&#9737;</sub> = <a href="https://de.wikipedia.org/wiki/Sonnenradius" target="_blank" title="Sonnenradien">Sonnenradien</a>
				</li>
			</ol>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>