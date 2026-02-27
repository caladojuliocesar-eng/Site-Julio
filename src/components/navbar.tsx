import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 max-w-screen-2xl items-center px-4 md:px-8 max-w-4xl mx-auto">
                <div className="mr-4 flex">
                    <Link href="/" className="mr-6 flex items-center space-x-2">
                        <span className="font-bold tracking-tight">Julio Cesar Calado.</span>
                    </Link>
                    <nav className="flex items-center space-x-6 text-sm font-medium">
                        <Link
                            href="/lab"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Lab
                        </Link>
                        <Link
                            href="/insights"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Insights
                        </Link>
                        <Link
                            href="/about"
                            className="transition-colors hover:text-foreground/80 text-foreground/60"
                        >
                            Sobre
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <nav className="flex items-center">
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}
