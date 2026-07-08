"use client";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Maximize2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

gsap.registerPlugin(ScrollTrigger);

type GalleryImage = {
  src: string;
  alt: string;
};

const galleryImages: GalleryImage[] = [
  { src: "/views/Sports-Areana/img1.jpg", alt: "Sports Arena 1" },
  { src: "/views/Sports-Areana/img2.jpg", alt: "Sports Arena 2" },
  { src: "/views/Sports-Areana/img3.jpg", alt: "Sports Arena 3" },
  { src: "/views/Sports-Areana/img4.jpg", alt: "Sports Arena 4" },
  { src: "/views/Sports-Areana/img5.jpg", alt: "Sports Arena 5" },
  { src: "/views/Sports-Areana/img6.jpg", alt: "Sports Arena 6" },
  { src: "/views/Sports-Areana/img7.jpg", alt: "Sports Arena 7" },
  { src: "/views/Sports-Areana/img8.jpg", alt: "Sports Arena 8" },
  { src: "/views/Sports-Areana/img9.jpg", alt: "Sports Arena 9" },
  { src: "/views/Sports-Areana/img10.jpg", alt: "Sports Arena 10" },
  { src: "/views/Sports-Areana/img11.jpg", alt: "Sports Arena 11" },
  { src: "/views/Sports-Areana/img12.jpg", alt: "Sports Arena 12" },
  { src: "/views/Sports-Areana/img13.jpg", alt: "Sports Arena 13" },
  { src: "/views/Sports-Areana/img14.jpg", alt: "Sports Arena 14" },
  { src: "/views/Sports-Areana/img15.jpg", alt: "Sports Arena 15" },
];

export default function SportsArena() {
  const pageRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const lightboxRef = useRef<PhotoSwipeLightbox | null>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".gallery-item");

      gsap.fromTo(
        items,
        { opacity: 0, y: 24, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );
    },
    { scope: pageRef },
  );

  useEffect(() => {
    let destroyed = false;

    const setSizesAndInit = async () => {
      const anchors = Array.from(
        document.querySelectorAll<HTMLAnchorElement>("#gallery a"),
      );

      await Promise.all(
        anchors.map(
          (anchor) =>
            new Promise<void>((resolve) => {
              const img = anchor.querySelector<HTMLImageElement>("img");

              if (!img) {
                resolve();
                return;
              }

              const applySizes = () => {
                anchor.dataset.pswpWidth = String(img.naturalWidth || 1600);
                anchor.dataset.pswpHeight = String(img.naturalHeight || 900);
                resolve();
              };

              if (img.complete && img.naturalWidth && img.naturalHeight) {
                applySizes();
                return;
              }

              img.addEventListener("load", applySizes, { once: true });
              img.addEventListener("error", () => resolve(), { once: true });
            }),
        ),
      );

      if (destroyed) return;

      const lightbox = new PhotoSwipeLightbox({
        gallery: "#gallery",
        children: "a",
        pswpModule: () => import("photoswipe"),
        showHideAnimationType: "zoom",
        bgOpacity: 0.96,
      });

      lightbox.init();
      lightboxRef.current = lightbox;
    };

    setSizesAndInit();

    return () => {
      destroyed = true;
      if (lightboxRef.current) {
        lightboxRef.current.destroy();
        lightboxRef.current = null;
      }
    };
  }, []);

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f7f8fc_40%,_#eef2f7_100%)] text-slate-900"
    >
      <section className="px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-indigo-600">
              Gallery
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-tight text-slate-950 md:text-6xl">
              Sports Arena
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
              Sports cultivate discipline, resilience, teamwork, and
              determination. Our modern sports facilities encourage students to
              stay active, compete with confidence, and develop both physical
              fitness and strong character.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        <div
          ref={gridRef}
          id="gallery"
          className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5"
        >
          {galleryImages.map((item, index) => (
            <a
              key={`${item.src}-${index}`}
              href={item.src}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${item.alt}`}
              className="gallery-item mb-4 block break-inside-avoid overflow-hidden rounded-[1.5rem] border border-white/70 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] ring-1 ring-black/5 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.14)]"
            >
              <figure className="group relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-auto w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-90 transition duration-500 group-hover:from-black/65" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-white">
                      {item.alt}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-white/65">
                      Tap to open
                    </p>
                  </div>

                  <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/15 bg-white/15 text-white backdrop-blur-md transition duration-300 group-hover:bg-white/25">
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </div>
              </figure>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
