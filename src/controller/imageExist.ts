import { NextFunction, Request, Response } from 'express';
import data from '../utils/data';

const imageExist = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const url = `images/${req.query.url}`;
  const check = data.includes(url.slice(7));
  const height = req.query.height as String;
  const width = req.query.width as String;
  if (!check) {
    return res
      .status(400)
      .json({ error: 'bad request! There is no photo with that url' });
  } else {
    if (typeof +width !== 'number' || typeof +height !== 'number') {
      return res
        .status(400)
        .json({ error: 'please provide valid Number for width and height' });
    }
    return next();
  }
};
export default imageExist;
