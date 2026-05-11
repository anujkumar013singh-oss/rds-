"use client"

import { useState, useEffect } from "react"
import { Instagram, Twitter } from "lucide-react"

export function ProfileCard({
  name = "Bhomik Chauhan",
  title = "Product Designer who focuses on simplicity & usability.",
  avatarUrl = "https://i.ibb.co/Kc3MTRNm/caarton-character.png",
  backgroundUrl = "https://i.ibb.co/nHk8jc8/cloud-image.jpg",
  likes = 72900,
  posts = 828,
  views = 342900,
  instagramUrl = "https://instagram.com/bhomikchauhan",
  twitterUrl = "https://twitter.com/bhomikchauhan",
  threadsUrl = "https://threads.net/@bhomikchauhan",
}) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [expProgress, setExpProgress] = useState(0)
  const [animatedLikes, setAnimatedLikes] = useState(0)
  const [animatedPosts, setAnimatedPosts] = useState(0)
  const [animatedViews, setAnimatedViews] = useState(0)

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

  // Animate counters
  useEffect(() => {
    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    const likesIncrement = likes / steps
    const postsIncrement = posts / steps
    const viewsIncrement = views / steps

    let currentStep = 0

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++
        setAnimatedLikes(Math.min(Math.floor(likesIncrement * currentStep), likes))
        setAnimatedPosts(Math.min(Math.floor(postsIncrement * currentStep), posts))
        setAnimatedViews(Math.min(Math.floor(viewsIncrement * currentStep), views))

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepDuration)
      return () => clearInterval(interval)
    }, 500)

    return () => clearTimeout(timer)
  }, [likes, posts, views])

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }

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

          {/* Name and title */}
          <h2 className="text-2xl font-display font-medium text-black mb-2 tracking-tight">{name}</h2>
          <p className="text-black/70 text-sm leading-relaxed mb-6 font-light font-body">{title}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-white/10">
            <div className="text-center">
              <div className="text-2xl font-display font-semibold text-black mb-1">{formatNumber(animatedLikes)}</div>
              <div className="text-xs text-black/60 font-light font-body">Likes</div>
            </div>
            <div className="text-center border-l border-r border-white/10">
              <div className="text-2xl font-display font-semibold text-black mb-1">{animatedPosts}</div>
              <div className="text-xs text-black/60 font-light font-body">Posts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-display font-semibold text-black mb-1">{formatNumber(animatedViews)}</div>
              <div className="text-xs text-black/60 font-light font-body">Views</div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-8">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-black/5 rounded-lg transition-colors"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-5 h-5 text-black hover:text-ali transition-colors" />
            </a>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-black/5 rounded-lg transition-colors"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-5 h-5 text-black hover:text-ali transition-colors" />
            </a>
            <a
              href={threadsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-black/5 rounded-lg transition-colors"
              aria-label="Threads Profile"
            >
              <svg
                className="w-5 h-5 text-black hover:text-ali transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
