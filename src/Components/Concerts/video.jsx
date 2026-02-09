import videoSrc from "@/Assets/concerts/concertvideo.mp4" // or use a URL

export default function Video() {
  return (
    <div className="flex w-full justify-center items-center">
      <video
        src={videoSrc}
        controls
        className="w-full rounded-xl shadow-lg"
      />
    </div>
  )
}
