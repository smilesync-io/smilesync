import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle2, ArrowRight, Lock, Zap, BarChart3, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Por favor ingresa tu email");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("¡Bienvenido a la beta! Revisa tu email.");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img 
              src="/images/smilesync-icon.png" 
              alt="SmileSync" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-primary">SmileSync</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-gray-600 hover:text-primary transition">
              Características
            </a>
            <a href="#pricing" className="text-sm text-gray-600 hover:text-primary transition">
              Precios
            </a>
            <a href="#faq" className="text-sm text-gray-600 hover:text-primary transition">
              FAQ
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Convierte tus citas olvidadas en <span className="text-primary">ingresos garantizados</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            SmileSync automatiza 100% de tus recordatorios de citas. Reduce no-shows, aumenta ingresos, sin intervención manual.
          </p>

          {/* Email Signup */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="tu@clinica.es"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 px-6 bg-primary hover:bg-primary/90"
            >
              {isLoading ? "Cargando..." : "Acceder a Beta"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Gratis el primer mes</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-green-500" />
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span>Soporte en español</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              El 20.6% de tus citas desaparecen cada mes
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              En clínicas dentales españolas, 1 de cada 5 citas se pierde por no-shows y cancelaciones. Eso significa que cada mes pierdes entre <strong>€3,000 y €5,000</strong> en ingresos que ya tenías garantizados.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Lo peor: tu equipo sigue gastando horas en llamadas manuales que no funcionan. Necesitas una solución que funcione 24/7, sin errores, sin descansos.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            SmileSync: Tu asistente de recalls 24/7
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Automatización Completa</h3>
              <p className="text-gray-600">
                Identifica automáticamente todos tus recalls y envía recordatorios personalizados por SMS + Email.
              </p>
            </Card>

            <Card className="p-8 border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Funciona 24/7</h3>
              <p className="text-gray-600">
                Nuestro sistema trabaja sin descansos. Tus pacientes reciben recordatorios en el momento exacto.
              </p>
            </Card>

            <Card className="p-8 border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">ROI Medible</h3>
              <p className="text-gray-600">
                Dashboard en tiempo real que muestra exactamente cuánto dinero estás recuperando cada mes.
              </p>
            </Card>

            <Card className="p-8 border-gray-200">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integración Fácil</h3>
              <p className="text-gray-600">
                Conecta con tu PMS (Dentalink, Odontox, etc.) en 5 minutos. Sin código, sin complejidad.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="features" className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Cómo Funciona
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              { step: 1, title: "Conecta", desc: "Integra SmileSync con tu PMS en 5 minutos. Sin código, sin complejidad." },
              { step: 2, title: "Automatiza", desc: "Nuestro sistema identifica automáticamente todos tus recalls y programa recordatorios." },
              { step: 3, title: "Recupera", desc: "Aumenta tu tasa de asistencia de 80% a 95%+. Recupera €3,000-5,000 mensuales." },
              { step: 4, title: "Crece", desc: "Usa el dashboard para entender patrones, optimizar recordatorios, maximizar ingresos." },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">
            Planes Transparentes
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Sin sorpresas. Cancela cuando quieras. Sin contrato.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "€99",
                desc: "Clínicas pequeñas",
                features: ["Hasta 500 pacientes", "SMS + Email", "Dashboard básico", "Soporte email"],
              },
              {
                name: "Professional",
                price: "€199",
                desc: "Clínicas medianas",
                featured: true,
                features: ["Hasta 2,000 pacientes", "SMS + Email + WhatsApp", "Dashboard avanzado", "Soporte prioritario", "Reportes personalizados"],
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "Clínicas grandes",
                features: ["Pacientes ilimitados", "Todos los canales", "API personalizada", "Soporte 24/7", "Integraciones custom"],
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={`p-8 ${
                  plan.featured
                    ? "border-2 border-primary bg-primary/5"
                    : "border border-gray-200"
                }`}
              >
                {plan.featured && (
                  <div className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Más Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-gray-600">/mes</span>}
                </div>
                <Button
                  className={`w-full mb-6 ${
                    plan.featured
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                  }`}
                >
                  Comenzar
                </Button>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "¿Cuánto tiempo tarda la integración?",
                a: "Entre 5-10 minutos. Conectamos directamente con tu PMS. Si necesitas ayuda, nuestro equipo lo hace por ti en 24 horas.",
              },
              {
                q: "¿Qué PMS soportan?",
                a: "Dentalink, Odontox, Clínica Manager, Clinic Cloud y otros. Si tu PMS no está en la lista, contacta: soporte@smilesync.es",
              },
              {
                q: "¿Cuál es el ROI?",
                a: "Promedio: €3,500 mensuales recuperados. Pagos desde €99/mes. ROI positivo en la primera semana.",
              },
              {
                q: "¿Puedo cancelar cuando quiera?",
                a: "Sí. Sin penalizaciones. Cancela desde el dashboard en 2 clics.",
              },
              {
                q: "¿Incluye soporte en español?",
                a: "100%. Email, chat y teléfono. Horario: Lunes-Viernes 9am-6pm CET.",
              },
              {
                q: "¿Mis datos están seguros?",
                a: "Sí. Encriptación SSL, cumplimiento RGPD, backups diarios. Certificación ISO 27001.",
              },
            ].map((item, idx) => (
              <Card key={idx} className="p-6 border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para recuperar tus ingresos?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Accede a la beta gratis. Primer mes sin costo. Soporte en español incluido.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="tu@clinica.es"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 px-6 bg-white text-primary hover:bg-gray-100"
            >
              {isLoading ? "Cargando..." : "Acceder Ahora"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <img 
                src="/images/smilesync-icon.svg" 
                alt="SmileSync" 
                className="w-6 h-6"
              />
              <span className="text-white font-bold">SmileSync</span>
            </div>
            <div className="text-sm">
              <p>© 2025 SmileSync. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
