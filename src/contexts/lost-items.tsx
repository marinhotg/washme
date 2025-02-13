import { createContext, useContext, useState, ReactNode } from "react";

interface LostItem {
  id: number;
  image: string | any;
  date: string;
  description: string;
}

interface LostItemsContextData {
  items: LostItem[];
  addItem: (item: Omit<LostItem, "id">) => void;
  removeItem: (id: number) => void;
}

const LostItemsContext = createContext<LostItemsContextData>(
  {} as LostItemsContextData
);

export function LostItemsProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<LostItem[]>([
    {
      id: 1,
      image: require("../../assets/images/lost-items/image1.png"),
      date: "06/02/2025",
      description:
        "Esquecido na lavadora 2 eu achei quando fui lavar minha roupa.",
    },
    {
      id: 2,
      image: require("../../assets/images/lost-items/image2.png"),
      date: "06/02/2025",
      description:
        "Esquecido na lavadora 2 eu achei quando fui lavar minha roupa.",
    },
  ]);

  const addItem = async (item: Omit<LostItem, "id">) => {
    const newItem = {
      ...item,
      id: items.length + 1,
    };
    setItems((prev) => [...prev, newItem]);
  };

  const removeItem = async (id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <LostItemsContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </LostItemsContext.Provider>
  );
}

export function useLostItems() {
  return useContext(LostItemsContext);
}
