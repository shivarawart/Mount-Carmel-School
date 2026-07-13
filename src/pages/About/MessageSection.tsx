"use client";

import React, { useEffect, useRef, useState } from "react";

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
    id: 1,
    name: "Mr. Jagdev",
    role: "Management Head",
    imageUrl: "/changeimg/WhatsApp Image 2026-07-10 at 12.05.37 (1).jpeg",
    imageAlt: "Mr Jagdev portrait",
    message: `Mr. Jagdev's Message

Dear Parents, Students, and Well-Wishers,

It is with immense pride and heartfelt gratitude that I welcome you to Mount Carmel International School, a place where education is enriched with values, discipline, innovation, and excellence.

At Mount Carmel International School, we believe that true education extends far beyond the walls of a classroom. It is a journey of nurturing young minds, building strong character, inspiring confidence, and cultivating compassion.

Our mission is to empower every student with the knowledge, skills, and values required to become responsible citizens, lifelong learners, and visionary leaders in an ever-changing world.

We sincerely thank our parents for their trust, encouragement, and continued partnership in this shared journey of education.

May Almighty God continue to bless every student, parent, teacher, and member of the Mount Carmel family with wisdom, strength, happiness, and success.

With warm regards,
Mr. Jagdev
Mount Carmel International School`,
  },
  {
    id: 2,
    name: "Ms. Sukhvinder Kaur Dhillon",
    role: "Principal",
    imageUrl: "/changeimg/WhatsApp Image 2026-07-10 at 12.05.37.jpeg",
    imageAlt: "Ms Sukhvinder Kaur Dhillon portrait",
    message: `Principal's Message

Dear Students, Parents, and Visitors,

It is my privilege and honor to welcome you to Mount Carmel International School, a place where learning is inspired, talents are nurtured, and every child is encouraged to dream, achieve, and excel.

At Mount Carmel International School, we believe that education is not merely the acquisition of knowledge—it is the foundation for building character, confidence, creativity, and compassion.

Our dedicated faculty members are committed to creating engaging learning experiences that encourage curiosity, critical thinking, innovation, and lifelong learning.

Thank you for placing your trust in Mount Carmel International School. We look forward to working together to build a bright and successful future for every child.

Warm regards,
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
    setShowButton(el.scrollHeight > 160);
  }, []);

  const htmlMessage = formatMessage(item.message);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-sky-100 bg-white shadow-lg transition hover:shadow-xl">
      <div className="bg-gradient-to-br from-sky-50 to-white p-4">
        <div className="aspect-square overflow-hidden rounded-2xl border border-sky-100 bg-sky-50">
          <img
            src={item.imageUrl}
            alt={item.imageAlt}
            className="h-full w-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/1200x900/87CEEB/ffffff?text=Image";
            }}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
            {item.role}
          </p>
          <h3 className="mt-3 text-2xl font-extrabold text-slate-900">
            {item.name}
          </h3>
        </div>

        <div
          ref={contentRef}
          className={`overflow-hidden text-sm leading-7 text-slate-700 transition-all duration-300 ${
            isOpen ? "max-h-[2000px]" : "max-h-[160px]"
          }`}
          dangerouslySetInnerHTML={{ __html: htmlMessage }}
        />

        <div className="mt-auto flex flex-wrap gap-3">
          {showButton && (
            <button
              type="button"
              onClick={() => onToggle(item.id)}
              aria-expanded={isOpen}
              className="rounded-xl bg-gradient-to-r from-sky-400 to-sky-600 px-4 py-2 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              {isOpen ? "Read Less" : "Read More"}
            </button>
          )}

          <button
            type="button"
            className="rounded-xl border border-sky-200 bg-white px-4 py-2 text-sm font-bold text-sky-700 transition hover:-translate-y-0.5 hover:shadow"
          >
            Message
          </button>
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
    <section className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white px-4 py-12 text-slate-900">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-bold text-sky-700">
            Beautiful Card UI
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
            Two Clean Cards With Read More
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Only one card opens at a time. Clicking a second card closes the first one automatically.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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