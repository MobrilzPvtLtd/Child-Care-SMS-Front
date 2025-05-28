import React, { useState, useRef, useEffect } from "react";
import { FiPlus, FiArrowLeft, FiEdit } from "react-icons/fi";

interface Room {
  id: number;
  name: string;
}

interface CreateNewsletterModalProps {
  rooms: Room[];
  onClose: () => void;
  onSave: (data: any) => void;
}

interface Section {
  id: number;
  photo: any;
  heading: string;
  text: string;
}

const CreateNewsletterModal: React.FC<CreateNewsletterModalProps> = ({
  rooms,
  onClose,
  onSave,
}) => {
  // Update the ref definition with proper typing
  const fileInputRefs = useRef<{ [key: number]: HTMLInputElement | null }>({});

  const [title, setTitle] = useState("");
  const [selectedRecipients, setSelectedRecipients] = useState<string>(""); // Could be room IDs or "all"
  const [sections, setSections] = useState<Section[]>([
    {
      id: Date.now(),
      photo: null,
      heading: "",
      text: "",
    },
  ]);
  const [isDraft, setIsDraft] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [formHasErrors, setFormHasErrors] = useState(false);
  const [showTitleError, setShowTitleError] = useState(false);

  // Validate the form
  const validateForm = () => {
    // Check for required recipients
    const hasRecipientError = !selectedRecipients;

    // Only set formHasErrors if recipients are missing
    setFormHasErrors(hasRecipientError);

    return !hasRecipientError;
  };

  // Validate title specifically for Preview & Send
  const validateTitleForPreview = () => {
    const hasTitleError = !title.trim();
    setShowTitleError(hasTitleError);
    return !hasTitleError;
  };

  // Effect to validate form when recipients change
  useEffect(() => {
    validateForm();
    // Clear title error when user starts typing in the title field
    if (title.trim()) {
      setShowTitleError(false);
    }
  }, [selectedRecipients, title]);

  // Get selected room name
  const getSelectedRoomName = () => {
    if (selectedRecipients === "all") return "All Rooms";

    const selectedRoom = rooms.find((room) => String(room.id) === selectedRecipients);
    return selectedRoom ? selectedRoom.name : "";
  };

  // Check if the previous section is empty
  const isPreviousSectionEmpty = () => {
    if (sections.length === 0) return false;

    const lastSection = sections[sections.length - 1];
    // A section is considered empty if it has no photo, no heading, and no text
    return !lastSection.photo && !lastSection.heading && !lastSection.text.trim();
  };

  const handleAddSection = () => {
    // Only add a new section if the previous one is not empty
    if (!isPreviousSectionEmpty()) {
      setSections([
        ...sections,
        {
          id: Date.now(),
          photo: null,
          heading: "",
          text: "",
        },
      ]);
    }
  };

  const handleSectionChange = (id: number, field: string, value: any) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, [field]: value } : section
      )
    );
  };

  const handleSaveDraft = () => {
    setIsDraft(true);
    // For saving as draft, we don't need to validate the title
    if (validateForm()) {
      handleSubmit();
    }
  };

  // Handle preview and send
  const handlePreviewAndSend = () => {
    // For preview & send, we validate both form and title
    const formValid = validateForm();
    const titleValid = validateTitleForPreview();

    if (formValid && titleValid) {
      setShowPreview(true);
    }
  };

  // Back to edit from preview
  const handleBackToEdit = () => {
    setShowPreview(false);
  };

  // Final send from preview
  const handleSendFromPreview = () => {
    setIsDraft(false);
    handleSubmit();
  };

  const handleSubmit = () => {
    const newsletterData = {
      title,
      recipients: selectedRecipients,
      content: JSON.stringify(sections), // Serialize the sections
      isDraft,
    };

    onSave(newsletterData);
  };

  // Handle file selection from the gallery
  const handleFileChange = (sectionId: number, event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      handleSectionChange(sectionId, "photo", file);
    }
  };

  // Trigger the file input click
  const openFileSelector = (sectionId: number) => {
    if (fileInputRefs.current[sectionId]) {
      fileInputRefs.current[sectionId]?.click();
    }
  };

  // Render the preview screen
  if (showPreview) {
    return (
      <div className="bg-white z-50 overflow-auto">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Header */}
          <div className="py-6">
            <h1 className="text-3xl font-bold mb-8">Newsletters</h1>

            <div className="flex items-center mb-4">
              <button
                onClick={handleBackToEdit}
                className="flex items-center text-gray-600 mr-4"
              >
                <FiArrowLeft className="mr-2" /> Back
              </button>
              <h2 className="text-xl font-bold flex-grow">Create Newsletter</h2>
              <div>
                <button
                  onClick={handleBackToEdit}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md px-5 py-2 flex items-center mr-2"
                >
                  <FiEdit className="mr-2" /> Edit
                </button>
              </div>
              <button
                onClick={handleSendFromPreview}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 flex items-center"
              >
                Send
              </button>
            </div>
          </div>

          {/* Preview area */}
          <div className="bg-gray-100 p-6 mb-8 rounded-lg">
            <h3 className="uppercase text-sm font-bold text-gray-700 mb-4">Preview</h3>
            <p className="text-gray-600 mb-8">
              Here's a preview of how your newsletter will appear to parents on the brightwheel app.
            </p>

            {/* Newsletter preview */}
            <div className="mx-auto max-w-md border border-gray-200 bg-white rounded-md overflow-hidden shadow-sm">
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <span className="font-bold">{getSelectedRoomName()}</span>
                </div>

                {/* Display title as heading if available */}
                {title && <h2 className="font-bold text-xl mb-4">{title}</h2>}

                {/* Display sections */}
                {sections.map((section, index) => (
                  <div key={section.id} className="mb-6">
                    {section.photo && (
                      <div className="mb-4">
                        <img
                          src={URL.createObjectURL(section.photo)}
                          alt={`Section ${index + 1}`}
                          className="w-full h-auto rounded-md"
                        />
                      </div>
                    )}

                    {section.heading && (
                      <h3 className="font-bold text-lg mb-2">{section.heading}</h3>
                    )}

                    {section.text && (
                      <p className="text-gray-700 whitespace-pre-line">{section.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom buttons */}
          <div className="flex justify-end pb-8">
            <button
              onClick={handleBackToEdit}
              className="bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-md px-5 py-2 flex items-center mr-2"
            >
              <FiEdit className="mr-2" /> Edit
            </button>
            <button
              onClick={handleSendFromPreview}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-6 py-2 flex items-center"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render the form
  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl">
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Create Newsletter</h2>
          <div>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800 mr-4"
            >
              Cancel
            </button>
            <button
              onClick={handleSaveDraft}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-1 rounded mr-2"
            >
              Save draft
            </button>
            <button
              onClick={handlePreviewAndSend}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
            >
              Preview & Send
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto ">
          {/* Show error messages */}
          {(formHasErrors || showTitleError) && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center">
              <svg className="h-5 w-5 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
              </svg>
              <span>There are one or more issues with the information you provided.</span>
            </div>
          )}

          {/* Recipients Section */}
          <div className="mb-6 bg-gray-100 p-4 rounded-md">
            <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Recipients</h3>
            <div className="relative">
              <select
                value={selectedRecipients}
                onChange={(e) => setSelectedRecipients(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="">Select recipients</option>
                <option value="all">All Rooms</option>
                {rooms.map((room) => (
                  <option key={room.id} value={String(room.id)}>
                    {room.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Title Section - Required for Preview & Send */}
          <div className="mb-6 bg-gray-100 p-4 rounded-md">
            <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">Title</h3>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Newsletter title"
              className={`w-full p-2 border ${showTitleError ? 'border-red-500' : 'border-gray-300'} rounded`}
            />
            {showTitleError && (
              <p className="text-red-500 text-sm mt-1">Title is required when previewing or sending.</p>
            )}
          </div>

          {/* Content Sections */}
          {sections.map((section, index) => (
            <div key={section.id} className="mb-6 bg-gray-100 p-4 rounded-md">
              <h3 className="text-sm font-bold text-gray-600 uppercase mb-2">
                Section
              </h3>

              {/* Photo Upload */}
              <div className="mb-4">
                <p className="text-sm mb-2">Photo (optional)</p>
                <div className="border border-dashed border-gray-300 p-6 rounded-md text-center">
                  <div className="flex flex-col items-center justify-center">
                    {section.photo ? (
                      <div className="w-full mb-2">
                        <img
                          src={URL.createObjectURL(section.photo)}
                          alt="Selected"
                          className="max-h-40 max-w-full mx-auto"
                        />
                      </div>
                    ) : (
                      <div className="w-20 h-20 flex items-center justify-center bg-gray-200 rounded-md mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    {/* Hidden file input */}
                    <input
                      type="file"
                      ref={(element: HTMLInputElement | null) => {
                        if (element) {
                          fileInputRefs.current[section.id] = element;
                        }
                      }}
                      onChange={(e) => handleFileChange(section.id, e)}
                      accept="image/*"
                      className="hidden"
                    />
                    <button
                      onClick={() => openFileSelector(section.id)}
                      className="text-blue-600 hover:text-blue-800 text-sm"
                    >
                      Select from gallery
                    </button>
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="mb-4">
                <p className="text-sm mb-2">Heading (optional)</p>
                <input
                  type="text"
                  value={section.heading}
                  onChange={(e) =>
                    handleSectionChange(section.id, "heading", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Text */}
              <div className="mb-4">
                <p className="text-sm mb-2">Text (optional)</p>
                <textarea
                  value={section.text}
                  onChange={(e) =>
                    handleSectionChange(section.id, "text", e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded resize-none h-32"
                />
              </div>
            </div>
          ))}

          {/* Add Section Button - Disabled when previous section is empty */}
          <button
            onClick={handleAddSection}
            disabled={isPreviousSectionEmpty()}
            className={`flex items-center justify-center w-full py-3 border border-dashed rounded-lg ${
              isPreviousSectionEmpty()
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-gray-300 text-gray-500 hover:bg-gray-50"
            }`}
          >
            <FiPlus className="mr-2" /> Add section block
          </button>
        </div>

        <div className="flex justify-end p-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800 mr-4"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveDraft}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-1 rounded mr-2"
          >
            Save draft
          </button>
          <button
            onClick={handlePreviewAndSend}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded"
          >
            Preview & Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewsletterModal;