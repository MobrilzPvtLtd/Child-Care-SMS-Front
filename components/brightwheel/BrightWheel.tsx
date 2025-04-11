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

export default function FlowysisSection() {
  return (
    <section className="bg-blue-500 max-w-7xl mx-auto my-20 rounded-3xl text-white text-center  ">
      <h2 className="text-4xl font-semibold py-10 tracking-wide">
        Who uses Flowysis childcare software?
      </h2>
      <div className="grid md:grid-cols-3 gap-10  px-4 md:px-20 pb-20">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-xl shadow-lg p-8 flex flex-col items-center text-center h-full"
          >
            {user.icon}
            <h3 className="font-semibold text-2xl my-4">{user.title}</h3>
            <p className="text-slate-500 font-base text-lg my-1 flex-grow">
              {user.description}
            </p>
            <div className="mt-auto">
              <Link
                href={user.link}
                className="text-blue-600 text-lg font-semibold mt-4 inline-flex items-center gap-1 hover:underline"
              >
                Learn more ➜
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
