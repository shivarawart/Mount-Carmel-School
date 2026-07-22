"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";

type CardItem = {
  id: number;
  name: string;
  role: string;
  message: string;
  imageUrl: string;
  imageAlt: string;
};

const cards: CardItem[] = [
  {
    id: 2,
    name: "Ms. Sukhvinder Kaur Dhillon",
    role: "Principal",
    imageUrl: "/changeimg/WhatsApp Image 2026-07-10 at 12.05.37.jpeg",
    imageAlt: "Ms Sukhvinder Kaur Dhillon portrait",
    message: `Principal's Message

Welcome to Mount Carmel International School!

It is with great pride and immense pleasure that I welcome you to the Mount Carmel International School family. Our school is committed to nurturing young minds in a safe, inclusive, and inspiring environment where every child is encouraged to discover their potential and strive for excellence.

At Mount Carmel International School, we believe that education goes beyond textbooks. We aim to develop confident, compassionate, responsible, and lifelong learners who are equipped with the knowledge, skills, and values needed to succeed in an ever-changing world. Through a balanced curriculum, innovative teaching practices, and a wide range of co-curricular activities, we ensure the holistic development of every student.

Our dedicated team of educators works tirelessly to create meaningful learning experiences that inspire curiosity, creativity, critical thinking, and collaboration. We encourage our students to embrace challenges, respect diversity, uphold strong moral values, and contribute positively to society.

We firmly believe that the partnership between parents, teachers, and the school plays a vital role in shaping the future of our children. Together, we can empower our students to become confident global citizens and compassionate leaders of tomorrow.

As you explore our website, I invite you to learn more about our vibrant school community and the opportunities we provide for every child to learn, grow, and excel.

Thank you for placing your trust in Mount Carmel International School. We look forward to working together to build a bright and successful future for every student.

With Warm regards,
Principal
Mount Carmel International School`,
  },
];

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMessage(message: string) {
  return message
    .split("\n\n")
    .map((p) => `<p>${escapeHtml(p).replace(/\n/g, "<br />")}</p>`)
    .join("");
}

type ReadMoreCardProps = {
  item: CardItem;
  isOpen: boolean;
  onToggle: (id: number) => void;
};

function ReadMoreCard({ item, isOpen, onToggle }: ReadMoreCardProps) {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    setShowButton(el.scrollHeight > 180);
  }, []);

  const htmlMessage = formatMessage(item.message);

  return (
    <article className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 shadow-[0_18px_60px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_75px_rgba(15,23,42,0.16)]">
      <div className="grid lg:grid-cols-[360px,1fr]">
        <div className="relative bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-4 sm:p-5">
          <div className="relative aspect-[3/2] overflow-hidden rounded-[1.75rem] border border-sky-100 bg-slate-100 shadow-lg ring-1 ring-black/5">
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              className="h-full w-full object-cover object-center"
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/1200x1500/87CEEB/ffffff?text=Image";
              }}
            />
          </div>

          <div className="mt-4 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-sky-700">
              <MessageCircle size={12} />
              {item.role}
            </p>

            <h3 className="mt-3 text-[clamp(1.35rem,2vw,1.9rem)] font-extrabold tracking-tight text-slate-900">
              {item.name}
            </h3>
          </div>
        </div>

        <div className="flex flex-col p-5 sm:p-7 lg:p-8">
          <div
            ref={contentRef}
            className={`overflow-hidden text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8 transition-[max-height] duration-500 ease-in-out ${
              isOpen ? "max-h-[2000px]" : "max-h-[220px]"
            }`}
            dangerouslySetInnerHTML={{ __html: htmlMessage }}
          />

          <div className="mt-6 flex flex-wrap gap-3">
            {showButton && (
              <button
                type="button"
                onClick={() => onToggle(item.id)}
                aria-expanded={isOpen}
                className="rounded-2xl bg-gradient-to-r from-sky-500 to-sky-700 px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {isOpen ? "Read Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AttractiveTwoCardsSection() {
  const [openCardId, setOpenCardId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_35%),linear-gradient(to_bottom,#f8fbff,#ffffff)] px-4 py-12 text-slate-900">
      <div className="pointer-events-none absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl items-center justify-center">
        <div className="w-full max-w-5xl">
          {cards.map((item) => (
            <ReadMoreCard
              key={item.id}
              item={item}
              isOpen={openCardId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
