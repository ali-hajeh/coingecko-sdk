#!/bin/sh

./scripts/refresh-sdk.sh

echo "Building Project"
npx tsc
echo "Project built successfully"
