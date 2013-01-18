function showErrorMsg(){
	var h2 = $('.loginErrMsg');
	h2.fadeIn(900, function(){
		h2.fadeOut(900);
	});
};

function showErrorXMLHttpRequest(jqXHR, textStatus, errorThrown){
	console.error('Fehler nach XMLHttpRequest: ' + textStatus + errorThrown);
}

function transactionHandlerList(data){
	console.log(data);
	$('#transaktionen').empty();
	$.each(data, function(i,item){
        $('<div data-role="collapsible" data-collapsed="false" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d"><h3>'+item.name+'</h3><a href="#transaktionen"><img src=\" ' + item.categoryIcon + '\" /></a>Id: ' + item.id + '<br />Billingdate: ' + item.billingDate + '<br />Amount: ' + item.amount +'</div>').appendTo('#transaktionen');
        });
    $( "#transaktionen" ).collapsibleset( "refresh" );
}

function transactionError(data){
	console.err('Fehler beim Abruf von \"data\" beim Aufruf der Transaktionen ' + data);
}

function filialHandler(data){
	console.log(data);
	$('#filialen').empty();
    $.each(data, function(i,item){
    	$('<div data-role="collapsible" data-collapsed="false" data-collapsed-icon="arrow-r" data-expanded-icon="arrow-d"><h3>'+item.name+'</h3><a href="#filialen"><img src=\" ' + item.icon  + '\" /></a>Id: ' + item.id + '<br />Location: ' +item.lat+ ' ' +item.lng+'</div>').appendTo('#filialen');
        });
    $('#filialen').collapsibleset('refresh');
}

function filialError(data){
	console.err('Fehler beim Abruf von \"data\" beim Aufruf der Filialen ' + data);
}

// Ausgabe der Kategorien 
function categoryHandler(data){
   console.log(data);
    $('#categoryView').empty();
    $.each(data, function(i,item){
        $('<li data-role="list-divider" id="searchItems" data-link="farmanimals"><h3><span class="btn-text-name">'+item.name+'</span></h3><span class="ui-icon ui-icon-plus ui-icon-shadow listIcon">&nbsp;</span></li><li style="display:none">ID: '+item.name+'<br/></li><div data-role="collapsibleset"><div data-role="collapsible"><ul data-role="listview"><li>ID: '+item.id+'<br/></li></ul></div></div>').appendTo('#categoryView');
        }); 
    
    $(function(){
    $('[data-role="list-divider"]').toggle(function(){
        $('.'+$(this).attr('data-link')).addClass('show');
        $(this).children().removeClass('ui-icon-plus').addClass('ui-icon-minus');        
      },function(){
        $('.'+$(this).attr('data-link')).removeClass('show');
        $(this).children().removeClass('ui-icon-minus').addClass('ui-icon-plus');
      });
    });

    $('#categoryViewListView').collapsibleset('refresh');
    $('#categoryView').listview('refresh'); 
}

/*
// Ausgabe der Kategorien 
function categoryHandler(data){
   console.log(data);
    $('#categoryView').empty();
    $.each(data, function(i,item){
        $('<div data-role="collapsible" data-filter="true" id="searchItems"><h3><span class="btn-text-name">'+item.name+'</span></h3><li>ID: '+item.id+'<br/></li><li><a href="includes/header.html" target="_blank">a</a><br/></li><li><a href="includes/footer.html" target="_blank">f</a></li></div>').appendTo('#categoryView');
        }); 
    //$('#categoryViewListView').listview('refresh');
    $('#categoryView').collapsibleset('refresh'); 
}

function liveSearch(data){
    // ausführen wenn seite komplett geladen
        $(document).ready(function()
        {
            // 1 - live-search darstellung
            $("#categorySearch").bind("keyup", function()
            {
                //$("#categorySearch").show();
                var searchString = $("#searchBox").val();
                //alert(searchString);
                            
                // nur suchen, wenn minimum 1 buchstabe im eingabefeld ist
                if (searchString.length > 0)
                {
                    //$("#searchItems").show();
                    $('#categoryView').collapsibleset('refresh'); 
                    $("#categoryView").each(function(counterEntries)
                    {
                    //var item = $(this).text();
                    var item = $('.btn-text-name').text();

                    alert(item);
                    
                    // kurzform von if-else
                    (item.match(searchString) )? $(this).show() : $(this).hide();
                    });
                
                //$("#searchItems").show();
                $('#categoryView').collapsibleset('refresh'); 
                }
                else {
                    $("#searchItems").show();
                    $('#categoryView').collapsibleset('refresh'); 
                }       
            }); 
        });
}
*/

function categoryError(data){
    console.err('Fehler beim Abruf von \"data\" beim Aufruf der Kategorien ' + data);
}

function drawChart(data) {
    // Create the data table.
    var googleData = new google.visualization.DataTable();
    googleData.addColumn('string', 'Topping');
    googleData.addColumn('number', 'Slices');
    $.each(data, function(i,item){
        googleData.addRow([item.name,item.value1]);
    });

    // Set chart options
    var options = {'title':'Ausgaben by Category','is3D':true};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(googleData, options);
  }

function chartsError(data){
    console.err('Fehler beim Abruf von \"data\" beim Aufruf der Charts ' + data);
}