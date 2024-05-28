import "./globals.css";

export const metadata = {
  title: "Vini Dev",
  description: "Meu Portfólio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
