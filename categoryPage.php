<?php include '/includes/html_head.html'; ?>
    
    <div id="categoryPage" data-role="page">
		<?php include '/includes/header.html'; ?>
        <div data-role="content">
            <!--Suchfeld -->
            <!-- <form class="ui-listview-filter ui-bar-c" role="search">
	<label for="categorysearch"> Kategorien durchsuchen: </label>
	<input placeholder="Kategorien durchsuchen..." data-type="search" id="categorysearch" />
</form> -->
            <!-- Liste mit Kategorien -->
            <ul data-role="listview" data-filter="true" id="categoryView">
                <div data-role="collapsible-set" id="categoryViewListView"></div>
            </ul>
            <!-- Bearbeitung der Kategorien -->
            <label for="newCategory" class="description">Neue Kategorie hinzuf&uuml;gen:</label>

            <div data-role="fieldcontain"><input type="text" id="newCategory"/></div>
            <div data-role="controlgroup" data-type="horizontal" data-mini="true"
                 class="ui-corner-all ui-controlgroup ui-controlgroup-horizontal ui-mini">
                <div class="ui-controlgroup-controls">
                    <div data-role="button" id="newCatButton" data-icon="plus" data-corners="true" data-shadow="true"
                         data-iconshadow="true" data-wrapperels="span" data-theme="c"
                         class="ui-btn ui-btn-up-c ui-btn-icon-left ui-corner-left"><span
                            class="ui-btn-inner ui-corner-left"><span class="ui-btn-text">Hinzuf&uuml;gen</span><span
                            class="ui-icon ui-icon-plus ui-icon-shadow">&nbsp;</span></span></div>
                    <a href="index.html" data-role="button" id="delCatButton" data-icon="delete" data-corners="true"
                       data-shadow="true" data-iconshadow="true" data-wrapperels="span" data-theme="c"
                       class="ui-btn ui-btn-icon-left ui-corner-right ui-controlgroup-last ui-btn-up-c"><span
                            class="ui-btn-inner ui-corner-right ui-controlgroup-last"><span class="ui-btn-text">
						Entfernen</span><span
                            class="ui-icon ui-icon-delete ui-icon-shadow">&nbsp;</span></span></a>
                </div>
            </div>
            <!--content-->
            <script type="text/javascript">
                $ ( '#categoryPage' ).on ( 'pageshow', function () {
                    console.log ( 'CategoryPage wurde geladen.' );
                    $.mobile.showPageLoadingMsg ();
                    doLoadCategories();
                } );

            </script>
        </div>
        <!--/category-->
<?php include '/includes/footer.html'; ?>