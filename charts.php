<?php include '/includes/html_head.html'; ?>
	
  <div id="charts" data-role="page">
  	<?php include '/includes/header.html'; ?> 
    <div data-role="content">
  	    <div id="chart_div" style="height:500px"></div>
    </div><!--content-->
      <script type="text/javascript">
      $('#charts').on('pageshow',function(){
          $.mobile.showPageLoadingMsg();
          $.ajax({
              url: rootUrl+'/JavaBackend/rest/secure/bankaccount/1/statistic',
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
                    // Callback that creates and populates a data table,
                    // instantiates the pie chart, passes in the data and
                    // draws it.
                    drawChart(respData);
                  }
                  else{
                    chartsError(data.errorMsg);
                  }                     
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
  </div><!-- /chart -->
<?php include '/includes/footer.html'; ?>