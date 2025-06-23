import concert from '/public/concert.jpg'; // replace with your actual images
import theatre from '/public/theatre.png';
import EventCard from './Eventcard';

 function PopularEvents() {
  const events = [
    {
      image: concert,
      title: "Rock Concert Night",
      date: "Sat, July 15",
      location: "Mumbai Arena",
      price: 799
    },
    {
      image: theatre,
      title: "Shakespeare Play",
      date: "Sun, July 16",
      location: "Delhi Theater",
      price: 499
    }
  ];

  return (
    <div className="popular-events">
      <h2>Popular Events</h2>
      <div className="event-grid">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}
export default PopularEvents;
