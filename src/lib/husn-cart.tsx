import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

export type HusnBagItem = {
  productId: string;
  slug: string;
  name: string;
  image: string;
  size: string;
  color: string;
  quantity: number;
};

type HusnCartValue = {
  items: HusnBagItem[];
  itemCount: number;
  addItem: (item: HusnBagItem) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
};

const STORAGE_KEY = "husn-lookbook-bag-v1";
const HusnCartContext = createContext<HusnCartValue | null>(null);

export function HusnCartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<HusnBagItem[]>([]);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed as HusnBagItem[]);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setHasHydrated(true);
  }, []);

  useEffect(() => {
    if (hasHydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [hasHydrated, items]);

  const addItem = useCallback((newItem: HusnBagItem) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === newItem.productId && item.size === newItem.size && item.color === newItem.color);
      if (!existing) return [...current, newItem];
      return current.map((item) => item === existing ? { ...item, quantity: item.quantity + newItem.quantity } : item);
    });
  }, []);

  const removeItem = useCallback((productId: string, size: string, color: string) => {
    setItems((current) => current.filter((item) => !(item.productId === productId && item.size === size && item.color === color)));
  }, []);

  const updateQuantity = useCallback((productId: string, size: string, color: string, quantity: number) => {
    setItems((current) => current.map((item) => item.productId === productId && item.size === size && item.color === color ? { ...item, quantity: Math.max(1, quantity) } : item));
  }, []);

  const itemCount = useMemo(() => items.reduce((total, item) => total + item.quantity, 0), [items]);
  const value = useMemo(() => ({ items, itemCount, addItem, removeItem, updateQuantity }), [items, itemCount, addItem, removeItem, updateQuantity]);

  return <HusnCartContext.Provider value={value}>{children}</HusnCartContext.Provider>;
}

export function useHusnCart() {
  const value = useContext(HusnCartContext);
  if (!value) throw new Error("useHusnCart must be used within HusnCartProvider");
  return value;
}