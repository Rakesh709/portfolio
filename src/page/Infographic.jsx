
import InfographicImg from '../components/InfographicImg'

import { assets } from '../assets/assets.js'

const Infographic = () => {
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.map((item, index) => (
          <InfographicImg
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
            youtubeLink={item.youtubeLink}
          />
        ))}
      </div>
    </div>
  )
}

export default Infographic