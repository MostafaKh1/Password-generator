import Footer from "./Components/Footer";
import PasswordGenerator from "./Components/PasswordGenerator";

export default function Home() {
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <PasswordGenerator />
      <Footer />
    </div>
  );
}
