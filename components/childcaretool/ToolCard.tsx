import Image from "next/image";

const resources = [
  {
    title: "Childcare Licensing and Compliance Checklist",
    description: "A free checklist to simplify the childcare licensing process",
    img: "/Toddler.png", // Place this in your public folder
    link: "#",
  },
  {
    title: "Emergency Supply Kit for Childcare Programs",
    description:
      "A quick reference guide and set of free templates to prepare your childcare program for an emergency",
    img: "/Toddler.png",
    link: "#",
  },
  {
    title: "Family Engagement Guide for Childcare Programs",
    description:
      "A free guide to help you foster family engagement at your childcare program",
    img: "/Toddler.png",
    link: "#",
  },
];

export default function ToolCard() {
  return (
    <main className="px-4 py-12 max-w-7xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
        Printable resources for childcare center owners, directors,
        administrators, and educators
      </h1>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Download our easy-to-use templates to make your own lesson plans, family
        handbook, and more
      </p>

      <div className="w-10 mx-auto border-b-4 border-blue-700 mt-8 mb-4" />

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
        New and featured resources
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((res, idx) => (
          <div key={idx} className="text-left flex flex-col items-center">
            <Image
              src={res.img}
              alt={res.title}
              width={180}
              height={120}
              className="rounded-md shadow-md"
            />
            <h3 className="text-lg font-semibold text-blue-800 mt-4 text-center">
              {res.title}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              {res.description}
            </p>
            <a
              href={res.link}
              className="text-blue-700 font-medium mt-3 hover:underline"
            >
              Download now
            </a>
          </div>
        ))}
      </div>
   

      <div className="w-10 mx-auto border-b-4 border-blue-700 mt-8 mb-4" />

      <h2 className="text-2xl font-semibold text-gray-800 mb-8">
      Printables for hiring and developing childcare staff
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((res, idx) => (
          <div key={idx} className="text-left flex flex-col items-center">
            <Image
              src={res.img}
              alt={res.title}
              width={180}
              height={120}
              className="rounded-md shadow-md"
            />
            <h3 className="text-lg font-semibold text-blue-800 mt-4 text-center">
              {res.title}
            </h3>
            <p className="text-sm text-gray-600 text-center mt-2">
              {res.description}
            </p>
            <a
              href={res.link}
              className="text-blue-700 font-medium mt-3 hover:underline"
            >
              Download now
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
