const https = require('https');
const fs = require('fs');
const path = require('path');

// The URL of the image to download
const url = 'https://substackcdn.com/image/fetch/w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffd8206cd-20b3-4618-80a1-368614ee6770_1280x1012.jpeg';

// The path where you want to save the image
const filePath = path.join(__dirname, 'assets', 'images', 'posts', 'night-grove-wiesenfeld.jpg');

// Create a write stream for the file
const file = fs.createWriteStream(filePath);

// Download the image
https.get(url, (response) => {
  // Check if the request was successful
  if (response.statusCode !== 200) {
    console.error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`);
    file.close();
    fs.unlinkSync(filePath);
    return;
  }

  // Pipe the image data to the file
  response.pipe(file);

  file.on('finish', () => {
    file.close();
    console.log(`Image downloaded to ${filePath}`);
  });
}).on('error', (err) => {
  console.error(`Error downloading image: ${err.message}`);
  file.close();
  fs.unlinkSync(filePath);
});
