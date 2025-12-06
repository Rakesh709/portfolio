import React from 'react'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiFigma,
  SiVercel,
  SiPostman,
  SiBun
} from "react-icons/si";

const Stack = () => {
    const techStack = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Figma", icon: SiFigma },
  { name: "Vercel", icon: SiVercel },
  { name: "Postman", icon: SiPostman },
  { name: "Bun", icon: SiBun },
];
  return (
    <div className="flex flex-wrap gap-3">
  {techStack.map(({ name, icon: Icon }) => (
    <div
      key={name}
      className="
        inline-flex items-center gap-2
        px-4 py-2
        rounded-full
        bg-emerald-600
        text-sm text-neutral-100
        border-2 border-dashed
        border-white-600/70
        shadow-[0_0_0_1px_rgba(255,255,255,0.08)]
        hover:border-neutral-300
        hover:bg-neutral-800
        transition-all
      "
    >
      <Icon className="text-base" />
      <span>{name}</span>
    </div>
  ))}
</div>
  )
}

export default Stack