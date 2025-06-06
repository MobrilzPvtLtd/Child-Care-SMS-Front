"use client";
import { useEffect, useState } from "react";
import { X, ChevronDown, Users } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import RoomsTable from "./RoomTable";
import axiosInstance from "@/utils/axios";

// TypeScript interfaces
interface Teacher {
  id: number;
  name: string;
}

interface Enrollment {
  id: number;
  name: string;
}

interface Room {
  id: string;
  name: string;
  description: string;
  teacherId: number;
  teacherName: string;
  instituteId: number;
  enrollmentId: number;
  enrollmentName: string;
}

const RoomsList = () => {
  const [showModal, setShowModal] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [editingRoom, setEditingRoom] = useState<Room | null>(null);

  const [formData, setFormData] = useState<Omit<Room, "id" | "teacherName" | "enrollmentName">>({
    name: "",
    description: "",
    teacherId: 0,
    instituteId: 6, // Default institute ID
    enrollmentId: 0,
  });

  useEffect(() => {
    fetchRooms();
    fetchTeachers();
    fetchEnrollments();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await axiosInstance.get("/classes");
      setRooms(
        res.data.map((item: any) => ({
          ...item,
          teacherName: item.teacherName || "",
          enrollmentName: item.enrollmentName || "",
          id: item.id?.toString() || "",
        }))
      );
    } catch (error) {
      toast.error("Failed to fetch rooms.");
    }
  };

  const fetchTeachers = async () => {
    try {
      const res = await axiosInstance.get("/teachers");
      setTeachers(res.data);
    } catch (error) {
      setTeachers([
        { id: 1, name: "John Smith" },
        { id: 2, name: "Sarah Johnson" },
      ]);
    }
  };

  const fetchEnrollments = async () => {
    try {
      const res = await axiosInstance.get("/enrollments");
      setEnrollments(res.data);
    } catch (error) {
      setEnrollments([
        { id: 1, name: "Spring 2025" },
        { id: 2, name: "Summer 2025" },
        { id: 3, name: "Fall 2025" },
      ]);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "teacherId" || name === "enrollmentId" || name === "instituteId"
          ? parseInt(value)
          : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.teacherId || !formData.enrollmentId) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      if (editingRoom) {
        // Edit mode: update existing class
        const response = await axiosInstance.put(`/classes/${editingRoom.id}`, formData);
        const selectedTeacher = teachers.find((t) => t.id === formData.teacherId);
        const selectedEnrollment = enrollments.find((e) => e.id === formData.enrollmentId);

        const updatedRoom: Room = {
          ...response.data,
          teacherName: selectedTeacher?.name || "",
          enrollmentName: selectedEnrollment?.name || "",
          id: response.data.id?.toString() || editingRoom.id,
        };

        setRooms((prev) =>
          prev.map((room) => (room.id === editingRoom.id ? updatedRoom : room))
        );
        toast.success("Room updated successfully!");
      } else {
        // Add mode: create new class
        const response = await axiosInstance.post("/classes", formData);
        const selectedTeacher = teachers.find((t) => t.id === formData.teacherId);
        const selectedEnrollment = enrollments.find((e) => e.id === formData.enrollmentId);

        const newClass: Room = {
          ...response.data,
          teacherName: selectedTeacher?.name || "",
          enrollmentName: selectedEnrollment?.name || "",
          id: response.data.id?.toString() || Date.now().toString(),
        };

        setRooms((prev) => [...prev, newClass]);
        toast.success("Class added successfully!");
      }

      setShowModal(false);
      setEditingRoom(null);

      setFormData({
        name: "",
        description: "",
        teacherId: 0,
        instituteId: 6,
        enrollmentId: 0,
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to save class.");
    }
  };

  const handleEdit = (room: Room) => {
    setEditingRoom(room);
    setFormData({
      name: room.name,
      description: room.description,
      teacherId: room.teacherId,
      instituteId: room.instituteId,
      enrollmentId: room.enrollmentId,
    });
    setShowModal(true);
  };

  const handleDelete = async (roomId: string) => {
    if (!window.confirm("Are you sure you want to delete this room?")) return;
    try {
      await axiosInstance.delete(`/classes/${roomId}`);
      setRooms((prev) => prev.filter((room) => room.id !== roomId));
      toast.success("Room deleted successfully!");
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to delete room.");
    }
  };

  interface FilterState {
    classId: string;
    status: "All" | "Active" | "Inactive";
  }

  const [filters, setFilters] = useState<FilterState>({
    classId: "",
    status: "All",
  });

  const filteredRooms = rooms.filter((room) => {
    if (filters.classId && room.id !== filters.classId) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto p-4">
      <ToastContainer />
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold text-gray-800">Rooms list</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-indigo-500 text-indigo-500 rounded-md hover:bg-indigo-50">
            Export Roster
          </button>
          <div className="relative">
            <button
              onClick={() => {
                setEditingRoom(null);
                setFormData({
                  name: "",
                  description: "",
                  teacherId: 0,
                  instituteId: 6,
                  enrollmentId: 0,
                });
                setShowModal(true);
              }}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md flex items-center gap-2 hover:bg-indigo-700"
            >
              Add Room
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{editingRoom ? "Edit Room" : "Add New Room"}</h2>
              <button
                onClick={() => {
                  setShowModal(false);
                  setEditingRoom(null);
                  setFormData({
                    name: "",
                    description: "",
                    teacherId: 0,
                    instituteId: 6,
                    enrollmentId: 0,
                  });
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Room Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Teacher*
                  </label>
                  <select
                    name="teacherId"
                    value={formData.teacherId}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  >
                    <option value={0}>Select Teacher</option>
                    {teachers.map((teacher) => (
                      <option key={teacher.id} value={teacher.id}>
                        {teacher.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Enrollment*
                  </label>
                  <select
                    name="enrollmentId"
                    value={formData.enrollmentId}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required
                  >
                    <option value={0}>Select Enrollment</option>
                    {enrollments.map((enroll) => (
                      <option key={enroll.id} value={enroll.id}>
                        {enroll.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingRoom(null);
                    setFormData({
                      name: "",
                      description: "",
                      teacherId: 0,
                      instituteId: 6,
                      enrollmentId: 0,
                    });
                  }}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                >
                  {editingRoom ? "Update Room" : "Add Room"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Welcome message card */}
      {showWelcome && (
        <div className="bg-[#DDEEEE] border-l-4  border-[#29B9BB] p-4 mb-6 rounded-md flex justify-between items-start">
          <div className="flex gap-3">
            <Users className="text-[#29B9BB] mt-1" size={24} />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">
                Welcome to your Rooms list!
              </h2>
              <p className="text-gray-600">
                This is where you will add and manage all Rooms in your school.
                Explore brightwheel's functionality with the demo students.
              </p>
              <button className="text-indigo-600 hover:underline mt-2">
                Learn more
              </button>
            </div>
          </div>
          <button
            onClick={() => setShowWelcome(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>
        </div>
      )}

      {/* Filters */}
      <div className="flex gap-4 mb-6">
        <div className="w-1/3">
          <select
            className="w-full border border-gray-300 rounded-md p-2"
            value={filters.classId}
            onChange={(e) =>
              setFilters((prev) => ({ ...prev, classId: e.target.value }))
            }
          >
            <option value="">Select Class</option>
            {rooms.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name} - {cls.teacherName}
              </option>
            ))}
          </select>
        </div>

        <div className="w-1/3">
          <select
            className="w-full border border-gray-300 rounded-md p-2"
            value={filters.status}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                status: e.target.value as "All" | "Active" | "Inactive",
              }))
            }
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <button
          onClick={() => setFilters({ classId: "", status: "All" })}
          className="text-indigo-600 hover:text-indigo-800"
        >
          Reset all
        </button>
      </div>

      {filteredRooms.length > 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-md">
          <RoomsTable
            rooms={filteredRooms}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};

export default RoomsList;