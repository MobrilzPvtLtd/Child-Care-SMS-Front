import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Plus, Edit2, Trash2 } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import AddProgramForm from "./AddProgramForm";
import { format, parseISO } from "date-fns";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "@/utils/axios";
import ConfirmationModal from "../common/ConfirmationModal";

interface Program {
  id: string;
  name: string;
  description: string;
  maxCapacity: number;
  minAge: number;
  maxAge: number;
  startDate: string;
  endDate: string;
  instituteId?: number;
}

export default function Program() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);
  const today = new Date();
  const formattedToday = format(today, "yyyy-MM-dd");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<Omit<Program, "id">>({
    name: "",
    description: "",
    maxCapacity: 0,
    minAge: 0,
    maxAge: 0,
    startDate: formattedToday,
    endDate: formattedToday,
    instituteId: 3,
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = programs.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentPrograms = programs.slice(startIndex, endIndex);

  // Confirmation modal state for delete
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; id: string | null }>({ open: false, id: null });

  // Fetch all enrollments (programs)
  useEffect(() => {
    const fetchPrograms = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/enrollment");
        const data = Array.isArray(response.data) ? response.data : [];
        setPrograms(
          data.map((p, idx) => ({
            ...p,
            id: p.id?.toString() || `P${idx + 1}`,
          }))
        );
      } catch (error) {
        toast.error("Failed to fetch programs.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

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

  // Updated to accept HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  // API call to add a program
  const addProgramApi = async (programData: Omit<Program, "id">): Promise<Program> => {
    try {
      const response = await axiosInstance.post("/enrollment", programData);
      return {
        ...response.data,
        id: response.data.id?.toString() || `P${programs.length + 1}`,
      };
    } catch (error: any) {
      throw error;
    }
  };

  // API call to update a program
  const updateProgramApi = async (id: string, programData: Omit<Program, "id">): Promise<Program> => {
    try {
      const response = await axiosInstance.put(`/enrollment/${id}`, programData);
      return {
        ...response.data,
        id: response.data.id?.toString() || id,
      };
    } catch (error: any) {
      throw error;
    }
  };

  // API call to delete a program
  const deleteProgramApi = async (id: string) => {
    try {
      await axiosInstance.delete(`/enrollment/${id}`);
      setPrograms((prev) => prev.filter((p) => p.id !== id));
      toast.success("Program deleted successfully!");
    } catch (error: any) {
      toast.error("Failed to delete program.");
    }
  };

  const handleAddProgramSubmit = async (programData: Omit<Program, "id">) => {
    if (
      !programData.name ||
      !programData.maxCapacity ||
      !programData.startDate ||
      !programData.endDate
    ) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (editingProgram) {
      // Edit mode
      try {
        const updatedProgram = await updateProgramApi(editingProgram.id, programData);
        setPrograms((prev) =>
          prev.map((p) => (p.id === editingProgram.id ? updatedProgram : p))
        );
        setShowModal(false);
        setEditingProgram(null);
        setFormData({
          name: "",
          description: "",
          maxCapacity: 0,
          minAge: 0,
          maxAge: 0,
          startDate: formattedToday,
          endDate: formattedToday,
          instituteId: 3,
        });
        toast.success("Program updated successfully!");
      } catch (err: any) {
        toast.error("Failed to update program.");
      }
    } else {
      // Add mode
      try {
        const createdProgram = await addProgramApi(programData);
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
          instituteId: 3,
        });
        toast.success("Program added successfully!");
      } catch (err: any) {
        toast.error("Failed to add program.");
      }
    }
  };

  const handleEdit = (program: Program) => {
    setEditingProgram(program);
    setFormData({
      name: program.name,
      description: program.description,
      maxCapacity: program.maxCapacity,
      minAge: program.minAge,
      maxAge: program.maxAge,
      startDate: program.startDate,
      endDate: program.endDate,
      instituteId: program.instituteId || 3,
    });
    setShowModal(true);
  };

  // Use ConfirmationModal for delete
  const handleDelete = (id: string) => {
    setDeleteModal({ open: true, id });
  };

  const confirmDelete = async () => {
    if (deleteModal.id) {
      await deleteProgramApi(deleteModal.id);
      setDeleteModal({ open: false, id: null });
    }
  };

  const closeDeleteModal = () => setDeleteModal({ open: false, id: null });

  const handleModalClose = () => {
    setShowModal(false);
    setEditingProgram(null);
    setFormData({
      name: "",
      description: "",
      maxCapacity: 0,
      minAge: 0,
      maxAge: 0,
      startDate: formattedToday,
      endDate: formattedToday,
      instituteId: 3,
    });
  };

  // Helper: render age as years/months if using months as value
  const renderAge = (months: number) => {
    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    let result = `${years} years`;
    if (remMonths) result += ` ${remMonths} months`;
    return result;
  };

  return (
    <div className="container mx-auto px-4 py-2">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Programs</h1>
        <button
          onClick={() => {
            setShowModal(true);
            setEditingProgram(null);
            setFormData({
              name: "",
              description: "",
              maxCapacity: 0,
              minAge: 0,
              maxAge: 0,
              startDate: formattedToday,
              endDate: formattedToday,
              instituteId: 3,
            });
          }}
          className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
        >
          <Plus size={18} />
          <span>New Program</span>
        </button>
      </div>

      <ToastContainer />

      {showModal && (
        <AddProgramForm
          onClose={handleModalClose}
          onSubmit={handleAddProgramSubmit}
          formData={formData}
          handleInputChange={handleInputChange}
          editing={!!editingProgram}
        />
      )}

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                Program Name
              </th>
              <th className="px-6 py-3 text-sm text-center font-medium text-gray-700">
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
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {loading ? (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-gray-400">
                  Loading...
                </td>
              </tr>
            ) : currentPrograms.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center text-gray-400">
                  No programs available. Click "New Program" to add one.
                </td>
              </tr>
            ) : (
              currentPrograms.map((program) => (
                <tr key={program.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm text-indigo-600 text-center ">
                    {program.name}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800 text-center">
                    {program.description}
                  </td>
                  <td className="px-4 py-4 text-center text-sm text-gray-800 ">
                    {program.maxCapacity}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800 text-center ">
                    {renderAge(program.minAge)} - {renderAge(program.maxAge)}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800 text-center whitespace-nowrap ">
                    {program.startDate ? format(parseISO(program.startDate), "yyyy-MM-dd") : ""}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800 text-center whitespace-nowrap">
                    {program.endDate ? format(parseISO(program.endDate), "yyyy-MM-dd") : ""}
                  </td>
                  <td className="px-4 py-4 text-sm text-center">
                    <button
                      className="text-blue-600 hover:text-blue-800 mr-2"
                      onClick={() => handleEdit(program)}
                      title="Edit"
                    >
                      <Edit2 size={18} />
                    </button>
                    <button
                      className="text-red-600 hover:text-red-800"
                      onClick={() => handleDelete(program.id)}
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`p-1 rounded-md ${currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
              }`}
          >
            <ChevronLeft size={18} />
          </button>
        </div>
        <div>
          {totalItems === 0 ? "0" : `${startIndex + 1} - ${endIndex}`} of {totalItems}
        </div>
        <div className="flex items-center">
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`p-1 rounded-md ${currentPage === totalPages || totalPages === 0
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
              }`}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <ConfirmationModal
        isOpen={deleteModal.open}
        onClose={closeDeleteModal}
        onConfirm={confirmDelete}
        title="Delete Program"
        message="Are you sure you want to delete this program? This action cannot be undone."
      />
    </div>
  );
}