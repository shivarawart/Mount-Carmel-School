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
    id: 1,
    name: "Mr. Jagdev",
    role: "Management Head",
    imageUrl: "/changeimg/jd.png",
    imageAlt: "Mr Jagdev portrait",
    message: `Mr. Jagdev's Message

Dear Parents, Students, and Well-Wishers,

It is my privilege to welcome you to Mount Carmel International School, an institution dedicated to providing quality education rooted in faith, values, and academic excellence.

We believe that education is not merely the pursuit of knowledge but the foundation for building character, nurturing compassion, and empowering young minds to become responsible citizens and future leaders. Inspired by the timeless values of love, integrity, service, and respect, our mission is to create a learning environment where every child is encouraged to discover their unique potential and develop into a confident, caring, and capable individual.

In today's rapidly evolving world, education must equip learners with not only academic proficiency but also critical thinking, creativity, adaptability, and strong moral values. Guided by the vision of the CBSE curriculum and enriched through experiential learning, innovation, and holistic development, we strive to prepare our students for the challenges and opportunities of the twenty-first century.

At Mount Carmel International School, our dedicated faculty, supportive parents, and motivated students work together as one family to create a culture of excellence. We encourage every learner to dream with confidence, work with dedication, lead with humility, and serve society with compassion.

As an institution, we remain committed to providing a safe, inclusive, and inspiring environment where every child is valued, respected, and empowered to achieve their highest aspirations. Our aim is not only to shape successful professionals but also individuals who uphold ethical values, contribute positively to society, and make a meaningful difference in the world.

I extend my heartfelt gratitude to our parents for their continued trust and partnership. Together, let us nurture a generation that is intellectually enlightened, morally upright, spiritually grounded, and socially responsible.

May Almighty God continue to bless our students, staff, parents, and the entire Mount Carmel family as we move forward with faith, wisdom, and excellence.

With warm regards,
Mr. Jagdev
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
    <article className="overflow-hidden rounded-3xl border border-white/60 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
      <div className="grid gap-0 lg:grid-cols-[360px,1fr]">
        <div className="relative bg-gradient-to-br from-sky-50 via-white to-sky-100 p-5">
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl border border-sky-100 bg-sky-50 shadow-lg">
            <img
              src={item.imageUrl}
              alt={item.imageAlt}
              className="h-full w-full object-auto "
              onError={(e) => {
                e.currentTarget.src =
                  "https://placehold.co/1200x1500/87CEEB/ffffff?text=Image";
              }}
            />
          </div>

          <div className="mt-4 text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700">
              <MessageCircle size={12} />
              {item.role}
            </p>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-900">
              {item.name}
            </h3>
          </div>
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          <div
            ref={contentRef}
            className={`overflow-hidden text-base leading-8 text-slate-700 transition-all duration-300 ${
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
    <section className="min-h-screen rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.12),transparent_35%),linear-gradient(to_bottom,#f8fbff,#ffffff)] px-4 py-12 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center">
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
