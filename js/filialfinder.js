$ ( document ).ready ( function () {
    $ ( '.loginErrMsg' ).hide ();
    $ ( '#filialfinder' ).click ( function () {
        $.ajax ( {
            url: rootUrl + '/JavaBackend/rest/secure/places?location=48.13661,11.57709',
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,

            success: function (data, textStatus, jqXHR){
                var respData = data.bodyData;
                var success = data.success;

                if(success){
                // hat funktioniert
                $.mobile.changePage("index.html#home");
                } else {
                // hat nicht funktioniert
                //$('h2').show();
                showErrorMsg ();
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
            }

        });
    });
});





