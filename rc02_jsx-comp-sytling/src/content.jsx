import img2 from "./img/img2.jpg";
import "./content.css"
const Content = () => {
  const pStyle = {
    fontFamily: "Tahoma ",
    fontSize: "1.3rem",
    lineHeight: "1.5",
  };
  const imgStyle = {
    display: "block",
    margin: "1rem auto",
    width: "400px",
  };

  return (
    <div className="contentdiv">
      <h2 style={{ color: "white", backgroundColor: "red" }}>React JS</h2>
      <p style={pStyle}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore,
        dolore!
      </p>

      <img
        style={imgStyle}
        src="https://cdn.pixabay.com/photo/2022/03/11/10/55/couple-7061929_960_720.jpg"
        alt="img1"
      />

      <img style={imgStyle} src={img2} alt="img2-img" />

      <p className="par">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga delectus quasi tempora vel molestiae adipisci qui laborum, suscipit reprehenderit sint earum odit, quis perferendis velit fugiat ullam saepe esse.</p>
      <p className="par">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis quidem molestias et obcaecati id, sed ipsum, enim, ratione quis sit dolorem totam eius! Ratione excepturi eos suscipit, hic doloremque quis?
      </p>
    </div>
  );
};

export default Content;
