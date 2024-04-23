import { useEffect } from "react";
import "./Home.scss";

const Hero = () => {
    const clientId = "6d2b896ad23f4e8b8ae01797378c0e0c";
    const clientSecret = "db91ba413c2b46d09a5c8991d46c9468";
    const token = "https://accounts.spotify.com/api/token";
    const url = "https://api.spotify.com/v1/browse/featured-playlists";

    const getToken = async () =>{
        await fetch(token, {
            method: "POST",
            headers: {
                "Content-Type": "apilication/x-www-form-urlencoded",
                Authorization: `Basic ${btoa(clientId + ":" + clientSecret)}`, 
            },
            body: "grant_type=client_credetials"
        })
        .then((res) => res.json())
        .then((data) => {
            localStorage.setItem("asset_token", JSON.stringify(`${data.token_type} ${data.access_token}`))
        })
        .catch((err) => console.log(err))
    }
    const getPlayList = async () => {
        await fetch(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("asset_token")}`,
        },
    })
    .them((res) => res.json())
    .then((data) => {
        console.log(data.playlist.items);
    })
    .catch((err) => console.log(err))
    }

    useEffect(() => {
        const fetchData = async () =>{
            await getToken();
            await getPlayList();
        }
        fetchData()
    }, [])

  return (
    <div className="hero">
      <h1>Good afternoon</h1>
      
    </div>
  );
};

export default Hero;


// import { useDispatch, useSelector } from "react-redux";
// import { fetchPlay } from "../../app/play/playSlice";
// import { useEffect } from "react";


//  const { loading, playes, error } = useSelector((state) => state.play);
//  const dispatch = useDispatch();

//  console.log(playes);

//  useEffect(() => {
//    dispatch(fetchPlay());
//  }, []);


// {
//   loading && <h1>Loading...</h1>;
// }
// {
//   error && <h1>{error}</h1>;
// }
// {
//   playes.length > 0 && (
//     <div className="hero_cards">
//       {playes.map((el, i) => (
//         <div className="hero_card" key={i}>
//           <img src={el} alt="person" />
//           <h3>Chill Mix</h3>
//         </div>
//       ))}
//     </div>
//   );
// }