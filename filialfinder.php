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
        $ ( '#filialfinder' ).on ( 'pageshow', function () {
            $.mobile.showPageLoadingMsg ();
            $.ajax ( {
                url: rootUrl + '/JavaBackend/rest/secure/places?location=48.13661,11.57709',
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
    </script>
</div><!--/filialfinder-->
<?php include '/includes/footer.html'; ?>