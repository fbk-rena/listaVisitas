function showPreview(){
  var comentario = document.getElementById("commentUser").value;
  var mostrarTexto = document.getElementById("showComment");
  mostrarTexto.innerHTML = comentario;
}

function publicarComment(){
     var textoCopia = document.getElementById("showComment").cloneNode();
     var newComment = document.createElement("li");
     var cometarioLista = document.createTextNode(textoCopia);
     
    newComment.appendChild(cometarioLista);
    commentList.appendChild(newComment);
}

//permite mostrar el texto en tamaño chico
function textCh (){
  document.getElementById("showComment").style.fontSize = "small";
}
//permite mostrar el texto en tamaño mediano
function textMd(){
  document.getElementById("showComment").style.fontSize = "medium";
}

//permite mostrar el texto en tamaño grande
function textBig(){
  document.getElementById("showComment").style.fontSize = "x-large";
}

//permite combiar el color del texto
function colorText(){
  var color = prompt("Ingresa color hexadecimal:");
  document.getElementById("showComment").style.color =  color; 
}

//permite cambiar el color del fondo
function colorFondo(){
  var fondo = prompt("Ingresa color hexadecimal:");
  document.getElementById("showComment").style.background = fondo; 
}


function alineaIzq(){
  document.getElementById("showComment").style.textAlign = "left";
}

function centrar(){
  document.getElementById("showComment").style.textAlign = "center";
}

function alineaDer(){
  document.getElementById("showComment").style.textAlign = "right";
}