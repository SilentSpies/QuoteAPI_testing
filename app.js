$(document).ready(function() {
    $.ajax(ajaxArgument);
});
var ajaxArgument = {
    type: 'get',
    url: ' https://theysaidso.p.mashape.com/quote?',
    dataType: 'json',
    data: {
        category: 'inspire',
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
