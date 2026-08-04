import "./globals.css";

export const metadata = {
  title: "Ahmadh Hassan | Electrical & Quantum Engineering",
  description:
    "Ahmadh Hassan is a Rutgers student and researcher working across superconducting resonators, quantum computing, and space hardware.",
  metadataBase: new URL("https://ahmadh1231.github.io"),
  openGraph: {
    title: "Ahmadh Hassan | Electrical & Quantum Engineering",
    description: "Research, projects, and contact information for Ahmadh Hassan.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
