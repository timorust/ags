import PropTypes from 'prop-types';

function DataTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full border-collapse border border-gray-200 shadow-lg rounded-lg dark:text-white text-black">
        {/* כותרת הטבלה */}
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-300">#</th>
            <th className="px-4 py-2 border border-gray-300">Name</th>
            <th className="px-4 py-2 border border-gray-300">Job</th>
            <th className="px-4 py-2 border border-gray-300">Favorite Color</th>
          </tr>
        </thead>

        {/* תוכן הטבלה */}
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id || index}
              className={index % 2 === 0 ? 'bg-base-200' : 'bg-white'}
            >
              <th className="px-4 py-2 border border-gray-300 text-center">{index + 1}</th>
              <td className="px-4 py-2 border border-gray-300">{item.name}</td>
              <td className="px-4 py-2 border border-gray-300">{item.job}</td>
              <td className="px-4 py-2 border border-gray-300">{item.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      name: PropTypes.string.isRequired,
      job: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DataTable;
