<?php include '/includes/html_head.html'; ?>

    <div id="login" data-role="page">
        
    <div data-role="content">
        <div data-role="field-contain">
        <form data-ajax="false" class="ui-body ui-body-c ui-corner-all" >
                <label for="customerName">Customer Name:</label>
                <input type="text" name="name" id="customerName" value="benjamin" required />
               
                <label for="customerPassword">Password:</label>
                <input type="password" name="password" id="customerPassword"  required />

                <label for="credentialsSubmit"></label>
                <button type="button" name="submit" id="credentialsSubmit" value="Submit">Submit</button>
        </form>            
        <h2 class='loginErrMsg'>Fehler aufgetreten</h2>
        </div><!-- Login-form-->

        </div><!--field-contain-->

    </div><!--content-->
    </div><!-- /login -->

<?php include '/includes/footer.html'; ?>