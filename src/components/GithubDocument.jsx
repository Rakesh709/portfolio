export default function RedirectCard({ title, description, icon, link }) {
  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className="w-full cursor-pointer border border-gray-200 rounded-2xl p-5 hover:shadow-md hover:border-gray-300 transition-all duration-200 bg-white"
    >
      <div className="flex items-center gap-3">
        <div className="text-3xl">{icon}</div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {title}
          </h2>
          <p className="text-sm text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
