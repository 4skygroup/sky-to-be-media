"use client";

import { useState } from "react";

const FORMSPREE_URL = "https://formspree.io/f/mpqgdpyr";

export default function ContactForm() {
    const [subject, setSubject] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        // 1. On capture le formulaire de manière synchrone, AVANT le await
        const form = e.currentTarget;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(FORMSPREE_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                // 2. On utilise notre variable 'form' qui est toujours valide !
                form.reset();
                setSubject("");
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <form onSubmit = { handleSubmit } className = "md:col-span-7 flex flex-col gap-5 text-xs font-medium text-white/90 w-full px-5 sm:px-8 md:px-0" >

            {/* Ligne 1 : Nom & Prénom */ }
            < div className = "grid grid-cols-1 sm:grid-cols-2 gap-4" >
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" name="lastname" required placeholder="Dupond" 
                           className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-white text-sm transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" name="firstname" required placeholder="Arnold" 
                           className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-white text-sm transition-colors" />
                </div>
            </div >

        {/* Ligne 2 : Email & Nom de l'entreprise */ }
        < div className = "grid grid-cols-1 sm:grid-cols-2 gap-4" >
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" required placeholder="a.dupond@gmail.com" 
                           className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-white text-sm transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" placeholder="SNCF Connect" 
                           className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-white text-sm transition-colors" />
                </div>
            </div >

        {/* Ligne 3 : Téléphone & Sujet */ }
        < div className = "grid grid-cols-1 sm:grid-cols-2 gap-4" >
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="06 12 34 56 78" 
                           className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-white text-sm transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject">Subject</label>
                    <div className="relative">
                        <select
                            id="subject"
                            name="subject"
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white appearance-none focus:outline-none focus:border-white text-sm transition-colors"
                        >
                            {/* Les options ont maintenant un fond noir pour être lisibles une fois le menu ouvert */}
                            <option value="" disabled className="bg-black text-white/50">Select a subject</option>
                            <option value="Podcast Partnership" className="bg-black text-white">Podcast Partnership</option>
                            <option value="Journalism Partnership" className="bg-black text-white">Journalism Partnership</option>
                            <option value="Interviews Partnership" className="bg-black text-white">Interviews Partnership</option>
                            <option value="Other Inquiry" className="bg-black text-white">Other Inquiry</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none font-bold text-white/50">
                            ﹀
                        </div>
                    </div>
                </div>
            </div >

        {/* Ligne 4 : Message */ }
        < div className = "flex flex-col gap-1.5" >
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" required rows={4} placeholder="Message" 
                          className="w-full bg-transparent border border-white/40 rounded-lg px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:border-white text-sm resize-none transition-colors"></textarea>
            </div >

        {/* Retours visuels */ }
    { status === "success" && <p className="text-green-400 text-center text-sm">Message sent successfully!</p> }
    { status === "error" && <p className="text-red-400 text-center text-sm">Oops! There was a problem submitting your form.</p> }

    {/* Bouton d'envoi */ }
    <div className="flex justify-center mt-4">
        <button
            type="submit"
            disabled={status === "sending"}
            className="bg-white text-black font-normal tracking-wider px-8 py-2.5 rounded-lg shadow-md hover:bg-black hover:text-white border border-transparent hover:border-white/40 focus:outline-none focus:ring-2 focus:ring-white transition-all duration-300 text-sm disabled:opacity-50"
        >
            {status === "sending" ? "Sending..." : "Send"}
        </button>
    </div>
        </form >
    );
}