import React from 'react'

const YoutubePlaylist = () => {
  return (
    <>
      <style>{`
        .yt-wrapper {
          width: 60%;
          max-width: 900px;
          margin: 0 auto;
          aspect-ratio: 16 / 9;
        }

        @media (max-width: 768px) {
          .yt-wrapper {
            width: 92%;
          }
        }
      `}</style>

      <div className="yt-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/xJhOyQ8zUik?list=PL_AknaKR5--8wVCWwUNAoSBaUqK0XBcj7"
          title="YouTube Playlist"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </>
  )
}

export default YoutubePlaylist