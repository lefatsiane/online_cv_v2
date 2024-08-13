import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      rel="stylesheet"
      href={href}
      className="py-2 pl-3 pr-4 text-orange-500 sm:text-xl md:p-0 hover:text-white "
    >
      {title}
    </Link>
  );
};

export default NavLink;
