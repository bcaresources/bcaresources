let currentSlideIndex = 0;
let imageLinks = [];

// Image links for Magnetic Storage Devices (reversed order)
const magneticStorageImages = [
    "https://drive.google.com/thumbnail?id=11hJ6aN4PbjsLeXrYsy_8eDimxxo5arKD&sz=s800",
    "https://drive.google.com/thumbnail?id=12Il_PeOjyR6FFeeLRQbbfGfUFox-iJHT&sz=s800",
    "https://drive.google.com/thumbnail?id=12DN0TRo6AK-74bzurbesbb__t-s3ZwK7&sz=s800",
    "https://drive.google.com/thumbnail?id=124lsj_OY_FsYpGwwowXUwc4qhQ73hpne&sz=s800",
    "https://drive.google.com/thumbnail?id=12-xJgOeZL2ixdm8DPvQ1BGh1RvxylR1g&sz=s800",
    "https://drive.google.com/thumbnail?id=11zaJSRHW9cigbrNLGmlmtUKw7xyvK0jS&sz=s800",
    "https://drive.google.com/thumbnail?id=11yxHwOej2kjRZQKWicFTurSpa4PLIkxM&sz=s800",
    "https://drive.google.com/thumbnail?id=11tSV-EUbEjTTDhqHDI4Nlh8lgpvxOyV9&sz=s800",
    "https://drive.google.com/thumbnail?id=11t-t5K5OGQuNubV-GphkwrJUp22rUOsg&sz=s800",
    "https://drive.google.com/thumbnail?id=11rWkXMSYBeTQRjTcu1Ve1iokWQDdeRBV&sz=s800",
    "https://drive.google.com/thumbnail?id=11qMS6ByraLX74hxmjmmL3mUDd1TcE3GB&sz=s800",
    "https://drive.google.com/thumbnail?id=11hQdqPAW_tGM0go7dtKUaB5hcZDBa75o&sz=s800",
    "https://drive.google.com/thumbnail?id=12iLvRds5K7czzLgTCw2yLokhMXW05opI&sz=s800",
    "https://drive.google.com/thumbnail?id=12ZGZtP2jceImSXJjYlrfzzh2qeQVVjXm&sz=s800",
    "https://drive.google.com/thumbnail?id=12ZGUUY8jEHYwqeQwrpXleLfLXo0rOBcP&sz=s800",
    "https://drive.google.com/thumbnail?id=12SzpuA90I-6JWE_KVhyOSL1GPNizMLjH&sz=s800",
    "https://drive.google.com/thumbnail?id=12KDLEMGh7o3bjVOiymppHcgni8U46VcP&sz=s800"
];

// Image links for P-N Junction Diode (add your links here)
const pnJunctionImages = [
    // Add links for P-N Junction Diode here
    "https://drive.google.com/thumbnail?id=13MaD6HTrAkcyEwq-Q1n5uEtpmddbtxJi&sz=s800",
    "https://drive.google.com/thumbnail?id=13e-T9lIOw9tIprzZHfh2trSSpTGCCczg&sz=s800",
    "https://drive.google.com/thumbnail?id=13bOyqOJBXsV9LcOKR6ZRKkZAzV6FB8Dx&sz=s800",
    "https://drive.google.com/thumbnail?id=13ZXrD9nKIsE591iqFBVHSFMa8BRO7F8f&sz=s800",
    "https://drive.google.com/thumbnail?id=13VI7R0xS45fryreMAqwraZkGToYoDrp1&sz=s800",
    "https://drive.google.com/thumbnail?id=13UMUZt30vGyPjKBhVLanLxT8RfnGBPDV&sz=s800",
    "https://drive.google.com/thumbnail?id=13PKi69chXFKQr6cQi1AaoYZz1RypvDl5&sz=s800",
    "https://drive.google.com/thumbnail?id=13MnInvTqwFloQH4E57Kt6iL-r661oIR3&sz=s800"
];

// Image links for CPU Scheduling (add your links here)
const cpuSchedulingImages = [
    "https://drive.google.com/thumbnail?id=13jUIVnpNc4Zx7NavuVEC5zmwo-6CDJUf&sz=s800",
    "https://drive.google.com/thumbnail?id=14X3VPK8JdSEPJRRF_tpgM6DQ73L9eXZ7&sz=s800",
    "https://drive.google.com/thumbnail?id=14VLewpmUT0pw9avjJerh1df7btFtLuYk&sz=s800",
    "https://drive.google.com/thumbnail?id=14UNzagDQM4lrZ5bQH6efNqJpfatnmqvC&sz=s800",
    "https://drive.google.com/thumbnail?id=14QkmluXxb2Z0voqT_ALwqt0ZJ3xBvMpu&sz=s800",
    "https://drive.google.com/thumbnail?id=14Oa37NW6h6zrRxAlntJg6r_FTrknnoiA&sz=s800",
    "https://drive.google.com/thumbnail?id=14D3KIFcXqxAex0c04u0ZH6WlGfsgGB0N&sz=s800",
    "https://drive.google.com/thumbnail?id=147np3chDvYm2nEXMeDh7H5_kGTOxTCCG&sz=s800",
    "https://drive.google.com/thumbnail?id=143tD5XS7hBfuRU9dGnPqugK0Im_AMsCc&sz=s800",
    "https://drive.google.com/thumbnail?id=13uXzjAcDiwY2b0F-ojOd7TM1OMUMTU6W&sz=s800",
    "https://drive.google.com/thumbnail?id=152lZfebYsLq0dE8wery5g4Mc7B9JnQS2&sz=s800",
    "https://drive.google.com/thumbnail?id=1528wK7gAZY45atVSyKUew_DW0Ci7FP9h&sz=s800",
    "https://drive.google.com/thumbnail?id=14wuaIrb9vlA0a8-loZdCSIaSjeNU9B60&sz=s800",
    "https://drive.google.com/thumbnail?id=14smhR6TMYdeBktMMcI3MNBDVK2AHejif&sz=s800",
    "https://drive.google.com/thumbnail?id=14qG0j3uY2Wa6fdK0scSRN6nCI4P0ymjp&sz=s800",
    "https://drive.google.com/thumbnail?id=14iXaNDPBSIs9vOliKrfAqVhkcmquaBkJ&sz=s800"
];

// Image links for Chat GPT (add your links here)
const chatGPTImages = [
    "https://drive.google.com/thumbnail?id=15EyfFTNodlcgqfXinpnJEIlncFEtb3kz&sz=s800",
    "https://drive.google.com/thumbnail?id=16hk3UeLpH0NHScmEG3CcB1kj_gNQYVbT&sz=s800",
    "https://drive.google.com/thumbnail?id=16cTp9GDZvZPBMw51-vlfD58mOutyssxx&sz=s800",
    "https://drive.google.com/thumbnail?id=16X7GTEfMtCmRxsndGpDPoZJgPVnbrA0u&sz=s800",
    "https://drive.google.com/thumbnail?id=16IT3qWKuR5k2hkg_YAd6GlIosiT5-_t5&sz=s800",
    "https://drive.google.com/thumbnail?id=168jwRD0-1BrjGAkjGTr7LMmXCRytMB9i&sz=s800",
    "https://drive.google.com/thumbnail?id=1633DTFj91QjgHmxAdJEli4vQpTLwHmKI&sz=s800",
    "https://drive.google.com/thumbnail?id=15vHR1GBwH56KTbdeWY_Li0XqZhFU9nat&sz=s800",
    "https://drive.google.com/thumbnail?id=15v2DrqvU63keU4eXn0MYTsv_lAnapoco&sz=s800",
    "https://drive.google.com/thumbnail?id=15_vi7MCSBK9vviEPDjonXkjonWssC-GJ&sz=s800",
    "https://drive.google.com/thumbnail?id=15_JKvoaAHxWhHyH7OnLO4DMwmHxgNiB3&sz=s800",
    "https://drive.google.com/thumbnail?id=15Olqp5gcv9GbIbBhn5JXdeqXBgDpZyMn&sz=s800",
    "https://drive.google.com/thumbnail?id=15IAcHl6zSyDDgoLMOvGV9XDxXooDVKQY&sz=s800",
    "https://drive.google.com/thumbnail?id=172_v_6KCnM0sWP8WjxSjNiE4h5hLI1y1&sz=s800",
    "https://drive.google.com/thumbnail?id=17-8AS00EPc1hD8F31NLqjszQF_n_nJ5q&sz=s800",
    "https://drive.google.com/thumbnail?id=16z5__Um8EICGh-9bjDCcnLA49ar3TxVw&sz=s800",
    "https://drive.google.com/thumbnail?id=16ydZldLN3Yt3F1DJ8m55OcIDvO689dg2&sz=s800",
    "https://drive.google.com/thumbnail?id=16u3V27FgQ7K1TSwcessvT4Axz6Ck5MIP&sz=s800",
    "https://drive.google.com/thumbnail?id=16rkyptVwVNVk1rvKEp1bovGp6z5iC1Hc&sz=s800",
    "https://drive.google.com/thumbnail?id=16p-NOF8GAKIpk0Q7e9EkZhUPnCaD96jn&sz=s800",
    "https://drive.google.com/thumbnail?id=16kFPCucN3LHgAqj6ElHrMnOPfwcQ_jUO&sz=s800"
];

// Image links for Linux (add your links here)
const linuxImages = [
    "https://drive.google.com/thumbnail?id=17RnZOM3W2T8rFFgvAowBjnmWRYMLQuyH&sz=s800",
    "https://drive.google.com/thumbnail?id=18Ni9F4kFhdwwle4YoGim8e5OyFf-oJg3&sz=s800",
    "https://drive.google.com/thumbnail?id=18I1oz8NyK0kx7snYt3FFF4RiMmkf-3Et&sz=s800",
    "https://drive.google.com/thumbnail?id=18H2ggt_527mRPb5ee-EFL-aiyJR4e38w&sz=s800",
    "https://drive.google.com/thumbnail?id=18FF_X9tS4geeCf7UU84zNPW1hHKyGY8n&sz=s800",
    "https://drive.google.com/thumbnail?id=18Bi2sS5yr6YwTPnXtc0jaLOzHwDiOvYq&sz=s800",
    "https://drive.google.com/thumbnail?id=188WmB6fGK9jc6oMabkz_sHozHRZp11qO&sz=s800",
    "https://drive.google.com/thumbnail?id=17vkOeN--UeFZ8yMvZbp_0inHkmPKf0C3&sz=s800",
    "https://drive.google.com/thumbnail?id=17tVB9_xKMm44b4S89XUDFaUTsUaR4GBL&sz=s800",
    "https://drive.google.com/thumbnail?id=17sWcRIXFUJ2Od4bBuap49D6fDhtneNOj&sz=s800",
    "https://drive.google.com/thumbnail?id=17j8chZojRzFmM-codkgMqefLmpGyfpj3&sz=s800",
    "https://drive.google.com/thumbnail?id=17_sRF3u_d7lsPxs4WyYfOOa8wjOqdK2P&sz=s800",
    "https://drive.google.com/thumbnail?id=17_TCUEENTHAwzMo-b_xvTxtrzFN-HjRH&sz=s800",
    "https://drive.google.com/thumbnail?id=17_7_rqHm64NXk5nlbo8Dj_i2ixPg271s&sz=s800",
    "https://drive.google.com/thumbnail?id=17SeGHBh-blDaZP6rJkx6pPk8HGBSF0jd&sz=s800"
];

// Open Modal
function openModal(presentationType, downloadLink) {
    const modal = document.getElementById("presentationModal");
    const downloadButton = document.getElementById("downloadLink");

    // Set the correct image links based on the presentation type
    if (presentationType === "magneticStorage") {
        imageLinks = magneticStorageImages;
    } else if (presentationType === "pnJunction") {
        imageLinks = pnJunctionImages;
    } else if (presentationType === "cpuScheduling") {
        imageLinks = cpuSchedulingImages;
    } else if (presentationType === "chatGPT") {
        imageLinks = chatGPTImages;
    } else if (presentationType === "linux") {
        imageLinks = linuxImages;
    }

    // Set download link
    downloadButton.href = downloadLink;

    // Show the first image
    currentSlideIndex = 0;
    updateSlide();

    // Show modal
    modal.style.display = "block";
}

// Close Modal
function closeModal() {
    const modal = document.getElementById("presentationModal");
    modal.style.display = "none";
}

// Update Slide
function updateSlide() {
    const slideshowImage = document.getElementById("slideshowImage");
    const loadingSpinner = document.getElementById("loadingSpinner");

    // Show loading spinner
    loadingSpinner.style.display = "block";
    slideshowImage.src = ""; // Clear the previous image

    // Load the current image
    const currentImage = new Image();
    currentImage.src = imageLinks[currentSlideIndex];
    currentImage.onload = () => {
        slideshowImage.src = currentImage.src; // Set the image source
        loadingSpinner.style.display = "none"; // Hide the spinner
    };

    // Preload the next image (if available)
    if (currentSlideIndex < imageLinks.length - 1) {
        const nextImage = new Image();
        nextImage.src = imageLinks[currentSlideIndex + 1];
    }
}

// Go to the previous slide
function previousSlide() {
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSlide();
    }
}

// Go to the next slide
function nextSlide() {
    if (currentSlideIndex < imageLinks.length - 1) {
        currentSlideIndex++;
        updateSlide();
    }
}