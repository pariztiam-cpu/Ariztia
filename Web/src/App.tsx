import React, { useState } from 'react';
import equipoImg from '../equipo.jpg.jpeg';
import { ArrowRight, Map, Brain, CheckCircle2, ShieldCheck, ChevronDown, Clock, Package, Zap } from 'lucide-react';

const CALENDLY_URL = "https://calendly.com/pedro-prospectiadigital/30min?month=2026-04";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
      {/* Urgency Bar */}
      <div className="bg-primary text-on-primary py-2 px-4 text-center text-xs font-bold uppercase tracking-widest z-[60] relative">
        ⚡ Quedan 2 lugares disponibles en abril — los cupos se limitan porque cada taller requiere preparación personalizada
      </div>

      {/* TopAppBar */}
      <header className="fixed top-12 w-full z-50 px-4">
        <nav className="bg-surface-container/90 backdrop-blur-xl max-w-7xl mx-auto flex justify-between items-center px-6 py-4 rounded-lg border border-outline-variant/30">
          <div className="text-2xl font-black text-on-surface flex items-center gap-0 relative font-headline tracking-tight">
            Arizt<span className="text-primary">IA</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="text-on-surface/70 hover:text-primary transition-colors text-sm uppercase tracking-wider" href="#como-funciona">Cómo Funciona</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors text-sm uppercase tracking-wider" href="#casos">Casos</a>
            <a className="text-on-surface/70 hover:text-primary transition-colors text-sm uppercase tracking-wider" href="#planes">Planes</a>
          </div>
          <div className="flex items-center gap-4">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-6 py-2 rounded-sm font-bold text-sm hover:scale-95 active:scale-90 transition-all duration-200">
              Agendar diagnóstico
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-8 hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-surface-container-highest px-3 py-1 rounded-full mb-6 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">Taller de IA para equipos · 4 semanas</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-headline font-bold leading-tight mb-8 tracking-tighter">
              Para que tu equipo use IA en su <span className="text-primary italic">trabajo real.</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed">
              Sin teoría genérica. Construimos el contenido sobre cómo trabaja tu empresa específicamente. Desde la primera sesión, tu equipo ahorra tiempo real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-on-primary px-8 py-4 rounded-sm font-bold flex items-center justify-center gap-2 hover:scale-95 transition-transform">
                AGENDAR DIAGNÓSTICO GRATUITO
                <ArrowRight size={20} />
              </a>
              <a href="#como-funciona" className="border border-outline-variant px-8 py-4 rounded-sm font-bold text-on-surface hover:bg-surface-container-high transition-colors text-center flex items-center justify-center">
                Ver cómo funciona
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 border-t border-outline-variant/30 pt-8">
              <div><p className="text-2xl font-headline font-bold text-primary">+40</p><p className="text-xs uppercase tracking-tighter text-on-surface-variant">personas formadas</p></div>
              <div><p className="text-2xl font-headline font-bold text-primary">3–8 hs</p><p className="text-xs uppercase tracking-tighter text-on-surface-variant">ahorradas/semana</p></div>
              <div><p className="text-2xl font-headline font-bold text-primary">94%</p><p className="text-xs uppercase tracking-tighter text-on-surface-variant">recomendaría</p></div>
              <div><p className="text-2xl font-headline font-bold text-primary">4.8/5</p><p className="text-xs uppercase tracking-tighter text-on-surface-variant">valoración media</p></div>
            </div>
          </div>
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/20 relative">
              <img 
                alt="Equipo AriztIA en taller" 
                className="w-full h-full object-cover opacity-90" 
                src={equipoImg} 
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop";
                  e.currentTarget.classList.add("grayscale", "opacity-50");
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-surface-container-high/80 backdrop-blur-md rounded border-l-4 border-primary">
                <p className="text-on-surface text-lg font-bold leading-tight">3 a 8 horas ahorradas por persona por semana</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">El contexto</div>
              <h2 className="text-4xl font-headline font-bold mb-8">Todos hablan de IA. Tu equipo todavía no la está usando.</h2>
              <p className="text-lg text-on-surface-variant mb-12">No es falta de interés. Es que nadie tiene claro por dónde empezar — y las opciones disponibles no inspiran confianza.</p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-surface-container rounded border border-outline-variant/30">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Map className="text-primary" size={20} />
                    No saben por dónde empezar
                  </h4>
                  <p className="text-sm text-on-surface-variant">Hay decenas de herramientas, tutoriales y cursos. Pero nadie en tu empresa tiene claro cuáles aplican a su trabajo específico ni en qué orden atacarlas.</p>
                </div>
                <div className="p-6 bg-surface-container rounded border border-outline-variant/30">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Brain className="text-primary" size={20} />
                    Lo ven complicado
                  </h4>
                  <p className="text-sm text-on-surface-variant">Para la mayoría, "usar IA" suena a programar o a algo técnico. Sin ejemplos concretos de su propio trabajo, es difícil que vean el valor.</p>
                </div>
                <div className="p-6 bg-surface-container rounded border border-outline-variant/30">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Package className="text-primary" size={20} />
                    Miedo a lo genérico
                  </h4>
                  <p className="text-sm text-on-surface-variant">Los cursos online están llenos de ejemplos que no aplican a tu negocio. La sensación de "esto no es para nosotros" aparece rápido.</p>
                </div>
                <div className="p-6 bg-surface-container rounded border border-outline-variant/30">
                  <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Zap className="text-primary" size={20} />
                    Miedo a que no se adopte
                  </h4>
                  <p className="text-sm text-on-surface-variant">Aunque aprendan las herramientas, sin un sistema de implementación concreto, es fácil que todo quede en el olvido en dos semanas.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-container-high p-8 rounded border border-outline-variant/30 flex flex-col justify-center lg:sticky lg:top-32 h-fit">
              <p className="font-headline italic text-2xl text-on-surface mb-8">
                "El problema no es la IA. Es que nadie construyó un punto de entrada <span className="text-primary font-bold">para tu empresa específica.</span> Eso es exactamente lo que hacemos."
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Miedo a invertir en algo genérico</span>
                  <span className="text-primary font-bold">Eliminado</span>
                </div>
                <div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-full"></div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Fricción de adopción</span>
                  <span className="text-primary font-bold">Mínima</span>
                </div>
                <div className="w-full bg-surface-variant h-1 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[15%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-8 border-t border-outline-variant/10" id="como-funciona">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Cómo funciona</div>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold">Construido sobre tus procesos, no sobre ejemplos genéricos.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-7 space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary flex items-center justify-center font-headline font-bold text-primary">0</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Diagnóstico previo (sin costo)</h4>
                  <p className="text-on-surface-variant">Antes de diseñar cualquier contenido, nos reunimos para entender tus procesos, herramientas actuales y puntos de dolor. El taller se construye sobre esa base. Si no vemos aplicación concreta para tu negocio, te lo decimos — y no cobramos nada.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary flex items-center justify-center font-headline font-bold text-primary">1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Semana 1 — Primeros ahorros reales</h4>
                  <p className="text-on-surface-variant">Trabajamos con los documentos y tareas reales de tu empresa desde el día uno. Al terminar esta sesión, cada persona tiene al menos una tarea del día a día automatizada o acelerada.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary flex items-center justify-center font-headline font-bold text-primary">2-3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Semanas 2 y 3 — Flujos del día a día</h4>
                  <p className="text-on-surface-variant">Integramos IA en los procesos que más tiempo consumen en tu empresa específicamente. No en los procesos de una empresa ficticia, sino en los tuyos.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-primary flex items-center justify-center font-headline font-bold text-primary">4</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Semana 4 — El equipo vuela solo</h4>
                  <p className="text-on-surface-variant">El equipo queda con capacidad de seguir expandiendo el uso de IA por su cuenta. Se entrega la guía de implementación personalizada con próximos pasos concretos.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-surface-container-high p-8 rounded-lg border border-primary/20 sticky top-32">
                <h4 className="text-primary font-bold uppercase tracking-widest text-xs mb-6">La promesa concreta</h4>
                <p className="text-2xl font-headline font-bold mb-8">Al terminar las 4 semanas, tu equipo usa IA. No "sabe sobre IA".</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm"><CheckCircle2 className="text-primary shrink-0" size={20} /> Desde la sesión 1: al menos 1 tarea automatizada</li>
                  <li className="flex gap-3 text-sm"><CheckCircle2 className="text-primary shrink-0" size={20} /> Herramientas integradas en procesos reales</li>
                  <li className="flex gap-3 text-sm"><CheckCircle2 className="text-primary shrink-0" size={20} /> Guía de implementación personalizada</li>
                  <li className="flex gap-3 text-sm"><CheckCircle2 className="text-primary shrink-0" size={20} /> Acceso de por vida a comunidad</li>
                  <li className="flex gap-3 text-sm"><CheckCircle2 className="text-primary shrink-0" size={20} /> Garantía de 30 días — sin letra chica</li>
                </ul>
                <div className="bg-primary/10 border border-primary/30 rounded p-4 text-sm text-on-surface">
                  Resultado típico: <strong className="text-primary">3 a 8 horas ahorradas por persona por semana</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 bg-surface-container-low" id="casos">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Casos reales</div>
            <h2 className="text-4xl font-headline font-bold mb-4">Empresas que ya lo hicieron.</h2>
            <p className="text-on-surface-variant">No son casos de empresas tecnológicas. Son empresas como la tuya.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface p-8 rounded border border-outline-variant/30 flex flex-col">
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <p className="text-xl font-body italic mb-8 flex-grow">"Pensábamos que la IA no era para nosotros por ser una empresa de servicios muy específica. En la sesión de diagnóstico nos demostraron lo contrario. Al final de la semana 1 ya ahorrábamos tiempo real."</p>
              <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-6">
                <div>
                  <p className="font-bold">Carolina M. — Directora de Operaciones</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Consultora de RRHH · 12 personas</p>
                  <span className="mt-2 inline-block text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">+5 hs/semana por persona</span>
                </div>
              </div>
            </div>
            <div className="bg-surface p-8 rounded border border-outline-variant/30 flex flex-col">
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <p className="text-xl font-body italic mb-8 flex-grow">"Lo que más me sorprendió es que no fue una clase magistral. Trabajamos sobre nuestros propios procesos desde el primer día. El equipo salió usando herramientas, no solo sabiendo que existen."</p>
              <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-6">
                <div>
                  <p className="font-bold">Marcos T. — CEO</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Agencia de marketing digital · 8 personas</p>
                  <span className="mt-2 inline-block text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">−60% en tiempo de briefings</span>
                </div>
              </div>
            </div>
            <div className="bg-surface p-8 rounded border border-outline-variant/30 flex flex-col">
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <p className="text-xl font-body italic mb-8 flex-grow">"La guía de implementación fue clave. Cuando terminó el taller no nos quedamos preguntándonos qué hacer. Teníamos un plan concreto para las siguientes 8 semanas."</p>
              <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-6">
                <div>
                  <p className="font-bold">Rodrigo S. — Director Comercial</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Empresa de logística · 15 personas</p>
                  <span className="mt-2 inline-block text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">Implementación activa 3 meses después</span>
                </div>
              </div>
            </div>
            <div className="bg-surface p-8 rounded border border-outline-variant/30 flex flex-col">
              <div className="w-12 h-1 bg-primary mb-6"></div>
              <p className="text-xl font-body italic mb-8 flex-grow">"Ya habíamos intentado otra capacitación en IA el año anterior y no funcionó. Esta vez fue diferente porque empezaron preguntando cómo trabajamos, no enseñando herramientas en abstracto."</p>
              <div className="flex items-center gap-4 border-t border-outline-variant/20 pt-6">
                <div>
                  <p className="font-bold">Laura P. — Gerente de Operaciones</p>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest">Estudio contable · 10 personas</p>
                  <span className="mt-2 inline-block text-[10px] font-bold bg-primary/10 text-primary px-2 py-0.5 rounded-full">2 procesos clave automatizados</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonos */}
      <section className="py-24 px-8 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Qué incluye</div>
            <h2 className="text-4xl font-headline font-bold">3 elementos que resuelven las dudas más comunes.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-surface-container-low p-8 rounded border border-outline-variant/30">
              <div className="text-primary font-headline font-bold text-2xl mb-4">01</div>
              <h3 className="text-xl font-bold mb-4">Comunidad privada de por vida</h3>
              <p className="text-on-surface-variant mb-6 text-sm">Todos los participantes entran gratis y para siempre a nuestra comunidad privada. Cada vez que una herramienta cambia o aparece algo nuevo relevante para tu sector, lo actualizamos.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded border border-outline-variant/30">
              <div className="text-primary font-headline font-bold text-2xl mb-4">02</div>
              <h3 className="text-xl font-bold mb-4">Sesión de diagnóstico previa sin costo</h3>
              <p className="text-on-surface-variant mb-6 text-sm">Antes de diseñar el contenido, nos reunimos para entender tus procesos y herramientas actuales. Si no vemos cómo aplicar IA de forma concreta a tu negocio, te lo decimos y no cobramos nada.</p>
            </div>
            <div className="bg-surface-container-low p-8 rounded border border-outline-variant/30">
              <div className="text-primary font-headline font-bold text-2xl mb-4">03</div>
              <h3 className="text-xl font-bold mb-4">Guía de implementación post-taller</h3>
              <p className="text-on-surface-variant mb-6 text-sm">Al terminar el programa, cada empresa recibe un documento personalizado con los casos de uso prioritarios, herramientas recomendadas y próximos pasos concretos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 px-8 bg-surface-container-low" id="planes">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Planes</div>
            <h2 className="text-4xl lg:text-5xl font-headline font-bold mb-4">Elige el que tiene sentido para tu equipo.</h2>
            <p className="text-on-surface-variant">Mínimo 8 asistentes por taller.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Plan Básico */}
            <div className="bg-surface text-on-surface p-10 rounded-lg border border-outline-variant/50 flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-headline font-bold mb-2">Básico</h3>
                <div className="text-4xl font-bold text-primary mb-1">$120 <span className="text-sm font-normal text-on-surface/50">USD/persona</span></div>
                <div className="text-xs text-on-surface/40 uppercase tracking-widest">desde $960 USD</div>
              </div>
              <div className="mb-8 p-4 border-l-2 border-primary bg-primary/5">
                <p className="text-xs text-on-surface/70 italic">Para equipos que ya tienen experiencia con IA y solo necesitan las sesiones base.</p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> Sesión de diagnóstico</li>
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> 4 sesiones online (8 hs)</li>
                <li className="flex gap-3 text-sm items-center text-on-surface/30"><span className="w-4 text-center">-</span> Casos 100% personalizados</li>
                <li className="flex gap-3 text-sm items-center text-on-surface/30"><span className="w-4 text-center">-</span> Guía de implementación</li>
                <li className="flex gap-3 text-sm items-center text-on-surface/30"><span className="w-4 text-center">-</span> Comunidad vitalicia</li>
                <li className="flex gap-3 text-sm items-center text-on-surface/30"><span className="w-4 text-center">-</span> Garantía 30 días</li>
              </ul>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="w-full py-4 border border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all text-center rounded-sm block">Consultar</a>
            </div>
            
            {/* Plan Profesional */}
            <div className="bg-surface text-on-surface p-10 rounded-lg border-2 border-primary relative flex flex-col scale-105 shadow-2xl shadow-primary/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[10px] font-bold px-4 py-1 uppercase tracking-tighter rounded-full">El más elegido</div>
              <div className="mb-8">
                <h3 className="text-2xl font-headline font-bold mb-2">Profesional</h3>
                <div className="text-4xl font-bold text-primary mb-1">$160 <span className="text-sm font-normal text-on-surface/50">USD/persona</span></div>
                <div className="text-xs text-on-surface/40 uppercase tracking-widest">desde $1.280 USD</div>
              </div>
              <div className="mb-8 p-4 border-l-2 border-primary bg-primary/10">
                <p className="text-xs text-on-surface/90 italic">La diferencia con el Básico es $40 por persona. La guía y los casos personalizados valen más que eso.</p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> Sesión de diagnóstico</li>
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> 4 sesiones online (8 hs)</li>
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> Casos 100% personalizados</li>
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> Guía de implementación</li>
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> Comunidad vitalicia</li>
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> Garantía 30 días</li>
              </ul>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-primary text-on-primary font-bold hover:opacity-90 transition-all text-center rounded-sm block">Reservar lugar →</a>
            </div>
            
            {/* Plan Premium */}
            <div className="bg-surface text-on-surface p-10 rounded-lg border border-outline-variant/50 flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-headline font-bold mb-2">Premium Elite</h3>
                <div className="text-4xl font-bold text-primary mb-1">$350 <span className="text-sm font-normal text-on-surface/50">USD/persona</span></div>
                <div className="text-xs text-on-surface/40 uppercase tracking-widest">desde $2.800 USD</div>
              </div>
              <div className="mb-8 p-4 border-l-2 border-primary bg-primary/5">
                <p className="text-xs text-on-surface/70 italic">Para empresas que necesitan documentar el proceso para dirección o accionistas.</p>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> Todo lo del plan Profesional</li>
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> Reporte ejecutivo PDF</li>
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> Certificados de participación</li>
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> 2 llamadas de soporte extra</li>
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> Branding con tu logo</li>
                <li className="flex gap-3 text-sm items-center"><CheckCircle2 className="text-primary shrink-0" size={16} /> Grabaciones por 12 meses</li>
              </ul>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="w-full py-4 border border-primary text-primary font-bold hover:bg-primary hover:text-black transition-all text-center rounded-sm block">Consultar</a>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-24 bg-surface border-y border-outline-variant/10">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="w-16 h-16 bg-primary/10 border border-primary/30 mx-auto mb-8 rounded-full flex items-center justify-center">
            <ShieldCheck className="text-primary" size={32} />
          </div>
          <h2 className="text-4xl font-headline font-bold mb-6">Garantía de 30 días. Sin letra chica.</h2>
          <p className="text-xl text-on-surface-variant mb-4 leading-relaxed">
            Si al finalizar el programa considerás que tu equipo no incorporó herramientas concretas aplicables a su trabajo, te devolvemos el 100% del dinero.
          </p>
          <p className="text-xs text-on-surface-variant/60 uppercase tracking-widest">Condición única: completar las 4 sesiones. No pedimos justificación adicional.</p>
        </div>
      </section>

      {/* FAQ & Scarcity */}
      <section className="py-24 px-8 bg-surface-container-low">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Preguntas frecuentes</div>
            <h2 className="text-4xl font-headline font-bold mb-12">Lo que siempre preguntan.</h2>
            <div className="space-y-4">
              <FAQItem 
                question="¿Qué pasa si las personas rotan o se van después del taller?" 
                answer="El acceso a la comunidad es por empresa, no por persona. Si alguien nuevo entra, puede unirse. Además, la guía de implementación queda documentada para que cualquier integrante nuevo pueda alinearse rápido." 
              />
              <FAQItem 
                question="Ya intentamos capacitar al equipo en IA y no lo usaron después. ¿Por qué sería diferente?" 
                answer="Porque la mayoría de las capacitaciones enseñan herramientas en abstracto. Nosotros construimos el taller sobre los procesos concretos de tu empresa. Desde la sesión 1 el equipo trabaja con sus propios documentos reales." 
              />
              <FAQItem 
                question="¿Se pueden hacer las sesiones sin cortar la jornada laboral?" 
                answer="Sí. Coordinamos el horario en la sesión de diagnóstico. Muchas empresas eligen 2 hs a primera hora o al cierre del día para minimizar la interrupción." 
              />
              <FAQItem 
                question="¿Tienen experiencia en nuestro sector específico?" 
                answer="Hemos trabajado con empresas de servicios, agencias, equipos comerciales, operaciones y soporte. La sesión de diagnóstico existe exactamente para esto: si después de esa reunión no vemos cómo aplicar IA de forma concreta a tu negocio, te lo decimos y no cobramos nada." 
              />
              <FAQItem 
                question="¿Cuántas personas pueden participar?" 
                answer="El mínimo es 8 personas por taller. Recomendamos grupos de hasta 20 personas para mantener la dinámica interactiva. Para equipos más grandes podemos organizar dos grupos." 
              />
            </div>
          </div>
          
          <div className="bg-primary p-12 rounded-lg text-on-primary flex flex-col justify-center relative overflow-hidden h-fit sticky top-32">
            <div className="relative z-10">
              <h3 className="text-4xl font-headline font-bold mb-6 tracking-tighter">Por qué el límite es real</h3>
              <p className="text-lg font-medium mb-8 leading-snug">Cada taller requiere una sesión de diagnóstico propia y un diseño de contenido específico para esa empresa. No es un webinar que escalamos — es un programa construido sobre cómo trabaja tu equipo. Con más de 5 clientes simultáneos no podemos mantener esa calidad. Cuando se llenan los lugares, el siguiente espacio disponible es el mes siguiente.</p>
              <div className="flex items-center gap-4 mb-8">
                <div className="text-5xl font-headline font-black">5</div>
                <div className="text-xs font-bold uppercase tracking-widest leading-tight">máximo de empresas<br/>por mes</div>
              </div>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="bg-on-primary text-primary px-8 py-4 font-bold uppercase tracking-widest hover:scale-105 transition-transform w-full sm:w-auto text-center block">Solicitar Disponibilidad</a>
            </div>
            <Clock className="absolute -bottom-10 -right-10 text-[200px] opacity-10 rotate-12" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 text-center bg-surface relative overflow-hidden" id="diagnostico">
        <div className="absolute inset-0 bg-primary/5 opacity-20 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">El primer paso</div>
          <h2 className="text-5xl lg:text-7xl font-headline font-bold mb-8">El primer paso es <span className="text-primary italic">sin costo.</span></h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">Agendamos una sesión de diagnóstico para entender tu empresa. Si no vemos aplicación concreta para tu negocio, te lo decimos — y no cobramos nada.</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-on-primary px-12 py-6 rounded-sm font-bold text-xl hover:scale-95 transition-all shadow-xl shadow-primary/20 uppercase tracking-tight">Agendar diagnóstico gratuito →</a>
          <p className="mt-8 text-xs font-medium uppercase tracking-widest text-on-surface-variant">Sin compromiso · Sin presión · Sin vendedores</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-outline-variant/20 bg-background">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-8">
          <div className="text-on-surface font-bold text-lg font-headline flex items-center gap-0 relative">
            Arizt<span className="text-primary">IA</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <a className="text-on-surface/40 hover:text-primary transition-colors text-xs uppercase tracking-widest" href="#">Privacy Policy</a>
            <a className="text-on-surface/40 hover:text-primary transition-colors text-xs uppercase tracking-widest" href="#">Terms</a>
          </div>
          <div className="text-on-surface/40 text-[10px] uppercase tracking-widest text-center md:text-right">
            © 2026 AriztIA.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="bg-surface-container p-6 rounded cursor-pointer border border-outline-variant/20 transition-all" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center font-bold">
        {question}
        <ChevronDown className={`transition-transform duration-300 text-primary ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </div>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] mt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-on-surface-variant text-sm">{answer}</p>
        </div>
      </div>
    </div>
  );
}
