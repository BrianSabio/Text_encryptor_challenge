
## Sitio con programa de encriptación y desencriptación de texto


Este es un proyecto Responsive Design y Mobile First en el cual se toma un texto ingresado (que sólo acepta minúsculas y espacios) y permite cifrarlo o descifrarlo a partir de las siguientes "llaves" de encriptación:


	La letra "e" es convertida para "enter"
	La letra "i" es convertida para "imes"
	La letra "a" es convertida para "ai"
	La letra "o" es convertida para "ober"
	La letra "u" es convertida para "ufat"


### Casos de uso:

~~~
"gato" => "gaitober"
gaitober" => "gato"
~~~

	"maria" => "mairimesai"
	"mairimesai" => "maria"



El proyecto se desarrolla con los lenguajes HTML, CSS y JavaScript.
Por parte del CSS se hace uso de variables, reglas como @keyframes y @media.
Con JavaScript se utilizan funciones, sintaxis de manipulación de nodos y elementos con DOM, manejo de excepciones con try/catch y sintaxis async/await para funciones asincrónicas.


### La plantilla se compone del header, el main con dos divisiones y el footer:

 - En el header se sitúa el ícono del sitio.


 - Dentro de la primera división, en el primer section, se encuentra el imput del programa con la leyenda por defecto 'Ingrese el texto aquí'.


 - Siguiendo en la primera división, en el segundo section, se hallan dos div, uno con un ícono y un párrafo con la leyenda 'Sólo letras minúsculas y sin acentos'. El otro div incluye los botones 'Encriptar' y 'Desencriptar'.


 - Dentro de la segunda división, en el tercer section, se sitúa un div con el output del programa, por defecto el párrafo 'Ningún mensaje fue encontrado' junto con otro párrafo debajo, de menor tamaño, con la leyenda 'Ingresa el texto que desees encriptar o desencriptar'.


 - En el footer se encuentran los datos del autor junto con el año de creación y la leyenda de los derechos reservados.

//imagenes//

**[https://briansabio.github.io/Text_encryptor_challenge/](https://briansabio.github.io/Text_encryptor_challenge/)**

***Desarrollado por Brian Sabio***