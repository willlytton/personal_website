import constData from "../constData";

const Carousel = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {constData.works.map((work) => (
        <div key={work.id} className="max-w-sm">
          <img src={work.image} className="pt-8 w-auto px-5" />
          <div className="h-24 p-8 text-sm">
            <h2>{work.title}</h2>
            <p>{work.description}</p>
            <p>{work.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
