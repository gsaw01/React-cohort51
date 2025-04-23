import './CategoryFilterButton.css';

export const CategoryFilterButton = ({ category, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`category-filter-button ${isActive ? 'active' : ''}`}
    >
      {category}
    </button>
  );
};
