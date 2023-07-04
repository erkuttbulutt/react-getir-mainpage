import { useWindowWidth } from "@react-hook/window-size";
import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Menu({ title, items }) {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen && windowWidth <= 768) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth >= 768) {
      setIsOpen(true);
    }
  }, [windowWidth]);

  return (
    <section>
      <nav className="grid gap-y-2 md:gap-y-4">
        <h6
          onClick={toggleCollapse}
          className="text-lg text-primary-brand-color cursor-pointer flex items-center justify-between"
        >
          {title}
          <button className="grid md:hidden w-6 h-6  place-items-center rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color">
            <span
              className={`transition-all duration-500 transform ${
                isOpen ? "-rotate-180" : ""
              }`}
            >
              <IoIosArrowDown size={16} />
            </span>
          </button>
        </h6>
        <Collapse isOpened={isOpen}>
          <nav>
            <ul className="grid gap-y-1 md:gap-y-2">
              {items.map((item, index) => (
                <li key={index}>
                  <a href="#/" className="text-sm hover:text-brand-color">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  );
}

export default Menu;
