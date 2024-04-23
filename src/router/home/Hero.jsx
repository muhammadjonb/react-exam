import "./Home.scss";
import { useEffect } from "react";
import { usePlayStore } from "../../app/gatPlayLists";

const Hero = () => {
  const { loading, mixes, error, getPlaylists, getToken } = usePlayStore();

  useEffect(() => {
    getToken();
    getPlaylists();
  }, []);

  return (
    <div className="hero">
      <h1>Good afternoon</h1>
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {mixes.length > 0 && (
        <div className="hero_cards">
          {mixes.map((mix) => (
            <div className="hero_card" key={mix.id}>
              <img src={mix.images[0].url} alt={mix.name} />
              <h3>{mix.name}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Hero;
