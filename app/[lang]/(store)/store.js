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
    triggerSubmit: false,
    valueSearch: '',
    valueSearchPrev: '',
    boxMap: null,
    isSubmit: false,
    selectSearch: '',
    selectTypeSearch: true,
    dataProvinces: null,
    dataDistrict: null,
    dataWard: null,
    listData: '',
    isFeatureHome: {
        isContain: false,
        isStandMap: false,
    },
    categoryNav: [],
    isClose: true,
    isRedirect: false,
    defaultMap: null,
    setSelectTypeSearch: (data) => {
        set((state) => {
            return {
                ...state,
                selectTypeSearch: data,
            }
        })
    },
    setDefaultMap: (data) => {
        set((state) => {
            return {
                ...state,
                defaultMap: data,
            }
        })
    },
    setIsRedirect: (data) => {
        set((state) => {
            return {
                ...state,
                isRedirect: data,
            }
        })
    },
    setIsClose: (data) => {
        set((state) => {
            return {
                ...state,
                isClose: data,
            }
        })
    },
    setLevelZoom: (data) => {
        set((state) => {
            return {
                ...state,
                levelZoom: data,
            }
        })
    },
    setListData: (data) => {
        set((state) => {
            return {
                ...state,
                listData: data,
            }
        })
    },
    setCategoryNav: (data) => {
        set((state) => {
            return {
                ...state,
                categoryNav: data,
            }
        })
    },
    setIsFeatureHome: (data) => {
        set((state) => {
            return {
                ...state,
                isFeatureHome: data,
            }
        })
    },
    setDataWard: (data) => {
        set((state) => {
            return {
                ...state,
                dataWard: data,
            }
        })
    },
    setDataDistrict: (data) => {
        set((state) => {
            return {
                ...state,
                dataDistrict: data,
            }
        })
    },
    setDataProvinces: (data) => {
        set((state) => {
            return {
                ...state,
                dataProvinces: data,
            }
        })
    },
    setValueSearchPrev: (data) => {
        set((state) => {
            return {
                ...state,
                valueSearchPrev: data,
            }
        })
    },
    setSelectSearch: (data) => {
        set((state) => {
            return {
                ...state,
                selectSearch: data,
            }
        })
    },
    setIsSubmit: (data) => {
        set((state) => {
            return {
                ...state,
                isSubmit: data,
            }
        })
    },
    setBoxMap: (data) => {
        set((state) => {
            return {
                ...state,
                boxMap: data,
            }
        })
    },
    setValueSearch: (data) => {
        set((state) => {
            return {
                ...state,
                valueSearch: data,
            }
        })
    },
    setTriggerSubmit: (data) => {
        set((state) => {
            return {
                ...state,
                triggerSubmit: data,
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
