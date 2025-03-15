import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 bg-white"></div>
      <Footer />
      <h1>Hello world</h1>
    </div>
  );
}
