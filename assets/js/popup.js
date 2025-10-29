
function showThankYouPopup() {
    // Create the popup elements
    const popupOverlay = document.createElement('div');
    popupOverlay.className = 'fixed inset-0 bg-charcoal bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300';
    popupOverlay.style.opacity = '0';

    const popupContent = document.createElement('div');
    popupContent.className = 'bg-cream rounded-lg shadow-xl p-8 md:p-12 max-w-md w-full mx-4 text-center transform transition-transform duration-300';
    popupContent.style.transform = 'scale(0.95)';

    const closeButton = document.createElement('button');
    closeButton.className = 'absolute top-4 right-4 text-cafe hover:text-charcoal transition-colors';
    closeButton.innerHTML = '<i class="fas fa-times fa-lg"></i>';

    const title = document.createElement('h2');
    title.className = 'font-cormorant text-3xl md:text-4xl text-charcoal mb-4';
    title.textContent = 'Thank You';

    const message = document.createElement('p');
    message.className = 'font-montserrat text-cafe/80 leading-relaxed mb-8';
    message.textContent = 'Thank you for your interest. For more information, please contact us via the numbers below.';

    const whatsappContainer = document.createElement('div');
    whatsappContainer.className = 'flex justify-center gap-4';

    const whatsappButton1 = document.createElement('a');
    whatsappButton1.href = 'https://wa.me/201004616391';
    whatsappButton1.target = '_blank';
    whatsappButton1.className = 'flex items-center gap-3 px-6 py-3 bg-charcoal text-cream text-sm tracking-widest uppercase hover:bg-cafe transition-all duration-500 font-medium';
    whatsappButton1.innerHTML = '<i class="fab fa-whatsapp fa-lg"></i><span>WhatsApp 2</span>';

    const whatsappButton2 = document.createElement('a');
    whatsappButton2.href = 'https://wa.me/201003170567';
    whatsappButton2.target = '_blank';
    whatsappButton2.className = 'flex items-center gap-3 px-6 py-3 bg-charcoal text-cream text-sm tracking-widest uppercase hover:bg-cafe transition-all duration-500 font-medium';
    whatsappButton2.innerHTML = '<i class="fab fa-whatsapp fa-lg"></i><span>WhatsApp 1</span>';

    // Assemble the popup
    whatsappContainer.appendChild(whatsappButton1);
    whatsappContainer.appendChild(whatsappButton2);
    popupContent.appendChild(closeButton);
    popupContent.appendChild(title);
    popupContent.appendChild(message);
    popupContent.appendChild(whatsappContainer);
    popupOverlay.appendChild(popupContent);
    document.body.appendChild(popupOverlay);

    // Animate the popup
    setTimeout(() => {
        popupOverlay.style.opacity = '1';
        popupContent.style.transform = 'scale(1)';
    }, 50);

    // Close the popup
    const closePopup = () => {
        popupOverlay.style.opacity = '0';
        popupContent.style.transform = 'scale(0.95)';
        setTimeout(() => {
            document.body.removeChild(popupOverlay);
        }, 300);
    };

    closeButton.addEventListener('click', closePopup);
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
}
