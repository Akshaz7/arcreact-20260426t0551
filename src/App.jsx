const { useState, useEffect } = React;

function Hero() {
  return (
    <section className="py-32 text-center">
      <h1 className="text-8xl font-semibold tracking-tight text-emerald-500">Hack UPC 206</h1>
      <p className="mt-6 text-neutral-400 text-lg leading-relaxed">Unleash your creativity and innovate at Hack UPC!</p>
      <img
        className="mt-12 w-full rounded-2xl object-cover transition hover:scale-105 duration-300"
        src="https://images.unsplash.com/photo-1581092339830-d65c3b928e06?w=1600&q=80&auto=format&fit=crop"
        alt="Technology and Innovation"
      />
    </section>
  );
}

function Schedule() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-6xl font-semibold text-emerald-500 mb-8">Schedule</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition duration-300">
          <h3 className="text-4xl font-semibold mb-4">Day 1</h3>
          <p className="text-neutral-400">Kick-off, team formation, and ideation sessions to start your innovative journey.</p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition duration-300">
          <h3 className="text-4xl font-semibold mb-4">Day 2</h3>
          <p className="text-neutral-400">Workshops and hacking sessions to bring your ideas to life.</p>
        </div>
        <div className="bg-neutral-900 p-6 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition duration-300">
          <h3 className="text-4xl font-semibold mb-4">Day 3</h3>
          <p className="text-neutral-400">Final presentations and awards ceremony to showcase your projects.</p>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <h2 className="text-6xl font-semibold text-emerald-500 mb-8">Contact Us</h2>
      <form className="bg-neutral-900 p-8 rounded-2xl border border-neutral-800 hover:border-neutral-700 transition duration-300">
        <div className="grid gap-6">
          <input type="text" placeholder="Your Name" className="p-4 rounded-lg bg-neutral-950 text-white" />
          <input type="email" placeholder="Your Email" className="p-4 rounded-lg bg-neutral-950 text-white" />
          <textarea placeholder="Message" className="p-4 h-32 rounded-lg bg-neutral-950 text-white"></textarea>
          <button type="submit" className="py-4 px-6 rounded-lg bg-emerald-500 transition hover:scale-105 duration-300">Send Message</button>
        </div>
      </form>
    </section>
  );
}

function App() {
  return (
    <>
      <Hero />
      <Schedule />
      <ContactForm />
    </>
  );
}