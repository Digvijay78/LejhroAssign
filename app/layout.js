import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";  

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <Header />
        <main className="max-w-7xl mx-auto p-4 mb-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
