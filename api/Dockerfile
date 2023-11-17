# using the node image as base 
FROM node:20
# creating a working dir
WORKDIR /usr/src
# copying all the config files 
COPY ["package.json", "yarn.lock",".env","tsconfig.json","./"]
# copying all the files to working directory src
COPY ./src ./src
# installing packages
RUN yarn install
# running the app in dev mode
CMD yarn run dev

