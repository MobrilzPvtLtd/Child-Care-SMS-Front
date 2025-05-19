import React from 'react';
// import { Badge } from '@/components/ui/badge';

interface Class {
  id: string;
  className: string;
  description: string;
  teacherId: string;
  teacherName: string;
  status?: 'Active' | 'Inactive';
}

interface ClassTableProps {
  classes: Class[];
}

const ClassTable: React.FC<ClassTableProps> = ({ classes }) => {
  return (
    // <div className="overflow-x-auto">
    //   <table className="min-w-full divide-y divide-gray-200">
    //     <thead className="bg-gray-200">
    //       <tr>
    //         <th scope="col" className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
    //           Class Name
    //         </th>
    //         <th scope="col" className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
    //           Description
    //         </th>
    //         <th scope="col" className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
    //           Teacher
    //         </th>
    //         <th scope="col" className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
    //           Status
    //         </th>
    //       </tr>
    //     </thead>
    //     <tbody className="bg-white divide-y divide-gray-200">
    //       {classes.map((classItem) => (
    //         <tr key={classItem.id} className="hover:bg-gray-50">
    //           <td className="px-6 py-4 whitespace-nowrap">
    //             <div className="text-sm font-medium text-gray-900">
    //               {classItem.className}
    //             </div>
    //           </td>
    //           <td className="px-6 py-4">
    //             <div className="text-sm text-gray-500 line-clamp-2">
    //               {classItem.description || 'No description'}
    //             </div>
    //           </td>
    //           <td className="px-6 py-4 whitespace-nowrap">
    //             <div className="text-sm text-gray-500">
    //               {classItem.teacherName}
    //             </div>
    //           </td>
    //           <td className="px-6 py-4 whitespace-nowrap">
    //             <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
    //               classItem.status === 'Active'
    //                 ? 'bg-green-100 text-green-800'
    //                 : 'bg-red-100 text-red-800'
    //             }`}>
    //               {classItem.status || 'Active'}
    //             </span>
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

     <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-gray-600">Class</th>
            <th className="py-2 text-gray-600">Description</th>
            <th className="py-2 text-gray-600">Teacher</th>
            {/* <th className="py-2 text-gray-600">Status</th> */}
          </tr>
        </thead>
        <tbody>
          {classes?.map((classes) => (
            <tr key={classes.id} className="border-b">
              <td className="py-3">
                <span className="text-gray-500">{classes.className}</span>
              </td>
              <td className="py-3">
                <span className="text-gray-500">{classes.description}</span>
              </td>
              <td className="py-3">
                <span className="text-gray-500">{classes.teacherName}</span>
              </td>
              {/* <td className="py-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    classes.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {classes.status}
                </span>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right text-sm text-gray-600">
        {classes.length} Teachers
      </div>
    </div>
  );
};

export default ClassTable;