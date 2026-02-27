import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre | Julio Cesar Calado",
    description: "Estrategista de Vida e Negócios. Construindo a infraestrutura invisível para que você foque no que realmente importa na sua vida e nos seus negócios.",
};

export default function About() {
    return (
        <div className="container max-w-3xl mx-auto px-4 py-12 md:py-24">
            <div className="mb-8">
                <Button variant="ghost" asChild className="mb-6 -ml-4 text-muted-foreground hover:text-foreground">
                    <Link href="/">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                    </Link>
                </Button>
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8">
                    Sobre Julio Cesar Calado
                </h1>
            </div>

            <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                    Minha trajetória começou no mercado financeiro, focado em alocação de ativos e sucessão patrimonial. Durante anos, vi de perto como a complexidade tributária e a falta de sistemas eficientes consumiam o ativo mais importante de qualquer ser humano: o tempo.
                </p>
                <p className="mb-6">
                    A transição do mercado financeiro tradicional para a tecnologia foi orgânica. Percebi que o principal gargalo nas operações (e na vida) dos meus clientes não era apenas onde alocar o dinheiro, mas como automatizar os processos burocráticos que drenavam sua energia.
                </p>
                <p className="mb-6">
                    Hoje, opero na intersecção entre <strong>Wealth Planning</strong> e <strong>Sistemas Autônomos</strong>. Se pudermos otimizar o tempo através da IA (<em>Ottomatic</em>), otimizar os custos fixos estruturais via energia limpa (<em>iGreen</em>) e blindar o capital acumulado rumo à próxima geração (<em>DashPlan</em>), nós atingimos a eficiência plena.
                </p>
                <p>
                    O meu objetivo é um só: construir a infraestrutura invisível para que você foque no que realmente importa na sua vida e nos seus negócios.
                </p>
            </div>
        </div>
    );
}
