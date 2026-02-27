import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Insights | Julio Cesar Calado",
    description: "Pílulas sobre otimização, IA, produtividade e wealth planning. Sem jargões.",
};

export default function Insights() {
    const posts = getAllPosts();

    return (
        <div className="container max-w-4xl mx-auto px-4 py-12 md:py-24">
            <div className="mb-12">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
                    Insights
                </h1>
                <p className="text-xl text-muted-foreground">
                    Pílulas sobre otimização, IA, produtividade e wealth planning. Sem jargões.
                </p>
            </div>

            <div className="grid gap-6">
                {posts.map((post) => (
                    <Link key={post.metadata.slug} href={`/insights/${post.metadata.slug}`}>
                        <Card className="hover:border-foreground/40 transition-colors">
                            <CardHeader>
                                <div className="text-sm text-foreground/50 mb-2">
                                    {new Date(post.metadata.date).toLocaleDateString("pt-BR", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </div>
                                <CardTitle className="text-2xl leading-tight">
                                    {post.metadata.title}
                                </CardTitle>
                                <CardDescription className="text-base mt-2">
                                    {post.metadata.excerpt}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </Link>
                ))}
                {posts.length === 0 && (
                    <div className="text-center text-muted-foreground py-12 border border-dashed rounded-lg">
                        Nenhum artigo publicado ainda.
                    </div>
                )}
            </div>
        </div>
    );
}
