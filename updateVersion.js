const fs = require('fs')
const path = require('path')

const VERSION = process.env.RELEASE_VERSION

if (!VERSION) {
    console.error("RELEASE_VERSION environment variable is not set.")
    process.exit(1)
}

// Path to the file where `DOWNLOAD_LINKS` is defined
const filePath = path.join(__dirname, './src/lib/config.ts')

// Read file content
let content = fs.readFileSync(filePath, 'utf-8')

// Update URLs in DOWNLOAD_LINKS
content = content.replace(/\/v\d+\.\d+\.\d+\//g, `/v${VERSION}/`)

fs.writeFileSync(filePath, content);

console.log(`Updated DOWNLOAD_LINKS version to v${VERSION}`)
