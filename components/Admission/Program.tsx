import { useState } from "react";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import AddProgramForm from "./AddProgramForm";
import { format } from "date-fns";

interface Program {
  id: string;
  name: string;
  description: string;
  maxCapacity: number;
  minAge: number;
  maxAge: number;
  startDate: string;
  endDate: string;
}

export default function Program() {
  // Sample program data
  const [programs, setPrograms] = useState<Program[]>([]);

  const [showModal, setShowModal] = useState(false); 
  const today = new Date();
  const formattedToday = format(today, "yyyy-MM-dd");

  const [formData, setFormData] = useState<Omit<Program, "id">>({
    name: "",
    description: "",
    maxCapacity: 0,
    minAge: 0,
    maxAge: 0,
    startDate: formattedToday,
    endDate: formattedToday,
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = programs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentPrograms = programs.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name.includes("age") || name === "maxCapacity"
          ? parseInt(value) || 0
          : value,
    }));
  };

  // Simulate an API call (fake)
  const fakeApiCall = (programData: Omit<Program, "id">) => {
    return new Promise<Program>((resolve) => {
      setTimeout(() => {
        const newProgram: Program = {
          id: `P${programs.length + 1}`,
          ...programData,
        };
        resolve(newProgram);
      }, 500);
    });
  };

  const handleAddProgramSubmit = async (programData: Omit<Program, "id">) => {
    // Validate form
    if (
      !programData.name ||
      !programData.maxCapacity ||
      !programData.startDate ||
      !programData.endDate
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Simulate API call and log data
    try {
      const createdProgram = await fakeApiCall(programData);
      setPrograms((prev) => [...prev, createdProgram]);
      setShowModal(false);
      setFormData({
        name: "",
        description: "",
        maxCapacity: 0,
        minAge: 0,
        maxAge: 0,
        startDate: formattedToday,
        endDate: formattedToday,
      });

      // Log the returned data from fake API call
      console.log("API call result:", createdProgram);

      toast.success("Program added successfully!");
    } catch (err) {
      toast.error("Failed to add program.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Programs</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <Plus size={18} />
          <span>New Program</span>
        </button>
      </div>

      <div className="mb-2 flex justify-end items-center text-sm text-gray-600">
        <span>
          {startIndex + 1} - {endIndex} of {totalItems}
        </span>
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`ml-2 p-1 rounded-md ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages || totalPages === 0}
          className={`p-1 rounded-md ${
            currentPage === totalPages || totalPages === 0
              ? "text-gray-400 cursor-not-allowed"
              : "hover:bg-gray-200"
          }`}
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <ToastContainer />

      {showModal && (
        <AddProgramForm
          onClose={() => setShowModal(false)}
          onSubmit={handleAddProgramSubmit}
          formData={formData}
          handleInputChange={handleInputChange}
        />
      )}

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Program Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Description
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Max Capacity
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Min/Max Age
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Start Date
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                End Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentPrograms.map((program) => (
              <tr key={program.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-indigo-600">
                  {program.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {program.description}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {program.maxCapacity}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {program.minAge} years - {program.maxAge} years
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {program.startDate || ""}
                </td>
                <td className="px-6 py-4 text-sm text-gray-800">
                  {program.endDate || ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`p-1 rounded-md ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <ChevronLeft size={18} />
          </button>
        </div>
        <div>
          {startIndex + 1} - {endIndex} of {totalItems}
        </div>
        <div className="flex items-center">
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`p-1 rounded-md ${
              currentPage === totalPages || totalPages === 0
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}