import PropTypes from 'prop-types';
import CountdownTimer from './CountdownTimer';
import Navbar from './Navbar';
import Footer from './Footer';

function DataTable() {
  const data = [
    { id: 1, name: 'Dr. Jamil Hasanov', job: 'Chairman', topic: 'Zarifa Aliyeva National Eye Centre' },
    { id: 2, name: 'Dr. Sona IbrahImova PhD', job: 'Vice Chairman', topic: 'Zarifa Aliyeva National Eye Centre' },
  ];

  return (
    <>
      <Navbar />
      <CountdownTimer targetDate="2025-03-15T09:00:00" />
      <div className="dark:bg-slate-900 dark:text-white min-h-screen flex flex-col items-center py-8">
        <h2 className="text-2xl font-semibold mb-4"><span className='text-yellow-500'>Information about the lecturers</span></h2>
        <p className="text-justify leading-relaxed text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
          Discover groundbreaking advancements in glaucoma care with two esteemed specialists. With advanced degrees and extensive clinical expertise, they will share the latest innovations and practices shaping the future of glaucoma management at The Azerbaijan Glaucoma Society conference.
        </p>

        <div className="overflow-x-auto w-full max-w-4xl px-4">
          <table
            className="table w-full border-collapse border border-gray-200 shadow-lg rounded-lg"
            role="table"
            aria-label="Employee Details Table"
          >
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-center">
                  #
                </th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-center">
                  Lecture Name
                </th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-center">
                  Role
                </th>
                <th className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-center">
                  Lecture Topic
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <TableRow
                  key={item.id || index}
                  index={index}
                  name={item.name}
                  job={item.job}
                  topic={item.topic}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

function TableRow({ index, name, job, topic }) {
  return (
    <tr
      className={`${index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
        } hover:bg-blue-50 dark:hover:bg-blue-900`}
      role="row"
    >
      <th
        className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-center"
        scope="row"
      >
        {index + 1}
      </th>
      <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{name}</td>
      <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{job}</td>
      <td className="px-4 py-2 border border-gray-300 dark:border-gray-700">{topic}</td>
    </tr>
  );
}

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
    })
  ),
};

export default DataTable;
