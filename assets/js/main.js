
//constructor del squad

function imprimir(){
  document.getElementById("contenedor").innerHTML =comentario();
}

function comentario(){
    // tomo texto de textarea
    var coment = document.getElementById("ingresoComent").value;
    //se limpia textarea
    document.getElementById("ingresoComent").value = "";
    // creo elemento div 
    var nuevosComents = document.createElement("div");
    //contenedor donde irán las tareas
    var cont = document.getElementById("contenedor");
  }

function MiembroSquad(nombre,apellido,edad,id,hobbie1,hobbie2,hobbie3){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.id = id;
  this.hobbie1 = hobbie1;
  this.hobbie2 = hobbie2;
  this.hobbie3 = hobbie3;
  this.foto = "<img src='assets/imgs/avataressquad-0" + this.id + "_360.png'>";
  this.caja = "<input type='text' id='ingresoComent" + this.id + "'>"; //aca se ingresa el comentario
  this.contenedor = function comentar() { document.getElementByI("caja").innerHTML =imprimir();}//"<input type='text' id='contenedor" + this.id + "'>";//aca se guardan los comentarios
  this.boton = "<button id='boton' 'onclick= imprimir()"+ this.id + "'>Dejar Comentario</button>"; /*nuevoComentario.likes() +*/  //boton dejar comentario
}

var lista = new Array(8);
lista[0] = new MiembroSquad("Camila","Saez",24,"1","Ver pinterest","Viajar","Comprar cosas en Aliexpress");
lista[1] = new MiembroSquad("Antonia","Cerda",23,"2","Diseñar","Ver series","Lettering");
lista[2] = new MiembroSquad("Carolina","Tapia",27,"3","Trekking","Leer","Tejer");
lista[3] = new MiembroSquad("María José","Rodriguez",32,"4","Ver series","Bailar","Leer");
lista[4] = new MiembroSquad("María José","Pozo",31,"5","Bailar","Comer","Dormir");
lista[5] = new MiembroSquad("Francisca","Ojeda",28,"6","Rollerderby","Lettering","Juegos de mesa");
lista[6] = new MiembroSquad("Valentina","Saavedra",26,"7","Medicina autogestiva","Hacer magia","Hacerse tatuajes");
lista[7] = new MiembroSquad("Marion","Castillo",29,"8","Caminar","Pintar","Fotografiar");

lista.forEach(function(element){
  var miembros = document.getElementById("miembro" + lista.indexOf(element).toString());
  miembros.innerHTML = (element.foto +"<br><b>Nombre: </b>" + element.nombre + "<br><b>Apellido: </b>" + element.apellido + 
  "<br><b>Edad: </b>" + element.edad + "<br><b>Hobbies: </b>" + "<ul>" + "<li>" + element.hobbie1 + "</li>" + 
  "<li>" + element.hobbie2 + "</li>" + "<li>" + element.hobbie3 + "</li>" + "</ul>" + element.caja + element.contenedor +
   "<br>" + element.boton);
});

MiembroSquad.contenedor();

var numero=0;
function sumar (){ 
numero++;
return numero;
}

function hacerClick(){
       document.getElementById("caja").innerHTML = sumar();
    }



//aca no he hecho nada
/*function Comentario(mensaje,comentario,likes){
    this.mensaje = mensaje;
    this.comentario = comentario;
    this.likes = 
    //this.botonLike = "<button onclick=hacerClick() + this.likes() + "'></button>;" 
}



//aca no he hecho nada
function Comentario(id_miembro,comentario,likes){
  this.id_miembro = id_miembro;
  this.comentario = comentario;
  this.likes = function (){
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
miembro.innerHTML = nuevoComentario.coment;*/







