<div className="ps-2">
  {items.map((item, idx) => (
    <div key={idx} className="nested-work-item mb-2">
      <span className="bullet-dot"></span>
      <Link 
        // ✅ ध्यान दें: यहाँ Backticks ( ` ) का इस्तेमाल हुआ है
        to={`/read/${author.id}/${item}`} 
        className="work-item-text text-decoration-none"
        style={{ 
          color: "#8b4513", 
          cursor: "pointer", 
          display: "inline-block",
          zIndex: 10 
        }}
      >
        {item}
      </Link>
    </div>
  ))}
</div>