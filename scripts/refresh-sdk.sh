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

echo "API generated successfully"

echo "Installing dependencies"
npm install

echo "API rebuilt successfully"