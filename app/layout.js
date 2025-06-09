import "./globals.css";
import "./fanta.css";
import Head from "./head";
import Link from "next/link";
import Cart from "@/components/Cart";
import EmailInput from "@/components/EmailInput";
import ProductsProvider from "@/context/ProductContext";

export const metadata = {
  title: "TechStore",
  description: "Get the latest pokemon cards and pins here!",
};

export default function RootLayout({ children }) {
  return (
    <ProductsProvider>
      <html lang="en">
        <Head />
        <body>
          <div id="portal" />
          <div id="app">
            <header>
              <div className="header-content">
                <Link href={"/"}>
                  <h1>TechStore</h1>
                </Link>
                <h5 className="mid-text">
                  - Everything pokemon fans could ever need -
                </h5>
                <Cart />
              </div>
            </header>
            <main>{children}</main>
            <div className="hr" />
            <footer>
              <div className="email-container">
                <h5>
                  Get the latest news, hottest offers and newest products.
                </h5>
                <EmailInput />
              </div>
              <div className="links-container"></div>
              <div>
                <h3>Sebastian CV</h3>
                <Link href={"/"}>PadelRanks</Link> <br />
                <Link href={"/"}>Subscription Tracker</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link href={"/"}>Home</Link>
                <br />
                <Link href={"/cart"}>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href={"/"}>Contact</Link>
                <br />
                <Link href={"/"}>FAQs</Link>
              </div>
              <div className="socials"></div>
              <p>
                ©{" "}
                <a href="https://www.github.com/nakedreact" target="_blank">
                  {" "}
                  Sebastian CV
                </a>
                <br />
                2025 <br /> Built with NextJS
              </p>
              <div className="social-links">
                <Link
                  href={"https://www.linkedin.com/in/sebastiancvaldez"}
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
                <Link href={"https://github.com/nakedreact"} target="_blank">
                  <i className="fa-brands fa-github"></i>
                </Link>
              </div>
            </footer>
          </div>
        </body>
      </html>
    </ProductsProvider>
  );
}
