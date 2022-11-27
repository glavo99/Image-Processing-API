import express, { NextFunction, Request, Response } from 'express';
import multerController from '../controller/multerController';
import sharpController from '../controller/sharpController';
import resizeController from '../controller/resizeController';
import imageExist from '../controller/imageExist';
import cachingImage from '../controller/caching';
import resizeErrorHandler from '../controller/errorHandler';
import data from '../utils/data';

const routes = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res.json('please provide url query containing path of image after /photo');
});

routes.post(
  '/photo',
  multerController,
  sharpController,
  (req: Request, res: Response): void => {
    res.send('image uploaded successfully!');
  }
);

routes.get('/photo', (req: Request, res: Response): void => {
  const url = `${process.cwd()}/images/${req.query.url}` as string;
  const imageUrl = `images/${req.query.url}`;
  const check = data.includes(imageUrl.slice(7));
  if (check) {
    res.sendFile(url);
  } else if (!check) {
    res.status(404).send('image not found Try to provide url as query');
  }
});

routes.get(
  '/resize',
  resizeErrorHandler,
  cachingImage,
  imageExist,
  resizeController,
  (req: Request, res: Response): void => {
    const url = `${process.cwd()}/images/${req.query.width || ''}-${
      req.query.height || ''
    }-${req.query.url}` as string;
    res.sendFile(url);
  }
);

export default routes;
