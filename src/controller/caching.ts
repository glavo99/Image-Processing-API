import express, { NextFunction, Request, Response } from 'express';
import data from '../utils/data';

const cachingImage = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const url = `${process.cwd()}/images/${req.query.width || ''}-${
    req.query.height || ''
  }-${req.query.url}` as string;
  if (
    data.includes(
      `${req.query.width || ''}-${req.query.height || ''}-${req.query.url}`
    )
  ) {
    return res.sendFile(url);
  }

  return next();
};

export default cachingImage;
