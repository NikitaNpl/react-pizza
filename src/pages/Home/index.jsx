import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../../components';
import { setCategory, setSortBy } from '../../redux/actions/filters';
import { fetchPizzas } from '../../redux/actions/pizzas';
import { addPizzaToCart } from '../../redux/actions/cart';

const categoriesNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const { items, isLoaded } = useSelector(({ pizzas }) => pizzas);
  const cartItems = useSelector(({ cart }) => cart.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  const onSelectCategories = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((obj) => {
    dispatch(setSortBy(obj));
  }, []);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickCategory={onSelectCategories}
          activeCategory={category}
          items={categoriesNames}
        />
        <SortPopup
          activeSortType={sortBy.type}
          items={sortItems}
          onSelectSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
            <PizzaBlock
              addPizzaToCart={handleAddPizzaToCart}
              key={obj.id}
              addedCount={cartItems[obj.id]?.items.length}
              {...obj}
            />))
          : Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />)
        }
      </div>
    </div>
  )
}

export default Home;
