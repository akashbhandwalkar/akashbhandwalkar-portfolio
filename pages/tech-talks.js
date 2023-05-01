const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card-header">
          { props.header }
      </div>
      <div className="card-content">
        <img src={props.img} width="100%" />
      </div>
      <div className="card-footer">{props.description}</div>
    </div>
  );
};

const TechTalks = () => {
  return (
    <div className="page-wrapper tech-talk-container">
      <Card
        img="./assets/march-meetup.jpeg"
        header="Meetup in March, 2023"
        description="During the meetup, I discussed the concept of automatic batching in ReactJS and highlighted the differences in automatic batching between React 18 and previous versions."/>

    <Card
        img="./assets/april-meetup.jpeg"
        header="Meetup in April, 2023"
        description="In this meetup, I presented the process of building a React routing library from the ground up."/>
    </div>
  );
};

export default TechTalks;
