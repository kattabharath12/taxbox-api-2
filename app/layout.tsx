import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = { title: "TaxBox.AI", description: "AI-powered tax preparation" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
