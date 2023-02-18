const Picture = ({ photographer , large  }) => {
  return (
    <div className="foto-container">
      <img className="image" src={large} alt={photographer}  />
      <h1 className="name">{photographer}</h1>
    </div>
  );
};

export default Picture;
