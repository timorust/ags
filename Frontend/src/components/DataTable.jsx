import PropTypes from 'prop-types';
import CountdownTimer from './CountdownTimer';
import Navbar from './Navbar';
import Footer from './Footer';

function DataTable() {
  const data = [
    { id: 1, name: 'Cy Ganderton', job: 'Quality Control Specialist', topic: 'Blue' },
    { id: 2, name: 'Hart Hagerty', job: 'Desktop Support Technician', topic: 'Purple' },
    { id: 3, name: 'Brice Swyre', job: 'Tax Accountant', topic: 'Red' },
    { id: 4, name: 'Jane Doe', job: 'Software Engineer', topic: 'Green' },
    { id: 5, name: 'Jane Doe', job: 'Software Engineer', topic: 'Green' },
    { id: 6, name: 'Jane Doe', job: 'Software Engineer', topic: 'Green' },
    { id: 7, name: 'Jane Doe', job: 'Software Engineer', topic: 'Green' },
  ];

  return (
    <>
      <Navbar />
      <CountdownTimer targetDate="2025-03-15T09:00:00" />
      <div className="bg-white dark:bg-slate-900 dark:text-white text-black min-h-screen flex flex-col items-center py-8">
        <h2 className="text-2xl font-semibold mb-4">Employee Details</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-center max-w-md">
          Below is a list of employee details, including job titles and favorite colors.
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
                  Job
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
      className={`${
        index % 2 === 0 ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'
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
