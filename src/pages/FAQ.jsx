import { Plus, X } from "lucide-react";
import React from "react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null); // Track open question index

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle same question
  };

  const cards = [
    {
      question: "What types of chairs do you offer?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Do your chairs come with a warranty?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "What will be delivered? And When?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "Can I try a chair before purchasing?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
    {
      question: "How do I clean and maintain my Comforty chair?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?",
    },
  ];
  return (
    <div>
      <div className="md:w-[60%] w-full flex flex-col items-center justify-center text-center my-10 font-family-Poppins space-y-2 mx-auto px-5">
        <h2 className="text-4xl font-semibold">Questions Looks Here</h2>
        <p className="text-xl text-[#9F9F9F] text-wrap">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          cumque.
        </p>
      </div>
      {/* FAQ Questions */}
      <ul className="w-full flex flex-wrap items-center justify-center py-10 xl:px-[13rem] px-3 font-family-Inter">
        {cards.map((item, index) => (
          <li className="md:w-[47%] w-full ml-2 mb-8 space-y-6">
            <div
              className="w-full flex items-center justify-between border border-my-color5 rounded-lg py-4 text-[#333333] font-semibold md:text-xl px-3 hover:text-buttons-Color active:text-buttons-Color hover:border-buttons-Color active:border-buttons-Color"
              onClick={() => toggleAnswer(index)}
            >
              <h3>{item.question}</h3>
              <span
                className={`text-2xl transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                {openIndex === index ? <X /> : <Plus />}
              </span>
            </div>
            {openIndex === index && (
              <div className="w-full text-[#4F4F4F] transition-all duration-300 px-3 py-4 border-y-0 border rounded-lg border-my-color5">
                <p>{item.answer}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
