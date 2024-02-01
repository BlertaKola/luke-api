import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const { luke, id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${luke}/${id}`)
            .then(res => setData(res.data))
            // .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }, [luke, id]);

    return (
        <>
            {luke == "people" ? <div> <h1>{data.name}</h1>
                <h3>Height: <span style={{ fontWeight: "lighter" }}>{data.height}</span></h3>
                <h3>Hair color: <span style={{ fontWeight: "lighter" }}>{data.hair_color}</span></h3>
                <h3>Eye color: <span style={{ fontWeight: "lighter" }}>{data.eye_color}</span></h3>
                <h3>Skin color: <span style={{ fontWeight: "lighter" }}>{data.skin_color}</span></h3>
            </div> : luke == "planets" ? <div>
                <h1>{data.name}</h1>
                <h3>Climate: <span style={{ fontWeight: "lighter" }}>{data.climate}</span> </h3>
                <h3>Terrain: <span style={{ fontWeight: "lighter" }}>{data.terrain}</span> </h3>
                <h3>Surface water: <span style={{ fontWeight: "lighter" }}>{data.surface_water}</span> </h3>
                <h3>Population: <span style={{ fontWeight: "lighter" }}>{data.population}</span> </h3>
            </div> : <div>
                <h1> <span style={{ fontWeight: "lighter" }}>{data.name}</span> </h1>
                <h3>Model: <span style={{ fontWeight: "lighter" }}>{data.model}</span> </h3>
                <h3>Manufacturer: <span style={{ fontWeight: "lighter" }}>{data.manufacturer}</span> </h3>
                <h3>Starship class: <span style={{ fontWeight: "lighter" }}>{data.starship_class}</span> </h3>
            </div> }
        </>
    );
};

export default Home;
