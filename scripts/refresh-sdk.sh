echo "Rebuilding API..."

echo "Generating new API"
./scripts/expect-script.sh

echo "\n"

if [ ! -d ./.api ]; then
    echo "API not generated, exiting..."
    exit 1
fi

# we are gonna move coingecko-sdk to ./src folder
echo "Cleaning up old API"
rm -rf ./src/coingecko-sdk
echo "Moving API to ./src"
mv ./.api/apis/coingecko-sdk ./src

echo "Cleaning up .api folder"
rm -rf ./.api

echo "API generated successfully"

echo "Installing dependencies"
npm install

echo "API rebuilt successfully"
