## Contador de caracteres
### Este documento es el manual de usuario para la aplicación Contador de Caracteres
### Este software se encarga de devolver la cantidad de caracteres que tiene una palabra

**Definición**
Se requiere el diseño, implementación y automatización de pruebas para un Software que, dada una palabra, devuelva la cantidad de caracteres que contenga.

El concepto de “devolver una palabra“ está asociado con el valor de la salida del software el cual puede ser visibilizado por el usuario después de ingresar la palabra y calcular el número de caracteres que la componen.


**Alcance del programa**
A continuación se describen los supuestos y exclusiones del software:

* Las palabras ingresadas únicamente aplicarán si son utilizadas en el lenguaje español.
* La palabra que a la que se le calculará el conteo de caracteres será ingresada únicamente por teclado.
* La palabra que se ingrese por teclado no puede tener más de veinte (20) caracteres, no puede tener espacios, números, signos de puntuación ni símbolos de otros idiomas diferentes al español.
* La contraseña para el usuario que utilice el software no será guardada en ningún repositorio de almacenamiento, base de datos o servidor de archivos que mantenga la persistencia de la misma.
* El usuario que logre ingresar para hacer uso del software deberá saber leer y escribir, deberá conocer un teclado convencional y saber digitar palabras en idioma español.
Sólo se podrá ingresar una palabra a la vez.

**Set de pruebas del programa**
Los casos de prueba en lenguaje natural para esta aplicación son:
* Usuario se autentica para ingresar a la aplicación con credenciales incorrectas para probar que sólo está autorizado quien tenga la única credencial autorizada.
* Usuario pulsa el botón “calcular” sin haber ingresado ninguna palabra.
* Usuario pulsa el botón “calcular” ingresando números.
* Usuario pulsa el botón “calcular” ingresando caracteres que no hacen parte del idioma español.
* Usuario pulsa el botón “calcular” ingresando más de 20 caracteres.
* Usuario ingresa desde dos plataformas al tiempo.
* Usuario trata de ingresar caracteres en el cuadro de resultados.
* Usuario pulsa el botón “limpiar” sin haber ingresado ninguna palabra.
* Usuario pulsa el botón “minimizar” en el navegador.
* Usuario pulsa el botón “restaurar” en el navegador.
* Usuario ingresa en diferentes navegadores a la misma aplicación.
* Usuario ingresa desde diferentes dispositivos en plataformas iOS y Android.
* Usuario modifica el ancho y alto de la pantalla en el navegador.
* Usuario trata de usar método de entrada por voz para ingresar la palabra.
