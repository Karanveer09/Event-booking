
const categories = [
  { label: "Concerts", icon: "pi pi-volume-up" },
  { label: "Theater", icon: "pi pi-star" },
  { label: "Sports", icon: "pi pi-send" },
  { label: "Food & Drink", icon: "pi pi-heart" }
];

export default function Categories() {
  return (
    <div className="categories">
      <h2>Browse Categories</h2>
      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.label}>
            <i className={cat.icon}></i>
            <p>{cat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}



