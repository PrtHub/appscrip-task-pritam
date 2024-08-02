import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root_layout">
      <div>
        <Navbar />
        <Header />
        {children}
        <Footer />
      </div>
    </main>
  );
};

export default RootLayout;
