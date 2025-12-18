import React from 'react'

const YoutubeCataloge = ({
  img,
  title,
  description,
  youtubeLink,
  tags = [],
}) => {


    const openYouTube = () => {
    window.open(youtubeLink, "_blank", "noopener,noreferrer");
  };

  const visibleTags = tags.slice(0, 5);
  const remaining = tags.length - visibleTags.length;

  return (
    <article >
      <div className="relative rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2">
        
        {/* Image */}
        <div className="blur-[0.8px]">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
        </div>

        {/* Play Button */}
        <button
          onClick={openYouTube}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-red-400 flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          ▶
        </button>
      </div>

      {/* Bottom Content */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        {/* Tags */}
        <div className="mt-3 flex gap-2 flex-wrap">
          {visibleTags.map((tag, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-emerald-600 rounded-full"
            >
              {tag}
            </span>
          ))}
          {remaining > 0 && (
            <span className="text-xs px-3 py-1 bg-gray-600 rounded-full">
              +{remaining} more
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default YoutubeCataloge
