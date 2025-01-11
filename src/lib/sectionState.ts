import { create } from 'zustand';

type Section = "about" | "work" | "projects";

interface SectionState {
    section: Section
    setSection: (section: Section) => void
}

const useSectionStore = create<SectionState>((set) => ({
    section: "about",
    setSection: (section: Section) => set({ section: section })
}));

export default useSectionStore;

