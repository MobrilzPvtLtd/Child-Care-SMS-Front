

import { FaUsers, FaSchool, FaGraduationCap } from 'react-icons/fa';
import Link from 'next/link';

const users = [
  {
    title: 'Administrators & directors',
    description:
      'Efficiently run your program from one place, and stay compliant with state requirements.',
    icon: <FaSchool size={40} className="text-pink-500" />,
    link: '#',
  },
  {
    title: 'Parents & guardians',
    description:
      'Keep in touch with teachers and staff via in-app messaging, photos, and videos.',
    icon: <FaUsers size={40} className="text-teal-500" />,
    link: '#',
  },
  {
    title: 'Teachers & staff',
    description:
      'Enhance children’s learning experience, and create deeper connections with families.',
    icon: <FaGraduationCap size={40} className="text-orange-500" />,
    link: '#',
  },
];

export default function BrightwheelSection() {
  return (
    <section className="bg-blue-600 max-w-5xl my-4 mx-auto p-10 rounded-3xl text-white text-center">
      <h2 className="text-2xl font-bold mb-6">Who uses brightwheel childcare software?</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            {user.icon}
            <h3 className="font-semibold mt-4">{user.title}</h3>
            <p className="text-gray-600 mt-2">{user.description}</p>
            <Link
              href={user.link}
              className="text-blue-600 font-semibold mt-4 inline-flex items-center gap-1 hover:underline"
            >
              Learn more ➜
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
