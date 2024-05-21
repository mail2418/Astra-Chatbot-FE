# Gunakan node image dari Docker Hub sebagai base image
FROM oven/bun:1 as builder

# Set working directory di dalam container
WORKDIR /astra-chatbot-fe

# Copy package.json dan package-lock.json ke dalam container
COPY package.json .
COPY bun.lockb .

# Install dependencies
RUN bun install --frozen-lockfile

# Copy seluruh kode aplikasi ke dalam container
COPY . .

# Build aplikasi Next.js
RUN bun run build

# Tahap kedua: Production
FROM --platform=linux/amd64 oven/bun:1

# Set working directory di dalam container
WORKDIR /astra-chatbot-fe

# Membuat grup dan pengguna sistem
RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 --ingroup nodejs nextjs

# Salin node_modules dan build hasil dari tahap pertama
COPY --from=builder --chown=nextjs:nodejs /astra-chatbot-fe .

# Mengubah kepemilikan direktori kerja
RUN chown -R nextjs:nodejs /astra-chatbot-fe

USER nextjs

# Expose port 3000 yang digunakan oleh Next.js
EXPOSE 3000

ENV PORT 3000

# Command untuk menjalankan aplikasi Next.js di mode production
CMD ["bun", "run", "start"]
