import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="relative bg-gray-950 overflow-hidden pt-24 pb-12">

            {/* Layer 0: Background Elements */}
            <div className="absolute inset-0 z-0">

                {/* The Dotted Grid */}
                <div className="absolute inset-0 dotted-grid-bg" />

                {/* The Gradient Glows (brighter) */}
                <div className="absolute left-0 bottom-0 w-3/4 h-3/4"
                     style={{
                         backgroundImage: 'radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.2), transparent 50%)',
                         filter: 'blur(100px)',
                     }}
                />
                <div className="absolute right-0 top-0 w-3/4 h-3/4"
                     style={{
                         backgroundImage: 'radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.15), transparent 50%)',
                         filter: 'blur(100px)',
                     }}
                />

                {/* The Giant Background Text with GRADIENT on "Defy the Odds" */}
                <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden">
                    <span className="text-white/15 font-black text-[10rem] sm:text-[16rem] leading-none uppercase select-none">
                        Lakshya
                    </span>
                    {/* GRADIENT APPLIED HERE */}
                    <span className="font-bold text-3xl sm:text-5xl -mt-12 sm:-mt-20 uppercase tracking-widest select-none bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                        Defy the Odds
                    </span>
                </div>
            </div>

            {/* Layer 1: Content (On Top) - BRIGHTER TEXT */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300">

                {/* 3-Column Grid with ALL your details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

                    {/* Column 1: About */}
                    <div>
                        <div className="font-bold mb-4 text-lg text-white">Lakshya 2025</div>
                        <div className="text-sm text-gray-300">
                            Welcomes all enthusiasts who believe it's all about making the right choices and taking the plunge.
                        </div>
                    </div>

                    {/* Column 2: Contact For Events - BRIGHTER NAMES */}
                    <div>
                        <div className="font-bold mb-4 text-lg text-white">Contact For Events</div>
                        <div className="font-semibold text-blue-300">Name 1</div>
                        <div className="mb-3 text-sm text-gray-300">+91 XXXXXXXX</div>
                        <div className="font-semibold text-blue-300">Name 2</div>
                        <div className="mb-2 text-sm text-gray-300">+91 XXXXXXXX</div>
                    </div>

                    {/* Column 3: Phone & Socials - BRIGHTER TEXT */}
                    <div>
                        <div className="font-bold mb-4 text-lg text-white">Phone</div>
                        <div className="mb-1 text-sm text-gray-300">Contact 1: <span className="text-blue-300 font-medium">+91 XXXXXXXXXX</span></div>
                        <div className="mb-4 text-sm text-gray-300">Contact 2: <span className="text-blue-300 font-medium">+91 XXXXXXXXXX</span></div>

                        <div className="font-bold mb-4 text-lg text-white">Follow Us</div>
                        <div className="flex gap-5">
                            <a href="https://www.linkedin.com/company/lakshyafest-iit-indore/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 transition-colors h-6 w-6">
                                <FontAwesomeIcon icon={faLinkedin} className="h-full w-full" />
                            </a>
                            <a href="https://twitter.com/lakshya_iiti" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition-colors h-6 w-6">
                                <FontAwesomeIcon icon={faTwitter} className="h-full w-full" />
                            </a>
                            <a href="https://www.instagram.com/lakshya_iiti/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-blue-400 transition-colors h-6 w-6">
                                <FontAwesomeIcon icon={faInstagram} className="h-full w-full" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Fest Pass Button */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
                    <div className="text-gray-400 text-sm">&copy; 2025 Lakshya IIT Indore. All Rights Reserved.</div>

                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg font-semibold transition-all hover:scale-105 hover:shadow-purple-500/50 flex items-center">
                        <span className="mr-2">🎟️</span> Fest Pass
                    </button>
                </div>
            </div>
        </footer>
    );
}
