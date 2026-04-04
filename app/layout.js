import "./globals.css";

// 共通画面読み込み
import Header from '../components/header';
import Footer from '../components/footer';

export const metadata = {
  title: "Simple Web React",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}