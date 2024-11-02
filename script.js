// Optional: Scroll to top when logo is clicked
const scrollTopBtn = document.getElementById('scrollTopBtn');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Gambar untuk setiap modal
const modalImages = {
    modal1: [
        "image/spanduk.png",
        "image/logokg.png",
    ],
    modal2: [
        "image/responsiveweb.png",
        "https://placehold.co/800x400?text=Modal+2+Image+2",
        "https://placehold.co/800x400?text=Modal+2+Image+3"
    ],
    modal3: [
        "image/Screenshot 2024-10-21 184431 (1).png",
        "image/Screenshot 2024-10-21 184337.png",
    ]
};

let currentIndex = 0;
let currentModalId = null;

// Fungsi untuk menampilkan gambar berdasarkan modal
function showImage(index) {
    const images = modalImages[currentModalId];
    const imgElement = document.querySelector('.modal.show .carousel-image');
    if (imgElement && images) {
        imgElement.src = images[index];
    }
}

// Fungsi untuk membuka modal
function openModal(modalId) {
    currentModalId = modalId;
    currentIndex = 0; // Reset index ketika modal dibuka
    const modal = document.getElementById(modalId);
    if (modal) { 
        modal.style.display = 'flex'; 
        setTimeout(() => {
            modal.classList.add('show');
            showImage(currentIndex); // Tampilkan gambar pertama saat modal dibuka
        }, 10); 
    } else {
        console.error(`Modal with ID "${modalId}" not found.`);
    }
}

// Fungsi untuk menutup modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) { 
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none'; 
        }, 500); 
    } else {
        console.error(`Modal with ID "${modalId}" not found.`);
    }
}

// Fungsi untuk gambar sebelumnya
function prevImage() {
    const images = modalImages[currentModalId];
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    showImage(currentIndex);
}

// Fungsi untuk gambar berikutnya
function nextImage() {
    const images = modalImages[currentModalId];
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    showImage(currentIndex);
}


