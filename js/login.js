$(document).ready(function() {
	$('.loginErrMsg').hide();
	$('#credentialsSubmit').click(function(){
		var userName = $('#customerName').val();
		var userPassword = $('#customerPassword').val();
		console.log('Input Username: ' + userName + ' Input Password: ' + userPassword);
    $.mobile.showPageLoadingMsg();
		$.ajax({
        url: rootUrl+'/JavaBackend/rest/auth/login', 
  			dataType:'json',
  			type:'post',
  			data:{
  				'username':userName,
  				'password':userPassword
  			},
        xhrFields: {
          withCredentials:true
        },
        crossDomain:true,
  			success: function (data, textStatus, jqXHR){
  				var respData = data.bodyData;
  				var success = data.success;

  				if(success){
  					// hat funktioniert
  					$.mobile.changePage('home.php', { transition: "slideup"});
            $('#home').ready(function(){
              alert('Login erfolgreich');
              $.mobile.hidePageLoadingMsg();
            });
  				} else {
  					// hat nicht funktioniert
  					$('h2').show();  

  					showErrorMsg();

  				}		
  			},
  			error: function(jqXHR, textStatus, errorThrown){
          showErrorXMLHttpRequest(jqXHR, textStatus, errorThrown);
  			}

		});
	});
});

