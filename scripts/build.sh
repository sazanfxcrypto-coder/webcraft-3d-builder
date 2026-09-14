#!/bin/bash

# WebCraft 3D Builder - Build Script

echo "🔨 Building WebCraft 3D Builder..."

npm run lint
npm run build

echo "✅ Build complete!"
echo "📦 Ready for deployment"
