/*ejercicio1
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/


/*document.addEventListener('DOMContentLoaded', function() {
    // Obtén referencias a los elementos del DOM
    let startButton = document.getElementById('startButton');
    let gameArea = document.getElementById('gameArea');
    let guessInput = document.getElementById('guessInput');
    let submitGuess = document.getElementById('submitGuess');
    
    // Oculta el área del juego al principio
    gameArea.style.display = 'none';
    
    // Asigna un controlador de eventos al botón de inicio
    startButton.addEventListener('click', function() {
        // Genera un número aleatorio entre 1 y 100
        var randomNumber = Math.floor(Math.random() * 45);
        
        // Muestra el área del juego y oculta el botón de inicio
        gameArea.style.display = 'block';
        startButton.style.display = 'none';
        
        // Asigna un controlador de eventos al botón de enviar
        submitGuess.addEventListener('click', function() {
            // Obtiene el número ingresado por el usuario
            var userGuess = parseInt(guessInput.value);
            
            // Compara el número ingresado con el número aleatorio
            if (userGuess === randomNumber) {
                // El usuario adivinó el número
                alert('¡Felicitaciones! Adivinaste el número.');
            } else if (userGuess < randomNumber) {
                // El número ingresado es menor al número aleatorio
                alert('El número ingresado es menor. Intenta nuevamente.');
            } else {
                // El número ingresado es mayor al número aleatorio
                alert('El número ingresado es mayor. Intenta nuevamente.');
            }
        });
    });
}); */

/*ejercicio 2
2- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.*/



/*class Persona {
    constructor(nombre, edad, dni, sexo, peso, altura, año_nacimiento) {
      this.nombre = nombre;
      this.edad = edad;
      this.dni = dni;
      this.sexo = sexo;
      this.peso = peso;
      this.altura = altura;
      this.año_nacimiento = año_nacimiento;
    }
  
    mostrarGeneracion() {
      const generacion = this.obtenerGeneracion();
      const rasgo_caracteristico = this.obtenerRasgoCaracteristico(generacion);
      const mensaje = `Esta persona pertenece a la generación ${generacion} y su rasgo característico es ${rasgo_caracteristico}.`;
      console.log(mensaje);
    }
  
    obtenerGeneracion() {
      if (this.año_nacimiento >= 1930 && this.año_nacimiento <= 1948) {
        return "los niños de la pos guerra";

      } else if (this.año_nacimiento >= 1949 && this.año_nacimiento <= 1968) {
        return "Baby boom";

      } else if (this.año_nacimiento >= 1969 && this.año_nacimiento <= 1980) {
        return "Generacion X";

      } else if (this.año_nacimiento >= 1981 && this.año_nacimiento <= 1993) {
        return "Generación millenials";

      } else if (this.año_nacimiento >= 1994 && this.año_nacimiento <= 2010) {
        return "Generación Z";
      } else {
        return "Generación Desconocida";
      }
    }
  
    obtenerRasgoCaracteristico(generacion) {
      if (generacion === "los niños de la pos guerra") {
        return "conflictos belicos.";

      } else if (generacion === "Baby boom") {
        return "Paz y explosion demografica.";

      } else if (generacion === "Generacion X") {
        return "Crisis del 73 y transicion española.";

      } else if (generacion === "Generación millenials") {
        return "Inicio de la digitalizacion";

      } else if (generacion === "Generación Z") {
        return "Expansion masiva de internet";

      } else {
        return "Rasgo característico desconocido";
      }
    }
  }
  
  // Ejemplo de uso
  //const persona1 = new Persona("Juan", 30, "12345678", "H", 70, 170, 1990);
  //persona1.mostrarGeneracion();
  let facundo = new Persona("facundo", 27, "39366889", "H", 90, 170, 1995);
  Persona.mostrarGeneracion(); */


/*ejercicio 3
3 - Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. */


/*const inputTarea = document.getElementById('inputTarea');
const btnAgregar = document.getElementById('btnAgregar');
const listaTareas = document.getElementById('listaTareas');

// Función para agregar una tarea a la lista
function agregarTarea() {
  const tarea = inputTarea.value;
  if (tarea !== '') {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(tarea));

    const btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn btn-danger btn-sm float-right';
    btnEliminar.appendChild(document.createTextNode('Eliminar'));
    btnEliminar.addEventListener('click', function () {
      li.remove();
    });

    li.appendChild(btnEliminar);
    listaTareas.appendChild(li);

    inputTarea.value = '';
  }
}

// Evento click del botón Agregar
btnAgregar.addEventListener('click', agregarTarea);*/

//ejercicio 4
//4- Crear una web con un reloj que muestre la siguiente información: 
//fecha: 29 de octubre de 2015 y la hora 12:02,58.



// Obtén los elementos HTML del reloj
/*let fechaElement = document.getElementById('fecha');
let horaElement = document.getElementById('hora');

// una función para obtener la fecha y hora actual
function actualizarReloj() {
    let fecha = new Date(2015, 9, 29, 12, 2, 58); // Año, mes (base 0), día, hora, minuto, segundo

    // Obtiene los componentes de fecha
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1; // Los meses en JavaScript son base 0
    let año = fecha.getFullYear();

    // Obtiene los componentes de hora
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();

    // Formatea la fecha y hora como texto legible
    let fechaTexto = dia + ' de ' + obtenerNombreMes(mes) + ' de ' + año;
    let horaTexto = formatoDosDigitos(horas) + ':' + formatoDosDigitos(minutos) + ':' + formatoDosDigitos(segundos);

    // Actualiza los elementos HTML con la fecha y hora actual
    fechaElement.textContent = fechaTexto;
    horaElement.textContent = horaTexto;
}

// Función para obtener el nombre del mes
function obtenerNombreMes(mes) {
    let nombresMeses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    return nombresMeses[mes - 1];
}

// Función para formatear un número a dos dígitos
function formatoDosDigitos(numero) {
    return ("0" + numero).slice(-2);
}

// Llama a la función de actualización
actualizarReloj();
*/

/*5- Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.*/


/*window.addEventListener('load', function() {
  let timer = document.getElementById('timer');
  let startButton = document.getElementById('startButton');
  let pauseButton = document.getElementById('pauseButton');
  let resetButton = document.getElementById('resetButton');
  let startTime, elapsedTime = 0;
  let timerInterval;

  startButton.addEventListener('click', startTimer);
  pauseButton.addEventListener('click', pauseTimer);
  resetButton.addEventListener('click', resetTimer);

  function startTimer() {
      if (!timerInterval) {
          startTime = Date.now() - elapsedTime;
          timerInterval = setInterval(updateTimer, 10); // Actualiza cada 10ms
      }
  }

  function pauseTimer() {
      clearInterval(timerInterval);
      timerInterval = null;
  }

  function resetTimer() {
      clearInterval(timerInterval);
      timerInterval = null;
      elapsedTime = 0;
      timer.textContent = '00:00:00';
  }

  function updateTimer() {
      let currentTime = Date.now();
      elapsedTime = currentTime - startTime;
      timer.textContent = formatTime(elapsedTime);
  }

  function formatTime(time) {
      let ms = Math.floor(time % 1000 / 10);
      let seconds = Math.floor(time / 1000 % 60);
      let minutes = Math.floor(time / (1000 * 60) % 60);
      let hours = Math.floor(time / (1000 * 60 * 60) % 24);
      
      return (
          (hours < 10 ? '0' + hours : hours) + ':' +
          (minutes < 10 ? '0' + minutes : minutes) + ':' +
          (seconds < 10 ? '0' + seconds : seconds) + '.' +
          (ms < 10 ? '0' + ms : ms)
      );
  }
});*/


//6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde 
//comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset.


  /*let contadorInterval;
      let tiempoInicial = 60;
      let tiempoRestante = tiempoInicial;
      let contadorElement = document.getElementById('contador');
      let tiempoRestanteElement = document.getElementById('tiempo-restante');

  function iniciarContador() {
      tiempoInicial = parseInt(document.getElementById('tiempo').value);
      tiempoRestante = tiempoInicial;

      contadorInterval = setInterval(actualizarContador, 1000);

      document.getElementById('iniciar').disabled = true;
      document.getElementById('pausar').disabled = false;
      document.getElementById('reiniciar').disabled = false;
    }

  function pausarContador() {
      clearInterval(contadorInterval);

      document.getElementById('iniciar').disabled = false;
      document.getElementById('pausar').disabled = true;
      document.getElementById('reiniciar').disabled = false;
    }

  function reiniciarContador() {
      clearInterval(contadorInterval);

      tiempoRestante = tiempoInicial;
      actualizarContador();

      document.getElementById('iniciar').disabled = false;
      document.getElementById('pausar').disabled = true;
      document.getElementById('reiniciar').disabled = true;
    }

    function actualizarContador() {
      tiempoRestante--;
      tiempoRestanteElement.textContent = tiempoRestante;

      if (tiempoRestante <= 0) {
        clearInterval(contadorInterval);
        contadorElement.textContent = 'Tiempo finalizado';
        document.getElementById('pausar').disabled = true;
      }
    }

    document.getElementById('iniciar').addEventListener('click', iniciarContador);
    document.getElementById('pausar').addEventListener('click', pausarContador);
    document.getElementById('reiniciar').addEventListener('click', reiniciarContador); */






