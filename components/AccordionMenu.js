import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react"; // Icons for expanding/collapsing

const AccordionMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 transition"
      >
        {title}
        <ChevronDown className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute left-0 mt-2 w-96 bg-white shadow-lg rounded-lg p-4 z-50"> 
          {/* Increased width from w-64 to w-96 */}
          <h3 className="text-lg font-semibold mb-2 text-black">{title}</h3>
          <div className="grid grid-cols-2 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer"
              >
                <img src="/images/logo192.jpg" alt={item.name} className="w-6 h-6 mr-2" />
                <div>
                  <p className="text-sm font-medium text-black">{item.name}</p>
                  <p className="text-xs text-gray-500 text-black">{item.duration}</p>
                </div>
                <ChevronRight className="ml-auto text-gray-500" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccordionMenu;

//