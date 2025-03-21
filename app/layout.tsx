import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "ATS-Friendly Resume Builder",
  description: "Build Prpfessional, ATS-Friendly Resumes in Minutes",
};




export default function RootLayout(props: { children: React.ReactNode }) {
  const {children} = props;
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true}
      >
        <Provider>
          
        {children}
        </Provider>
      </body>
    </html>
  );
}
