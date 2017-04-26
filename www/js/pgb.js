
function findContact() {
   var options = new ContactFindOptions();
   options.filter = "";
   options.multiple = true;

   fields = ["displayName"];
   navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
    
   function contactfindSuccess(contacts) {
       
       document.getElementById('contact').innerHTML = JSON.stringify(contacts, null, 4);
                
   }
	
   function contactfindError(message) {
      alert('niepowodzenie: ' + message);
   }
	
}

