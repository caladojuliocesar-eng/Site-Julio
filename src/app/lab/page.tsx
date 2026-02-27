import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Bot, LineChart, Sun } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Lab & Hub de Soluções | Julio Cesar Calado",
    description: "Sistemas desenhados para devolver seu tempo, preservar sua energia e escalar seu patrimônio. Conheça Ottomatic, DashPlan e iGreen Energy.",
};

export default function Lab() {
    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 md:py-24">
            <div className="mb-12">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                    Lab & Hub de Soluções
                </h1>
                <p className="text-xl text-muted-foreground">
                    Sistemas desenhados para devolver seu tempo, preservar sua energia e escalar seu patrimônio.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-1">

                <Card className="hover:border-foreground/20 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="p-3 bg-secondary rounded-lg">
                            <Bot className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">Ottomatic</CardTitle>
                            <CardDescription className="text-base mt-2">Hub de Soluções em IA e Funcionários Digitais</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            Desenvolvemos sistemas autônomos que operam 24/7. Eliminamos o trabalho braçal e o atrito operacional do seu negócio,
                            entregando eficiência sistêmica. Menos ruído na comunicação, mais velocidade na operação.
                        </p>
                    </CardContent>
                </Card>

                <Card className="hover:border-foreground/20 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="p-3 bg-secondary rounded-lg">
                            <LineChart className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">DashPlan & Consultoria</CardTitle>
                            <CardDescription className="text-base mt-2">Plataforma de inteligência financeira (Wealth)</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            Otimização de patrimônio baseada em dados reais. Através da tecnologia e consultoria estratégica de gestão de riqueza,
                            simulamos cenários tributários, sucessórios e de rentabilidade para tomadas de decisão cirúrgicas.
                        </p>
                    </CardContent>
                </Card>

                <Card className="hover:border-foreground/20 transition-colors">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="p-3 bg-secondary rounded-lg">
                            <Sun className="w-6 h-6" />
                        </div>
                        <div>
                            <CardTitle className="text-2xl">iGreen Energy</CardTitle>
                            <CardDescription className="text-base mt-2">Otimização de custos via energia limpa</CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                            Sustentabilidade acoplada à performance financeira. Cortamos custos fixos do seu balanço através da injeção
                            de energia limpa. Sem instalação de placas, zero burocracia, e redução imediata na sua conta de luz.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
