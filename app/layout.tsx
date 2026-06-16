import type { Metadata } from "next";
import { ThemeProvider } from "@/components/context/ThemeContext";
import { UIProvider } from "@/components/context/UIContext";
import AppShell from "./AppShell"; // ✅ Naya import
import GlobalOverlays from "@/components/global-overlays";
import "./globals.css";

export const metadata: Metadata = {
  title: "SyncOps",
  description: "AI-powered workspace",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          <UIProvider>
            <AppShell> {/* ✅ Sidebar ab conditionally dikhega */}
              {children}
            </AppShell>
            <GlobalOverlays />
          </UIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}