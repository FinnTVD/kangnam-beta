import { create } from 'zustand'
const useStore = create((set, get) => ({
    language: 'vn',
    propertyAreaType: [],
    propertyCategory: [],
    propertyType: [],
    setLanguage: (lang) => {
        set((state) => {
            return {
                ...state,
                lang,
            }
        })
    },
    setPropertyAreaType: (area) => {
        set((state) => {
            return {
                ...state,
                propertyAreaType: [...area],
            }
        })
    },
    setPropertyType: (type) => {
        set((state) => {
            return {
                ...state,
                propertyType: [...type],
            }
        })
    },
    setPropertyCategory: (category) => {
        set((state) => {
            return {
                ...state,
                propertyCategory: [...category],
            }
        })
    },
}))

export default useStore
