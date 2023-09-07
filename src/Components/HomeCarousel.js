import "./Style-HomeCarousel.css";
const HomeCarousel = () => {
  return (
    <>
      <div className="video-background container-fluid">
        <div className="row">
          <div className="col-12">
            <video
              autoPlay
              muted
              loop
              className="embed-responsive-item img-fluid video-content"
            >
              <source
                src="videos/video.mp4"
                type="video/mp4"
                className="img-fluid "
              />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCarousel;
