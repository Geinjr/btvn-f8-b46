import "./globals.css";
import { ProviderStore } from "@/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderStore>{children}</ProviderStore>
      </body>
    </html>
  );
}
