(function() {
  var $imgs = $('ul#imageGallery li a img'); //Get the images
  var $search = $('#search'); //Get the input element - the search input
  var cache = []; //Create a cache array

 $imgs.each(function() {  //Loop though each image in $ imgs using .each() to run an anonymous funciton on each one. 
   cache.push({    //Add an object to the cashe array with push()
     element: this,  // This image - objects element proprety holds ref to the img element
     text: this.title.trim().toLowerCase() //Its title text - text property hold titlety text - remove spaces and change case. 
   });
 });

 function filter() { //Declare the filter() function 
   var query = this.value.trim().toLowerCase(); //Store the search text in a variable called query
   
   cache.forEach(function(cacheItem) {  //Loop though each object in cache array and call same anonymous function on each. 
     var index = 0;  //set index variable to 0
     if (query) { //if query has a value - some text
       index = cacheItem.text.indexOf(query);   //Use indexOf to check if search term is in text property of this object. Store a positive number if found or -1 if not found. 
       }
       
       cacheItem.element.style.display = index === -1 ? 'none' : ''; //if index is -1, set display property of img to none, otherwise set display to blank string. 
     });
   }
   
   if('oninput' in $search[0])  { //Check if browser supports input event
     $search.on('input', filter); //If so, call filter() func when it fires on the search box
     } else {
    
     $search.on('keyup', filter);  //Use keyup event to call filter (use input event to trigger it)
 }
 
}());
