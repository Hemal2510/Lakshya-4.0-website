import LegacyStatsSection from "@/components/LegacyStatsSection";
import LakshyaTimelineSection from "@/components/LakshyaTimelineSection";
import AchievementsSection from "@/components/AchievementsSection";
export default function LegacyPage() {
    return (
        <main>
            <LegacyStatsSection />
            <div className="w-full -mt-8 -mb-12 relative z-10">
                <svg viewBox="0 0 1440 80" className="w-full h-20" fill="none" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="SectionFadeDivider" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#232477" stopOpacity="0" />
                            <stop offset="90%" stopColor="#232477" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#SectionFadeDivider)" d="M0,0 C600,95 900,5 1440,80 L1440,80 L0,80 Z" />
                </svg>
            </div>
            <LakshyaTimelineSection/>
            <div className="w-full -mt-8 -mb-12 relative z-10">
                <svg viewBox="0 0 1440 80" className="w-full h-20" fill="none" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="SectionFadeDivider" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#232477" stopOpacity="0" />
                            <stop offset="90%" stopColor="#232477" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#SectionFadeDivider)" d="M0,0 C600,95 900,5 1440,80 L1440,80 L0,80 Z" />
                </svg>
            </div>
            <AchievementsSection/>
        </main>
    );
}
