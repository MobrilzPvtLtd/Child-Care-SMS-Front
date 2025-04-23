
import React from 'react';

interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface ChildcareNavProps {
  items: NavItem[];
  onItemClick: (id: string) => void;
  activeItemId?: string;
}

const Navbar: React.FC<ChildcareNavProps> = ({ 
  items, 
  onItemClick, 
  activeItemId 
}) => {
  return (
    <div className=" sticky top-20 z-90  w-full flex bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex -mb-px overflow-x-auto">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`
                whitespace-nowrap py-5 px-6 border-b-2 font-semibold text-base
                transition-all duration-200 ease-in-out
                flex items-center gap-2
                 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300
              `}
            >
              {item.icon && (
                <span className={`${
                  activeItemId === item.id ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  {item.icon}
                </span>
              )}
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;