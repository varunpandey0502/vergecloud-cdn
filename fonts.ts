import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export { notoSans };
