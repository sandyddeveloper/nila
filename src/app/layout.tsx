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
  title: "INDHU S | Senior Data Analyst & Business Intelligence Specialist",
  description: "Portfolio of INDHU S — Senior Data Analyst specializing in predictive analytics, SQL data warehousing, Power BI & Tableau dashboards, and Bayesian statistical experimentation.",
  keywords: [
    "INDHU S",
    "Data Analyst Portfolio",
    "Business Intelligence",
    "SQL",
    "Python",
    "Power BI",
    "Tableau",
    "Machine Learning",
    "Data Science",
    "Predictive Analytics",
  ],
  authors: [{ name: "INDHU S" }, { name: "Santhosh RJ K" }],
  creator: "Santhosh Raj K",
  publisher: "Santhosh Raj K",
  openGraph: {
    title: "INDHU S | Data Analysis Portfolio",
    description: "Turning 100M+ data points into revenue-generating business strategies.",
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
