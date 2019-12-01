$(document).ready(function(){

console.log("jsjquery loaded")

var imgTag = $('img')
var moodInput = $('input.u-full-width')
var moodButton = $('button.u-full-width')


moodButton.click(function(e){
  var searchTerm = moodInput.val()

  $.ajax({
  type: "GET",
  url: "https://api.giphy.com/v1/gifs/search?api_key=GnmaY4hStstiUqLmqNDJHxEh1cV0iKiv&q=" + searchTerm + "&limit=25&offset=0&rating=R&lang=en",

  success: function(data){
    var randomNumber = Math.floor(Math.random() *(25-1)) + 1
    console.log(randomNumber)
    console.log(data.data)

    // console.log(data.data[0].images.downsized_medium.url)
    imgTag.attr('src', data.data[randomNumber].images.downsized_medium.url)
    console.log(moodInput.val())
  }

})


})























})


