const Restrooms = ({restrooms}) => {
    return(
        <>
            <h1>Restrooms</h1>
            {restrooms.map((restroom) => (
            <div key={restroom.id}>
                <h3>{restroom.name}</h3>
                <p>{restroom.street} {restroom.city}, {restroom.state}</p>
                <p>Is it unisex: {restroom.unisex}</p>
                <p>Comments: {restroom.comment}</p>
            </div>
        
    ))}
     </>
    )
};

export default Restrooms;