import { Request } from 'express';
import multer from 'multer';

const multerStorage = multer.memoryStorage();

const multerFilter = (
  req: Request,
  file: { mimetype: string },
  cb: CallableFunction
): void => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb('error', false);
  }
};

const upload = multer({ storage: multerStorage, fileFilter: multerFilter });

const multerUpload = upload.single('photo');

export default multerUpload;
