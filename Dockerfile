FROM node AS build
WORKDIR /workspace
COPY package.json package-lock.json src rollup.config.js tsconfig.json .
# TODO use cache and reduce network throttle
RUN npm ci
RUN npm run build

FROM node
WORKDIR /app
COPY package.json package-lock.json .
COPY --from=build dist .
RUN npm ci --production
CMD ['node', './dist/main.js']
