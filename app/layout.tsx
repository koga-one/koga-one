import "./globals.scss";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>KOGA</title>
        <meta name="description" content="Koga's Homepage" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="https://kit.fontawesome.com/728cb48e9f.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="overflow-x-hidden">
        <Header />
        <main className="mx-2 my-4 rounded-xl border border-dashed border-front p-2">
          {children}
        </main>
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
