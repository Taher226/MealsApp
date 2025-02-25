import {createContext, useState} from 'react';

export const FavouriteContext = createContext({
  ids: [],
  addFavourite: id => {},
  removeFavourite: id => {},
});

function FavouritesContextProvider({children}) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealIds(currentFavIds => [...currentFavIds, id]);
  }

  function removeFavourite(id) {
    setFavouriteMealIds(currentFavIds =>
      currentFavIds.filter(mealId => mealId !== id),
    );
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };

  return (
    <FavouriteContext.Provider value={value}>
      {children}
    </FavouriteContext.Provider>
  );
}
export default FavouritesContextProvider;
