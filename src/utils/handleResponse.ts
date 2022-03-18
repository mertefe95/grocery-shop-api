import { Response } from 'express';

const handleResponse = (res: Response, data: any) => res.status(200).send(data);

export default handleResponse;
