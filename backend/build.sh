#!/bin/bash
# Build script for Render deployment

echo "🔧 Installing dependencies..."
pip install -r requirements.txt

echo "📦 Setting up database..."
python setup_db.py

echo "✅ Build complete!"

