import { Link } from "react-router-dom";
export default function PageHeader({ title, breadcrumb = [], children }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
      
      {/* LEFT */}
      <div className="flex flex-col">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mt-1">
          {breadcrumb.map((item, index) => (
            <div key={index} className="flex items-center">
              
              {/* Jika ada link */}
              {item.link ? (
                <Link to={item.link} className="hover:text-blue-600 transition">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-gray-700">
                  {item.label}
                </span>
              )}

              {/* Separator */}
              {index < breadcrumb.length - 1 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT (Button / Action) */}
      <div>
        {children}
      </div>
    </div>
  );
}