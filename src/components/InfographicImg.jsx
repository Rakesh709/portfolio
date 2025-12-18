import React,{ useState } from 'react'

const InfographicImg = ({
  img,
  title,
  description,
  youtubeLink,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
        
        {/* Image (click to enlarge) */}
        <img
          src={img}
          alt={title}
          onClick={() => setOpen(true)}
          className="w-full h-48 object-cover cursor-zoom-in"
        />

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {title}
          </h3>

          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {description}
          </p>

          {/* Watch Button */}
          <a
            href={youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
          >
            ▶ Watch on YouTube
          </a>
        </div>
      </div>

      {/* IMAGE MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setOpen(false)}
        >
          <img
            src={img}
            alt={title}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl cursor-zoom-out"
          />
        </div>
      )}
    </>
    
  )
}

export default InfographicImg
