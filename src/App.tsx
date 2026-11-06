import { useState, useEffect, useMemo } from 'react';

type TabId = 'inicio' | 'herramientas' | 'sensores' | 'proyectos' | 'tinkercad';

function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 6,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function Navbar({ activeTab, setActiveTab }: { activeTab: TabId; setActiveTab: (t: TabId) => void }) {
  const getTabClass = (id: TabId) => {
    const base = 'px-3 py-2 text-sm border rounded-t-lg bg-dark-800 transition-all';
    const isActive = activeTab === id;
    
    switch (id) {
      case 'inicio':
        return `${base} ${isActive ? 'border-neon-cyan bg-dark-700 font-bold neon-glow' : 'border-neon-cyan/50 hover:border-neon-cyan'}`;
      case 'herramientas':
        return `${base} ${isActive ? 'border-neon-green bg-dark-700 font-bold neon-glow' : 'border-neon-green/50 hover:border-neon-green'}`;
      case 'sensores':
        return `${base} ${isActive ? 'border-neon-amber bg-dark-700 font-bold neon-glow' : 'border-neon-amber/50 hover:border-neon-amber'}`;
      case 'proyectos':
        return `${base} ${isActive ? 'border-neon-magenta bg-dark-700 font-bold neon-glow' : 'border-neon-magenta/50 hover:border-neon-magenta'}`;
      case 'tinkercad':
        return `${base} ${isActive ? 'border-purple-500 bg-dark-700 font-bold neon-glow' : 'border-purple-500/50 hover:border-purple-500'}`;
    }
  };

  const tabs: { id: TabId; icon: string; label: string }[] = [
    { id: 'inicio', icon: 'fa-bolt', label: 'INICIO' },
    { id: 'herramientas', icon: 'fa-microchip', label: 'HERRAMIENTAS' },
    { id: 'sensores', icon: 'fa-cogs', label: 'SENSORES' },
    { id: 'proyectos', icon: 'fa-flask', label: 'PROYECTOS' },
    { id: 'tinkercad', icon: 'fa-desktop', label: 'SIMULACIÓN' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-neon-cyan/30 px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <a href="#" className="font-orbitron text-2xl font-bold text-neon-cyan neon-glow">
          CODE<span className="text-neon-magenta">NEON</span>{' '}
          <span className="text-sm text-gray-400 font-jp">コード・ネオン</span>
        </a>
        <div className="flex gap-1 mt-2 md:mt-0 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={getTabClass(tab.id)}
              style={{
                boxShadow: activeTab === tab.id ? '0 0 10px #0ff' : undefined,
              }}
            >
              <i className={`fa ${tab.icon}`}></i> {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function InicioSection() {
  return (
    <div className="py-16 text-center">
      <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-6">
        <span className="text-neon-cyan neon-glow">APRENDE A CREAR</span>
        <br />
        <span className="text-neon-magenta neon-pink">EL FUTURO</span>
      </h1>
      <p className="text-xl text-gray-300 mb-2 font-jp">
        ロボット工学 × プログラミング — Robótica × Código
      </p>
      <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
        Desde cero hasta proyectos reales con{' '}
        <span className="text-neon-green">Arduino</span>,{' '}
        <span className="text-neon-cyan">Scratch</span> y{' '}
        <span className="text-neon-amber">Tinkercad</span>
      </p>
      <div className="inline-block bg-dark-800/80 border border-neon-green/50 rounded-lg p-4 box-neon-green max-w-md text-left">
        <span className="text-neon-green">$</span> sistema_iniciado --modo=aprendizaje
        <br />
        <span className="text-gray-400">
          &gt; Cargando módulos: Electrónica, Sensores, Automatización...
        </span>
        <br />
        <span className="text-neon-green typing-cursor">&gt; Listo para crear</span>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="bg-dark-800/60 border border-neon-cyan/40 rounded-xl p-6 box-neon hover:scale-105 transition-transform">
          <i className="fa fa-microchip text-4xl text-neon-cyan mb-4"></i>
          <h3 className="font-orbitron text-xl mb-2">ARDUINO</h3>
          <p className="text-gray-400">
            La placa más popular del mundo. Física + código = tus primeras invenciones.
          </p>
        </div>
        <div className="bg-dark-800/60 border border-neon-green/40 rounded-xl p-6 box-neon-green hover:scale-105 transition-transform">
          <i className="fa fa-code-fork text-4xl text-neon-green mb-4"></i>
          <h3 className="font-orbitron text-xl mb-2">SCRATCH</h3>
          <p className="text-gray-400">
            Programación visual sin escribir código. Bloquear, ensamblar, crear.
          </p>
        </div>
        <div className="bg-dark-800/60 border border-neon-magenta/40 rounded-xl p-6 box-neon-pink hover:scale-105 transition-transform">
          <i className="fa fa-laptop text-4xl text-neon-magenta mb-4"></i>
          <h3 className="font-orbitron text-xl mb-2">TINKERCAD</h3>
          <p className="text-gray-400">
            Simula antes de construir. Cero riesgo, toda la imaginación.
          </p>
        </div>
      </div>
    </div>
  );
}

function HerramientasSection() {
  return (
    <>
      <h2 className="font-orbitron text-3xl text-neon-cyan neon-glow mb-8 border-b border-neon-cyan/30 pb-2">
        <span className="text-gray-500">//</span> HERRAMIENTAS PRINCIPALES{' '}
        <span className="font-jp text-sm text-gray-500">ツール</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Arduino Uno */}
        <div className="bg-dark-800/60 border border-neon-green/40 rounded-xl p-6 box-neon-green">
          <h3 className="font-orbitron text-2xl text-neon-green mb-4">🤖 Arduino Uno</h3>
          <p className="text-gray-300 mb-4">
            Placa de hardware libre basada en el microcontrolador ATmega328p. Estándar mundial
            educativo.
          </p>
          <ul className="space-y-2 text-sm">
            <li><span className="text-neon-amber">▸</span> 14 pines digitales (6 con PWM)</li>
            <li><span className="text-neon-amber">▸</span> 6 entradas analógicas</li>
            <li><span className="text-neon-amber">▸</span> Alimentación: 5V / 3.3V</li>
            <li><span className="text-neon-amber">▸</span> Comunicación: USB, I2C, SPI</li>
            <li><span className="text-neon-amber">▸</span> Lenguaje: C/C++ simplificado</li>
          </ul>
        </div>

        {/* Scratch */}
        <div className="bg-dark-800/60 border border-neon-cyan/40 rounded-xl p-6 box-neon">
          <h3 className="font-orbitron text-2xl text-neon-cyan mb-4">🧩 Scratch</h3>
          <p className="text-gray-300 mb-4">
            Lenguaje visual del MIT. Programa arrastrando bloques — sin errores de sintaxis.
          </p>
          <ul className="space-y-2 text-sm">
            <li><span className="text-neon-amber">▸</span> Ideal para iniciar en pensamiento computacional</li>
            <li><span className="text-neon-amber">▸</span> Integrable con Arduino: S4A / PictoBlox</li>
            <li><span className="text-neon-amber">▸</span> Crea juegos, animaciones y controla el mundo físico</li>
            <li><span className="text-neon-amber">▸</span> Sin instalación — funciona en el navegador</li>
          </ul>
        </div>
      </div>

      {/* Tinkercad */}
      <div className="bg-dark-800/60 border border-neon-magenta/40 rounded-xl p-6 box-neon-pink mb-8">
        <h3 className="font-orbitron text-2xl text-neon-magenta mb-4">🖥️ Tinkercad Circuits</h3>
        <p className="text-gray-300 mb-4">
          Simulación virtual gratuita de Autodesk. Prueba circuitos sin riesgo de quemar nada.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-neon-magenta font-bold">📐 Diseña</span>
            <p className="text-gray-400 mt-1">Biblioteca completa de componentes. Arrastra y conecta.</p>
          </div>
          <div>
            <span className="text-neon-magenta font-bold">▶ Simula</span>
            <p className="text-gray-400 mt-1">Ver funcionamiento en tiempo real. Código por bloques o texto.</p>
          </div>
          <div>
            <span className="text-neon-magenta font-bold">📤 Construye</span>
            <p className="text-gray-400 mt-1">Exporta el diagrama y réplicalo en la vida real.</p>
          </div>
        </div>
      </div>

      {/* Componentes Table */}
      <h3 className="font-orbitron text-xl text-neon-amber mb-4">⚡ Esquemas de Componentes Electrónicos</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-3 text-left text-neon-amber">Componente</th>
              <th className="p-3 text-left text-neon-amber">Símbolo</th>
              <th className="p-3 text-left text-neon-amber">Función</th>
              <th className="p-3 text-left text-neon-amber">Conexión típica</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['LED', '⚡', 'Emite luz', 'Ánodo → VCC + resistencia • Cátodo → GND'],
              ['Resistencia', '⫶', 'Limita corriente', 'En serie con el componente protegido'],
              ['Pulsador', '⏷', 'Entrada manual', 'Un lado → pin digital • Otro → GND'],
              ['Potenciómetro', '⚙️', 'Ajusta voltaje', 'Extremos → 5V y GND • Centro → pin analógico'],
              ['Buzzer / Zumbador', '🔊', 'Emite sonido', '(+) → pin digital • (−) → GND'],
              ['LCD 16×2 (I2C)', '📺', 'Muestra texto', 'VCC→5V • GND • SDA • SCL'],
            ].map(([comp, sym, func, conn], i) => (
              <tr key={i} className="border-b border-gray-800 hover:bg-dark-700/50">
                <td className="p-3">{comp}</td>
                <td className="p-3">{sym}</td>
                <td className="p-3">{func}</td>
                <td className="p-3">{conn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function SensorCard({ title, titleColor, borderClass, boxClass, connections, range, usage, code }: {
  title: string; titleColor: string; borderClass: string; boxClass: string;
  connections: string; range: string; usage: string; code: string;
}) {
  return (
    <div className={`bg-dark-800/60 border ${borderClass} rounded-xl p-6 ${boxClass}`}>
      <h3 className={`font-orbitron text-xl mb-3 ${titleColor}`}>{title}</h3>
      <div className="text-sm space-y-1 mb-3">
        <p>{connections}</p>
        <p className="text-gray-400">{range}</p>
        <p className="text-gray-300"><strong>Uso:</strong> {usage}</p>
      </div>
      <pre className="bg-dark-900/80 p-3 rounded text-xs text-green-300">{code}</pre>
    </div>
  );
}

function SensoresSection() {
  return (
    <>
      <h2 className="font-orbitron text-3xl text-neon-amber mb-8 border-b border-neon-amber/30 pb-2">
        <span className="text-gray-500">//</span> SENSORES &amp; CONEXIONES{' '}
        <span className="font-jp text-sm text-gray-500">センサー</span>
      </h2>

      <p className="text-gray-300 mb-6">
        <span className="text-neon-amber font-bold">📌 Regla general:</span> Todos los sensores
        comparten: <span className="text-red-400">VCC</span> → Alimentación ·{' '}
        <span className="text-gray-400">GND</span> → Tierra ·{' '}
        <span className="text-green-400">SEÑAL</span> → Pin de lectura
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <SensorCard
          title="📏 HC-SR04 — Distancia"
          titleColor="text-neon-cyan"
          borderClass="border-neon-cyan/40"
          boxClass="box-neon"
          connections="VCC → 5V · GND → GND · Trig → D7 · Echo → D6"
          range="Rango: 2–450 cm"
          usage="Obstáculos, nivel de agua, alarma proximidad"
          code={`// Lectura rápida
long duracion, distancia;
digitalWrite(trig, LOW);
delayMicroseconds(2);
digitalWrite(trig, HIGH);
delayMicroseconds(10);
digitalWrite(trig, LOW);
duracion = pulseIn(echo, HIGH);
distancia = duracion * 0.034 / 2;`}
        />
        <SensorCard
          title="🌡️ DHT11 — Temp. y Humedad"
          titleColor="text-neon-green"
          borderClass="border-neon-green/40"
          boxClass="box-neon-green"
          connections="VCC → 5V · GND → GND · DATA → D2"
          range="DHT11: 0–50°C / 20–90% HR"
          usage="Estación meteorológica, ventilación automática"
          code={`// Con librería DHT
float t = dht.readTemperature();
float h = dht.readHumidity();
Serial.print("Temp: "); Serial.print(t);
Serial.print("°C | Humedad: "); Serial.print(h); Serial.println("%");`}
        />
        <SensorCard
          title="👁️ PIR — Movimiento"
          titleColor="text-neon-magenta"
          borderClass="border-neon-magenta/40"
          boxClass="box-neon-pink"
          connections="VCC → 5V · GND → GND · OUT → D2"
          range="Detecta cambios de radiación infrarroja"
          usage="Luces automáticas, alarma, ahorro energético"
          code={`int lectura = digitalRead(pirPin);
if (lectura == HIGH) {
  Serial.println("¡Movimiento detectado!");
  digitalWrite(led, HIGH);
} else {
  digitalWrite(led, LOW);
}`}
        />
        <SensorCard
          title="💡 LDR — Nivel de Luz"
          titleColor="text-neon-amber"
          borderClass="border-neon-amber/40"
          boxClass=""
          connections="LDR + Resistencia → Divisor de tensión → A0"
          range="Valor alto = poca luz · Valor bajo = mucha luz"
          usage="Encendido automático, cortinas solares"
          code={`int luz = analogRead(ldrPin);
if (luz > 600) {
  digitalWrite(led, HIGH); // Está oscuro → encender
} else {
  digitalWrite(led, LOW);  // Hay luz → apagar
}`}
        />
      </div>
    </>
  );
}

function ProyectosSection() {
  return (
    <>
      <h2 className="font-orbitron text-3xl text-neon-magenta neon-pink mb-8 border-b border-neon-magenta/30 pb-2">
        <span className="text-gray-500">//</span> PROYECTO ESTRELLA{' '}
        <span className="font-jp text-sm text-gray-500">プロジェクト</span>
      </h2>

      <div className="bg-dark-800/60 border border-neon-green/40 rounded-xl p-6 box-neon-green mb-8">
        <h3 className="font-orbitron text-2xl text-neon-green mb-4">
          🌱 Maceta Inteligente — Riego Automático
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Conexiones */}
          <div>
            <h4 className="text-lg font-bold text-neon-cyan mb-3">🔌 Conexiones</h4>
            <table className="w-full text-sm mb-4">
              <thead>
                <tr className="text-neon-cyan">
                  <th className="text-left p-2 border-b border-gray-700">Componente</th>
                  <th className="text-left p-2 border-b border-gray-700">Pin Arduino</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ['Sensor Humedad VCC', '5V 🔴'],
                  ['Sensor Humedad GND', 'GND ⚫'],
                  ['Sensor Humedad AO', 'A0 🟢'],
                  ['Relé VCC', '5V 🔴'],
                  ['Relé GND', 'GND ⚫'],
                  ['Relé IN', 'D7 🟡'],
                  ['Relé COM → Bomba +', '—'],
                  ['Relé NO → Fuente +', '—'],
                  ['Bomba −', 'GND ⚫'],
                ].map(([comp, pin], i) => (
                  <tr key={i}>
                    <td className="p-2">{comp}</td>
                    <td className="p-2">{pin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-yellow-400 text-sm">
              ⚠️ La bomba necesita su propia fuente de alimentación externa. Nunca conectarla
              directamente a los pines del Arduino.
            </p>
          </div>

          {/* Código */}
          <div>
            <h4 className="text-lg font-bold text-neon-green mb-3">💻 Código Completo</h4>
            <pre className="bg-dark-900/80 p-4 rounded text-xs text-green-300 overflow-auto max-h-96">
{`/*
  MACETA INTELIGENTE — Riego Automático
  Placa: Arduino Uno
*/

const int pinHumedad = A0;
const int pinRele = 7;

// Calibra estos valores con tu sensor
const int SECO  = 350;  // Encender si supera
const int HUMEDO = 200; // Apagar si baja

int estadoBomba = LOW;
int valorSensor = 0;

void setup() {
  pinMode(pinRele, OUTPUT);
  digitalWrite(pinRele, LOW);
  Serial.begin(9600);
  Serial.println("=== SISTEMA DE RIEGO INICIADO ===");
}

void loop() {
  valorSensor = analogRead(pinHumedad);
  
  Serial.print("Valor: ");
  Serial.print(valorSensor);

  if (valorSensor > SECO && estadoBomba == LOW) {
    estadoBomba = HIGH;
    digitalWrite(pinRele, HIGH);
    Serial.println(" → 🌵 SECO — ENCENDIENDO BOMBA");
  } 
  else if (valorSensor < HUMEDO && estadoBomba == HIGH) {
    estadoBomba = LOW;
    digitalWrite(pinRele, LOW);
    Serial.println(" → 💧 HÚMEDO — APAGANDO BOMBA");
  }
  else {
    Serial.println(" → OK");
  }

  delay(2000); // Esperar 2 segundos
}`}
            </pre>
          </div>
        </div>

        {/* Calibración */}
        <div className="mt-6 p-4 bg-dark-900/50 rounded-lg border border-neon-amber/30">
          <h4 className="text-neon-amber font-bold mb-2">📐 Calibración Paso a Paso</h4>
          <ol className="list-decimal list-inside text-gray-300 space-y-1 text-sm">
            <li>Conecta todo sin la bomba aún</li>
            <li>Abre el Monitor Serie a 9600 baudios</li>
            <li>
              Con el sensor al aire → anota el valor → ese es tu{' '}
              <code className="bg-dark-700 px-1 rounded">SECO</code>
            </li>
            <li>
              Con el sensor en agua/tierra húmeda → anota → ese es tu{' '}
              <code className="bg-dark-700 px-1 rounded">HUMEDO</code>
            </li>
            <li>Modifica el código con tus valores y vuelve a cargar</li>
            <li>Agrega al menos 50 puntos de diferencia entre ambos para estabilidad</li>
          </ol>
        </div>
      </div>

      {/* Otros proyectos */}
      <h3 className="font-orbitron text-xl text-neon-amber mb-4">🔥 Otros Proyectos Disponibles</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-dark-800/60 border border-neon-cyan/30 rounded-lg p-4 hover:border-neon-cyan transition-colors">
          <h4 className="font-bold text-neon-cyan">Semáforo Inteligente</h4>
          <p className="text-gray-400 text-sm mt-1">
            LEDs + Pulsador/PIR → Control de paso peatonal
          </p>
        </div>
        <div className="bg-dark-800/60 border border-neon-green/30 rounded-lg p-4 hover:border-neon-green transition-colors">
          <h4 className="font-bold text-neon-green">Estación Meteorológica</h4>
          <p className="text-gray-400 text-sm mt-1">
            DHT11 + LCD → Muestra temp y humedad en tiempo real
          </p>
        </div>
        <div className="bg-dark-800/60 border border-neon-magenta/30 rounded-lg p-4 hover:border-neon-magenta transition-colors">
          <h4 className="font-bold text-neon-magenta">Alarma de Seguridad</h4>
          <p className="text-gray-400 text-sm mt-1">
            HC-SR04/PIR + Zumbador → Detecta intrusos
          </p>
        </div>
      </div>
    </>
  );
}

function TinkercadSection() {
  return (
    <>
      <h2 className="font-orbitron text-3xl text-purple-400 mb-8 border-b border-purple-500/30 pb-2">
        <span className="text-gray-500">//</span> SIMULACIÓN EN TINKERCAD{' '}
        <span className="font-jp text-sm text-gray-500">シミュレーション</span>
      </h2>

      <div className="bg-dark-800/60 border border-purple-500/40 rounded-xl p-6 mb-8">
        <h3 className="font-orbitron text-xl text-purple-300 mb-4">
          🎮 Maceta Inteligente — Versión Virtual
        </h3>
        <p className="text-gray-300 mb-4">
          Prueba el proyecto sin componentes físicos. Usa el motor DC como simulación de bomba y el
          control deslizante del sensor.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Conexiones virtuales */}
          <div>
            <h4 className="font-bold text-purple-300 mb-3">🔌 En el diagrama virtual</h4>
            <table className="w-full text-sm mb-4">
              <thead>
                <tr className="text-purple-300">
                  <th className="text-left p-2 border-b border-gray-700">Componente</th>
                  <th className="text-left p-2 border-b border-gray-700">Pin Arduino</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {[
                  ['Sensor Humedad → VCC', '5V'],
                  ['Sensor Humedad → GND', 'GND'],
                  ['Sensor Humedad → AO', 'A0'],
                  ['Relé → VCC', '5V'],
                  ['Relé → GND', 'GND'],
                  ['Relé → IN', 'D7'],
                  ['Relé COM → Motor +', '—'],
                  ['Relé NO → 5V', '—'],
                  ['Motor −', 'GND'],
                ].map(([comp, pin], i) => (
                  <tr key={i}>
                    <td className="p-2">{comp}</td>
                    <td className="p-2">{pin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bloques de programación */}
          <div>
            <h4 className="font-bold text-purple-300 mb-3">🧱 Código por Bloques</h4>
            <pre className="bg-dark-900/80 p-4 rounded text-xs text-purple-200">
{`AL INICIAR
  Establecer pin 7 como SALIDA
  Escribir pin 7 → BAJO
  Iniciar serie a 9600
  UMBRAL_SECO = 350
  UMBRAL_HUMEDO = 200
  estadoBomba = BAJO

POR SIEMPRE
  valor = leer A0
  Enviar por serie "Valor: " + valor

  SI valor > UMBRAL_SECO Y estadoBomba = BAJO:
    escribir pin 7 → ALTO
    estadoBomba = ALTO
    enviar " → BOMBA ENCENDIDA 💧"
  SI NO SI valor < UMBRAL_HUMEDO Y estadoBomba = ALTO:
    escribir pin 7 → BAJO
    estadoBomba = BAJO
    enviar " → BOMBA APAGADA ✅"
  FIN SI

  Esperar 2000 milisegundos`}
            </pre>
          </div>
        </div>

        {/* Pasos de simulación */}
        <div className="mt-6 p-4 bg-dark-900/50 rounded-lg border border-purple-500/30">
          <h4 className="text-purple-300 font-bold mb-2">🧪 Cómo Probar</h4>
          <ol className="list-decimal list-inside text-gray-300 space-y-1 text-sm">
            <li>Arrastra todos los componentes al área de trabajo</li>
            <li>Conecta siguiendo la tabla anterior</li>
            <li>
              Ve a la pestaña <strong>Código → Bloques</strong>
            </li>
            <li>Arma el diagrama tal como se muestra arriba</li>
            <li>
              Pulsa ▶ <strong>Iniciar simulación</strong>
            </li>
            <li>Haz clic sobre el sensor → mueve el control deslizante:</li>
            <ul className="list-disc list-inside ml-4 text-gray-400">
              <li>Hacia seco → valor sube → motor gira 💧</li>
              <li>Hacia húmedo → valor baja → motor se detiene ✅</li>
            </ul>
            <li>
              Abre el <strong>Monitor Serie</strong> para ver los valores en tiempo real
            </li>
          </ol>
        </div>

        {/* De virtual a real */}
        <div className="mt-6 p-4 bg-dark-900/50 rounded-lg border border-neon-green/30">
          <h4 className="text-neon-green font-bold mb-2">🔄 De la Simulación a la Vida Real</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-purple-300 font-bold mb-1">En Tinkercad</p>
              <ul className="text-gray-400 space-y-1">
                <li>Motor DC visual → Bomba de agua real</li>
                <li>Control deslizante → Sensor enterrado en la tierra</li>
                <li>Alimentación simplificada → Fuente externa para la bomba</li>
              </ul>
            </div>
            <div>
              <p className="text-neon-green font-bold mb-1">En la realidad</p>
              <ul className="text-gray-400 space-y-1">
                <li>⚠️ Nunca conectar la bomba directamente a los pines del Arduino</li>
                <li>Usar siempre el relé como intermediario</li>
                <li>Limpiar las puntas del sensor cada 2 semanas</li>
                <li>No dejar la bomba funcionando sin agua</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Variantes */}
      <h3 className="font-orbitron text-xl text-neon-amber mb-4">💡 Variantes para Ampliar el Proyecto</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-dark-800/60 border border-neon-cyan/30 rounded-lg p-4">
          <h4 className="font-bold text-neon-cyan">🟢 Indicador Visual</h4>
          <p className="text-gray-400 text-sm mt-1">
            Agrega LEDs: Verde = todo bien · Rojo = necesita agua. Conecta a pines digitales y
            controla desde el código.
          </p>
        </div>
        <div className="bg-dark-800/60 border border-neon-magenta/30 rounded-lg p-4">
          <h4 className="font-bold text-neon-magenta">📺 Pantalla LCD</h4>
          <p className="text-gray-400 text-sm mt-1">
            Muestra el porcentaje de humedad y el estado de la bomba sin necesidad del monitor
            serie.
          </p>
        </div>
        <div className="bg-dark-800/60 border border-neon-green/30 rounded-lg p-4">
          <h4 className="font-bold text-neon-green">⏱️ Tiempo de Seguridad</h4>
          <p className="text-gray-400 text-sm mt-1">
            Limita el riego a 10 segundos máximo para no inundar: agrega un contador de tiempo
            activo.
          </p>
        </div>
        <div className="bg-dark-800/60 border border-neon-amber/30 rounded-lg p-4">
          <h4 className="font-bold text-neon-amber">📱 Notificación por Wi-Fi</h4>
          <p className="text-gray-400 text-sm mt-1">
            Con ESP32: envía un mensaje al celular cuando el riego se activa o el depósito está
            vacío.
          </p>
        </div>
      </div>
    </>
  );
}

function LearningSection() {
  return (
    <section className="bg-dark-800/60 border border-neon-cyan/30 rounded-xl p-6 box-neon mb-8">
      <h2 className="font-orbitron text-2xl text-neon-cyan neon-glow mb-4">📚 Lo que Aprenderás</h2>
      <div className="grid md:grid-cols-2 gap-4 text-sm">
        <ul className="space-y-2 text-gray-300">
          <li>✅ Lectura de sensores analógicos y comparación de valores</li>
          <li>✅ Uso de umbrales para control automático</li>
          <li>✅ Manejo de relés para dispositivos de mayor potencia</li>
          <li>✅ Calibración de sensores según el entorno real</li>
        </ul>
        <ul className="space-y-2 text-gray-300">
          <li>✅ Montaje virtual y físico de circuitos completos</li>
          <li>✅ Programación por bloques y por código texto</li>
          <li>✅ Conexión entre simulación y montaje en la vida real</li>
          <li>✅ Aplicación de automatización en el hogar cotidiano</li>
        </ul>
      </div>
    </section>
  );
}

function SafetySection() {
  return (
    <section className="bg-dark-800/60 border border-yellow-500/30 rounded-xl p-6 mb-8">
      <h2 className="font-orbitron text-xl text-yellow-400 mb-4">⚠️ Normas de Seguridad</h2>
      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
        <div>
          <p className="font-bold text-yellow-300 mb-2">Antes de conectar</p>
          <ul className="space-y-1">
            <li>• Verifica que no haya cables sueltos o cruzados</li>
            <li>• Confirma polaridad: VCC → nunca a GND</li>
            <li>• Desconecta el USB antes de modificar conexiones</li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-yellow-300 mb-2">Al trabajar</p>
          <ul className="space-y-1">
            <li>• Solo usar 5V o 3.3V — nunca corriente de red</li>
            <li>• La bomba siempre con fuente propia + relé</li>
            <li>• No tocar componentes con la mano húmeda</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-neon-cyan/20 py-6 text-center text-gray-500 text-sm">
      <p className="font-orbitron text-neon-cyan neon-glow mb-2">
        CODE<span className="text-neon-magenta">NEON</span> コード・ネオン
      </p>
      <p>Plataforma Didáctica de Robótica y Programación</p>
      <p className="mt-1">Arduino · Scratch · Tinkercad · Electrónica</p>
      <p className="mt-2 text-xs">© 2026 — Aprende, Crea, Innova</p>
    </footer>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('inicio');

  useEffect(() => {
    // Force dark theme
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="text-gray-100 font-mono-tech min-h-screen">
      <Particles />
      <div className="fixed inset-0 scanlines pointer-events-none z-10 opacity-20" />

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="max-w-7xl mx-auto px-4 py-8 relative z-20">
        <div className={activeTab === 'inicio' ? 'tab-content active' : 'tab-content'}>
          <InicioSection />
        </div>
        <div className={activeTab === 'herramientas' ? 'tab-content active' : 'tab-content'}>
          <HerramientasSection />
        </div>
        <div className={activeTab === 'sensores' ? 'tab-content active' : 'tab-content'}>
          <SensoresSection />
        </div>
        <div className={activeTab === 'proyectos' ? 'tab-content active' : 'tab-content'}>
          <ProyectosSection />
        </div>
        <div className={activeTab === 'tinkercad' ? 'tab-content active' : 'tab-content'}>
          <TinkercadSection />
        </div>

        <LearningSection />
        <SafetySection />
      </main>

      <Footer />
    </div>
  );
}
