//--------------Validadorcfdi--------------------
function seleccionar()
{
  //selecciono todos los 'inputs'
  var allinputs = document.getElementsByTagName("input");
  //creo un array para almacenar solo los inputs que voy a utilizar
  var inputs = new Array(); var j = 0; //La variable 'j' la utilizo como apuntador en el array 'input'
  //recorro todos los input s recogidos
  for(i=0; i<allinputs.length; i++)
  {
    //extraigo los inputs con la clase especifica para subir archivos
    if (allinputs[i].className == "up")
    {
      //aca realizo el paso de los inputs(si el input tiene una clase 'upfil' entonces los aparto en un array en limpio)
      inputs[j] = allinputs[i];
      j++; //incremento el apuntador para el proximo input a almacenar
    }
  
}
  comprobacion(inputs); //llamada a la funcion que comprueba los inputs en cuestion


} 


function seleccionardos()
{
  //selecciono todos los 'inputs'
  var allinputs = document.getElementsByTagName("input");
  //creo un array para almacenar solo los inputs que voy a utilizar
  var inputs = new Array(); var j2 = 0; //La variable 'j' la utilizo como apuntador en el array 'input'
  //recorro todos los inputs recogidos
  for(i2=0; i2<allinputs.length; i2++)
  {
    //extraigo los inputs con la clase especifica para subir archivos
    if (allinputs[i2].className == "upco")
    {
      //aca realizo el paso de los inputs(si el input tiene una clase 'upfil' entonces los aparto en un array en limpio)
      inputs[j2] = allinputs[i2];
      j2++; //incremento el apuntador para el proximo input a almace
    }
  
}
  comprobacionCER(inputs); //llamada a la funcion que comprueba los inputs en cuestion

} 



function comprobacion(iarray,archivo)

{ 
  for(m=0; m < iarray.length; m++) //recorro el array con los inputs
  {
    var ca1 = iarray[m].value; //tomo el valor del primer input
    var s = ca1.lastIndexOf("."); //obtengo la posision del ultimo punto en la cadena(el que precede a la extencion) 
    var miarr = new Array("xml"); //Declaro un array con las extensiones permitidas 
    


for (i = 0; i < miarr.length; i++) //bucle en el que compruebo las extensiones permitidas
    {
      var charfind = ca1.substr(s+1,4); //extraigo las ultimas 4 letras despues del punto (posision 's+1')
      charfind = charfind.toLowerCase(); //convierto la extraccion a minisculas para evitar comprobaciones erroneas
      if(charfind == miarr[i]) //compruebo la extencion obtenida con las permitidas
      {
        //alert("Archivo "+(m+1)+" validado"); //si es correcta aviso que esta validado
        
        break; //termino blucle
      }
  if(i == miarr.length - 1) //si se ha llegado a la ultima pasada en el bucle aviso que se ha introducido una extension erronea
      {
        
        alert("Has introducido una extension erronea en el archivo marcado " ) //+ (m+1)); //envio alerta
      }
    

        }
  }
}

function comprobacionCER(iarrayc,archivodos)

{ 
  for(m2=0; m2 < iarrayc.length; m2++) //recorro el array con los inputs
  {

    var ca2 = iarrayc[m2].value; //tomo el valor del primer input
    var s2 = ca2.lastIndexOf("."); //obtengo la posision del ultimo punto en la cadena(el que precede a la extencion) 
    var miarr2 = new Array("cer"); //Declaro un array con las extensiones permitidas 
   


for (i2 = 0; i2 < miarr2.length; i2++) //bucle en el que compruebo las extensiones permitidas
    {
      var charfind2 = ca2.substr(s2+1,4); //extraigo las ultimas 4 letras despues del punto (posision 's+1')
      charfind2 = charfind2.toLowerCase(); //convierto la extraccion a minisculas para evitar comprobaciones erroneas
      if(charfind2 == miarr2[i2]) //compruebo la extencion obtenida con las permitidas
      {
        
        alert("Archivo "+(m+1)+" validado"); //si es correcta aviso que esta validado
        break; //termino blucle
      }
  if(i2 == miarr2.length - 1) //si se ha llegado a la ultima pasada en el bucle aviso que se ha introducido una extension erronea
      {
       
        alert("Has introducido una extension erronea en el archivo marcado cer " ) //+ (m+1)); //envio alerta
      }
    

        }
  }
}

function comprobar(){
    
  if (document.formulario.archivo.value=="" && document.formulario.archivodos.value=="")

    {
      alert("Usted no ha ingresado ningun archivo! ");
    }
else {

  if(document.formulario.archivo.value=="" ){
      alert("Le falta ingresar su Comprobante!");
    }

  if(document.formulario.archivodos.value==""){
      alert("Le falta ingresar su Certificado PAC!");
    }

}

}

//-----------------------------------cadena--------------------

function seleccionartres()
{
  //selecciono todos los 'inputs'
  var allinput = document.getElementsByTagName("input");
  //creo un array para almacenar solo los inputs que voy a utilizar
  var input = new Array(); var j2 = 0; //La variable 'j' la utilizo como apuntador en el array 'input'
  //recorro todos los inputs recogidos
  for(i2=0; i2<allinput.length; i2++)
  {
    //extraigo los inputs con la clase especifica para subir archivos
    if (allinput[i2].className == "upfill")
    {
      //aca realizo el paso de los inputs(si el input tiene una clase 'upfil' entonces los aparto en un array en limpio)
      input[j2] = allinput[i2];
      j2++; //incremento el apuntador para el proximo input a almace
    }
  
}
  comprobacioncad(input); //llamada a la funcion que comprueba los inputs en cuestion

} 


function comprobacioncad(iarraycd,archivotres)

{ 
  for(m2=0; m2 < iarraycd.length; m2++) //recorro el array con los inputs
  {

    var ca2 = iarraycd[m2].value; //tomo el valor del primer input
    var s2 = ca2.lastIndexOf("."); //obtengo la posision del ultimo punto en la cadena(el que precede a la extencion) 
    var miarr2 = new Array("xml"); //Declaro un array con las extensiones permitidas 
   


for (i2 = 0; i2 < miarr2.length; i2++) //bucle en el que compruebo las extensiones permitidas
    {
      var charfind2 = ca2.substr(s2+1,4); //extraigo las ultimas 4 letras despues del punto (posision 's+1')
      charfind2 = charfind2.toLowerCase(); //convierto la extraccion a minisculas para evitar comprobaciones erroneas
      if(charfind2 == miarr2[i2]) //compruebo la extencion obtenida con las permitidas
      {
        
        alert("Archivo "+(m+1)+" validado"); //si es correcta aviso que esta validado
        break; //termino blucle
      }
  if(i2 == miarr2.length - 1) //si se ha llegado a la ultima pasada en el bucle aviso que se ha introducido una extension erronea
      {
       
        alert("Has introducido una extension erronea en el archivo marcado" ); //+ (m+1)); //envio alerta
      }
    

        }
  }
}


function cad(){

  if (document.formulariocadena.archivotres.value=="")
    {
      alert("Usted no ha ingresado ningun arch8ivo!");
    }
   

}
//---------------------------------- sello ----------------------


function seleccionarcuatro()
{
  //selecciono todos los 'inputs'
  var allinputs = document.getElementsByTagName("input");
  //creo un array para almacenar solo los inputs que voy a utilizar
  var inputs = new Array(); var j2 = 0; //La variable 'j' la utilizo como apuntador en el array 'input'
  //recorro todos los inputs recogidos
  for(i2=0; i2<allinputs.length; i2++)
  {
    //extraigo los inputs con la clase especifica para subir archivos
    if (allinputs[i2].className == "upfill")
    {
      //aca realizo el paso de los inputs(si el input tiene una clase 'upfil' entonces los aparto en un array en limpio)
      inputs[j2] = allinputs[i2];
      j2++; //incremento el apuntador para el proximo input a almace
    }
  
}
  comprobacionkey(inputs); //llamada a la funcion que comprueba los inputs en cuestion

} 


function comprobacionkey(iarraycc,archivocuatro)

{ 
  for(m2=0; m2 < iarraycc.length; m2++) //recorro el array con los inputs
  {

    var ca2 = iarraycc[m2].value; //tomo el valor del primer input
    var s2 = ca2.lastIndexOf("."); //obtengo la posision del ultimo punto en la cadena(el que precede a la extencion) 
    var miarr2 = new Array("key"); //Declaro un array con las extensiones permitidas 
   


for (i2 = 0; i2 < miarr2.length; i2++) //bucle en el que compruebo las extensiones permitidas
    {
      var charfind2 = ca2.substr(s2+1,4); //extraigo las ultimas 4 letras despues del punto (posision 's+1')
      charfind2 = charfind2.toLowerCase(); //convierto la extraccion a minisculas para evitar comprobaciones erroneas
      if(charfind2 == miarr2[i2]) //compruebo la extencion obtenida con las permitidas
      {
        
        alert("Archivo "+(m+1)+" validado"); //si es correcta aviso que esta validado
        break; //termino blucle
      }
  if(i2 == miarr2.length - 1) //si se ha llegado a la ultima pasada en el bucle aviso que se ha introducido una extension erronea
      {
       
        alert("Has introducido una extension erronea en el archivo marcado" ) //+ (m+1)); //envio alerta
      }
    

        }
  }
}


function seleccionarcinco()
{
  //selecciono todos los 'inputs'
  var allinputs = document.getElementsByTagName("input");
  //creo un array para almacenar solo los inputs que voy a utilizar
  var inputs = new Array(); var j2 = 0; //La variable 'j' la utilizo como apuntador en el array 'input'
  //recorro todos los inputs recogidos
  for(i2=0; i2<allinputs.length; i2++)
  {
    //extraigo los inputs con la clase especifica para subir archivos
    if (allinputs[i2].className == "upf")
    {
      //aca realizo el paso de los inputs(si el input tiene una clase 'upfil' entonces los aparto en un array en limpio)
      inputs[j2] = allinputs[i2];
      j2++; //incremento el apuntador para el proximo input a almace
    }
  
}
  comprobacioncer(inputs); //llamada a la funcion que comprueba los inputs en cuestion

} 


function comprobacioncer(iarrayr,archivocinco)

{ 
  for(m2=0; m2 < iarrayr.length; m2++) //recorro el array con los inputs
  {

    var ca2 = iarrayr[m2].value; //tomo el valor del primer input
    var s2 = ca2.lastIndexOf("."); //obtengo la posision del ultimo punto en la cadena(el que precede a la extencion) 
    var miarr2 = new Array("cer"); //Declaro un array con las extensiones permitidas 
   


for (i2 = 0; i2 < miarr2.length; i2++) //bucle en el que compruebo las extensiones permitidas
    {
      var charfind2 = ca2.substr(s2+1,4); //extraigo las ultimas 4 letras despues del punto (posision 's+1')
      charfind2 = charfind2.toLowerCase(); //convierto la extraccion a minisculas para evitar comprobaciones erroneas
      if(charfind2 == miarr2[i2]) //compruebo la extencion obtenida con las permitidas
      {
        
        alert("Archivo "+(m+1)+" validado"); //si es correcta aviso que esta validado
        break; //termino blucle
      }
  if(i2 == miarr2.length - 1) //si se ha llegado a la ultima pasada en el bucle aviso que se ha introducido una extension erronea
      {
       
        alert("Has introducido una extension erronea en el archivo marcado" ) //+ (m+1)); //envio alerta
      }
    

        }
  }
}


function crearsello(){

  if (document.formulariosello.archivocuatro.value=="" )
    {
      alert("ingresa la llave");
    }
   
}
  
  function validarsello(){

  if (document.formulariosello.archivocinco.value=="" )
    {
      alert("ingresa tu certificado");
    }
   }

