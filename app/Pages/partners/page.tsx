import Footer from "@/app/components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";
import ethmarlogoP from "../../Assets/ethmarlogoP.svg";
import Companies from "@/app/components/Companies";

export default function page() {
  return (
    <>
      <div className="bg-gradient-to-r from-[rgba(22,75,32,0.28)] to-[#164B20] min-h-[70vh] flex flex-col">
        <Header />
      </div>
      <div className="grid grid-cols-2 m-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mx-auto">
        <Companies />
      </div>
      <Footer />
    </>
  );
}
