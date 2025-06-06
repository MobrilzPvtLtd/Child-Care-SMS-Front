import { CalendarIcon, X } from "lucide-react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import { format } from "date-fns";

interface Program {
  id: string;
  name: string;
  description: string;
  maxCapacity: number;
  minAge: number;
  maxAge: number;
  startDate: string; // ISO string: "2025-07-01"
  endDate: string;   // ISO string: "2025-07-01"
}

interface AddProgramFormProps {
  onClose: () => void;
  onSubmit: (program: Omit<Program, "id">) => void;
  formData: Omit<Program, "id">;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const AddProgramForm: React.FC<AddProgramFormProps> = ({
  onClose,
  onSubmit,
  formData,
  handleInputChange,
}) => {
  const [isStartDateOpen, setIsStartDateOpen] = useState(false);
  const [isEndDateOpen, setIsEndDateOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helper: convert ISO string to Date or undefined
  const toDate = (dateString: string | undefined): Date | undefined => {
    if (!dateString) return undefined;
    // Accept both "yyyy-MM-dd" and "MM/dd/yyyy"
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      const d = new Date(dateString);
      return isNaN(d.getTime()) ? undefined : d;
    }
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {
      const [month, day, year] = dateString.split("/");
      const d = new Date(`${year}-${month}-${day}`);
      return isNaN(d.getTime()) ? undefined : d;
    }
    return undefined;
  };

  // Helper: convert Date to ISO string (yyyy-MM-dd)
  const toISO = (date: Date): string =>
    date.toISOString().slice(0, 10);

  const handleDateSelect = (date: Date | null, fieldName: string) => {
    if (!date || isNaN(date.getTime())) {
      setError("Invalid date selected");
      return;
    }
    // Always set as yyyy-MM-dd for storage
    const event = {
      target: { name: fieldName, value: toISO(date) },
    } as React.ChangeEvent<HTMLInputElement>;
    handleInputChange(event);

    // If startDate is changed and endDate is before startDate, update endDate
    if (fieldName === "startDate" && formData.endDate) {
      const startDate = date;
      const endDate = toDate(formData.endDate);
      if (endDate && endDate < startDate) {
        const endDateEvent = {
          target: { name: "endDate", value: toISO(startDate) },
        } as React.ChangeEvent<HTMLInputElement>;
        handleInputChange(endDateEvent);
      }
    }
    setError(null);
  };

  const inputClassName =
    "w-full border-b border-gray-300 py-2 focus:border-indigo-500 focus:outline-none transition-colors";
  const dateInputClassName =
    "w-full border-b border-gray-300 py-2 focus:border-indigo-500 focus:outline-none transition-colors pr-10";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.name || !formData.maxCapacity || !formData.startDate || !formData.endDate) {
      setError("Please fill in all required fields");
      return;
    }

    const startDate = toDate(formData.startDate);
    const endDate = toDate(formData.endDate);
    if (!startDate || !endDate) {
      setError("Invalid date format");
      return;
    }
    if (startDate > endDate) {
      setError("End date must be after start date");
      return;
    }

    if (formData.minAge && formData.maxAge && formData.minAge > formData.maxAge) {
      setError("Minimum age cannot be greater than maximum age");
      return;
    }

    onSubmit(formData);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-2xl py-6 px-8 rounded border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Add New Program</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close form"
            >
              <X size={20} />
            </button>
          </div>

          {error && (
            <div className="text-red-500 text-sm mb-4" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Program Name*
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={inputClassName}
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <input
                  id="description"
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="maxCapacity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Max Capacity*
                </label>
                <input
                  id="maxCapacity"
                  type="number"
                  name="maxCapacity"
                  value={formData.maxCapacity || ""}
                  onChange={handleInputChange}
                  className={inputClassName}
                  min="1"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="minAge"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Min Age
                </label>
                <input
                  id="minAge"
                  type="number"
                  name="minAge"
                  value={formData.minAge || ""}
                  onChange={handleInputChange}
                  className={inputClassName}
                  min="0"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="maxAge"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Max Age
                </label>
                <input
                  id="maxAge"
                  type="number"
                  name="maxAge"
                  value={formData.maxAge || ""}
                  onChange={handleInputChange}
                  className={inputClassName}
                  min="0"
                />
              </div>
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Start Date*
                </label>
                <div className="relative">
                  <DatePicker
                    open={isStartDateOpen}
                    value={toDate(formData.startDate)}
                    onChange={(date: Date | null) => {
                      handleDateSelect(date, "startDate");
                      setIsStartDateOpen(false);
                    }}
                    onOpen={() => setIsStartDateOpen(true)}
                    onClose={() => setIsStartDateOpen(false)}
                    disablePast
                    slots={{
                      openPickerIcon: CalendarIcon,
                    }}
                    slotProps={{
                      textField: {
                        id: "startDate",
                        required: true,
                        placeholder: "yyyy-mm-dd",
                        className: dateInputClassName,
                        InputProps: {
                          readOnly: true,
                        },
                        value: formData.startDate || "",
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="endDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  End Date*
                </label>
                <div className="relative">
                  <DatePicker
                    open={isEndDateOpen}
                    value={toDate(formData.endDate)}
                    minDate={toDate(formData.startDate)}
                    onChange={(date: Date | null) => {
                      handleDateSelect(date, "endDate");
                      setIsEndDateOpen(false);
                    }}
                    onOpen={() => setIsEndDateOpen(true)}
                    onClose={() => setIsEndDateOpen(false)}
                    slots={{
                      openPickerIcon: CalendarIcon,
                    }}
                    slotProps={{
                      textField: {
                        id: "endDate",
                        required: true,
                        placeholder: "yyyy-mm-dd",
                        className: dateInputClassName,
                        InputProps: {
                          readOnly: true,
                        },
                        value: formData.endDate || "",
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Add Program
              </button>
            </div>
          </form>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default AddProgramForm;