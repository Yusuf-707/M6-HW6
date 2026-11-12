import { PhotoCard } from "./PhotoCard";
import { useStorePhotos } from "./store/useStorePhotos";
import './App.css'


export const App = () => {
  const { photos, isLoading, error, getPhotos } = useStorePhotos();
  return (
    <div>
      <button onClick={getPhotos} disabled={isLoading}>
        Загрузить фото
      </button>

      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {photos.map((photo) => (
        <PhotoCard {...photo} key={photo.id}/>
      ))}
    </div>
  );
};
