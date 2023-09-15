import { Analytics } from "@vercel/analytics/react";

import { Metadata } from "next";
import "@/public/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Next.js App Router",
    template: "%s | Next.js App Router",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <div className="">
          <div className="mx-auto max-w-[1200px] space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black p-3.5 lg:p-6">
                <div className="space-y-9">
                  <div>{children}</div>
                  <Analytics />
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
