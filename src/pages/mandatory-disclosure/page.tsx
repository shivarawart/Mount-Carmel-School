"use client";

import { useState, useEffect, useRef } from "react";
import {
  Folder,
  FileText,
  FileSpreadsheet,
  Eye,
  Download,
  X,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Banner from "../../components/ui/Banner";
import Section from "../../components/ui/Section";

gsap.registerPlugin(ScrollTrigger);

// --- Types ---
type FileItem = {
  name: string;
  type: "pdf" | "excel" | "doc"; 
  fileId: string;
};

type FolderType = {
  name: string;
  files: FileItem[];
};

// --- Data ---
const data: FolderType[] = [
  {
    name: "General Information",
    files: [
      {
        name: "Affiliation Certificate",
        type: "pdf",
        fileId: "1Ui3EtER3BIB9TUHkuB6AYJNQJi0AB79A",
      },

      {
        name: "Society Trust Certification",
        type: "pdf",
        fileId: "1Rw3GcHKL5FcDPe-FnlVKvGCIenfLGKdb",
      },
      {
        name: "Recoganation Certificate",
        type: "pdf",
        fileId: "1sPpirauBCig0OUxx33IRcuNnxySs9FhX",
      },
      {
        name: "Affidavit",
        type: "pdf",
        fileId: "1pPjpT-3__Pb-RTrxJqfHz0kKzBPgMglF",
      },

      {
        name: "NOC",
        type: "pdf",
        fileId: "1s5mhHGy1N8rTLLOEoXNEFfO4QjLEJGIo",
      },
      {
        name: "Land Certificate",
        type: "pdf",
        fileId: "1jHUItZ3DOpWYwJuPoX2Gz9EetZU9xMoc",
      },
    ],
  },

  {
    name: "Academic Records",
    files: [
      {
        name: "X Result",
        type: "pdf",
        fileId: "1AztQwtOeJktchwdpt0CIRqJcW_CfP7h0",
      },
      {
        name: "Board Examination Result",
        type: "pdf",
        fileId: "1ZqpbEdq6sNyTOtMt92pwwukbsmUIEOfL",
      },
      {
        name: "XII Class Result",
        type: "pdf",
        fileId: "11G39bNgW9zCMFgdUhj6YJow9H8_3i5pQ",
      },
      {
        name: "XII Acadimic Result",
        type: "pdf",
        fileId: "1oZ9sCM-T95cSiyue4geuFsGjSNlpSea0",
      },
      {
        name: "School Planner",
        type: "pdf",
        fileId: "13FHH-M2zRvBkfzYx2FPANWg9XE3ol81c",
      },
      {
        name: "List of PTA Executive committe",
        type: "pdf",
        fileId: "1DiSN137a9jC1V9G7k8l5cqllCgLUvJBL",
      },
    ],
  },

  {
    name: "Staff & Administration",
    files: [
      {
        name: "Staff Details",
        type: "pdf",
        fileId: "1eG9mb_V8ld9J2WRduZALG-EOeUkIPRw-",
      },
      {
        name: "PGT Staff",
        type: "pdf",
        fileId: "1WoYOUlMXXrAN_SBCi9vS8xqQ18IRtSUT",
      },
      {
        name: "TGT Staff",
        type: "pdf",
        fileId:
          "17645eoy4jNKIhMaCVDESD9aH1_qigrNU",
      },
      {
        name: "PRT Staff",
        type: "pdf",
        fileId: "1LMvbfr9lW6yMfPwhCeeceDOt-E6aw54d",
      },
      {
        name: "NTT Staff",
        type: "pdf",
        fileId: "1XgpeQncTBqveKNMxrk2VOECN1UQJtTOl",
      },
      {
        name: "Other Staff",
        type: "pdf",
        fileId: "10MTECYIoBcaXzi5rytnMcSvfnLVbo-Mw",
      },
      {
        name: "Management Committee",
        type: "pdf",
        fileId: "12cXhnMiFfFz8QsOjyMSqLAzfr0uiqPgh",
      },
    ],
  },

  {
    name: "Finance & Infrastructure",
    files: [
      {
        name: "Building Safety Certificate",
        type: "pdf",
        fileId: "1UYG1Bczzdfe7jnlpybkGizihR62heLdy",
      },
      {
        name: "Fees Structure",
        type: "pdf",
        fileId: "1wwbFoUY8CRui-2YidWyQwFXHErytvHG-",
      },
      {
        name: "School Report Form 6",
        type: "pdf",
        fileId: "1XXjIk5UZgOEliPnKWXE8o2qPSzR3qWAF",
      },
      {
        name: "Hygienic Certificate",
        type: "pdf",
        fileId: "10n0iRDEU56tN72I7ylt_mreZGEMfTyhW",
      },
      {
        name: " School Infrastructure Details",
        type: "pdf",
        fileId: "15tzHxqC9BOcxtiVnskKEPQO1z3VOE7MD",
      },
    ],
  },

  {
    name: "Safety & Compliance",
    files: [
      {
        name: "Fire Safety Certificate",
        type: "pdf",
        fileId: "18BUI-YutYDi3cThOzD80T2_45AXf1n2s",
      },
    ],
  },
];








// --- File Card ---
const FileCard = ({
  file,
  onView,
}: {
  file: FileItem;
  onView: (f: FileItem) => void;
}) => (
  <div className="group relative bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl p-5 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between overflow-hidden">

    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-indigo-500/10 blur-2xl transition rounded-2xl" />

    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-gray-100 rounded-xl group-hover:bg-indigo-100 transition">
          {file.type === "excel" ? (
            <FileSpreadsheet className="text-green-600" size={22} />
          ) : (
            <FileText className="text-red-500" size={22} />
          )}
        </div>

        <h3 className="font-semibold text-gray-800 text-sm md:text-base truncate">
          {file.name}
        </h3>
      </div>
    </div>

    <div className="relative z-10 flex gap-2 mt-4">
      <button
        onClick={() => onView(file)}
        className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 text-sm transition"
      >
        <Eye size={16} /> View
      </button>

      <a
        href={`https://drive.google.com/uc?export=download&id=${file.fileId}`}
        className="flex-1"
      >
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm transition">
          <Download size={16} /> Download
        </button>
      </a>
    </div>
  </div>
);

// --- Modal ---
const PreviewModal = ({
  file,
  onClose,
}: {
  file: FileItem;
  onClose: () => void;
}) => (
  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-2 sm:p-6">

    <div className="bg-white w-full max-w-6xl h-[90vh] sm:h-[85vh] rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col">

      <div className="flex justify-between items-center px-4 sm:px-6 py-3 border-b">
        <h3 className="font-semibold text-sm sm:text-lg truncate">
          {file.name}
        </h3>

        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-gray-100 transition"
        >
          <X size={18} />
        </button>
      </div>

      <iframe
        src={`https://drive.google.com/file/d/${file.fileId}/preview`}
        className="flex-1 w-full border-none"
        loading="lazy"
      />
    </div>
  </div>
);

// --- MAIN COMPONENT ---
export default function MandatoryDisclosurePage({
  folders = data,
}: {
  folders?: FolderType[];
}) {
  const [activeFolder, setActiveFolder] = useState(folders[0]);
  const [activeFile, setActiveFile] = useState<FileItem | null>(null);
  const [search, setSearch] = useState("");

  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".reveal").forEach((el: any, i) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            delay: i * 0.1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const filtered = activeFolder.files.filter((f) =>
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      ref={pageRef}
      className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100"
    >
      {/* 🔥 Banner */}
      <Banner />

      {/* 📄 Section */}
      <Section
        title="Mandatory Disclosure"
        subtitle="Access official documents, certificates, and academic records"
        center
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-10 space-y-16">
          {/* 🌟 INTRO */}

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 reveal">
            <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] lg:rounded-[40px] border border-slate-200/70 bg-gradient-to-br from-white via-blue-50/40 to-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[90px] sm:-top-28 sm:h-72 sm:w-72 sm:blur-[110px] lg:-top-32 lg:h-80 lg:w-80 lg:blur-[120px]" />
              <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-sky-400/10 blur-[90px] sm:h-56 sm:w-56 sm:blur-[110px] lg:h-72 lg:w-72 lg:blur-[120px]" />

              <div className="relative grid grid-cols-1 items-center gap-8 p-5 sm:gap-10 sm:p-8 md:p-10 lg:grid-cols-2 lg:gap-14 lg:p-16 xl:p-20">
                <div className="order-2 max-w-2xl lg:order-1">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 sm:px-5 mb-6 sm:mb-8">
                    <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-[0.18em] text-blue-700 uppercase">
                      Trust • Transparency • Excellence
                    </span>
                  </div>

                  <h2 className="text-[clamp(2rem,7vw,4.8rem)] font-black leading-[0.95] tracking-tight text-slate-900">
                    Transparency
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 bg-clip-text text-transparent">
                      You Can Verify.
                    </span>
                  </h2>

                  <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
                    We believe that trust begins with complete openness. Every
                    important document—including school affiliation, faculty
                    details, academic performance, infrastructure records, and
                    compliance reports—is publicly available for students,
                    parents, and educational authorities.
                  </p>

                  <p className="mt-4 max-w-xl text-[15px] leading-7 font-semibold text-slate-900 sm:text-base sm:leading-8">
                    Watch our official inspection video to experience our
                    campus, classrooms, facilities, and learning environment
                    firsthand.
                  </p>

                  <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:mt-10">
                    <a
                      href="https://youtu.be/n_K1pH4Q9ls?si=YlY5KYuZIQzQfDa_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-4 text-sm sm:text-base font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-300 sm:w-auto sm:px-7"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      Watch Inspection Video
                    </a>

                    <div className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm sm:w-auto sm:px-5">
                      <div className="flex -space-x-2 overflow-hidden">
                        <img
                          src="/changeimg/WhatsApp Image 2026-07-10 at 12.05.37.jpeg"
                          alt="Principal"
                          className="h-8 w-8 rounded-full object-cover ring-2 ring-white sm:h-9 sm:w-9"
                        />
                        <img
                          src="/changeimg/WhatsApp Image 2026-07-10 at 12.05.37 (1).jpeg"
                          alt="Teacher"
                          className="h-8 w-8 rounded-full object-cover ring-2 ring-white sm:h-9 sm:w-9"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="truncate font-semibold text-slate-900">
                          Expert Faculty
                        </p>
                        <p className="truncate text-xs sm:text-sm text-slate-500">
                          Passionate Educators with Years of Experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative order-1 lg:order-2">
                  <div className="absolute inset-0 rounded-[24px] sm:rounded-[32px] bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-2xl" />

                  <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] border border-slate-200 bg-white shadow-2xl">
                    <div className="aspect-video w-full">
     <a
                      href="https://youtu.be/n_K1pH4Q9ls?si=YlY5KYuZIQzQfDa_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/changeimg/mountcarmel.png"
                        alt="Mount Carmel School Thumbnail"
                        className="h-full w-full object-auto"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white/95 px-4 py-4 shadow-xl backdrop-blur-xl sm:absolute sm:-bottom-6 sm:left-6 sm:mt-0 sm:px-6 sm:py-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-xl text-white sm:h-12 sm:w-12">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">
                          Official Campus Inspection
                        </h4>
                        <p className="text-sm text-slate-500">
                          Real classrooms • Infrastructure • Facilities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 📊 STATS */}
          <div className="relative mt-24 reveal">
            {/* Background Glow */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

            <div className="relative grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  value: "900+",
                  label: "Students",
                  icon: "🎓",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  value: "40+",
                  label: "Qualified Faculty",
                  icon: "👨‍🏫",
                  color: "from-indigo-500 to-blue-600",
                },
                {
                  value: "100%",
                  label: "Board Results",
                  icon: "🏆",
                  color: "from-sky-500 to-cyan-500",
                },
                {
                  value: "8+",
                  label: "Years of Excellence",
                  icon: "⭐",
                  color: "from-violet-500 to-indigo-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/80 backdrop-blur-xl p-8 transition-all duration-700 hover:-translate-y-3 hover:border-blue-200 hover:shadow-[0_30px_80px_rgba(59,130,246,0.18)]"
                >
                  {/* Gradient Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-700 group-hover:opacity-[0.05]`}
                  />

                  {/* Decorative Circle */}
                  <div
                    className={`absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${item.color} opacity-10 blur-2xl`}
                  />

                  {/* Icon */}
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-3xl shadow-lg transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>

                  {/* Number */}
                  <h3
                    className={`mt-8 bg-gradient-to-r ${item.color} bg-clip-text text-5xl font-black tracking-tight text-transparent`}
                  >
                    {item.value}
                  </h3>

                  {/* Label */}
                  <p className="mt-3 text-lg font-semibold text-slate-800">
                    {item.label}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Delivering excellence through quality education, dedicated
                    faculty, and a future-focused learning environment.
                  </p>

                  {/* Bottom Line */}
                  <div
                    className={`mt-8 h-1 w-0 rounded-full bg-gradient-to-r ${item.color} transition-all duration-700 group-hover:w-full`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 📂 INFO CARDS */}

          {/* 🔍 HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">
                {activeFolder.name}
              </h2>
              <p className="text-gray-500 text-sm">
                Browse and manage your documents
              </p>
            </div>

            <input
              type="search"
              placeholder="Search documents..."
              onChange={(e) => setSearch(e.target.value)}
              className="w-full lg:w-80 px-5 py-3 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* 🗂 TABS */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {folders.map((f) => (
              <button
                key={f.name}
                onClick={() => setActiveFolder(f)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  activeFolder.name === f.name
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white border hover:bg-indigo-50"
                }`}
              >
                <Folder size={16} />
                {f.name}
              </button>
            ))}
          </div>

          {/* 📄 GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.length > 0 ? (
              filtered.map((file) => (
                <FileCard
                  key={file.fileId}
                  file={file}
                  onView={setActiveFile}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-16 text-gray-500">
                No files found.
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* 🔍 MODAL */}
      {activeFile && (
        <PreviewModal file={activeFile} onClose={() => setActiveFile(null)} />
      )}
    </main>
  );
}