import "./globals.css";

export const metadata = {
  title: "STRIPESNYC",
  description: "CrewSync Live for football officials, assignors, and crews.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}