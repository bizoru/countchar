function count(word) 
{
    if (typeof word !== 'string') return -1;
    //remover espacios
    word = word.replace(" ","");
    var count = 0 , characters =  word.split("");
    console.log(characters);
    for (var i = 0; i < characters.length; i++) count++;

    return convertNumberToWord(count); 
}

 //Se Convierte número en palabra
function convertNumberToWord(number) 
{
  if (number > 0) 
  {
    var o = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
    var u = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    var d = ["", "", "", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    var c = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    var n = parseFloat(number).toFixed(2); //dos decimales
    var p = n.toString().substring(n.toString().indexOf(".")+1); //decimales/
    var m = n.toString().substring(0,n.toString().indexOf(".")); //número sin decimales/
    var m = parseFloat(m).toString().split("").reverse(); 
    var t="";

    //Se analiza cada 3 dígitos/
  for (var i=0; i<m.length; i+=3){

    var x=t;
    //Se forma un numero de tres/
    var b= (m[i+1]!=undefined) ? parseFloat(m[i+1].toString()+m[i].toString()) : parseFloat(m[i].toString());
    t= (m[i+2]!=undefined) ? (c[m[i+2]]+" ") : "";
    t+= (b<10) ? u[b] :( (b<30) ? o[b-10] : (d[m[i+1]]+(m[i]=='0'?"":(" y "+u[m[i]]))) );
    t= (t=="ciento cero")? "cien": t;
    if (2<i&&i<6)
      t=  (t=="uno") ? "mil" : (t.replace("uno","un")+" mil");
    if (5<i&&i<9)
      t= (t=="uno") ? "un millón":(t.replace("uno","un")+" millones ");  
  }
  t+=x;
  return t.replace("  "," ").replace(" cero","");
  }else
    return "No es una palabra"
}

// probar con 
//count("palabra") -> resultado "siete"
