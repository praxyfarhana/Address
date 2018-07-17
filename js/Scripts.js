//back-end
function Contact(first,last){
  this.firstName = first;
  this.lastName = last;
}
Contact.prototype.fullname = function() {return this.firstName + " " + this.lastName;
}
//front-end
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var InputtedFirstName = $("input#new-first-name").val();
    var InputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(InputtedFirstName,InputtedLastName);
    $("ul#contacts").append("<li span class='contacts'>" + newContact.fullName + "</span></li>");
      $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
    $("Input#new-first-name").val("");
    $("Input#new-last-name").val("");
  });
});
