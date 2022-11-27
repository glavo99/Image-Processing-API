import { Request, Response, NextFunction } from 'express';

const resizeErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  if (!req.query.url) {
    return res.status(400).send('please provide url as query');
  } else {
    return next();
  }
};

export default resizeErrorHandler;
