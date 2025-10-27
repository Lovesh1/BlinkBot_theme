
export default function Video() {
  return (
    <div className="w-full h-full shadow-lg rounded-lg animation-fadeIn">
  <iframe
    src="https://player.vimeo.com/video/1094530265?h=32a1f117c7"
    className="w-full h-screen rounded-lg"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title="Vimeo video"
  ></iframe>
</div>
  )
}
