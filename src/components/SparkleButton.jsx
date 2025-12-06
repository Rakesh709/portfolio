import React from 'react'
import { Sparkles, Zap, Rocket, Coffee, Github, Linkedin, Mail, ArrowRight, Check, Star } from 'lucide-react';

const SparkleButton = ({text}) => {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-sm text-emerald-700 font-medium mb-8 ">
            <Sparkles size={16} />
            <span>{text}</span>
        </div>
    )
}

export default SparkleButton