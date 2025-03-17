// import React, { useState } from "react";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Highlight from "@tiptap/extension-highlight";
// import TextAlign from "@tiptap/extension-text-align";
// import Underline from "@tiptap/extension-underline";
// import Superscript from "@tiptap/extension-superscript";
// import Subscript from "@tiptap/extension-subscript";
// import MenuBar from "./MenuBar";
// import AnimatedCategoryDropdown from "../AnimatedCategoryDropdown";

// const TipTapEditor = () => {
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [title, setTitle] = useState("");
//   function handleSubmit() {
//     console.log(title);
//     setTitle("");
//   }
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       Highlight,
//       Underline,
//       Superscript,
//       Subscript,
//     ],
//     content: `
//       <h3 style="text-align:center" dir='rtl'>المطورون يريدون فقط الاستمتاع</h3>
//       <p style="text-align:center" dir='rtl'>
//         أعود إلى المنزل في ضوء الصباح<br>
//         تقول لي أمي، <mark>"متى ستعيش حياتك بشكل صحيح؟"</mark><br>
//         أوه أمي العزيزة، لسنا من المحظوظين<br>
//         .والمطورون، يريدون فقط الاستمتاع<br>
//       </p>
//     `,
//     editorProps: {
//       attributes: {
//         class:
//           "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
//       },
//     },
//   });

//   return (
//     <div className="max-w-4xl  mx-auto mb-44 mt-20 p-6 bg-white shadow-xl rounded-xl">
//       <MenuBar editor={editor} />
//       <div dir="rtl" className="flex flex-col gap-6">
//         <input
//           type="text"
//           placeholder="اكتب العنوان"
//           className="border border-black text-xl rounded-md p-2"
//           value={title}
//           onChange={(e: any) => {
//             setTitle(e.target.value);
//           }}
//         />
//         <EditorContent
//           editor={editor}
//           className="p-4 min-h-[300px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164B20] focus:border-transparent transition-all duration-200"
//         />
//       </div>

//       <div className="flex flex-row-reverse items-start gap-3 mt-3 w-[98]  ">
//         <div className="w-[30%]">
//           <AnimatedCategoryDropdown />
//         </div>
//         <button
//           className="bg-[#164B20]  rounded-md w-[70%] h-[2rem] text-white"
//           onClick={handleSubmit}
//         >
//           ارسل
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TipTapEditor;

// import React, { useState } from "react";
// import { useEditor, EditorContent } from "@tiptap/react";
// import StarterKit from "@tiptap/starter-kit";
// import Highlight from "@tiptap/extension-highlight";
// import TextAlign from "@tiptap/extension-text-align";
// import Underline from "@tiptap/extension-underline";
// import Superscript from "@tiptap/extension-superscript";
// import Subscript from "@tiptap/extension-subscript";
// import MenuBar from "./MenuBar";
// import AnimatedCategoryDropdown from "../AnimatedCategoryDropdown";
// import { postArticle } from "../../Services/postsAPI"; // Import function

// const TipTapEditor = () => {
//   const [loading, setLoading] = useState(false);
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("اختر الفئة");
//   const [message, setMessage] = useState("");

//   // Initialize the Editor
//   const editor = useEditor({
//     extensions: [
//       StarterKit,
//       TextAlign.configure({ types: ["heading", "paragraph"] }),
//       Highlight,
//       Underline,
//       Superscript,
//       Subscript,
//     ],
//     content:
// `<h2 style="text-align:center" dir='rtl'>كيف تؤثر أسعار الفائدة على الأسواق المالية؟</h2>
//   <p style="text-align:justify" dir='rtl'>
//     تعد أسعار الفائدة من أهم الأدوات التي يستخدمها البنوك المركزية للتحكم في السياسة النقدية والتأثير على النمو الاقتصادي.
//     عندما ترفع البنوك المركزية أسعار الفائدة، يصبح الاقتراض أكثر تكلفة مما يؤدي إلى تقليل الإنفاق الاستهلاكي والاستثماري،
//     وبالتالي يؤثر ذلك على أداء الأسواق المالية.
//   </p>

//   <h3 style="text-align:right" dir='rtl'>💡 العلاقة بين أسعار الفائدة وسوق الأسهم</h3>
//   <p style="text-align:justify" dir='rtl'>
//     بشكل عام، تؤدي الزيادة في أسعار الفائدة إلى انخفاض أسعار الأسهم، حيث تصبح العوائد على الأدوات المالية ذات الدخل الثابت
//     مثل السندات أكثر جاذبية، مما يدفع المستثمرين إلى تقليل استثماراتهم في الأسهم. على العكس، فإن تخفيض أسعار الفائدة
//     يؤدي إلى تحفيز الاستثمارات وزيادة أسعار الأسهم.
//   </p>

//   <h3 style="text-align:right" dir='rtl'>📉 تأثير ارتفاع الفائدة على الشركات</h3>
//   <p style="text-align:justify" dir='rtl'>
//     تؤثر أسعار الفائدة المرتفعة على قدرة الشركات على تمويل مشاريعها بسبب زيادة تكلفة القروض.
//     هذا يؤدي إلى انخفاض الأرباح المستقبلية، مما ينعكس على قيمة الأسهم في الأسواق.
//   </p>

//   <h3 style="text-align:right" dir='rtl'>📊 الأسواق المالية العالمية والاستجابة لأسعار الفائدة</h3>
//   <p style="text-align:justify" dir='rtl'>
//     يعتمد تأثير أسعار الفائدة على الأسواق العالمية على عدة عوامل مثل التضخم، مستويات النمو الاقتصادي، واستراتيجيات
//     البنوك المركزية الأخرى. على سبيل المثال، عندما يرفع الفيدرالي الأمريكي أسعار الفائدة، فإن ذلك قد يؤدي إلى
//     تقلبات حادة في الأسواق الناشئة بسبب تدفق رؤوس الأموال إلى الأصول الأمريكية ذات العوائد المرتفعة.
//   </p>

//   <blockquote style="text-align:center; font-style:italic; color:gray;" dir='rtl'>
//     "تظل أسعار الفائدة واحدة من أقوى الأدوات الاقتصادية التي تؤثر على جميع الأسواق المالية."
//   </blockquote>`,
//     editorProps: {
//       attributes: {
//         class:
//           "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
//       },
//     },
//   });

//   // 📝 Handle Post Submission
//   async function handleSubmit() {
//     if (!title.trim()) {
//       setMessage("⚠️ يرجى كتابة العنوان قبل الإرسال.");
//       return;
//     }
//     if (!editor?.getHTML().trim()) {
//       setMessage("⚠️ يرجى كتابة المحتوى قبل الإرسال.");
//       return;
//     }
//     if (category === "اختر الفئة") {
//       setMessage("⚠️ يرجى اختيار فئة للمقال.");
//       return;
//     }

//     setLoading(true);
//     setMessage("");

//     try {
//       const content = editor.getHTML();
//       const response = await postArticle(
//         category,
//         content,
//         title,
//         "https://your-post-link.com"
//       );

//       if (response.error) {
//         setMessage("❌ فشل الإرسال، يرجى المحاولة لاحقًا.");
//       } else {
//         setMessage("✅ تم نشر المقال بنجاح!");
//         setTitle("");
//         editor.commands.clearContent();
//         setCategory("اختر الفئة");
//       }
//     } catch (error) {
//       setMessage("❌ حدث خطأ أثناء الإرسال.");
//     }

//     setLoading(false);
//   }

//   return (
//     <div className="max-w-4xl mx-auto mb-20 mt-10 p-6 bg-white shadow-xl rounded-xl">
//       {/* Toolbar */}
//       <MenuBar editor={editor} />

//       {/* Title & Editor Input */}
//       <div dir="rtl" className="flex flex-col gap-4">
//         {/* Title Input */}
//         <input
//           type="text"
//           placeholder="اكتب العنوان"
//           className="border border-gray-300 text-xl rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#164B20]"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />

//         {/* Rich Text Editor */}
//         <EditorContent
//           editor={editor}
//           className="p-4 min-h-[300px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164B20] transition-all duration-200"
//         />
//       </div>

//       {/* Category Dropdown & Submit Button */}
//       <div className="flex flex-row-reverse items-center gap-3 mt-4 w-full">
//         {/* Category Dropdown (1 Portion) */}
//         <div className="w-[30%]">
//           <AnimatedCategoryDropdown
//             selectedCategory={category}
//             setCategory={setCategory}
//           />
//         </div>

//         {/* Submit Button (2 Portions) */}
//         <button
//           className="bg-[#164B20] rounded-md w-[70%] h-[2.5rem] text-white font-semibold transition-all hover:bg-[#126018] disabled:bg-gray-400 h-[2rem]"
//           onClick={handleSubmit}
//           disabled={loading}
//         >
//           {loading ? "جاري الإرسال..." : "ارسال"}
//         </button>
//       </div>

//       {/* Submission Message */}
//       {message && <p className="text-red-600 text-center mt-3">{message}</p>}
//     </div>
//   );
// };

// export default TipTapEditor;

import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import MenuBar from "./MenuBar";
import AnimatedCategoryDropdown from "../AnimatedCategoryDropdown";
import { postArticle } from "../../Services/postsAPI"; // Import function

const TipTapEditor = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState({
    id: 1,
    name: "اختر الفئة",
  });
  const [message, setMessage] = useState("");

  // Initialize the Editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Highlight,
      Underline,
      Superscript,
      Subscript,
    ],
    content: `<h2 style="text-align:center" dir='rtl'>كيف تؤثر أسعار الفائدة على الأسواق المالية؟</h2>
  <p style="text-align:justify" dir='rtl'>
    تعد أسعار الفائدة من أهم الأدوات التي يستخدمها البنوك المركزية للتحكم في السياسة النقدية والتأثير على النمو الاقتصادي.
    عندما ترفع البنوك المركزية أسعار الفائدة، يصبح الاقتراض أكثر تكلفة مما يؤدي إلى تقليل الإنفاق الاستهلاكي والاستثماري،
    وبالتالي يؤثر ذلك على أداء الأسواق المالية.
  </p>

  <h3 style="text-align:right" dir='rtl'>💡 العلاقة بين أسعار الفائدة وسوق الأسهم</h3>
  <p style="text-align:justify" dir='rtl'>
    بشكل عام، تؤدي الزيادة في أسعار الفائدة إلى انخفاض أسعار الأسهم، حيث تصبح العوائد على الأدوات المالية ذات الدخل الثابت
    مثل السندات أكثر جاذبية، مما يدفع المستثمرين إلى تقليل استثماراتهم في الأسهم. على العكس، فإن تخفيض أسعار الفائدة
    يؤدي إلى تحفيز الاستثمارات وزيادة أسعار الأسهم.
  </p>

  <h3 style="text-align:right" dir='rtl'>📉 تأثير ارتفاع الفائدة على الشركات</h3>
  <p style="text-align:justify" dir='rtl'>
    تؤثر أسعار الفائدة المرتفعة على قدرة الشركات على تمويل مشاريعها بسبب زيادة تكلفة القروض.
    هذا يؤدي إلى انخفاض الأرباح المستقبلية، مما ينعكس على قيمة الأسهم في الأسواق.
  </p>

  <h3 style="text-align:right" dir='rtl'>📊 الأسواق المالية العالمية والاستجابة لأسعار الفائدة</h3>
  <p style="text-align:justify" dir='rtl'>
    يعتمد تأثير أسعار الفائدة على الأسواق العالمية على عدة عوامل مثل التضخم، مستويات النمو الاقتصادي، واستراتيجيات
    البنوك المركزية الأخرى. على سبيل المثال، عندما يرفع الفيدرالي الأمريكي أسعار الفائدة، فإن ذلك قد يؤدي إلى
    تقلبات حادة في الأسواق الناشئة بسبب تدفق رؤوس الأموال إلى الأصول الأمريكية ذات العوائد المرتفعة.
  </p>

  <blockquote style="text-align:center; font-style:italic; color:gray;" dir='rtl'>
    "تظل أسعار الفائدة واحدة من أقوى الأدوات الاقتصادية التي تؤثر على جميع الأسواق المالية."
  </blockquote>`,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none",
      },
    },
  });

  // 📝 Handle Post Submission
  async function handleSubmit() {
    if (!title.trim()) {
      setMessage("⚠️ يرجى كتابة العنوان قبل الإرسال.");
      return;
    }
    if (!editor?.getHTML().trim()) {
      setMessage("⚠️ يرجى كتابة المحتوى قبل الإرسال.");
      return;
    }
    if (category.name === "اختر الفئة") {
      setMessage("⚠️ يرجى اختيار فئة للمقال.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const content = editor.getHTML();
      const response = await postArticle(
        category.name, // ✅ Extracting only category name
        content,
        title,
        "https://your-post-link.com"
      );

      if (response.error) {
        setMessage("❌ فشل الإرسال، يرجى المحاولة لاحقًا.");
      } else {
        setMessage("✅ تم نشر المقال بنجاح!");
        setTitle("");
        editor.commands.clearContent();
        setCategory({ id: 1, name: "اختر الفئة" }); // Reset category
      }
    } catch (error) {
      setMessage("❌ حدث خطأ أثناء الإرسال.");
    }

    setLoading(false);
  }

  return (
    <div className="max-w-4xl mx-auto mb-44 mt-10 p-6 bg-white shadow-xl rounded-xl">
      {/* Toolbar */}
      <MenuBar editor={editor} />

      {/* Title & Editor Input */}
      <div dir="rtl" className="flex flex-col gap-4">
        {/* Title Input */}
        <input
          type="text"
          placeholder="اكتب العنوان"
          className="border border-gray-300 text-xl rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#164B20]"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Rich Text Editor */}
        <EditorContent
          editor={editor}
          className="p-4 min-h-[300px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#164B20] transition-all duration-200"
        />
      </div>

      {/* Category Dropdown & Submit Button */}
      <div className="flex flex-row-reverse items-center gap-3 mt-4 w-full">
        {/* Category Dropdown (1 Portion) */}
        <div className="w-[30%]">
          <AnimatedCategoryDropdown
            selectedCategory={category}
            setCategory={setCategory} // ✅ Now updating correctly
          />
        </div>

        {/* Submit Button (2 Portions) */}
        <button
          className="bg-[#164B20] rounded-md w-[70%] h-[2rem] text-white font-semibold transition-all hover:bg-[#126018] disabled:bg-gray-400"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "جاري الإرسال..." : "ارسال"}
        </button>
      </div>

      {/* Submission Message */}
      {message && <p className="text-red-600 text-center mt-3">{message}</p>}
    </div>
  );
};

export default TipTapEditor;
