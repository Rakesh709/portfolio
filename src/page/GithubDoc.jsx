import React from 'react'
import { FiGithub } from "react-icons/fi";
import RedirectCard from "../components/GithubDocument.jsx";

const GithubDoc = () => {
  return (
    <div>
      <div className="p-6 max-w-3xl mx-auto grid gap-4 mb-65">
      <RedirectCard
        title="Open GitHub"
        description="Click to visit the repository"
        icon={<FiGithub className='text-black'/>}
        link="https://github.com/Rakesh709/github-doc"
      />

      <RedirectCard
        title="Visit Docs"
        description="Read the complete documentation"
        icon="📘"
        link="https://github-doc-gen.vercel.app/"
      />
    </div>
    </div>
  )
}

export default GithubDoc
