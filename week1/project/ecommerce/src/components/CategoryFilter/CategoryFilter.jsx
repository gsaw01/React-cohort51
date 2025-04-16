import { CategoryFilterButton } from '../CategoryFilterButton/CategoryFilterButton';
import { Dropdown } from '../Dropdown/Dropdown';
import { useIsMobile } from '../../hooks/useIsMobile';
import './CategoryFilter.css';

export const CategoryFilter = ({ categories, selectedCategory, onChange }) => {
  const isMobile = useIsMobile();

  return (
    <section className='category-filters-section'>
      {isMobile ? (
        <Dropdown
          options={categories}
          selectedOption={selectedCategory}
          onSelect={onChange}
        />
      ) : (
        categories.map((category) => (
          <CategoryFilterButton
            key={category}
            category={category}
            isActive={category === selectedCategory}
            onClick={() => onChange(category)}
          />
        ))
      )}
    </section>
  );
};
