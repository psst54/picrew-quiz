import "./globals.css";

export const metadata = {
  title: "Picrew Quiz",
  description: "누가 만든 픽크루인지 맟혀봅시다",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
