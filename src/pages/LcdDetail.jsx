import React from 'react';
import '../styles/lcdDetail.css'; // Assuming you might want specific styles

const LcdDetail = () => {
  return (
    <div className="lcd-detail-container">
      <h1>LCD Measuring System</h1>

      <section className="project-overview">
        <h2>Overview</h2>
        <p>
          Este proyecto consiste en el diseño y desarrollo de un sistema embebido multifuncional basado en Arduino Uno. El sistema integra sensórica ambiental para monitorear temperatura, humedad y luminosidad en tiempo real, visualizando los datos en una pantalla LCD 16x2.
        </p>
        <p>
          La característica distintiva del proyecto es su interfaz de control remoto infrarrojo (IR), que permite al usuario navegar por un menú dinámico y operar un temporizador programable sin contacto físico. El firmware, desarrollado en C++, implementa una arquitectura no bloqueante (utilizando millis() y librerías asíncronas) para gestionar la lectura de sensores, la decodificación de señales IR y la reproducción de melodías a través de un buzzer pasivo simultáneamente.
        </p>
        <div className="project-image">
          <img src="images/latest_image.webp" alt="Project View" />
        </div>
      </section>

      <section className="wiring-diagram">
        <h2>Connection & Wiring</h2>
        <p>
          {/* Add wiring explanation here */}
          [Wiring Explanation Placeholder]
        </p>
        <div className="image-placeholder">
          {/* <img src={wiringImage} alt="Wiring Diagram" /> */}
          [Wiring/Connection Image Placeholder]
        </div>
      </section>

      <section className="code-explanation">
        <h2>Code Breakdown</h2>
        <div className="code-block">
          <h3>Part 1: Librerías y Definición de Hardware</h3>
          <p>
            Inicialmente se importan las bibliotecas necesarias para controlar los periféricos (IR, LCD, Sensor DHT). También se definen los pines de conexión y se crean las instancias de los objetos que representan el hardware.
          </p>

          <pre><code>{`
  #include <IRremote.h>
  #include <LiquidCrystal.h>
  #include <dht_nonblocking.h>
  #include "melodies.cpp" // Melodías personalizadas
            
  // Instanciación de objetos
  DHT_nonblocking dht_sensor(2, DHT_TYPE_11); // Pin 2 para sensor DHT11
  LiquidCrystal lcd(7,8,9,10,11,12);          // Pines para la pantalla LCD
  IRrecv irrecv(3);                           // Pin 3 para el receptor IR
          `}</code></pre>

          <p>
            Se utiliza un diseño modular importando melodies.cpp para mantener el código principal limpio. Se optó por la librería dht_nonblocking para evitar que la lectura de temperatura detenga el procesador, permitiendo que el sistema siga recibiendo señales infrarrojas sin interrupciones.
          </p>
        </div>
        <div className="code-block">
          <h3>Part 2: Gestión de Estado y Variables Globales</h3>
          <p>
            En lugar de variables sueltas, se utilizan arreglos (arrays) para gestionar los estados del sistema. Esto facilita la escalabilidad si se decidiera agregar más sensores en el futuro.
          </p>

          <pre><code>{`
  // Mensajes del menú
  const String msg[] = {"    HUMEDAD:    ","  TEMPERATURA:  ","  LUMINOSIDAD:  ","  TEMPORIZADOR: "};
  int this_msg = 0; // Índice del menú actual

  // Valores de sensores (0=Humedad, 1=Temp, 2=Luz, 3=Timer)
  float vals[4];          // Valores actuales
  int previous_vals[4];   // Valores de la iteración anterior (para evitar parpadeo en LCD)
          `}</code></pre>

          <p>
            Se implementa una lógica de "estado previo vs. estado actual". Las variables previous_vals sirven para comparar si la información ha cambiado antes de actualizar la pantalla LCD. Esto optimiza el rendimiento y evita el molesto parpadeo (flickering) de la pantalla, ya que solo se redibuja cuando es estrictamente necesario.
          </p>
        </div>
        <div className="code-block">
          <h3>Part 3: Loop Principal - Lectura y Refresco de Pantalla</h3>
          <p>
            El loop principal orquesta la lectura de sensores, la recepción de señales IR y la actualización de la interfaz visual.
          </p>

          <pre><code>{`
  void loop() {
    // Lectura y suavizado de señal del fotorresistor
    vals[2] = (int)(analogRead(A0)/10)*10; 
    
    // Medición no bloqueante de clima
    dht_sensor.measure(&vals[1], &vals[0]); 

    // Decodificación de señal IR si existe
    if(irrecv.decode()){  
      translateIR();      
      irrecv.start();     
    } 
    
    // Actualización de pantalla (Switch Case para menús)
    switch(this_msg){
      case 0: // Humedad
        text = "      " + (String)(int)vals[0] + "%      ";
        print_msg(text, msg_change, this_msg);
        break;
      // ... otros casos (Temperatura, Luz, Timer)
    }
  }
          `}</code></pre>

          <p>
            Se destaca el pre-procesamiento de datos: la lectura de luz se divide y multiplica por 10 para reducir la sensibilidad ("ruido") del sensor analógico, logrando números más estables en pantalla. La estructura switch maneja la navegación del menú, mostrando la información correspondiente según la variable this_msg.
          </p>
        </div>

        <div className="code-block">
          <h3>Part 4: Lógica del Temporizador (Timer)</h3>
          <p>
            Esta sección maneja la cuenta regresiva utilizando el tiempo del sistema (millis()) en lugar de delay(), lo que permite que el sistema siga funcionando mientras cuenta.
          </p>

          <pre><code>{`
  if(marker > 0){
    // Cálculo: Tiempo Configurado - (Tiempo Actual - Tiempo de Inicio)
    vals[3] = time - (millis()/1000 - marker);
    
    // Evento: El tiempo llega a cero
    if (vals[3] == 0){
      marker = 0; // Reset
      print_msg("      TIME      ", msg_change, 3);
      play_melody(PACMAN); // Feedback auditivo
    }
  }
          `}</code></pre>

          <p>
            La variable marker almacena el momento exacto en que inició el temporizador. En cada ciclo, se calcula la diferencia entre el tiempo actual y el marcador para restar segundos. Al finalizar, se dispara una interrupción de software que reproduce la melodía de alerta.
          </p>
        </div>

        <div className="code-block">
          <h3>Part 5: Decodificación de Control Remoto (IR)</h3>
          <p>
            La función translateIR actúa como el controlador de entrada, mapeando códigos hexadecimales a funciones específicas.
          </p>

          <pre><code>{`
  void translateIR(){ 
    // Mapeo del código hexadecimal recibido a acciones
    switch (irrecv.decodedIRData.decodedRawData) {
      case 0xF807FF00: // Botón DOWN
        get_info("DOWN"); // Navegar menú abajo
        break;
      case 0xF609FF00: // Botón UP
        get_info("UP");   // Navegar menú arriba
        break;
      case 0xF30CFF00: // Botón '1'
        if(this_msg == 3) set_timer(1); // Ingresar dígito al timer
        break;
      case 0xBF40FF00: // Botón PAUSE
        start_timer(); // Iniciar cuenta regresiva
        break;
      // ... otros botones
    }
  }
          `}</code></pre>

          <p>
            Esta función traduce las señales crudas del control remoto en acciones lógicas. Se implementa validación de contexto: por ejemplo, los botones numéricos (0-9) solo ejecutan la función set_timer si el usuario se encuentra en la pantalla del temporizador (this_msg == 3), previniendo cambios de configuración accidentales mientras se ven otros menús.
          </p>
        </div>

        <div className="code-block">
          <h3>Part 6: Funciones Auxiliares (Optimización)</h3>
          <p>
            Funciones creadas para evitar la repetición de código y manejar la lógica de actualización eficiente.
          </p>

          <pre><code>{`
  // Compara valores por referencia (punteros) para detectar cambios
  bool info_change(int info, int *previous_info){
    if(info != *previous_info){
      *previous_info = info; // Actualiza el valor previo
      return true;
    }
    else return false;
  }
          `}</code></pre>

          <p>
            info_change es una función crítica para la eficiencia del sistema. Utiliza punteros para manipular directamente las variables de memoria, verificando si el nuevo valor del sensor difiere del anterior. Si son iguales, retorna false, indicando al LCD que no es necesario gastar recursos en repintar la pantalla.
          </p>
        </div>
      </section>

      <section className="video-demo">
        <h2>Video Demonstration</h2>
        <div className="video-wrapper">
          <video
            controls
            preload="metadata"
            poster="../videos/portada-video.png"
            width="100%">

            <source src="../videos/lcd-system.mp4" type="video/mp4" />

            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      </section>
    </div>
  );
};

export default LcdDetail;
