import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'src', 'content', 'insights');

export type PostMetadata = {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
};

export type Post = {
    metadata: PostMetadata;
    content: string;
};

export function getPostSlugs() {
    if (!fs.existsSync(contentDir)) return [];
    return fs.readdirSync(contentDir);
}

export function getPostBySlug(slug: string): Post | null {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(contentDir, `${realSlug}.mdx`);

    try {
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            metadata: {
                title: data.title || 'Untitled',
                date: data.date || '',
                excerpt: data.excerpt || '',
                slug: realSlug,
            },
            content,
        };
    } catch (e) {
        console.error(`Error reading MDX file for slug ${realSlug}`, e);
        return null;
    }
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        .filter((post): post is Post => post !== null)
        .sort((post1, post2) => (post1.metadata.date > post2.metadata.date ? -1 : 1));

    return posts;
}
