import Footer from "@/components/Footer";
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
        <p
          className="text-2xl text-white max-w-[50%] mx-auto text-center"
          dir="rtl"
        >
          إثمار هي مبادرة مالية طلابية بجامعة الملك سعود تحت برنامج الشراكة
          الطلابية، تهدف إلى نشر الوعي المالي وتعزيز مهارات التخطيط المالي لدى
          الشباب، مما يمكنهم من اتخاذ قرارات مالية مستدامة تسهم في تحقيق
          تطلعاتهم المستقبلية، تماشيًا مع رؤية المملكة 2030 وبرنامج تطوير القطاع
          المالي
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
