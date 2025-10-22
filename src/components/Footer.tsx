export default function Footer() {
    return (
        <footer className="bg-blue-950  pt-10 pb-6 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* About Section */}
                <div>
                    <div className="font-bold mb-2 text-lg text-teal-700">Lakshya 2025</div>
                    <div className="mb-3 text-cyan-100">
                        welcomes all the enthusiasts who believe that it's all about making the right choices and taking the plunge.
                    </div>
                    <div className="font-semibold italic mb-2 text-blue-300">
                        DEFY THE ODDS
                    </div>
                    <div className="font-bold mb-1 text-cyan-100">Let's innovate, let's transform, let's break the monotony.</div>
                    <button className="mt-4 px-4 py-2 rounded-full bg-gradient-to-br from-teal-500 to-blue-700 text-white shadow font-semibold transition hover:scale-105">
                        Email Us
                    </button>
                </div>

                {/* Contact for events */}
                <div>
                    <div className="font-bold mb-2 text-teal-700">Contact For Events</div>
                    {/* Placeholder contacts */}
                    <div className="font-semibold text-teal-500">Name 1</div>
                    <div className="mb-1 text-cyan-300">+91 XXXXXXXX</div>
                    <div className="font-semibold text-teal-500">Name 2</div>
                    <div className="mb-1 text-cyan-300">+91 XXXXXXXX</div>
                    <div className="font-bold mt-3 text-cyan-600">Email:</div>
                    <div className="mb-2 text-blue-300">your-email@iit.ac.in</div>
                </div>

                {/* Phone & Socials Section */}
                <div>
                    <div className="font-bold mb-2 text-cyan-600">Phone:</div>
                    <div className="mb-1 text-cyan-300">Contact 1: +91 XXXXXXXXXX</div>
                    <div className="mb-1 text-cyan-300">Contact 2: +91 XXXXXXXXXX</div>
                    <div className="mb-1 text-cyan-300">Contact 3: +91 XXXXXXXXXX</div>
                    <div className="font-bold mt-4 mb-2 text-teal-700">Follow us:</div>
                    <div className="flex gap-3">
                        <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-linkedin fa-lg" /></a>
                        <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-twitter fa-lg" /></a>
                        <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-instagram fa-lg" /></a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="flex justify-between items-center max-w-6xl mx-auto pt-5 border-t border-blue-800">
                <div className="text-blue-200 text-sm">&copy; 2025 Lakshya IIT Indore. All Rights Reserved.</div>
                <button className="bg-blue-700 hover:bg-blue-900 text-white px-5 py-2 rounded-full shadow font-bold transition-all flex items-center">
                    <span className="mr-2">🎟️</span> Fest Pass
                </button>
            </div>
        </footer>
    );
}
