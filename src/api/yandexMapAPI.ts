import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: 'https://geocode-maps.yandex.ru/1.x/',
})

const apikey = '37a700cd-2692-4c88-9cb8-965eabbaea52'

export const yandexMapAPI = {
    getAdressByCoordinates(location: any) {
        return instance.get(`?apikey=${apikey}&format=json&geocode=${location}`)
    }
}

// https://geocode-maps.yandex.ru/1.x/?apikey=ваш API-ключ&geocode=37.611347,55.760241