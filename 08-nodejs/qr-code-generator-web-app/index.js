// Import qr module
import qr from "https://cdn.jsdelivr.net/npm/qr-image@4.0.0/dist/qr-image.min.mjs";

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generateQrCodeBtn').addEventListener('click', function () {
        const urlInput = document.getElementById('urlInput');
        const url = urlInput.value.trim();

        if (url) {
            // Generate the QR code
            const qr_svg = qr.image(url);
            qr_svg.pipe(fs.createWriteStream("qr.png"));

            // Save the URL to file using fs.promises.appendFile
            fs.promises.appendFile("url.txt", `${url}\n`)
                .then(() => {
                    // Display success message
                    document.getElementById('successMessage').style.display = 'block';
                })
                .catch((err) => {
                    console.error("Error saving URL to file:", err);
                });
        } else {
            // Handle empty URL input
            alert('Please enter a valid URL.');
        }
    });
});
