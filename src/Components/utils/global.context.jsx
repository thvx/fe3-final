import { createContext, useReducer, useEffect } from "react";

export const ContextGlobal = createContext();

const initialState = { 
  theme: localStorage.getItem("theme") || "light", 
  data: [], 
  favorites: [] 
};


const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":
      localStorage.setItem("theme", action.payload);
      return { ...state, theme: action.payload };
    case "SET_DATA":
      return { ...state, data: action.payload };
    case "ADD_FAV":
      const updatedFavs = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedFavs));
      return { ...state, favorites: updatedFavs };
    case "LOAD_FAVS":
      return { ...state, favorites: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "SET_DATA", payload: data }));
      
    // Load favorites from localStorage
    const storedFavs = JSON.parse(localStorage.getItem("favorites")) || [];
    dispatch({ type: "LOAD_FAVS", payload: storedFavs });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
