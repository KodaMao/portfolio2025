
import "./globals.css";
import Header from "./components/header";
import BackgroundFX from "./components/BackgroundFX";
import RouteTransition from "./components/RouteTransition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <BackgroundFX />
        <Header />
        <main>
          <RouteTransition>{children}</RouteTransition>
        </main>
      </body>
    </html>
  );
}
