import { Lightbulb } from 'lucide-react';
// import CountdownTimer from './CountdownTimer';
import Navbar from './Navbar';
import Footer from './Footer';

function DataTable() {
  const handleIconClick = () => {
    window.open('https://online.fliphtml5.com/ouayk/tpqs/', '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Navbar />
      {/* <CountdownTimer targetDate="2025-03-15T09:00:00" /> */}
      <div className="dark:bg-slate-900 dark:text-white min-h-screen flex flex-col items-center py-8 pt-16">
        <div
          className="flex items-center justify-center h-64 w-64 bg-yellow-500 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer mt-20 dark:bg-slate-900 border-2 border-blue-600 dark:border-blue-800"
          onClick={handleIconClick}
        >
          <Lightbulb size={120} className="text-white" />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DataTable;
