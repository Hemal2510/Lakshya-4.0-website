import SponsorsReveal from "@/components/SponsorsReveal"; // Adjust the path based on where you saved the file
import SponsorGrid from "@/components/SponsorGrid";

export default function SponsorsPage() {
    return (
        <main className="bg-black">
            {/* You can add your Navbar here if you have one */}

            {/* This is the high-end reveal we built */}
            <SponsorsReveal />
            <SponsorGrid />

        </main>
    );
}