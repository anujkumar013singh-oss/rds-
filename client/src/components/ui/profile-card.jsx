"use client"

import { useState, useEffect } from "react"

export function ProfileCard({
  name = "Bhomik Chauhan",
  title = "Product Designer who focuses on simplicity & usability.",
  avatarUrl = "https://i.ibb.co/Kc3MTRNm/caarton-character.png",
  backgroundUrl = "https://i.ibb.co/nHk8jc8/cloud-image.jpg",
  stat1Value = "12+",
  stat1Label = "Cities Covered",
  stat2Value = "1000+",
  stat2Label = "Placements",
  stat3Value = "Jhansi",
  stat3Label = "Location",
  role = "Founder & CEO",
}) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [expProgress, setExpProgress] = useState(0)

  // Animate experience bar
  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setExpProgress((prev) => {
          if (prev >= 65) {
            clearInterval(interval)
            return 65
          }
          return prev + 1
        })
      }, 20)
      return () => clearInterval(interval)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-card rounded-[2rem] shadow-lg overflow-hidden border border-white/10">
        {/* Header with background */}
        <div className="relative h-40 overflow-hidden">
          <img
            src={backgroundUrl || "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop"}
            alt="Background"
            className="w-full h-full object-cover opacity-60"
          />

          {/* Follow button */}
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`absolute top-4 right-4 rounded-full px-6 py-2 font-body font-medium transition-all duration-300 ${
              isFollowing
                ? "bg-white text-black border-2 border-transparent hover:bg-white/90"
                : "bg-ali text-white hover:bg-ali/90"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
            <span className="ml-2 text-lg">{isFollowing ? "✓" : "+"}</span>
          </button>
        </div>

        {/* Profile content */}
        <div className="px-6 pb-6 -mt-12">
          {/* Avatar */}
          <div className="relative w-24 h-24 mb-4">
            <div className="w-full h-full rounded-full border-4 border-[#0A0A0F] overflow-hidden bg-card shadow-lg">
              <img src={avatarUrl || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&h=150&auto=format&fit=crop"} alt={name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Experience bar */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-sm text-white/40 font-light font-body">exp.</span>
              <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-ali via-blue-400 to-ali transition-all duration-300 ease-out"
                  style={{ width: `${expProgress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Name and Role */}
          <div className="mb-4">
            <h2 className="text-2xl font-display font-medium text-black tracking-tight mb-1">{name}</h2>
            <div className="inline-block px-3 py-1 bg-ali/10 text-ali rounded-full text-xs font-bold uppercase tracking-widest font-body">
              {role}
            </div>
          </div>
          
          <p className="text-black/70 text-sm leading-relaxed mb-6 font-light font-body">{title}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 mb-2 py-4 border-t border-white/10">
            <div className="text-center">
              <div className="text-xl font-display font-semibold text-black mb-1">{stat1Value}</div>
              <div className="text-[10px] text-black/60 font-medium font-body leading-tight">{stat1Label}</div>
            </div>
            <div className="text-center border-l border-r border-white/10 px-1">
              <div className="text-xl font-display font-semibold text-black mb-1">{stat2Value}</div>
              <div className="text-[10px] text-black/60 font-medium font-body leading-tight">{stat2Label}</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-display font-semibold text-black mb-1">{stat3Value}</div>
              <div className="text-[10px] text-black/60 font-medium font-body leading-tight">{stat3Label}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
