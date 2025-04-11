import { FaDollarSign, FaComments, FaClipboardList, FaChartBar, FaBook, FaUserPlus, FaUsersCog, FaHeadset } from 'react-icons/fa';

const features = [
  {
    title: 'Billing & Payments',
    icon: <FaDollarSign className="text-white" />, color: 'bg-cyan-500',
    items: [
      'Invoicing & deposits', 'Secure online bill pay', 'Autopay', 'Tuition plans', 'Subsidy management', 'Tax reporting'
    ],
  },
  {
    title: 'Communication',
    icon: <FaComments className="text-white" />, color: 'bg-yellow-400',
    items: [
      'Parent messaging', 'Staff messaging', 'Activity sharing', 'Photo & video sharing', 'Newsletters', 'School calendars'
    ],
  },
  {
    title: 'Attendance',
    icon: <FaClipboardList className="text-white" />, color: 'bg-pink-500',
    items: [
      'Student rosters & profiles', 'Student check-in & out', 'Student schedules', 'Digital signatures', 'Ratio tracking', 'Attendance reporting'
    ],
  },
  {
    title: 'Operations & Reporting',
    icon: <FaChartBar className="text-white" />, color: 'bg-blue-400',
    items: [
      'Custom forms & management', 'Document uploads', 'Menu & CACFP tracking', 'Customizable reporting', 'Licensing'
    ],
  },
  {
    title: 'Learning',
    icon: <FaBook className="text-white" />, color: 'bg-purple-400',
    items: [
      'Lesson plans', 'Observations', 'Assessments', 'Family sharing', 'State standards', 'Experience Curriculum'
    ],
  },
  {
    title: 'Admissions',
    icon: <FaUserPlus className="text-white" />, color: 'bg-green-400',
    items: [
      'Process management', 'Waitlists', 'Enrollment', 'Custom digital forms'
    ],
  },
  {
    title: 'Staff Management',
    icon: <FaUsersCog className="text-white" />, color: 'bg-violet-600',
    items: [
      'Roster management', 'Staff scheduling', 'Time tracking', 'Payroll', 'Development hours'
    ],
  },
  {
    title: 'Customer Support',
    icon: <FaHeadset className="text-white" />, color: 'bg-red-400',
    items: [
      'Personalized onboarding', 'Dedicated account specialist', 'Live chat support', '24/7 access to online resources', 'Online social communities', 'Blogs, tools, and templates'
    ],
  },
];

export default function CenterFeatures() {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Everything you need to run your center</h2>
        <p className="text-gray-600">Get access to 100+ features with flowysis’s all-in-one platform</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((section, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${section.color}`}>
              {section.icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{section.title}</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {section.items.map((item, i) => (
                <li key={i} className="before:content-['✔'] before:mr-2 before:text-green-500">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
