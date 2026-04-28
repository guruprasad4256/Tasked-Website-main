import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { FaUsers, FaKey } from 'react-icons/fa';
import { LuSparkles } from 'react-icons/lu';
import ComparrisonTable from '../assets/ComparrisonTable.png';
import ComparrisonTableMobile from '../assets/ComparrisonTableMobile.png'; // mobile version

// const data = {
//   headers: [
//     'Key Advantages of On-Demand Hiring',
//     'm.o.h',
//     <>
//       Traditional <LuSparkles className="inline ml-1" />
//     </>,
//     <>
//       In-House <FaUsers className="inline ml-1" />
//     </>,
//     <>
//       Consultancy <FaKey className="inline ml-1" />
//     </>,
//   ],
//   rows: [
//     ['Acquire talent on a budget', true, true, false, false],
//     ['Save money by avoiding recurring costs and infrastructure costs', true, true, true, false],
//     ['Can onboard talent for all verticals', true, false, true, false],
//     ['Team engagement per vertical, based on need.', true, true, false, true],
//     ['Access to strategy and counsel by subject matter experts', true, false, true, false],
//   ],
// };

const ComparisonSection = () => {
  return (
    <section className="w-full bg-white pt-8 py-16 px-4 text-center font-poppins">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#903033] mb-6">
        How Does Our Service Compare
      </h2>
      <p className="text-black text-sm md:text-base max-w-2xl mx-auto mb-10">
        M.O.H vs. agencies, freelancers, and full-time hires, see the difference.
      </p>

      {/* Uncomment below if you want the table version */}
      {/*
      <div className="overflow-x-auto">
        <table className="w-full max-w-6xl mx-auto border-separate border-spacing-y-3 text-sm md:text-base">
          <thead>
            <tr>
              {data.headers.map((header, idx) => (
                <th
                  key={idx}
                  className={`text-xs md:text-sm lg:text-base font-semibold px-4 py-3 whitespace-nowrap ${
                    idx === 0
                      ? 'text-[#494949]  text-left'
                      : idx === 1
                      ? 'text-[#903033] text-xl bg-white shadow-md rounded-lg'
                      : 'text-[#494949]'
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {row.map((cell, cellIdx) => {
                  const isFirst = cellIdx === 0;
                  const isMoh = cellIdx === 1;
                  const isLast = cellIdx === row.length - 1;

                  return (
                    <td
                      key={cellIdx}
                      className={`px-6 py-5 text-left min-w-[120px] whitespace-normal
                        ${
                          isFirst
                            ? 'text-left text-[#5e5b5b] font-medium bg-[#f6f6f6] rounded-l-full'
                            : isLast
                            ? 'bg-[#f6f6f6] rounded-r-full'
                            : isMoh
                            ? 'bg-white shadow-md rounded-lg'
                            : 'bg-[#f6f6f6]'
                        }`}
                    >
                      {typeof cell === 'boolean' ? (
                        cell ? (
                          <FaCheck className="text-green-600 text-xl mx-auto" />
                        ) : (
                          <FaTimes className="text-red-500 text-xl mx-auto" />
                        )
                      ) : (
                        cell
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      */}

      {/* Desktop & Mobile Images */}
      <div className="max-w-6xl mx-auto mt-8">
        {/* Desktop Image */}
        <img
          src={ComparrisonTable}
          alt="Comparison illustration"
          className="hidden md:block w-full h-auto rounded-lg"
        />
        {/* Mobile Image */}
        <img
          src={ComparrisonTableMobile}
          alt="Comparison illustration mobile"
          className="block md:hidden w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
};

export default ComparisonSection;
