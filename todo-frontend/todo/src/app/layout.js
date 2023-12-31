
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './header/page'
import { Providers } from "./redux/provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Providers>
          <div style={{ marginTop: "80px" }}></div>
          {children}
        </Providers>
      </body>
    </html>
  );
}
