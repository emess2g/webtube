import { useEffect, useRef, useState } from "react"
import { formatDuration } from "../utils/formatDuration"
import { formatTimeAgo } from "../utils/formatTimeAgo"

type VideoGridItem = {
    id: string
    title: string 
    channel:{
        id: string
        name: string
        profileUrl: string
    }
    views: number
    postedAt: Date
    duration: number
    thumbnailUrl: string
    videoUrl: string
}

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: "compact"
})

export function VideoGridItem({
    id,
    title,
    channel,
    views,
    postedAt, 
    duration, 
    thumbnailUrl, 
    videoUrl
}: VideoGridItem){
    const [isVideioPlaying, setIsVideoPlaying] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)


    useEffect(() => { 
        if(isVideioPlaying == null) return

        if(isVideioPlaying){
            videoRef.current.play()
        }else{
            videoRef.current.pause()
        }
    }, [isVideioPlaying])

  return <div className="flex flex-col gap-2"
  onMouseEnter={() => setIsVideoPlaying(true)}
  onMouseLeave={() => setIsVideoPlaying(false)}
  >
    <a href={`/watch?v=${id}`} className="relative aspect-video">
    <img src={thumbnailUrl} 
     className={`block w-full h-full object-cover ${isVideioPlaying? "rounded-none" : "rounded-xl"}`}/>
     <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
        {formatDuration(duration)}
     </div>
       <video 
        ref={videoRef}
        src={videoUrl}
        muted playsInline 
        className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${isVideioPlaying? "opacity-100 delay-200": "opacity-0"}`}/>
    </a>
    <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
        <img src={channel.profileUrl}  className="w-12 h-12 rounded-full" />
        </a>
        <div className="">
            <a href={`/watch?v=${id}`} className="font-bold">
            {title}
            </a>
            <a href={`/@${channel.id}`} className="text-secondary text-sm">
            {channel.name}
            </a>
            <div className="text-secondary text-sm">
            {VIEW_FORMATTER.format(views)} Views &bull; {formatTimeAgo(postedAt)}
            </div>
        </div>
    </div>
  </div>
}