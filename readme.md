# Image Processing API

## Endpoints

GET -- http://localhost:3000/photo
provide url like this http://localhost:3000/photo?url=icelandwaterfall.jpg

POST -- http://localhost:3000/photo
provide photo in postman with key photo and type file and value of image

GET -- http://localhost:3000/resize?url=encenadaport.jpg&height=300&width=500
resize images like this

## Scripts

"start-dev": "nodemon src/index.ts",
"start": "nodemon dist/index.js",
"build": "npx tsc",
"jasmine": "jasmine",
"test": "npm run build && npm run jasmine",
"prettier": "prettier --config .prettierrc src/**/\*.ts --write",
"prettier_js": "prettier --config .prettierrc dist/**/_.js --write",
"lint": "eslint src/\*\*/_.ts"

## Technologies

Project is created with:

- Microsoft VS Code
- Node.js
- TypeScript
- express
- postman

## Copyright (c)

@Glavo
