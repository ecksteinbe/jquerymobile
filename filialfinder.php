<?php include '/includes/html_head.html'; ?>

<div id="filialfinder" data-role="page">

	<?php include '/includes/header.html'; ?>

    <div data-role="content">
        <div data-role="collapsible-set" id="filialen"></div>
        <!--<ul data-role="listview" id="filialen">
            <script type="text/javascript">
                
            </script>
        </ul>-->
    </div>
    <!--content-->
    <script type="text/javascript">
       
        navigator.geolocation.getCurrentPosition(function(position){
            
            var lati = position.coords.latitude;
            var longi = position.coords.longitude;

            alert(lati + ', ' + longi);

            $ ( '#filialfinder' ).on ( 'pageshow', function () {
                $.mobile.showPageLoadingMsg ();
                $.ajax ( {
                    url: rootUrl + '/JavaBackend/rest/secure/places?location=' + lati + ',' + longi,
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    success: function ( data, textStatus, jqXHR ) {
                        $.mobile.hidePageLoadingMsg ();
                        var respData = data.results;
                        filialHandler ( respData );
                        console.log ( respData );
                        console.log ( respData[0].name );
                    },
                    error: function ( jqXHR, textStatus, errorThrown ) {
                        console.log ( 'Error: ' );
                    }

                } );
            } );
        } );
    </script>
</div><!--/filialfinder-->
<?php include '/includes/footer.html'; ?>