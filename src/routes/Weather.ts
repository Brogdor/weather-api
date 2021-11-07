import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { fetchCurrentWeather, fetchWeather } from '../services/awClient';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export function getCurrentWeather(req: Request, res: Response) {
    return fetchCurrentWeather()
    .then((weatherData) => {
        return res.status(OK).json({ weatherData });
    });
}

export function getHistoricalWeather(req: Request, res: Response) {
    return fetchWeather(req.params.endDate, req.params.limit)
    .then((weatherData) => {
        return res.status(OK).json({ weatherData });
    });
}