# =========================
# Nuxt 3 Cache Utilities
# (npm version)
# =========================

.PHONY: dev install clean cacheclear reset info cftunnel

## Start dev server
dev:
	npm run dev

## Install dependencies
install:
	npm install

## Remove Nuxt / Vite build artifacts
clean:
	rm -rf .nuxt .output .vite public/_nuxt

## Clear all caches (Nuxt, Vite, Nuxt UI, Nuxt Image)
cacheclear:
	rm -rf \
		.nuxt \
		.output \
		.vite \
		public/_nuxt \
		node_modules/.cache \
		.cache

## Full reset: caches + node_modules + lockfile
reset:
	rm -rf \
		.nuxt \
		.output \
		.vite \
		public/_nuxt \
		node_modules \
		node_modules/.cache \
		.cache \
		package-lock.json
	npm cache clean --force
	npm install

## Debug info
info:
	node -v
	npm -v
	npx nuxi info

cftunnel:
	cloudflared tunnel --url http://localhost:3000 