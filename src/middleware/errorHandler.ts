import { ErrorRequestHandler } from 'express';

interface Error {
  status?: number;
  message?: string;
}

const errorHandler: ErrorRequestHandler  = async (error: Error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';

    res
    .status(status)
    .send({
      status,
      message,
    })

};

export default errorHandler;