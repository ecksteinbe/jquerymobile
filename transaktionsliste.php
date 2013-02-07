<?php include '/includes/html_head.html'; ?>
<div id="transaktionsliste" data-role="page">

	<?php include '/includes/header.html'; ?>

    <div data-role="content">
        <div data-role="collapsible-set" id="transaktionen">

        </div>
    </div>
    <!--content-->
    <script type="text/javascript">
        $ ( '#transaktionsliste' ).on ( 'pageshow', function () {
            $.mobile.showPageLoadingMsg ();
            $.ajax ( {
                url: rootUrl + '/JavaBackend/rest/secure/bankaccount/'+sessionStorage.getItem('allowedBankAccountId')+'/transactions',
                dataType: 'json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function ( data, textStatus, jqXHR ) {
                    var respData = data.bodyData;
                    console.log ( respData );

                    //Pruefen ob success true ist
                    if ( data.success ) {
                        $.mobile.hidePageLoadingMsg ();
                        transactionHandlerList ( respData );
                    }
                    else {
                        transactionError ( data.errorMsg );
                    }

                    console.log ( '!!!' + data );
                    console.log ( respData[3].name );

                },
                error: function ( jqXHR, textStatus, errorThrown ) {
                    console.log ( 'Error: ' );
                    transactionError ( 'Fehler beim Request: ' + textStatus );
                    ajaxError ( function () {
                        $ ( this ).text ( "Triggered ajaxError handler." );
                    } );
                }

            } );
        } );

    </script>
</div><!-- /transaktionsliste -->
<?php include '/includes/footer.html'; ?>