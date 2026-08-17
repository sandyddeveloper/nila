import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Indhu S | Data Analyst & BI Specialist",
  description: "Portfolio of Indhu S — Data Analyst specializing in Python (Pandas, NumPy, Matplotlib), SQL (MySQL, PostgreSQL), Power BI (DAX, Power Query), Advanced Excel, and Data Conversion QA.",
  keywords: [
    "Indhu S",
    "Data Analyst Portfolio",
    "Power BI",
    "DAX",
    "Power Query",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "Python",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Excel",
    "Data Cleaning",
    "ETL",
    "Data Validation",
  ],
  authors: [{ name: "Indhu S" }, { name: "Santhosh RJ K" }],
  creator: "Santhosh Raj K",
  publisher: "Santhosh Raj K",
  openGraph: {
    title: "Indhu S | Data Analysis Portfolio",
    description: "Data Cleaning, SQL Modeling, Python Analytics & Power BI Dashboards.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} font-sans min-h-screen flex flex-col antialiased selection:bg-purple-500 selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
