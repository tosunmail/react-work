import Picture from "../components/Picture";
import data from "../helper/data";
import "../styles/style.css"
const Homepage = () => {
  return (
    <div>

        <h1 className="baslik">Albums</h1>
    
    <div className="container">
          {data.map((item) => {
        // console.log(item);
        const {
          photographer,
          src: { large },
        } = item;
        return <Picture photographer={photographer} large={large} />;
      })}
    </div>
    
    </div>
  );
};

export default Homepage;
