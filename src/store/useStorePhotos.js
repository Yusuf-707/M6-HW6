import { create } from 'zustand'
import { $api } from '../api/api'

export const useStorePhotos = create(set => ({
    photos: [],
    isLoading: false,
    error: null,

    getPhotos: async () => {
        set({isLoading: true, error: null})

        try{
            const response = await $api.get("/photos")
            set({photos: response.data, isLoading: false})
        }catch (err){
            set({error: err.message, isLoading: false})
        }
    },
}))