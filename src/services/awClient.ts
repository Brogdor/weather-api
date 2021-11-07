import * as _ from 'lodash';
import dayjs from 'dayjs';

import AmbientWeatherApi from 'ambient-weather-api';

if (!process.env.API_KEY) {
    throw new Error('Missing API_KEY in .env');
}

if (!process.env.APPLICATION_KEY) {
    throw new Error('Missing APPLICATION_KEY in .env');
}

export interface WeatherData {

}

const api = new AmbientWeatherApi({
    apiKey: process.env.API_KEY,
    applicationKey: process.env.APPLICATION_KEY
});

export function fetchCurrentWeather() {
    return fetchWeather(dayjs().valueOf())
    .then((deviceData) => {
        return _.first(deviceData);
    });
}

export function fetchWeather(endDate: any, limit: string = '1'): Promise<WeatherData[]> {
    if (!process.env.MAC_ADDRESS) {
        throw new Error('Missing MAC_ADDRESS in .env');
    }

    return api.deviceData(process.env.MAC_ADDRESS, {
        endDate,
        limit: parseInt(limit)
    });
}