import sharp from 'sharp';
import * as fs from 'fs';
import { NextFunction, Request, Response } from 'express';
import data from '../utils/data';

const sharpConvert = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const url = `images/${req.query.url}`;

  const height = req.query.height as String;
  const width = req.query.width as String;
  const image = await sharp(url)
    .resize(+width || null, +height || null)
    .toBuffer();
  fs.writeFileSync(
    `images/${req.query.width || ''}-${req.query.height || ''}-${
      req.query.url
    }`,
    image
  );
  data.push(
    `${req.query.width || ''}-${req.query.height || ''}-${req.query.url}`
  );
  console.log(data);
  next();
};

export default sharpConvert;
