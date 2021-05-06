FROM node AS build
WORKDIR /workspace
COPY package.json package-lock.json rollup.config.js tsconfig.json ./
COPY src ./src
# TODO use ARGS to allow cache and reduce network throttle
RUN npm ci && npm run build

FROM node
WORKDIR /app
COPY package.json package-lock.json ./
COPY --from=build /workspace/dist ./dist
RUN npm ci --production
# TODO use LABEL, EXPOSE, ENV, VOLUME, USER, STOPSIGNAL, HEALTHCHECK
CMD ["node", "./dist/main.js"]
