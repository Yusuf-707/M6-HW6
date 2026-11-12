import { useState } from "react";

export const PhotoCard = (photo) => {
  const [imageStatus, setImageStatus] = useState("loading");

  return (
    <div>
      {imageStatus == "loading" && <div className="img_pl">Loading</div>}
      {imageStatus == "error" && <div className="img_pl">error</div>}
      <img
      className="photo"
        src={photo.url}
        onLoad={() => setImageStatus("loaded")}
        onError={() => setImageStatus("error")}
        alt=""
      />
      <h1>{photo.title}</h1>
      <h3>{photo.id}</h3>
      <hr />
    </div>
  );
};
