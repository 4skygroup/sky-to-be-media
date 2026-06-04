"use client";

import { useState } from "react";

export default function ContactForm() {
    const [subject, setSubject] = useState("");
    
    return (
        <form className="md:col-span-7 flex flex-col gap-5 text-xs font-medium text-white/90 ">

            {/* Ligne 1 : Nom & Prénom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" id="lastname" placeholder="Dupond" className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-black/30 focus:outline-none focus:border-white text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" id="firstname" placeholder="Arnold" className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-black/30 focus:outline-none focus:border-white text-sm" />
                </div>
            </div>

            {/* Ligne 2 : Email & Nom de l'entreprise */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="a.dupond@gmail.com" className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-black/30 focus:outline-none focus:border-white text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" placeholder="SNCF Connect" className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-black/30 focus:outline-none focus:border-white text-sm" />
                </div>
            </div>

            {/* Ligne 3 : Téléphone & Sujet */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="06 12 34 56 78" className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-white placeholder-black/30 focus:outline-none focus:border-white text-sm" />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject">Subject</label>
                    <div className="relative">
                        <select
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-white/90 appearance-none focus:outline-none focus:border-white text-sm"
                        >
                            <option value="" disabled className="text-black/50">Select a subject</option>
                            <option value="partnership" className="text-black">Podcast Partnership</option>
                            <option value="partnership" className="text-black">Journalism Partnership</option>
                            <option value="partnership" className="text-black">Interviews Partnership</option>
                            <option value="other" className="text-black">Other Inquiry</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none font-bold text-grey/10">
                            ﹀
                        </div>
                    </div>
                </div>
            </div>

            {/* Ligne 4 : Message */}
            <div className="flex flex-col gap-1.5">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" rows={4} placeholder="Message" className="w-full border border-white/40 rounded-lg px-4 py-2.5 text-black placeholder-black/30 focus:outline-none focus:border-white text-sm resize-none"></textarea>
            </div>

            {/* Bouton d'envoi aligné au centre */}
            <div className="flex justify-center mt-4">
                <button type="submit" className="bg-white text-black font-normal tracking-wider px-6 py-2 rounded-lg shadow-md hover:bg-black hover:text-white border border-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm">
                    Send
                </button>
            </div>

        </form>
    );
}