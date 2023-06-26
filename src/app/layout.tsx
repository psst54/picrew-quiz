import "./globals.css";
import StyledComponentsRegistry from "@libs/registry";
import { Providers } from "@/redux/provider";

export const metadata = {
  title: "Picrew Quiz",
  description: "누가 만든 픽크루인지 맟혀봅시다",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
