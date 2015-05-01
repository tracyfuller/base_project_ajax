var cityHtml = null;
var cityData = null;

$(document).ready(function(){
    console.log(cityHtml, cityData);

    $("#initiateBtn").on('click', function(){
        $.get("template.html", function(data){
            if (cityHtml === null){
                cityHtml = data;
                $("#dataBox").append(cityHtml);
                console.log("got it", cityHtml);
            } else {
                console.log("you already have city html");
            }
        });
        $.get('data.json', function(data){
           if (cityData === null){
               cityData = data;
               $('#name').append("Name: " + cityData.location[0].name);
               $('#area').append("Area: " + cityData.location[0].area);
               $('#population').append("Population: " + cityData.location[0].population);
               console.log("got data", cityData);
           } else {
               console.log("already have city data");
           }
        });
    });

    $('#dataBox').on('click', '#removeBtn', function(){
        $(this).parent().remove();
        cityHtml = null;
        cityData = null;
    });



});