// GlobalStateStore.js
import { create } from 'zustand';

const useGlobalState = create((set) => ({
	name: '',
	setName: (value) => set({ name: value }),
	size: 0,
	setSize: (value) => set({ size: value }),
	type: '',
	setType: (value) => set({ type: value }),
	dateModified: '',
	setDate: (value) => set({ dateModified: value})
}));

export default useGlobalState;
