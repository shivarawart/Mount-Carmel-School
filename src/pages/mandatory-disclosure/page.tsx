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
        name:"Recoganation Certificate",
        type:'pdf',
        fileId:"1sPpirauBCig0OUxx33IRcuNnxySs9FhX"
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
    ],
  },

  {
    name: "Academic Records",
    files: [
      {
        name:"X Result",
        type:"pdf",
        fileId:"1AztQwtOeJktchwdpt0CIRqJcW_CfP7h0"
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
        name:"XII Acadimic Result",
        type:"pdf",
        fileId:"1oZ9sCM-T95cSiyue4geuFsGjSNlpSea0"
      },
      {
         name: "School Planner",
        type: "pdf",
        fileId: "13FHH-M2zRvBkfzYx2FPANWg9XE3ol81c",
      },{
        name:"List of PTA Executive committe",
        type:'pdf',
        fileId:"1DiSN137a9jC1V9G7k8l5cqllCgLUvJBL"
      }
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
        fileId: "1eG9mb_V8ld9J2WRduZALG-EOeUkIPRw-",
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
        name:"Other Staff",
        type:"pdf",
        fileId:"10MTECYIoBcaXzi5rytnMcSvfnLVbo-Mw"
      },{
         name: "Management Committee",
      type: "pdf",
      fileId: "12cXhnMiFfFz8QsOjyMSqLAzfr0uiqPgh",
      }
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
      },{
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
          <div className="text-center max-w-3xl mx-auto reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transparency & Excellence
            </h2>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl">
  We believe in complete transparency. All important documents including 
  affiliation, staff details, academic performance, and infrastructure 
  records are available for public access{""}

  <a
    href="https://youtu.be/n_K1pH4Q9ls?si=YlY5KYuZIQzQfDa_"
    className="inline-flex items-center gap-1.5 text-gray-900 font-medium group transition-all duration-300"
  >
    <span className="relative">
      inspection video
      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-black transition-all duration-300 group-hover:w-full" />
    </span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      fill="currentColor"
      className="w-[15px] h-[15px] opacity-70 transition-transform duration-300 group-hover:scale-110"
    >
      <path d="M320-200v-560l440 280-440 280Z" />
    </svg>
  </a>
</p>
          </div>

          {/* 📊 STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Students", value: "1200+" },
              { label: "Qualified Staff", value: "80+" },
              { label: "Board Results", value: "100%" },
              { label: "Years of Excellence", value: "15+" },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal text-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-indigo-600">
                  {item.value}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{item.label}</p>
              </div>
            ))}
          </div>

          {/* 📂 INFO CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Academic Records",
                desc: "Student results and reports.",
              },
              {
                title: "Staff Details",
                desc: "Qualified faculty data.",
              },
              {
                title: "Infrastructure",
                desc: "Facilities and safety records.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="reveal p-6 rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

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
        <PreviewModal
          file={activeFile}
          onClose={() => setActiveFile(null)}
        />
      )}
    </main>
  );
}