import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: "Artigo não encontrado | Julio Cesar Calado",
        };
    }

    return {
        title: `${post.metadata.title} | Julio Cesar Calado`,
        description: post.metadata.excerpt,
    };
}

export async function generateStaticParams() {
    const slugs = getPostSlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.mdx$/, ""),
    }));
}

export default async function InsightPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="container max-w-3xl mx-auto px-4 py-12 md:py-24">
            <Link
                href="/insights"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-8"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Insights
            </Link>

            <header className="mb-12">
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
                    {post.metadata.title}
                </h1>
                <div className="text-muted-foreground">
                    {new Date(post.metadata.date).toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </div>
            </header>

            <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
                <MDXRemote source={post.content} />
            </div>
        </article>
    );
}
