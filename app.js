 var cardsInformation = {
    name : "Rohan",
    rollNo : 12890,
    Class : "Web App",
};
function card (Model , Price , Colors , Waterproof ){
    this.name = Model,
    this.Price = Price,
    this.Colors = Colors,
    this.type = Waterproof
}
var student1 = new card("Apple 12 pro Max","250000","Red , Green , Purple ","true")
document.getElementById('object').innerHTML = "<br>"+  "<b>Model Name : </b>" + "  " + student1.name + "<br>" + "<br>" +"<b>Available Colors : </b>"+ student1.Colors + "<br>" + "<br>"  +"<b>Price : </b>"+ student1.Price


