import React from 'react';
import Notes from './notes';

export default class SolarSystemComponent {

  render() {
    return (
    	<main role="main" class="pure-u-2-3">
    		<div id="featured" class="solsys center">
    			<h1>Sonnensystem</h1>
    			<p>unsere kosmische Heimat</p>
    		</div>
    		<script type="text/javascript" src="js/solsysTable.js"></script>
    		<div id="dataTable" class="solsys">
    			<div id="solsysTable">
          </div>
        </div>
        <Notes />
      </main>
    );
  }
}
//<?php include("header.php")?>
//	<main role="main" class="pure-u-2-3">
//		<div id="featured" class="solsys center">
//			<h1>Sonnensystem</h1>
//			<p>unsere kosmische Heimat</p>
//		</div>
//		<script type="text/javascript" src="js/solsysTable.js"></script>
//		<div id="dataTable" class="solsys">
//			<div id="solsysTable">
//
//<?php
////$link = mysqli_connect("localhost", "d01d6726", "tAdbJYXJhykvY7bR", "d01d6726");
////mysqli_set_charset($link, "utf8");
////// check connection
////if (mysqli_connect_errno()) {
////	printf("Keine Verbindung zur Datenbank: %s\n", mysqli_connect_error());
////	exit();
////}
////$query = "SELECT  FROM solsys ORDER by order";
////if ($result = mysqli_query($link, $query)) {
////// fetch object array
////	while ($row = mysqli_fetch_array($result, MYSQLI_ASSOC)) {
////		echo "<div class=\"solsysRow $category $name $parent\">
////					<div class=\"solsysItem\">
////						<a onMouseOver=\"toggleIn($name)\" onMouseOut=\"toggleOut($name)\" href=\'$link\'>$name</a>
////					</div>
////					<div class=\"solsysInfoBox $category $name $parent\">
////						<!--<div class=\"solsysParent\">geh&ouml;rt zu: $parent</div>
////						<div class=\"solsysCategory\">Kategorie: $category</div>-->
////						<div class=\"solsysInfo\">$info</div>
////					</div>
////				</div>";
////	}
////// free result set
////	mysqli_free_result($result);
////}
////// close connection
////mysqli_close($link);
//?>
//			</div>
//		</div>
//		<!--<script src="http://de.cosmowiki.de/js/solsysTableData.json"></script>-->
//		<div id="notes">
//<?php include("notes.php")?>
//		</div>
//	</main><!-- #main -->
//<?php include("footer.php")?>