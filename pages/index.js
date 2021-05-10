import Search from "../components/Search";
import NominationsWrapper from '../components/Nominations/NominationsWrapper'

export default function Home() {
  
  return (
    <div className="w-full">
      <header className="h-4 bg-green-900"></header>
      <div className="max-w-3xl mx-auto px-2 mb-24 sm:mb-28">
        <div className="flex justify-center">
          <h1 className="text-2xl sm:text-4xl md:text-5xl tracking-tighter font-medium py-6 md:py-8 text-green-900">
            Submit Your <span className="font-bold">Shoppies</span> Nominations 
          </h1>
        </div>
        <Search/>
      </div>
      <NominationsWrapper/>
    </div>
  );
}
