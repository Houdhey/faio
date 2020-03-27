# faio
fingerprint  face id

# A faire
npm run install

# Build with capacitor : Manips
npm install --save @capacitor/core @capacitor/cli
npx cap init
npx cap add android    (if error message "index.html" doesn't exist in www,  create empty index.html in www folder)
npm run build
npx cap copy
npx cap open android (or ios)


