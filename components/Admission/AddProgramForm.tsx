import { CalendarIcon, X } from "lucide-react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import { format, parseISO } from "date-fns";

// Helper to generate dropdown options: start at 3 years, end at 18 years, increment by 3 months
const generateAgeOptions = () => {
  const options = [];
  let year = 3;
  let month = 0;
  while (year < 18 || (year === 18 && month === 0)) {
    let label = `${year} years`;
    if (month > 0) label += ` ${month} months`;
    // Represent as months for easier comparison/logic
    const value = year * 12 + month;
    options.push({ label, value });
    month += 3;
    if (month >= 12) {
      year += 1;
      month = month % 12;
    }
  }
  return options;
};

const AGE_OPTIONS = generateAgeOptions();

interface Program {
  id: string;
  name: string;
  description: string;
  maxCapacity: number;
  minAge: number; // now in months
  maxAge: number; // now in months
  startDate: string; // ISO string: "2025-07-01"
  endDate: string;   // ISO string: "2025-07-01"
}

interface AddProgramFormProps {
  onClose: () => void;
  onSubmit: (program: Omit<Program, "id">) => void;
  formData: Omit<Program, "id">;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  editing?: boolean;
}

const AddProgramForm: React.FC<AddProgramFormProps> = ({
  onClose,
  onSubmit,
  formData,
  handleInputChange,
  editing = false,
}) => {
  const [isStartDateOpen, setIsStartDateOpen] = useState(false);
  const [isEndDateOpen, setIsEndDateOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Helper: convert either "yyyy-MM-dd" or "MM/dd/yyyy" to Date
  const toDate = (dateString: string | undefined): Date | undefined => {
    if (!dateString) return undefined;
    // If already formatted as MM/dd/yyyy, parse accordingly
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) {
      const [month, day, year] = dateString.split("/");
      const d = new Date(`${year}-${month}-${day}`);
      return isNaN(d.getTime()) ? undefined : d;
    }
    // If ISO format "yyyy-MM-dd", parse accordingly
    if (/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
      return parseISO(dateString);
    }
    // Try fallback
    const d = new Date(dateString);
    return isNaN(d.getTime()) ? undefined : d;
  };

  // Helper: convert to Date for DatePicker display, always returns Date|undefined (never null)
  const toDisplay = (dateString: string | undefined): Date | undefined => {
    return toDate(dateString) ?? undefined;
  };

  // Helper: convert Date to ISO string (yyyy-MM-dd) for storage
  const toISO = (date: Date): string => format(date, "yyyy-MM-dd");

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

  // Helper: Render age value as a readable string
  const ageValueToLabel = (months: number) => {
    const years = Math.floor(months / 12);
    const remMonths = months % 12;
    let label = `${years} years`;
    if (remMonths > 0) label += ` ${remMonths} months`;
    return label;
  };

  const inputClassName =
    "w-full border-b border-gray-300 py-2 focus:border-indigo-500 focus:outline-none transition-colors caret-indigo-600 cursor-pointer";
  const selectClassName =
    "w-full border-b border-gray-300 py-2 focus:border-indigo-500 focus:outline-none transition-colors cursor-pointer bg-white";
  const dateInputClassName =
    "w-full border-b border-gray-300 py-2 focus:border-indigo-500 focus:outline-none transition-colors pr-10 caret-indigo-600 cursor-pointer";
  
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

    // Age must be present and minAge <= maxAge
    if (
      formData.minAge &&
      formData.maxAge &&
      Number(formData.minAge) > Number(formData.maxAge)
    ) {
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
            <h2 className="text-xl font-bold">
              {editing ? "Edit Program" : "Add New Program"}
            </h2>
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
                  Program Name<span className="text-red-500">*</span>
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
                  Program Description
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
                  Maximum Capacity<span className="text-red-500">*</span>
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
                  Minimum Age
                </label>
                <select
                  id="minAge"
                  name="minAge"
                  value={formData.minAge || ""}
                  onChange={handleInputChange}
                  className={selectClassName}
                >
                  <option value="">Select Minimum Age</option>
                  {AGE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div>
                <label
                  htmlFor="maxAge"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Maximum Age
                </label>
                <select
                  id="maxAge"
                  name="maxAge"
                  value={formData.maxAge || ""}
                  onChange={handleInputChange}
                  className={selectClassName}
                >
                  <option value="">Select Maximum Age</option>
                  {AGE_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="startDate"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Program Start Date<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <DatePicker
                    open={isStartDateOpen}
                    value={toDisplay(formData.startDate)}
                    onChange={(date: Date | null) => {
                      handleDateSelect(date, "startDate");
                      setIsStartDateOpen(false);
                    }}
                    onOpen={() => setIsStartDateOpen(true)}
                    onClose={() => setIsStartDateOpen(false)}
                    disablePast
                    format="MM/dd/yyyy"
                    slots={{
                      openPickerIcon: CalendarIcon,
                    }}
                    slotProps={{
                      textField: {
                        id: "startDate",
                        required: true,
                        placeholder: "MM/DD/YYYY",
                        className: dateInputClassName,
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
                  Program End Date<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <DatePicker
                    open={isEndDateOpen}
                    value={toDisplay(formData.endDate)}
                    minDate={toDisplay(formData.startDate) ?? undefined}
                    onChange={(date: Date | null) => {
                      handleDateSelect(date, "endDate");
                      setIsEndDateOpen(false);
                    }}
                    onOpen={() => setIsEndDateOpen(true)}
                    onClose={() => setIsEndDateOpen(false)}
                    format="MM/dd/yyyy"
                    slots={{
                      openPickerIcon: CalendarIcon,
                    }}
                    slotProps={{
                      textField: {
                        id: "endDate",
                        required: true,
                        placeholder: "MM/DD/YYYY",
                        className: dateInputClassName,
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
                {editing ? "Update Program" : "Add Program"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default AddProgramForm;