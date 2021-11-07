import StatusCodes from 'http-status-codes';
import { Request, Response } from 'express';
import { fetchCurrentWeather } from '../services/awClient';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

export async function getCurrentWeather(req: Request, res: Response) {
    return fetchCurrentWeather()
    .then((weatherData) => {
        return res.status(OK).json({ weatherData });
    });
}