import { FormEvent, useState } from 'react';
import emailjs from 'emailjs-com';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { SectionTitle } from '../components/ui/SectionTitle';
import { profile } from '../data/portfolio';

export function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!service || !template || !key) {
      setStatus('EmailJS is ready in code. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to send messages.');
      return;
    }

    try {
      await emailjs.sendForm(service, template, event.currentTarget, key);
      event.currentTarget.reset();
      setStatus('Message sent successfully. Thank you.');
    } catch {
      setStatus('Message could not be sent right now. Please email me directly.');
    }
  }

  return (
    <section id="contact" className="section">
      <SectionTitle eyebrow="Contact" title="Let’s build something useful" />
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div className="glass rounded-xl p-6">
          <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
          <div className="mt-6 space-y-4 text-slate-300">
            <p className="flex items-center gap-3"><MapPin className="text-cyan" size={20} /> {profile.location}</p>
            <a className="flex items-center gap-3 hover:text-cyan" href={`mailto:${profile.email}`}><Mail className="text-cyan" size={20} /> {profile.email}</a>
            <a className="flex items-center gap-3 hover:text-cyan" href={profile.github}><Github className="text-cyan" size={20} /> GitHub</a>
            <a className="flex items-center gap-3 hover:text-cyan" href={profile.linkedin}><Linkedin className="text-cyan" size={20} /> LinkedIn</a>
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {['Available for Freelance', 'Available for Full-Time', 'Available for Remote'].map((item) => (
              <span key={item} className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-sm text-cyan">{item}</span>
            ))}
          </div>
        </div>
        <form onSubmit={onSubmit} className="glass rounded-xl p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold text-slate-300">Name<input name="from_name" required className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white" /></label>
            <label className="text-sm font-semibold text-slate-300">Email<input name="reply_to" type="email" required className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white" /></label>
          </div>
          <label className="mt-4 block text-sm font-semibold text-slate-300">Subject<input name="subject" required className="mt-2 w-full rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white" /></label>
          <label className="mt-4 block text-sm font-semibold text-slate-300">Message<textarea name="message" required rows={6} className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-slate-950 px-4 py-3 text-white" /></label>
          <button type="submit" className="mt-5 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-blue-500">Send Message</button>
          {status ? <p className="mt-4 text-sm text-slate-300">{status}</p> : null}
        </form>
      </div>
    </section>
  );
}
