import React from 'react';
import Notes from './notes';

export default class SolarSystemComponent {

  render() {
    return (
    	<main role="main" className="pure-u-2-3 pure-u-lg-1">
    		<div id="featured" className="solsys center">
    			<h1>Sonnensystem</h1>
    			<h3>unsere kosmische Heimat</h3>
    		</div>
    		<script type="text/javascript" src="js/solsysTable.js"></script>
    		<div id="dataTable" className="solsys">
    			<div id="solsysTable">
            missing data ... got no JSON file for this :(
          </div>
        </div>
        <Notes />
      </main>
    );
  }
}
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
