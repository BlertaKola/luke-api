import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [luke, setLuke] = useState("");
  const [id, setId] = useState();
  const navigate = useNavigate()
  const searchLuke = (e) => {
    e.preventDefault();
    navigate(`/${luke}/${id}`)
  }

    return (
        <>
            <form onSubmit={searchLuke}>
                <div style={{ display: 'flex', justifyContent: "space-between", margin: "10px" }}>
                    <label htmlFor="">Search for: </label>
                    <select style={{ width: "150px" }} value={luke} onChange={(e) => setLuke(e.target.value)}>
                        <option value="" disabled selected></option>
                        <option value="planets">Planets</option>
                        <option value="people">People</option>
                        <option value="starships">Starships</option>
                    </select>
                    <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
                </div>
                <input type="submit" value="Search" />
            </form>
        </>
    )
}
export default Form;