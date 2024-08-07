import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@code-hike/mdx/dist/index.css";
import Link from "next/link";
import { NavLink, NavLinkProps } from "@/components/nav-link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Acme",
    default: "Acme",
  },
};

function MainNavLink(props: NavLinkProps) {
  return (
    <NavLink
      className="px-2 py-1 rounded hover:text-foreground"
      activeClassName="bg-stone-100 text-foreground"
      {...props}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col h-screen w-screen`}>
        <nav className="flex p-4 items-center border-b text-sm">
          <h1 className="font-bold mr-8">
            <Link href="/">ACME</Link>
          </h1>
          <ul className="flex gap-2 text-muted-foreground">
            <li>
              <MainNavLink href="/">Home</MainNavLink>
            </li>
            <li>
              <MainNavLink href="/about">About</MainNavLink>
            </li>
            <li>
              <MainNavLink match="^/dashboard" href="/dashboard/settings">
                Dashboard
              </MainNavLink>
            </li>
          </ul>
        </nav>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
