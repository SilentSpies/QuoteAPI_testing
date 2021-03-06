
$(document).ready(function() {

    $.ajax(getQuote);
    // $.ajax(getCategories);

}); // END DOC READY

var quoteCategories = ["courage", "inspirational", "motivational", "hope", "dream", "strength", "success", "beauty", "imagination"];

var categoryString = "";
categoryString = pickAElement(quoteCategories);
console.log(categoryString);

var getQuote = {
    type: 'get',
    url: ' https://theysaidso.p.mashape.com/quote?',
    dataType: 'json',
    data: {
        category: categoryString,
        maxlength: 500
    },
    success: function(data) {
        console.log("success");
        console.log(data);
        console.log(data.contents.quote);
        console.log(data.contents.author);
    },
    error: function(error) {
        console.log("error")
        console.log(error);
    },
    beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "bgcO2dfgzJmshatc421SqDRW9ICYp1fV3e4jsnqBWv54XiICNP"); // Enter here your Mashape key
    }
};


// get the available categories ... only returns 99?
var getCategories = {
    type: 'get',
    url: ' https://theysaidso.p.mashape.com/categories',
    dataType: 'json',
    success: function(data) {
        console.log("success");
        console.log(data);
    },
    error: function(error) {
        console.log("error")
        console.log(error);
    },
    beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "bgcO2dfgzJmshatc421SqDRW9ICYp1fV3e4jsnqBWv54XiICNP"); // Enter here your Mashape key
        xhr.setRequestHeader('Accept','application/json');

    }
};

function pickAElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
