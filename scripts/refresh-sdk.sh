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

# check that ./api/apis/coingecko-sdk/package.lock exists before proceeding, otherwise go to the directory and run npm install
if [ ! -f ./.api/apis/coingecko-sdk/package-lock.json ]; then
    echo "Installing dependencies for API (For some reason, the package-lock.json file is missing)"
    echo "Changing directory to ./.api/apis/coingecko-sdk"
    cd ./.api/apis/coingecko-sdk
    npm install
    echo "Changing directory back to root"
    cd ../../../
fi

echo "API generated successfully"

echo "Installing dependencies"
npm install

echo "API rebuilt successfully"
