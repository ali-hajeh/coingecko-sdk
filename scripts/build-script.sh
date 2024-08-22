#!/bin/sh

echo "Rebuilding API..."

echo "Cleaning up old API"
rm -rf ./.api

echo "Generating new API"
./scripts/expect-script.sh

echo "\n"

if [ ! -d ./.api ]; then
    echo "API not generated, exiting..."
    exit 1
fi

echo "Building Project"
npx tsc
echo "Project built successfully"
