import { Lightbulb } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import Navbar from './Navbar';
import Footer from './Footer';

function DataTable() {
  const handleIconClick = () => {
    window.location.href = 'https://docs.google.com/document/d/1enLVDTKat4RTed2n4dFPfnGw_XCC-E9P/edit';
  };

  return (
    <>
      <Navbar />
      <CountdownTimer targetDate="2025-03-15T09:00:00" />
      <div className="dark:bg-slate-900 dark:text-white min-h-screen flex flex-col items-center py-8">
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
