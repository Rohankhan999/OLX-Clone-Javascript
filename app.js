
function card (Model , Price , Colors ,){
    this.name = Model,
    this.Price = Price,
    this.Colors = Colors
}
var student1 = new card("Apple 12 pro Max","Rs 200,000","Red , Green , Purple ")
var student1Card =document.getElementById('object').innerHTML = "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student1.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student1.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student1.Price;

var student2 = new card("Apple SE 2020","Rs 47,500","Red , Black , White")
var student2Card =document.getElementById('object1').innerHTML = "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student2.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student2.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student2.Price;

var student3 = new card("Samsung z Fold","Rs 230,000","Red , Black , White")
var student3Card =document.getElementById('object2').innerHTML = "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student3.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student3.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student3.Price;

var student4 = new card("Daisathu Rocky Turbo 2022","Rs 5,750,000","Metallic-Red")
var student4Card = document.querySelector('#object3').innerHTML =  "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student4.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student4.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student4.Price;

var student5 = new card("BMW 740e PHV - 2018","Rs 39,500,000","Bright-White")
var student5Card = document.querySelector('#object4').innerHTML =  "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student5.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student5.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student5.Price;

var  student6 = new card("TESLA X Long Range - 2018","Rs 35,000,000","Metallic-Red")
var student6Card = document.querySelector('#object5').innerHTML =  "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student6.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student6.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student6.Price;

var student7 = new card("Kawasaki Ninja | Geniune","Rs 600,000","Red X Black Edition")
var student7Card = document.querySelector('#object6').innerHTML =  "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student7.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student7.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student7.Price;

var student8 = new card("YAMAHA YZF R-6 (2009)","Rs 890,000","Green-Edition")
var student8Card = document.querySelector('#object7').innerHTML =  "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student8.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student8.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student8.Price;

student9 = new card("BMW S1000-RR","Rs 1,250,000","Metallic White!")
var student9Card = document.querySelector('#object8').innerHTML =  "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student9.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student9.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student9.Price;
