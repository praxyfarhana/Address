function Contact(first,last){
  this.firstName = first;
  this.lastName = last;
}

$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var InputtedFirstName = $("input#new-first-name").val();
    var InputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(InputtedFirstName,InputtedLastName);
    $("#contacts").append("<li span class='contacts'>" + newContact.firstName + "</span></li>");
    $("Input#new-first-name").val("");
    $("Input#new-last-name").val("");
  });
});
