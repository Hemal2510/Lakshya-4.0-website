import Header from "@/components/Header";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (

        <div className="isolate">
            <Header />
            {children}
        </div>
    );
}