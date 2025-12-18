import React from 'react'
import MediaCard from '../components/MediaCard'
import { assets } from '../assets/assets.js'
import YoutubeCataloge from '../components/YoutubeCataloge.jsx'


const Youtube = () => {
  return (
    <div className="min-h-screen p-6 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.map((item, index) => (
          <YoutubeCataloge
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            youtubeLink={item.youtubeLink}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  )
}

export default Youtube