# Gunakan node image dari Docker Hub sebagai base image
FROM oven/bun:1 as builder

# Set working directory di dalam container
WORKDIR /app

# Copy package.json dan package-lock.json ke dalam container
COPY package.json .
COPY bun.lockb .

# Install dependencies
RUN bun install --frozen-lockfile

# Copy seluruh kode aplikasi ke dalam container
COPY . .

# Build aplikasi Next.js
RUN bun run build

# Stage kedua, untuk production
FROM oven/bun:1

# Set working directory di dalam container
WORKDIR /app

# Copy node_modules dan build hasil dari stage pertama
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

# Expose port 3000 yang digunakan oleh Next.js
EXPOSE 3000

# Command untuk menjalankan aplikasi Next.js di mode production
CMD ["bun", "run", "start"]
