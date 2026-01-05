import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="relative bg-gray-950 overflow-hidden pt-24 pb-12">
            {/* Layer 0: Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Dotted grid */}
                <div className="absolute inset-0 dotted-grid-bg" />

                {/* Gradient glows */}
                <div
                    className="absolute left-0 bottom-0 w-3/4 h-3/4"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 100% 100%, rgba(59, 130, 246, 0.2), transparent 50%)",
                        filter: "blur(100px)",
                    }}
                />
                <div
                    className="absolute right-0 top-0 w-3/4 h-3/4"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 0% 0%, rgba(168, 85, 247, 0.15), transparent 50%)",
                        filter: "blur(100px)",
                    }}
                />

                {/* Giant background text - desktop/tablet only */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Desktop / tablet version */}
                    <div className="hidden sm:flex items-center justify-center h-full">
                        <div className="flex flex-col items-center translate-y-6 md:translate-y-10">
              <span
                  className="
                  text-white/8 font-black
                  text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[11rem]
                  leading-none uppercase select-none tracking-[0.15em]
                "
              >
                LAKSHYA
              </span>
                            <span
                                className="
                  font-bold
                  text-lg sm:text-2xl md:text-3xl
                  mt-2 sm:mt-3 md:mt-4
                  uppercase tracking-[0.35em]
                  select-none bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400
                  bg-clip-text text-transparent
                "
                            >
                DEFY THE ODDS
              </span>
                        </div>
                    </div>

                    {/* Mobile-only subtle LAKSHYA watermark (no tagline) */}
                    <div className="sm:hidden flex items-center justify-center h-full">
            <span className="text-white/5 font-black text-[3.5rem] leading-none uppercase select-none tracking-[0.15em]">
              LAKSHYA
            </span>
                    </div>
                </div>
            </div>

            {/* Layer 1: Content (On Top) */}
            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300">
                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {/* Column 1: About */}
                    <div>
                        <div className="font-bold mb-4 text-lg text-white">Lakshya 2025</div>
                        <div className="text-sm text-gray-300">
                            Welcomes all enthusiasts who believe it's all about making the
                            right choices and taking the plunge.
                        </div>
                    </div>

                    {/* Column 2: Contact For Events */}
                    <div>
                        <div className="font-bold mb-4 text-lg text-white">
                            Contact For Events
                        </div>
                        <div className="font-semibold text-blue-300">Samarth Sharma (Public Relations Manager)</div>
                        <div className="mb-3 text-sm text-gray-300">+91 8928088784</div>
                        <div className="font-semibold text-blue-300">Sajal Jain (Accomodation Manager)</div>
                        <div className="mb-2 text-sm text-gray-300">+91 9140222151</div>
                    </div>

                    {/* Column 3: Phone & Socials */}
                    <div>
                        <div className="font-bold mb-4 text-lg text-white">Phone</div>
                        <div className="font-semibold text-blue-300">Jagrit (Overall Coordinator):{" "}</div>
                        <div className="mb-3 text-sm text-gray-300"> +91 6280259964 </div>
                        <div className="font-semibold text-blue-300">
                            Nishant Bhalani (Events Manager):{" "}
                        </div>
                        <div className="mb-3 text-sm text-gray-300"> +91 9586353536 </div>

                        <div className="font-bold mb-4 text-lg text-white">Follow Us</div>
                        <div className="flex gap-5">
                            <a
                                href="https://www.linkedin.com/company/lakshyafest-iit-indore/?originalSubdomain=in"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="text-gray-400 hover:text-blue-400 transition-colors h-6 w-6"
                            >
                                <FontAwesomeIcon icon={faLinkedin} className="h-full w-full" />
                            </a>
                            <a
                                href="https://www.instagram.com/lakshya_iiti/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="text-gray-400 hover:text-blue-400 transition-colors h-6 w-6"
                            >
                                <FontAwesomeIcon icon={faInstagram} className="h-full w-full" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
                    <div className="text-gray-400 text-sm">
                        &copy; 2025 Lakshya IIT Indore. All Rights Reserved.
                    </div>

                    
                </div>
            </div>
        </footer>
    );
}
