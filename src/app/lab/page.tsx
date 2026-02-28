import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Bot, LineChart, Sun, ExternalLink, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lab & Hub de Soluções | Julio Cesar Calado",
    description: "Sistemas desenhados para devolver seu tempo, blindar seu patrimônio e cortar custos inúteis.",
};

export default function Lab() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 md:py-24">
            <div className="mb-12">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                    Lab & Hub de Soluções
                </h1>
                <p className="text-xl text-muted-foreground">
                    Sistemas arquitetados para devolver seu tempo, blindar seu patrimônio e cortar custos operacionais. Sem enrolação.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-1">

                {/* Card Ottomatic */}
                <Card className="hover:border-foreground/20 transition-colors flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4 pb-4">
                        <div className="p-3 bg-secondary rounded-lg">
                            <Bot className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">Ottomatic</CardTitle>
                            <CardDescription className="text-base mt-2">Hub Completo de Soluções em Inteligência Artificial</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p className="text-muted-foreground leading-relaxed">
                            Muito além de &quot;SDRs digitais&quot;. Construímos a infraestrutura de IA que o seu negócio precisa para escalar sem inflar a folha de pagamento. Funcionários digitais operando 24/7, prospectando de forma agressiva e eliminando o trabalho braçal. A máquina trabalha, você foca na estratégia.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full sm:w-auto">
                            {/* JULIA IA: Coloque o link real da Ottomatic aqui onde está o # */}
                            <Link href="https://ottomatic.com.br/" target="_blank" rel="noreferrer">
                                Acessar Ottomatic <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* Card DashPlan & Wealth */}
                <Card className="hover:border-foreground/20 transition-colors flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4 pb-4">
                        <div className="p-3 bg-secondary rounded-lg">
                            <LineChart className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">DashPlan & Wealth Consulting</CardTitle>
                            <CardDescription className="text-base mt-2">Planejamento Patrimonial guiado por dados</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p className="text-muted-foreground leading-relaxed">
                            O seu patrimônio não deve depender de achismos. Uno a tecnologia do DashPlan com minha expertise técnica em Wealth Planning para criar simulações tributárias, sucessórias e de rentabilidade. O resultado? Decisões cirúrgicas, frias e altamente lucrativas para o longo prazo.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant="secondary" className="w-full sm:w-auto">
                            {/* JULIA IA: Já coloquei uma mensagem pronta para o cliente não precisar pensar no que escrever */}
                            <Link href="https://wa.me/5511999731501?text=Olá%20Julio,%20estava%20no%20seu%20site%20e%20gostaria%20de%20falar%20sobre%20Wealth%20Planning%20e%20o%20DashPlan." target="_blank" rel="noreferrer">
                                Falar sobre Wealth <MessageCircle className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

                {/* Card iGreen */}
                <Card className="hover:border-foreground/20 transition-colors flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4 pb-4">
                        <div className="p-3 bg-secondary rounded-lg">
                            <Sun className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">iGreen Energy</CardTitle>
                            <CardDescription className="text-base mt-2">Otimização de custos fixos via energia sustentável</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <p className="text-muted-foreground leading-relaxed">
                            Sustentabilidade só faz sentido no mundo real quando vem acompanhada de performance financeira. Reduzo a conta de luz da sua empresa (ou residência) conectando você a usinas de energia limpa. Zero obras, zero burocracia e redução imediata no seu balanço financeiro.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button asChild variant="default" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">
                            {/* JULIA IA: Coloque o seu link de afiliado/simulação da iGreen aqui onde está o # */}
                            <Link href="#" target="_blank" rel="noreferrer">
                                Simular Economia na Conta <Zap className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardFooter>
                </Card>

            </div>
        </div>
    );
}