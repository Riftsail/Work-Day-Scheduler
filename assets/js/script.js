var saveBtn = $(".save-btn");


saveBtn.on("click" , function(event) {
console.log(">>> event >>>" , event.target);
var clickedBtn = $(event.target);
var textArea = clickedBtn.prev();
console.log(">>> text area content >>>" , textArea.val());
var timeDiv = textArea.prev();
console.log(">>> time div data-time >>" , timeDiv.data("time"));
})













