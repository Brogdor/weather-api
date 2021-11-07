import { Router } from 'express';
import { getAllUsers, addOneUser, updateOneUser, deleteOneUser } from './Users';
import { getCurrentWeather, getHistoricalWeather } from './Weather';

// User-route
const userRouter = Router();
userRouter.get('/all', getAllUsers);
userRouter.post('/add', addOneUser);
userRouter.put('/update', updateOneUser);
userRouter.delete('/delete/:id', deleteOneUser);

const weatherRouter = Router();
weatherRouter.get('/current', getCurrentWeather);
weatherRouter.get('/timestamp/:endDate', getHistoricalWeather);
weatherRouter.get('/timestamp/:endDate/limit/:limit', getHistoricalWeather);


// Export the base-router
const baseRouter = Router();
baseRouter.use('/users', userRouter);
baseRouter.use('/weather', weatherRouter);
export default baseRouter;
