import { Lightbulb } from 'lucide-react'; 
import CountdownTimer from './CountdownTimer';
import Navbar from './Navbar';
import Footer from './Footer';

function DataTable() {
  const handleIconClick = () => {
    window.location.href = 'https://drive.google.com/file/d/1p-ONpFgQCFO470vTIg_sgD7Sqwv-Ms3Y/view?usp=drive_link'; 
  };

  return (
    <>
      <Navbar />
      <CountdownTimer targetDate="2025-03-15T09:00:00" />
      <div className="dark:bg-slate-900 dark:text-white min-h-screen flex flex-col items-center py-8">
        <div 
          className="flex items-center justify-center h-64 w-64 bg-yellow-300 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer mt-20 dark:bg-slate-900"
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
