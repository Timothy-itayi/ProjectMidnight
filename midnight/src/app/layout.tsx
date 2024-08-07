

// src/app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css"; // Ensure this path is correct

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "F1 Heritage",
  description: "Relive the Glory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="heritage-icon" href="/icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}