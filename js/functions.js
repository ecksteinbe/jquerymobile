function showErrorMsg () {
    var h2 = $ ( '.loginErrMsg' );
    h2.fadeIn ( 900, function () {
        h2.fadeOut ( 900 );
    } );
}

function showErrorXMLHttpRequest ( jqXHR, textStatus, errorThrown ) {
    console.error ( 'Fehler nach XMLHttpRequest: ' + textStatus + errorThrown );
}

function transactionHandlerList ( data ) {
    console.log ( data );
    $ ( '#transaktionen' ).empty ();
    $.each ( data, function ( i, item ) {
        $ ( '<div data-role="collapsible" data-collapsed="false" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d"><h3>' + item.name + '</h3><a href="#transaktionen"><img src=\" ' + item.categoryIcon + '\" /></a>Id: ' + item.id + '<br />Billingdate: ' + item.billingDate + '<br />Amount: ' + item.amount + '</div>' ).appendTo ( '#transaktionen' );
    } );
    $ ( "#transaktionen" ).collapsibleset ( "refresh" );
}

function transactionError ( data ) {
    console.error ( 'Fehler beim Abruf von \"data\" beim Aufruf der Transaktionen ' + data );
}

function filialHandler ( data ) {
    console.log ( data );
    $ ( '#filialen' ).empty ();
    $.each ( data, function ( i, item ) {
        $ ( '<div data-role="collapsible" data-collapsed="false" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d"><h3>' + item.name + '</h3><a href="#filialen"><img src=\" ' + item.icon + '\" /></a>Id: ' + item.id + '<br />Location: ' + item.lat + ' ' + item.lng + '</div>' ).appendTo ( '#filialen' );
    } );
    $ ( '#filialen' ).collapsibleset ( 'refresh' );
}

function filialError ( data ) {
    console.err ( 'Fehler beim Abruf von \"data\" beim Aufruf der Filialen ' + data );
}


function doLoadCategories(){
    $.ajax ( {
        url: rootUrl + '/JavaBackend/rest/secure/bankaccount/'+sessionStorage.getItem('allowedBankAccountId')+'/categories',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function ( data, textStatus, jqXHR ) {
            var respData = data.bodyData;
            //Pruefen ob success true ist
            if ( data.success ) {
                $.mobile.hidePageLoadingMsg ();
                categoryHandler ( respData );
            }
            else {
                categoryError ( data.errorMsg );
            }
            //console.log ( 'Beispieldaten aus bodydata: ' + respData[1].name );
        },
        error: function ( jqXHR, textStatus, errorThrown ) {
            console.log ( 'Error: ' );
            categoryError ( 'Fehler beim Request: ' + textStatus );
            ajaxError ( function () {
                $ ( this ).text ( "Triggered ajaxError handler." );
            } );
        }
    } );
}
// Ausgabe der Kategorien 
function categoryHandler ( data ) {
    console.log ( data );
    $ ( '#categoryView' ).empty ();
    $.each ( data, function ( i, item ) {
        $ ( '<li data-role="list-divider" id="searchItems" data-link="catId-'+item.id+'"> \
                <div style="display:inline;" class="ui-li-heading btn-text-name">' + item.name + '</div> \
                <div class="ui-icon ui-icon-plus ui-icon-shadow listIcon">&nbsp;</div> \
                </div> \
            </li> \
            <!--<li style="display:none">ID: ' + item.name + '<br/></li>--> \
            <div data-role="collapsibleset"> \
                <div data-role="collapsible"> \
                    <ul data-role="listview" data-filter="true"> \
                        <li class="catId-'+item.id+' hidden"> \
                            <img src="'+item.iconUrl+'" style="float:left; width:40px;"/> \
                            ID: ' + item.id + '<br/> \
                        </li> \
                    </ul> \
                </div> \
            </div>' ).appendTo ( '#categoryView' );
    } );

    $ ( function () {
        $ ( '[data-role="list-divider"]' ).toggle ( function () {
            $ ( '.' + $ ( this ).attr ( 'data-link' ) ).addClass ( 'show' );
            $ ( this ).children ().removeClass ( 'ui-icon-plus' ).addClass ( 'ui-icon-minus' );
        }, function () {
            $ ( '.' + $ ( this ).attr ( 'data-link' ) ).removeClass ( 'show' );
            $ ( this ).children ().removeClass ( 'ui-icon-minus' ).addClass ( 'ui-icon-plus' );
        } );
    } );
    //$ ( '#categoryViewListView' ).collapsibleset ( 'refresh' );
    $ ( '#categoryView' ).listview ( 'refresh' );
}

$ ( '#newCatButton' ).on ( 'click', function () {
    var catName = $ ( '#newCategory' ).val ();
    var jsonObject =
        {
            name: catName    
        };
    alert ( $ ( '#newCategory' ).val () );
    $.ajax ( {
        type: 'POST',
        url: rootUrl + '/JavaBackend/rest/secure/bankaccount/'+sessionStorage.getItem('allowedBankAccountId')+'/categories',
        dataType: 'json',
        contentType:'application/json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        data: JSON.stringify(jsonObject),
        success: function ( data, textStatus, jqXHR ) {
            var respData = data.bodyData;
            console.log ( 'Kategorie erfolgreich hinzugefügt: ' + respData.name );
            doLoadCategories();
        },
        error: function ( jqXHR, textStatus, errorThrown ) {
            console.log ( 'Ajax-Request fehlgeschlagen: ' + jqXHR + errorThrown );
        }
    } );
} );

function categoryError ( data ) {
    console.error ( 'Fehler beim Abruf von \"data\" beim Aufruf der Kategorien ' + data );
}

function drawChart ( data ) {
    // Create the data table.
    var googleData = new google.visualization.DataTable ();
    googleData.addColumn ( 'string', 'Topping' );
    googleData.addColumn ( 'number', 'Slices' );
    $.each ( data, function ( i, item ) {
        googleData.addRow ( [item.name, item.value1] );
    } );

    // Set chart options
    var options = {'title': 'Ausgaben by Category', 'is3D': true};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart ( document.getElementById ( 'chart_div' ) );
    chart.draw ( googleData, options );
}

function chartsError ( data ) {
    console.err ( 'Fehler beim Abruf von \"data\" beim Aufruf der Charts ' + data );
}