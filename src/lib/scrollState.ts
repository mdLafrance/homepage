import { create } from 'zustand';

interface ScrolledState {
    scrolled: boolean,
    scrollAmount: number,
    setScrollAmount: (x: number) => void,
    setScrolled: (v: boolean) => void
}

const useScrolledStore = create<ScrolledState>((set) => ({
    scrolled: false,
    scrollAmount: 0,
    setScrollAmount: (x: number) => set({ scrollAmount: x }),
    setScrolled: (value: boolean) => set({ scrolled: value }),
}));

export default useScrolledStore;

