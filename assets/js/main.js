
function Misquad(img,nombre,apellido,edad,hobbies,hobbies2,hobbies3){
    this.img = img;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.hobbies = hobbies;
    this.hobbies2 = hobbies2;
    this.hobbies3 = hobbies3;
    this.caja = "<input type='text' id='boton" + this.id + "'>"; //aca se ingresa el comentario
    this.boton = "<button id='" + this.id + "' onclick='" + /*nuevoComentario.likes() +*/ "'>Dejar Comentario</button>"; //boton dejar comentario
}

var fran = new Misquad("x","Francisca","Ojeda",28,"Roller derby", "Lettering", "Juegos de mesa");
var cote = new Misquad("x","María José","Pozo",31,"Bailar","Comer","Dormir");
var mariajose = new Misquad("x","María José","Rodriguez",32,"Ver series","Bailar","Leer");
var caro = new Misquad("x","Carolina","Tapia",27,"Trekking", "Leer" , "Tejer");
var camila = new Misquad("x","Camila","Saez",24,"Origami","Viajar","Comprar cosas en Aliexpress");
var val = new Misquad("x","Valentina","Saavedra",26,"Medicina autogestiva","Hacer magias","Hacerse tatuajes");
var marion = new Misquad("x","Marion","Castillo",29,"Caminar","Hacer series","Pintar");
var antonia = new Misquad("x","Antonia","Cerda",23,"Diseñar", "Ver series", "Lettering");


var arrusuario = [];

arrusuario.push(fran,cote,mariajose,caro,camila,val,marion,antonia);

arrusuario.forEach(function(ele){
    var divlistasquad = document.getElementById("listasquad");
    var usuario = document.createElement("div");
    divlistasquad.appendChild(usuario);
    //var dentroDiv = document.createTextNode(info);
    

    var info = (ele.img+ "<br>" +"<b>Nombre: </b>"+ele.nombre+ " " +
         ele.apellido+ "<br>" + "<b>Edad : </b>"+  ele.edad+ "<br>"+ "<b>Hobbies : </b> <i>" + "<ul>" + "<li>" + ele.hobbies+ "</li>"+"<li>" +ele.hobbies2+ 
         "</li>"+ "<li>"+ ele.hobbies3 + "</li></ul></i><br></b>" + ele.caja + ele.boton); 
    divlistasquad.innerHTML += info;

})


function agregarImagen()
{
    var objDiv = document.getElementById("imagen");
  var newImage = document.createElement("img");
  newImage.src = "http://quebolu.com/uploads/meme1419396805gen.png";
  objDiv.appendChild(newImage);
}

//aca no he hecho nada
function Comentario(id_miembro,comentario,likes){
    this.id_miembro = id_miembro;
    this.comentario = comentario;
    this.likes = function(){
        var contador = 0;
        return (contador + 1);
    };
    this.botonLike = "<button onclick='" + this.likes() + "'></button>";
}

//esto no me funciona
var miembro = document.getElementById("miembro0");
var member = document.getElementById("m0");
var coment = lista[0].caja.value;
var nuevoComentario = new Comentario(miembro,coment);
miembro.innerHTML = nuevoComentario.coment;

var numero=0;
function sumar (){ 
numero++;
return numero;
}
function hacerClick(){
    document.getElementById("caja").innerHTML = sumar();
}

