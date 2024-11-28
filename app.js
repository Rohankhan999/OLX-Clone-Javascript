
function card (Model , Price , Colors ,){
    this.name = Model,
    this.Price = Price,
    this.Colors = Colors
}
var student1 = new card("Apple 12 pro Max","200000","Red , Green , Purple ")
document.getElementById('object').innerHTML = "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student1.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student1.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student1.Price;

var student2 = new card("Apple SE 2020","47,500","Red , Black , White")
document.getElementById('object1').innerHTML = "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student2.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student2.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student2.Price;

var student3 = new card("Samsung z Fold","230000","Red , Black , White")
document.getElementById('object2').innerHTML = "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student3.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student3.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student3.Price;



