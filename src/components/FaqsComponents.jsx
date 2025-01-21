import { useState } from "react";
import { RiQuestionAnswerFill } from "react-icons/ri";

const FaqsComponents = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Apa itu landing page, dan bagaimana cara kerjanya?",
      answer:
        "Landing page adalah halaman web yang dirancang khusus untuk mendorong pengunjung mengambil tindakan tertentu, seperti mengisi formulir atau membeli produk. Dengan desain yang fokus dan strategi konversi, landing page membantu meningkatkan hasil kampanye pemasaran Anda.",
    },
    {
      question: "Berapa lama waktu yang dibutuhkan untuk membuat landing page?",
      answer:
        "Waktu pengerjaan bergantung pada kompleksitas desain dan fitur yang diminta. Umumnya, kami dapat menyelesaikan landing page dalam 5-10 hari kerja.",
    },
    {
      question: "Apakah landing page yang dibuat sudah mobile-friendly?",
      answer:
        "Ya, semua landing page yang kami buat dioptimalkan untuk tampil sempurna di perangkat desktop, tablet, dan smartphone.",
    },
    {
      question: "Apakah saya bisa meminta revisi setelah landing page selesai?",
      answer:
        "Tentu! Kami menyediakan hingga 3 kali revisi untuk memastikan landing page sesuai dengan kebutuhan Anda.",
    },
    {
      question: "Apakah ada garansi untuk hasil yang diberikan?",
      answer:
        "Kami tidak memberikan garansi spesifik untuk angka konversi, namun desain kami sudah dioptimalkan berdasarkan praktik terbaik dan pengalaman. Kami juga akan memberikan panduan untuk meningkatkan performa landing page Anda.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-5">
      <div className="mb-6">
        <h1 className="text-lg font-bold text-center text-primary">FAQs</h1>
        <h1 className="text-center font-bold text-4xl text-primary">Frequently asked questions</h1>
      </div>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-6">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex w-full text-left px-3 py-2 text-primary font-medium rounded-lg tracking-wide shadow"
          >
            <RiQuestionAnswerFill  className="w-10 text-base mt-1 mr-1"/> {faq.question}
          </button>
          {activeIndex === index && (
            <div className="mt-2 px-4 py-2 bg-white text-primary text-sm tracking-wide rounded-lg shadow">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FaqsComponents;
