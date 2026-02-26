import { createContext, UseState, useEffect, use } from "react";

export const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
    const [items, setItems] = useState(() => {
        const saved = localStorage.getItem("itinerary");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("itinerary", JSON.stringify(items));
    }, [items]);
    
    const addItem = (item) => {
        setItems((prev) => [...prev, {...item, id: Date.now()}]);
    };

    const removeItem = (id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    };
        
    return (
        <ItineraryContext.Provider value={{ items, addItem, removeItem }}>
            {children}
        </ItineraryContext.Provider>
    );
};
  