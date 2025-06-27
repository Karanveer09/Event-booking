import concert from '/public/concert.webp'; 
import theatre from '/public/theatre.jpg';
import cricket from '/public/cricket.jpg';
import bbq from '/public/bbq.jpeg';
import EventCard from './Eventcard';

 function PopularEvents() {
  const events = [
    {
      image: concert,
      title: "Rock Concert Night",
      date: "Sat, July 15",
      location: "Mohali Arena",
      price: 799
    },
    {
      image: theatre,
      title: "Shakespeare Play",
      date: "Sun, July 16",
      location: "Mohali Theater",
      price: 499
    },
    {
      image: cricket,
      title: "IND vs AUS Cricket Match",
      date: "Mon, July 17",
      location: "IS Bindra Stadium",
      price: 699
    },
    {
      image: bbq,
      title: "BBQ Food Festival",
      date: "Tue, July 10",
      location: "Sector 17 Plaza",
      price: 849
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
