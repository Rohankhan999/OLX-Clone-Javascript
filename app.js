 var cardsInformation = {
    name : "Rohan",
    rollNo : 12890,
    Class : "Web App",
};
function card (Model , Price , Colors ,){
    this.name = Model,
    this.Price = Price,
    this.Colors = Colors
}
var student1 = new card("Apple 12 pro Max","200000","Red , Green , Purple ")
document.getElementById('object').innerHTML = "<br>"+  "<u><b>Model Name</u> : </b>" + "  " + student1.name + "<br>" + "<br>" +"<u><b>Available Colors</u> : </b>"+ student1.Colors + "<br>" + "<br>"  +"<u> <b>Price</u> : </b>"+ student1.Price;


