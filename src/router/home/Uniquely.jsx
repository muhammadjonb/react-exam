import React, { useEffect } from "react";
import { usePlayStore } from "../../app/gatPlayLists";
import { Link } from "react-router-dom";

const Uniquely = () => {
  const { uniquelyyours, uniquelyYours } = usePlayStore();

  useEffect(() => {
    uniquelyYours();
  }, []);

  return (
    <section className="mix">
      <div className="mix_top">
        <h2>Uniquely yours</h2>
        <span>SEE ALL</span>{" "}
      </div>
      {uniquelyyours && uniquelyyours.length > 0 && (
        <div className="cards">
          {uniquelyyours.map((mix) => (
            <Link to={`/playlist/${mix.id}`} key={mix.id}>
              <div className="card">
                <img src={mix.images[0].url} alt={mix.name} />
                <h3>
                  {mix.name.length < 10
                    ? mix.name
                    : mix.name.slice(0, 10) + "..."}
                </h3>
                <p>
                  {mix.description.length < 20
                    ? mix.description
                    : mix.description.slice(0, 25) + "..."}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default Uniquely;
