import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="h-[50px] flex justify-between px-5 items-center bg-gray-500 text-white ">
      <span className=" flot-bold  text-2xl">
        React + TypeScript + Taiiwind
      </span>

      <span>
        <Link to="/" className="mr-4">
          Products
        </Link>
        <Link to="/about">About</Link>
      </span>
    </nav>
  );
};

export default Navigation;
