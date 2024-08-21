import { create } from 'zustand';

// Helper function to get data from localStorage
const getLocalStorageData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Helper function to set data in localStorage
const setLocalStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const useFileStore = create((set, get) => ({
  files: getLocalStorageData('files') || [],

  addFile: (file) => {
    const updatedFiles = [...get().files, file];
    setLocalStorageData('files', updatedFiles);
    set({ files: updatedFiles });
  },

  getFileDetails: (fileName) => {
    const files = get().files;
    return files.find(file => file.name === fileName);
  },

  clearFiles: () => {
    localStorage.removeItem('files');
    set({ files: [] });
  },
}));

export default useFileStore;