import { create } from 'zustand'
const useStore = create((set, get) => ({
    language: 'vi',
    propertyAreaType: [],
    propertyCategory: [],
    propertyType: [],
    socialMedia: false,
    setLanguage: (lang) => {
        set((state) => {
            return {
                ...state,
                language: lang,
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