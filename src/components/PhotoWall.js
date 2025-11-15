import "../styles/PhotoWall.css";
import "../styles/Headings.css";

// const photos = [
//   //"/gallery/IMG_0145.png",
// ];

export default function PhotoWallFlex() {
  return (
    <section className="photo-section">
      <h3 class="subheading">Photos That Never Left My Camera Roll</h3>
      {/* <h2>Through My Lens</h2> */}
      <p className="photo-intro">
        Outside data and dashboards, I love framing moments that tell quiet
        stories — here are a few of them.
      </p>

      <div className="photo-wall-flex">
        {photos.map((src, index) => (
          <img key={index} src={src} alt={`photo-${index}`} loading="lazy" />
        ))}
      </div>
    </section>
  );
}
