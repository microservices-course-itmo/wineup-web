FROM node:alpine as deps

RUN apk add --no-cache libc6-compat
WORKDIR /out

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

RUN npm ci

RUN npm run build

# Rebuild the source code only when needed
FROM node:alpine AS builder
WORKDIR /out
COPY . .
COPY --from=deps /out/node_modules ./node_modules
RUN npm build

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /out

ENV NODE_ENV production

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /out/next.config.js ./
COPY --from=builder /out/public ./public
COPY --from=builder /out/.next ./.next
COPY --from=builder /out/node_modules ./node_modules

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /out/.next
USER nextjs

EXPOSE 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry. 
RUN npx next telemetry disable

CMD ["node_modules/.bin/next", "start"]