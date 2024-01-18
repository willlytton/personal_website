const InfoCard = ({ title, company, description, years }) => {

    return (
        <div>
            <h2>{title} - {company}</h2>
            <p>{description}</p>
            <p>{years}</p>
        </div>
    )
};

export default InfoCard;