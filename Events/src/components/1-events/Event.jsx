

const Event = () => {
  let text = "Hi World" 

const handleClick = () => {
  alert("Hi Events")
}
const handleReset = (msg) => {
console.log(msg);
}
function handleChange(){
text = "Hallo React"
console.log(text);
}
  return (
    <div>

      <h1>{text}</h1>
    <button onClick={handleClick}>Click</button>
    <button onClick={() => handleReset("Please clear the text")}>Reset</button>
    <button onClick={handleChange}>Change</button>
  </div>
  ) 
};

export default Event;
