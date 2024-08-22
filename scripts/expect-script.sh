#!/usr/bin/env expect -f

# Set a default timeout (in seconds) for all expect commands
set timeout 10

# Start the command
spawn npx api install ./definitions/open-api.json -y

# Handle the first menu (e.g., JavaScript vs TypeScript)
expect -re "What language would you like to generate an SDK for?.*"
send "\033\[A"
send "\r"

# Handle the name input
expect -re "What would you like to identify this API as\?.*"
send "coingecko-sdk"
send "\r"

# End of interaction
expect eof
