import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sobre | Julio Cesar Calado",
    description: "De açougueiro a Estrategista de Vida e Negócios. Construindo a infraestrutura invisível para que você foque no que realmente importa.",
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

            <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
                <p className="mb-6">
                    Antes de falar de negócios, inteligência artificial ou planejamento patrimonial, eu preciso te dizer quem eu sou quando o notebook está fechado: sou o marido da Gra e o pai do Otto.
                </p>
                <p className="mb-6">
                    Eu não estou aqui para construir um império de vaidade se o preço for ser um pai ausente que tenta resolver tudo com dinheiro. A minha busca — e a infraestrutura que eu construo — tem um único objetivo: presença. E ser marido não é sobre &quot;ajudar em casa&quot;, é sobre fazer a minha parte como homem e como pai.
                </p>
                <p className="mb-6">
                    Aos 47 anos, a minha trajetória até aqui está longe de ser a jornada certinha de um executivo de Faria Lima. E eu me orgulho profundamente disso.
                </p>
                <p className="mb-6">
                    Minha base não veio do mercado financeiro, veio do trabalho duro. Comecei no McDonald&apos;s, passei anos no caos do comércio exterior e do <em>supply chain</em>, até que a exaustão do mundo corporativo me fez dar um passo improvável: fui ser açougueiro. Pode parecer loucura, mas foi ali, cortando carne e servindo as pessoas em churrascos, que eu entendi o que realmente importa: conexões humanas, servir com excelência e entregar satisfação real.
                </p>
                <p className="mb-6">
                    Mergulhei no estudo do comportamento humano e na formação em coaching. Quando a pandemia bateu em 2020, junto com o fim de um casamento de 10 anos, precisei me reinventar do zero. Virei vendedor de móveis planejados — algo que ainda faço para colocar comida na mesa, de cabeça erguida.
                </p>
                <p className="mb-6">
                    Mas a vida me ensinou que bater cabeça cansa. Por necessidade e por curiosidade, decidi estruturar o caos.
                </p>
                <p className="mb-6">
                    Mergulhei nas finanças pessoais e me certifiquei como <strong>Wealth Planner</strong>. Não para ser o &quot;guru das finanças&quot;, mas para entender o dinheiro como uma ferramenta. Hoje, suportado por uma plataforma robusta chamada DashPlan, ajudo pessoas a terem a visão 360º que eu demorei para ter.
                </p>
                <p className="mb-6">
                    Com a Inteligência Artificial, o caminho foi parecido: a curiosidade virou necessidade evolutiva. Me certifiquei como gestor de Automação e IA para parar de fazer trabalho braçal. Isso deu origem à <strong>Ottomatic</strong>.
                </p>
                <p className="mb-6">
                    E para fechar a conta do futuro, me conectei à <strong>iGreen Energy</strong>. Porque entendi que cortar custos de energia não é só sustentabilidade, é criar renda recorrente e passiva. E renda recorrente é o legado prático que eu posso transferir para o meu filho.
                </p>
                <p className="mb-6">
                    Eu não sou o consultor infalível com a vida perfeitamente resolvida. Luto contra meus próprios gargalos todos os dias. Mas eu acredito, com muita força, que a humanidade e os nossos negócios podem ser muito melhores quando aplicamos conhecimento direcionado e sistemas eficientes.
                </p>
                <p className="mb-6">
                    O <em>Sistema Operacional do Julio</em> é isso: IA para otimizar o tempo, planejamento para proteger o dinheiro e energia sustentável para reduzir o atrito.
                </p>
                <p className="font-semibold text-foreground">
                    Tudo isso para que, no fim do dia, a gente tenha a liberdade de focar no que nos faz humanos.
                </p>
            </div>
        </div>
    );
}