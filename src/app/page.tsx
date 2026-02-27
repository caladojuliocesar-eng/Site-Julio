import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="container max-w-4xl mx-auto px-4 py-24 md:py-32 flex flex-col items-start min-h-[calc(100vh-3.5rem)] justify-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-3xl">
        Construindo sistemas, protegendo patrimônios e otimizando o que importa.
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
        Sou Julio Cesar Calado. Estrategista, Wealth Planner e pai em tempo integral. Corto o ruído do mercado usando tecnologia para otimizar suas três maiores moedas: <strong className="text-foreground">tempo, dinheiro e energia.</strong>
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <Button asChild size="lg" className="h-12 px-8 text-base">
          {/* Dica da Julia: Confirme se este é o seu número de WhatsApp mesmo ou se o Antigravity inventou um! */}
          <Link href="https://wa.me/5511999731501" target="_blank" rel="noreferrer">
            Vamos conversar? <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
          <Link href="/lab">
            Explorar Soluções
          </Link>
        </Button>
      </div>
    </div>
  );
}