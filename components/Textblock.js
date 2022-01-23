import Button from "./Button";

function Textblock({subtitle, paragraph}) {
  return (
    <div className="container">
      <h3 className="subtitle">{subtitle}</h3>
      <p className="paragraph">{paragraph}</p>
      <Button text={'See More'} href={'/projects'}/>
    </div>
  )
}

export default Textblock;
