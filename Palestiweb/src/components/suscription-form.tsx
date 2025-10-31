import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor ingresa un email válido.");
      return;
    }

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Hubo un error al enviar tu email. Intenta de nuevo.");
      }
    } catch (err) {
      setError("Hubo un error al enviar tu email. Intenta de nuevo.");
    }
  };


  return (
    <div className="relative">
      <Card className="p-8 rounded-2xl bg-gray-10 text-center mt-10 relative z-10">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl">Mantente informado</CardTitle>
          <CardDescription className="mt-2 text-lg md:text-xl">
            Recibe noticias y actualizaciones sobre la situación en Palestina.
          </CardDescription>
        </CardHeader>
        <CardContent className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          {submitted ? (
            <p className="text-lg md:text-xl">¡Gracias por suscribirte!</p>
          ) : (
            <form className="flex flex-col md:flex-row items-center gap-4 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
              <div className="flex-1 flex flex-col">
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <span className="t-1">{error}</span>}
              </div>

              {/* Botón */}
              <Button type="submit" className="w-full md:w-auto mt-2 md:mt-0">
                Suscribirse
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
