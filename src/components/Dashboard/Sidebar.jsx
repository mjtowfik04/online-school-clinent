import {
    FiBarChart2,
    FiPackage,
    FiPlusCircle,
    FiShoppingCart,
    FiStar,
    FiTag,
    FiUsers,
  } from "react-icons/fi";
  import { Link } from "react-router";
  
  const Sidebar = () => {
    const menuItems = [
      { to: "/", icon: FiBarChart2, label: "Dashboard" },
      { to: "/class", icon: FiPackage, label: "My Class" },
      { to: "/class/add", icon: FiPlusCircle, label: "Add Product" },
      { to: "/Category", icon: FiTag, label: "Categories" },
      { to: "/categories/add", icon: FiPlusCircle, label: "Add Category" },
      { to: "/reviews", icon: FiStar, label: "Reviews" },
      { to: "/users", icon: FiUsers, label: "Users" },
    ];
    return (
      <div className="drawer-side z-10">
        <label
          htmlFor="drawer-toggle"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <aside className="menu bg-base-200 w-64 min-h-full p-4 text-base-content">
          {/* Sidebar header */}
          <div className="flex items-center gap-2 mb-6 px-2">
            <h1 className="text-xl font-bold">Alo</h1>
          </div>
  
          {/* Sidebar menu */}
          <ul className="menu menu-md gap-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="flex items-center">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
  
          {/* Sidebar footer */}
          <div className="mt-auto pt-6 text-xs text-base-content/70">
            © 2025 PhiMart Admin
          </div>
        </aside>
      </div>
    );
  };
  
  export default Sidebar;