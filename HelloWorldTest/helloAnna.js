/**
 *@NApiVersion 2.0
 *@NScriptType ClientScript
 */

define([], function() {

    function showMessage(){
        var message = "Hello Anna";
        alert(message); 
    
}
    return{
        pageInit: showMessage

    };
});



