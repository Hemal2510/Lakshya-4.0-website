
import SponsorItem from "./SponsorItem";

export default function GeneralSponsorsSection() {
    return (
        <section className="py-28 px-8">
            <h2 className="text-center text-5xl font-extrabold tracking-widest text-white mb-20">
                OUR SPONSORS
            </h2>

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-24">
                <SponsorItem
                    logo="/images/sponsors/sponsor1.jpg"
                    label="Beverage "
                />

                <SponsorItem
                    logo="/images/sponsors/sponsor2.jpg"
                    label="Fitness"
                />

                <SponsorItem
                    logo="/images/sponsors/sponsor3.jpg"
                    label="Vehicle "
                />
            </div>
        </section>
    );
}
