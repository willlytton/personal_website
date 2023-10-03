import Carousel from "../Carousel";
import constData from "../../constData";

const ArtPage = () => {
    return (
        <div>
            <h1>Art</h1>
            <Carousel props={constData.artImages.image} />
        </div>
    );
}


export default ArtPage;