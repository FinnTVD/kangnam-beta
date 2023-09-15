import { create } from 'zustand'
const useStore = create((set, get) => ({
    language: 'vi',
    propertyAreaType: [],
    propertyCategory: [],
    propertyType: [],
    socialMedia: false,
    slugDetailProject: null,
    slugDetailNews: null,
    dataSubmitForm: null,
    triggerSubmit:false,
    setTriggerSubmit: (data) => {
        set((state) => {
            return {
                ...state,
                triggerSubmit:data ,
            }
        })
    },
    setDataSubmitForm: (data) => {
        set((state) => {
            return {
                ...state,
                dataSubmitForm: data,
            }
        })
    },
    setSlugDetailProject: (data) => {
        set((state) => {
            return {
                ...state,
                slugDetailProject: data,
            }
        })
    },
    setSlugDetailNews: (data) => {
        set((state) => {
            return {
                ...state,
                slugDetailNews: data,
            }
        })
    },
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
