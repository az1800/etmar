import Footer from "@/app/components/Footer";
import Header from "../../components/Header";
import Members from "../../components/Members";

export default function page() {
  return (
    <>
      <div className="bg-gradient-to-r from-[rgba(22,75,32,0.28)] to-[#164B20] min-h-[70vh] flex flex-col">
        <Header />

        <h1 className="text-4xl text-white mx-auto mb-12 mt-6">
          <b>من نحن</b>
        </h1>
        <p className="text-2xl text-white max-w-[50%] mx-auto">
          إثمار مبادرة ضمن برنامج الشراكة الطلابية في جامعة الملك سعود. تهدف إلى
          تزويد الطلاب بالمعرفة والمهارات اللازمة لإدارة شؤونهم المالية، وإلى
          بناء مجتمع واعٍ ماليًا.
        </p>
      </div>
      <div className="w-fit mx-auto text-center">
        <h1 className="text-black text-4xl mt-10 font-bold">هيكلة اثمار</h1>
        <div className="h-[4px] bg-[#164B20] mt-1 w-full mx-auto" />
      </div>
      <div className="m-20 flex flex-col gap-6">{<Members />}</div>
      <Footer /> {/* Always stays at the bottom */}
    </>
  );
}
