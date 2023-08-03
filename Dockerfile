FROM node:18-alpine
WORKDIR /app
COPY package.json ./
RUN npm install -g pnpm
RUN pnpm i
COPY . .
RUN pnpm run build && pnpm prune --prod
EXPOSE 3000
CMD ["node", "build"]