//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");
var $prevBtn = $("<p> < </p>");
var $nextBtn = $("<p> > </p>");
var $exit = $("<p> X </p>");
var $selectedImage;
var returnNext;
var imageCount = 0;

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add some buttons!!
$overlay.prepend($prevBtn);
$prevBtn.addClass("prev-arrow");
$prevBtn.css("font-size", "50px");


$overlay.prepend($nextBtn);
$nextBtn.addClass("next-arrow");
$nextBtn.css("font-size", "50px");

$exit.addClass("exit");
$exit.css("font-size", "2em");
$overlay.append($exit);




//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
	$selectedImage = $(this);
	event.preventDefault();
	var imageLocation = $(this).attr("href");
	//Update overlay with the image linked in the link
	$image.attr("src", imageLocation);
  
	//Show the overlay.
	$overlay.show();
  
	//Get child's alt attribute and set caption
	var captionText = $(this).children("img").attr("alt");
	$caption.text(captionText);
});




var nextImage = function() {

	//Move to the next image in the gallery
	returnNext = $selectedImage.parent().next().children("a").attr("href");
	//Update the new image location on the overlay
	$image.attr("src", returnNext);
	
}

var nextAltText = function() {
	var nextImgText = $caption.parent().next().children("img").attr("alt");
}

//Function for when the ">" arrow is clicked
$nextBtn.on("click", function() {
	//nextImage();
	nextAltText();
});

//Function for when the "<" arrow is clicked
var prevImage = function() {
	//Move to the previous image in the gallery
	returnPrev = $selectedImage.parent().prev().children("a").attr("href");
	//Update the new image Location on the overlay
	$image.attr("src", returnPrev);
	//Retrieve the alt text of the previous image
}

$prevBtn.on("click", function() {
	prevImage();
});

//When overlay is clicked
$exit.click(function(){
  //Hide the overlay
  $overlay.hide();
});


//Searching function

$("#search").keyup(function() {
    var $search = $(this).val();
   
    $("#imageGallery img").each(function() {
   
        var searchAttr = $(this).attr("alt");
        if(searchAttr.toLowerCase().search($search.toLowerCase()) > -1) {
            $(this).show();
        } else {
            $(this).fadeOut();
        }
    });
});










