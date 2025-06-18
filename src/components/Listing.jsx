import ListingData from "../Data/listing-data";

function ListingItem({ image, title, description, price }) {
  return (
    <div className="food-card">
      <div className="food-image">
        <img src={image} />
      </div>
      <div className="food-card-content">
        <h3 className="food-card-title">{title}</h3>
        <p className="food-card-description">{description}</p>
        <p className="food-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

function Listing() {
  return (
    <section className="listing-container">
      {ListingData.map((listing, idx) => {
        return (
          <ListingItem
            key={idx}
            image={listing.image}
            title={listing.title}
            description={listing.description}
            price={listing.price}
          />
        );
      })}
    </section>
  );
}

export default Listing;
