type Props = {};

const Navbar = (props: Props) => {
  const routes = [
    {
      label: "Home",
      path: "/",
      dropdown: false,
    },
    {
      label: "Shop",
      path: "/shop",
      dropdown: true,
    },
    {
      label: "About",
      path: "/about",
      dropdown: false,
    },
    {
      label: "Blog",
      path: "/blog",
      dropdown: false,
    },
    {
      label: "Contact",
      path: "/contact",
      dropdown: false,
    },
    {
      label: "Contact",
      path: "/contact",
      dropdown: false,
    },
  ];
  return (
    <nav
      className="
        w-full 
        bg-white 
        h-16 
        flex 
        items-center
        px-3
        justify-between
        "
    >
      <h1
        className="font-bold text-xl"
      >
        E Commerce
      </h1>
    </nav>
  );
};

export default Navbar;
