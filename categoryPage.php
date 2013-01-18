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
    		<div data-role="collapsible-set" id="categoryViewListView" ></div> 
    	</ul>
    	<!-- Bearbeitung der Kategorien --> 
    	<div>Neue Kategorie hinzuf&uuml;gen:<br/></div>
    	<div data-role="fieldcontain" id="categoryAdd"><input type="text" /><input type="submit" value="Kategorie hinzuf&uuml;gen" data-inline="true"><input type="submit" value="Kategorie entfernen" data-inline="true"></div>
    </div><!--content-->
	<script type="text/javascript">
		$('#categoryPage').on('pageshow',function(){
	        $.mobile.showPageLoadingMsg();
	        $.ajax({
	        	url: rootUrl+'/JavaBackend/rest/secure/bankaccount/1/categories', 
	          	dataType:'json',
	            xhrFields: {
	                withCredentials:true
	            },
	            crossDomain:true,
	            success: function (data, textStatus, jqXHR){
	                var respData = data.bodyData;
	                console.log(respData);
	                //Pruefen ob success true ist
	                if(data.success){
	                    $.mobile.hidePageLoadingMsg();
	                    categoryHandler(respData);
	                    //liveSearch(respData);
	                }
	                else{
	                    categoryError(data.errorMsg);
	                }
	                console.log(respData[1].name); 
	            },
                error: function(jqXHR, textStatus, errorThrown){
                    console.log('Error: ');
                    transactionError('Fehler beim Request: ' + textStatus);
                    ajaxError(function() {
                         $(this).text( "Triggered ajaxError handler." );
                    });
                }	                   
	            });  
	  	});
	  
    </script> 
    </div><!--/category-->
<?php include '/includes/footer.html'; ?>