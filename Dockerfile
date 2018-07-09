FROM node:10-alpine
WORKDIR /app
ADD . /app
RUN apk add --no-cache --virtual newrelic-build-deps \
    make python gcc g++ libgcc
RUN npm install --only=production
RUN apk del newrelic-build-deps
EXPOSE 3000
ENV PORT 3000
ENV PYTHON python2
CMD ["node", "server/index.js"]
