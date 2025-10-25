import React from "react";

function NavBar() {
  return (
    <nav className="w-full flex justify-evenly items-center h-16 bg-white border-b border-gray-300">
      <a href="/foo" className="text-gray-700 hover:text-blue-500 font-medium">
        Foo
      </a>
      <a href="/bar" className="text-gray-700 hover:text-blue-500 font-medium">
        Bar
      </a>
    </nav>
  );
}

export default NavBar;
