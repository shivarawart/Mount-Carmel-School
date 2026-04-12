"use client";

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
            image="https://tse4.mm.bing.net/th/id/OIP.V1u7jL9xxmhlcCIFdOCskwHaF7?rs=1&pid=ImgDetMain&o=7&rm=3"
          />
          <Card 
            title="Expert Teachers"
            description="Guidance from passionate and qualified educators"
            image="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
          />
          <Card 
            title="Creative Growth"
            description="Focus on arts, sports, and innovation"
            image="https://images.unsplash.com/photo-1509062522246-3755977927d7"
          />
          <Card 
            title="Safe Environment"
            description="Secure campus with positive atmosphere"
            image="https://images.unsplash.com/photo-1596495578065-6e0763fa1178"
          />
        </div>
      </Section>

      {/* 👩‍🏫 PRINCIPAL MESSAGE (MORE PREMIUM) */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
              className="w-full h-[320px] md:h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Message from Our Principal
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Education is not just about books — it is about shaping character,
              building confidence, and preparing students for real life.
              At our school, we nurture curiosity, creativity, and compassion.
            </p>

            <Button size="lg">Explore Vision</Button>
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