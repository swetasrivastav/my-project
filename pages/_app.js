import "../styles/global.css";
import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <div data-theme="emerald">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
