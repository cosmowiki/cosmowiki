<?php include("header.php")?>
	<main role="main" class="pure-u-2-3">
		<div id="featured" class="astronomers center">
			<h1>Astronomen</h1>
			<p>den Blick dem Himmel zugewandt</p>
		</div>
		<div id="filter" class="persons">
			<form id="filterCountry">
				<span style="font-weight: bold; ">filtern nach Land:</span>
			</form>
		</div>
		<div id="letterLinks" class="person center">
			<a href="#A">A</a> -
			<a href="#B">B</a> -
			<a href="#C">C</a> -
			<a href="#D">D</a> -
			<a href="#E">E</a> -
			<a href="#F">F</a> -
			<a href="#G">G</a> -
			<a href="#H">H</a> -
			<a href="#I">I</a> -
			<a href="#J">J</a> -
			<a href="#K">K</a> -
			<a href="#L">L</a> -
			<a href="#M">M</a> -
			<a href="#N">N</a> -
			<a href="#O">O</a> -
			<a href="#P">P</a> -
			<a href="#Q">Q</a> -
			<a href="#R">R</a> -
			<a href="#S">S</a> -
			<a href="#T">T</a> -
			<a href="#U">U</a> -
			<a href="#V">V</a> -
			<a href="#W">W</a> -
			<a href="#X">X</a> -
			<a href="#Y">Y</a> -
			<a href="#Z">Z</a>
		</div>
		<div id="dataTable" class="person">
			<div id="personTable">
				<div class="firstLetterRow">
					<!--<span class="firstLetter">
						<a name="" href="">$letter</a> name=\'$letter\'</a> 
					</span>
					<span class="firstLetterArrow">
						<a href="javascript:self.scrollTo(0,0);">&uarr;</a>
					</span>-->
				</div>

<?php
$link = mysqli_connect("localhost", "d01d6726", "tAdbJYXJhykvY7bR", "d01d6726");
mysqli_set_charset($link, "utf8");
// check connection
if (mysqli_connect_errno()) {
	printf("Keine Verbindung zur Datenbank: %s\n", mysqli_connect_error());
	exit();
}
$query = "SELECT personName, personFirstName, personProf, personCountry,
personBornY, personBornM, personBornD, personDiedY, personDiedM, personDiedD,
personDescript, personLink, type FROM persons WHERE type = '1' ORDER by personName";
if ($result = mysqli_query($link, $query)) {
// fetch object array
	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
		// merge the name array elements to a name string
		$name = array($row[personName], $row[personFirstName]);
		$name = implode(', ', array_filter($name));
		// merge the date array elements yyyy mm dd to a dd.mm.yyyy string
		$born = array($row[personBornD], $row[personBornM], $row[personBornY]);
		$died = array($row[personDiedD], $row[personDiedM], $row[personDiedY]);
		$born = implode('.', array_filter($born));
		if (!empty($born)) {
			$born = html_entity_decode('&lowast;').' '.$born;
		}
		$died = implode('.', array_filter($died));
		if (!empty($died)) {
			$died = html_entity_decode('&dagger;').' '.$died;
		}
		echo "<div class=\"personRow\">
				<div class=\"personItem\">
					<a onMouseOver=\"toggleIn('$name')\" onMouseOut=\"toggleOut('$name')\" href=$row[personLink]>$name</a>
				</div>
				<div id=\"$name\" class=\"hidden personInfoBox\">
					<div class=\"personProfession\">$row[personProf]</div>
					<div class=\"personLife\">$born   $died</div>
					<div class=\"personCountry\">$row[personCountry]</div>
					<div class=\"personInfo justify\">$row[personDescript]</div>
				</div>
			</div>";
	}
// free result set
	mysqli_free_result($result);
}
// close connection
mysqli_close($link);
?>

			</div>
		</div>
		<div id="notes">
<?php include("notes.php")?>
		</div>
	</main><!-- #main -->
<?php include("footer.php")?>