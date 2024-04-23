import React, { useEffect } from 'react'
import { usePlayStore } from '../../app/gatPlayLists';

const Recentle = () => {
  const { recentlyplayed, recentlyPlayed } = usePlayStore();

  useEffect(() => {
    recentlyPlayed();
  }, []);


  return (
    <section className="mix">
      <div className="mix_top">
        <h2>Recently played</h2>
        <span>SEE ALL</span>{" "}
      </div>
      {recentlyplayed && recentlyplayed.length > 0 && (
        <div className="cards">
          {recentlyplayed.map((mix) => (
            <div className="card" key={mix.id}>
              <img src={mix.images[0].url} alt={mix.name} />
              <h3>
                {mix.name.length < 14
                  ? mix.name
                  : mix.name.slice(0, 14) + "..."}
              </h3>
              <p>
                {mix.description.length < 30
                  ? mix.description
                  : mix.description.slice(0, 30) + "..."}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Recentle