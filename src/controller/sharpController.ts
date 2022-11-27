import { NextFunction, Request, Response } from 'express';
import sharp from 'sharp';
import data from '../utils/data';

const sharpResize = (req: Request, res: Response, next: NextFunction): void => {
  if (!req.file) return next();
  req.file.filename = `glavo-${Date.now()}.jpg`;
  const width = (req.query.width as String) || (500 as number);
  const height = (req.query.height as String) || (500 as number);
  sharp(req.file.buffer)
    .resize(+width, +height)
    .toFormat('jpg')
    .toFile(`images/${req.file.filename}`);
  data.push(req.file.filename);
  console.log(data);
  next();
};

export default sharpResize;
