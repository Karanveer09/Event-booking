import concert from '/public/concert.webp'; 
import theatre from '/public/theatre.jpg';
import cricket from '/public/cricket.jpg';
import bbq from '/public/bbq.jpeg';
// import bassi from '/public/bassi.jpeg';
import stndup from '/public/stndup.jpeg';
import urbanfestival from '/public/urbanfestival.jpeg';
import DeadpoolWolverine from '/public/DeadpoolWolverine.webp';
import legendsleague from '/public/legendsleague.jpeg';
// import zakirkhan from '/public/zakirkhan.jpg';
import standup from '/public/standup.jpeg';
import football from '/public/football.jpeg';
import parmishVerma from '/public/parmishVerma.jpg';
import pathaan from '/public/pathaan.avif';
import badminton from '/public/badminton.avif';
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
    },
    {
    image: concert,
    title: "Prem Dhillon Live",
    date: "Sat, July 20",
    location: "Elante Courtyard, Chandigarh",
    price: 999
  },
     {
    image: stndup,
    title: "Anubhav Singh Bassi Stand-up",
    date: "Sun, July 28",
    location: "Panjab University Auditorium",
    price: 899
  },
{
    image: theatre,
    title: "Courtroom Drama - Hindi Play",
    date: "Sat, July 19",
    location: "Alliance Française, Sector 36",
    price: 599
  },

    {
    image: urbanfestival,
    title: "Punjabi Folk Festival",
    date: "Wed, July 30",
    location: "Sector 17 Plaza",
    price: 599
  },
  {
  image: DeadpoolWolverine,
  title: "Deadpool & Wolverine",
  date: "Fri, July 26",
  location: "Cinepolis, Bestech Mall Mohali",
  price: 399
},
{
  image: legendsleague,
  title: "Legends League - India XI vs World XI",
  date: "Sat, August 3",
  location: "Sector 16 Cricket Stadium, Chandigarh",
  price: 799
},
   {
    image: standup,
    title: "Zakir Khan - Live in Chandigarh",
    date: "Mon, July 22",
    location: "Tagore Theatre, Chandigarh",
    price: 799
  },
  {
  image: football,
  title: "Chandigarh Warriors vs Punjab FC - Football League",
  date: "Sun, July 21",
  location: "Sector 42 Sports Complex, Chandigarh",
  price: 499
},  
  ,{
  image: parmishVerma,
  title: "Parmish Verma Live in Concert",
  date: "Sat, August 10",
  location: "Indradhanush Auditorium, Panchkula",
  price: 1199
},
    {
    image: pathaan,
    title: "Pathaan Returns",
    date: "Fri, July 12",
    location: "PVR Cinemas, Elante Mall",
    price: 299
  },
    {
  image: badminton,
  title: "Chandigarh Open Badminton Tournament",
  date: "Tue, July 23",
  location: "St. John’s Indoor Stadium, Sector 26",
  price: 299
},
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
