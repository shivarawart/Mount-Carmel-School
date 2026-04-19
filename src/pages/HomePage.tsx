"use client";

import { Link } from "react-router-dom";
import Banner from "../components/ui/Banner";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const HomePage = () => {
  return (
    <main className="bg-[#f8fafc] text-gray-900">

      {/* 🔥 HERO */}
      <Banner />

      {/* ⭐ HIGHLIGHTS (WITH STORY FEEL) */}
      <Section
        title="A Place Where Learning Comes Alive"
        subtitle="We create an environment where students grow academically, socially, and emotionally."
        center
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card 
            title="Smart Learning"
            description="Interactive classrooms designed for modern education"
            image="public/img/smartc.png"
          />
          <Card 
            title="Expert Teachers"
            description="Guidance from passionate and qualified educators"
            image="public/assets/image 26.jpeg"
          />
          <Card 
            title="Creative Growth"
            description="Focus on arts, sports, and innovation"
            image="https://images.unsplash.com/photo-1509062522246-3755977927d7"
          />
          <Card 
            title="Safe Environment"
            description="Secure campus with positive atmosphere"
            image="public/assets/image21.jpeg"
          />
        </div>
      </Section>

      {/* 👩‍🏫 PRINCIPAL MESSAGE (MORE PREMIUM) */}
      <Section className="py-24">
  <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

    {/* 🖼 IMAGE SIDE */}
    <div className="relative group rounded-3xl overflow-hidden shadow-2xl">

      {/* Glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />

      {/* Image */}
      <img
        src="public/assets/image5.jpeg"
        alt="School leadership"
        className="w-full h-[320px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Floating badge */}
      <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md px-4 py-2 rounded-xl text-sm font-medium shadow-md">
        Leadership & Vision
      </div>
    </div>

    {/* 🧠 TEXT SIDE */}
    <div className="space-y-6">
      
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
        Our Approach to Education
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed">
        Education is not just about books — it is about shaping character,
        building confidence, and preparing students for real life.
        We focus on nurturing curiosity, creativity, and compassion in every student.
      </p>

      {/* Highlight points */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
        <div className="flex items-center gap-2">✔ Value-based learning</div>
        <div className="flex items-center gap-2">✔ Smart classrooms</div>
        <div className="flex items-center gap-2">✔ Holistic growth</div>
        <div className="flex items-center gap-2">✔ Future-ready skills</div>
      </div>

      {/* CTA */}
      <div className="flex gap-4 pt-4">
        
        <Link to="/academics"><Button
          size="lg"
          className="hover:scale-[1.03] active:scale-[0.97]"
        >
          Explore Vision →
        </Button></Link>


        <Link to="/contact">
        <Button
          variant="outline"
          size="lg"
          className="hover:scale-[1.03]"
        >
          Contact School
        </Button></Link>
      </div>
    </div>

  </div>
</Section>

      {/* 🚌 FACILITIES (VISUAL HEAVY SECTION) */}
      <Section
        title="World-Class Facilities"
        subtitle="Everything a student needs to succeed"
        bg="gradient"
        center
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          <Card 
            title="Modern Labs"
            description="Hands-on science and computer labs"
            image="https://tse2.mm.bing.net/th/id/OIP.Dz01Coc7gdwEeSJuoMI8CAHaDt?rs=1&pid=ImgDetMain&o=7&rm=3"
          />

          <Card 
            title="Library Space"
            description="Peaceful reading and digital learning zone"
            image="img/liabrary.png"
          />

          <Card 
            title="Sports Arena"
            description="Encouraging fitness and teamwork"
            image="https://images.unsplash.com/photo-1517649763962-0c623066013b"
          />

        </div>
      </Section>

      {/* 🎓 CTA (MAKE IT STRONG) */}
      {/* <section className="relative py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-center px-6">

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Admissions Open
          </h2>

          <p className="text-lg text-gray-200 mb-8">
            Give your child the best future with quality education and values.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg">Apply Now</Button>
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>

      </section> */}

      {/* 📰 UPDATES */}
      <Section
        title="Latest News & Events"
        subtitle="Stay updated with what’s happening"
      >
        <div className="grid gap-6 md:grid-cols-3">

          <Card 
            title="Admissions 2026"
            description="Applications are now open"
            image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655"
          />

          <Card 
            title="Annual Function"
            description="Grand celebration coming soon"
            image="img/anualday.png"
          />

          <Card 
            title="Sports Day"
            description="Register for upcoming events"
            image="img/sportsDay.png"
          />

        </div>
      </Section>

    </main>
  );
};

export default HomePage;