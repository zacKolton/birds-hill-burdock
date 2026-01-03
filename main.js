function openImageModal(src, alt) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("image-modal-img");
    if (!modal || !modalImg) return;

    modalImg.src = src;
    modalImg.alt = alt || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
}

function closeImageModal() {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("image-modal-img");
    if (!modal) return;

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    if (modalImg) {
        modalImg.src = "";
        modalImg.alt = "";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Header text and background
    const heroSection = document.querySelector(".hero");
    if (heroSection && typeof IMAGE_HEADER === "string") {
        heroSection.style.backgroundImage = `url("${IMAGE_HEADER}")`;
    }

    const headerTextEl = document.getElementById("header-text");
    if (headerTextEl && typeof TEXT_HEADER === "string") {
        headerTextEl.textContent = TEXT_HEADER;
    }

    // Feature block
    const featureImageEl = document.getElementById("feature-image");
    if (featureImageEl && typeof IMAGE_FEATURE === "string") {
        featureImageEl.src = IMAGE_FEATURE;
    }

    const sloganTextEl = document.getElementById("slogan-text");
    if (sloganTextEl && typeof TEXT_SLOGAN === "string") {
        sloganTextEl.textContent = TEXT_SLOGAN;
    }

    // Section headers
    const productsHeaderEl = document.getElementById("products-header");
    if (productsHeaderEl && typeof TEXT_HEADER_PRODUCTS === "string") {
        productsHeaderEl.textContent = TEXT_HEADER_PRODUCTS;
    }

    const aboutHeaderEl = document.getElementById("about-header");
    if (aboutHeaderEl && typeof TEXT_HEADER_ABOUT === "string") {
        aboutHeaderEl.textContent = TEXT_HEADER_ABOUT;
    }

    const mediaHeaderEl = document.getElementById("media-header");
    if (mediaHeaderEl && typeof TEXT_HEADER_MEDIA === "string") {
        mediaHeaderEl.textContent = TEXT_HEADER_MEDIA;
    }

    const contactHeaderEl = document.getElementById("contact-header");
    if (contactHeaderEl && typeof TEXT_HEADER_CONTACT === "string") {
        contactHeaderEl.textContent = TEXT_HEADER_CONTACT;
    }

    // About text
    const aboutTextEl = document.getElementById("about-text");
    if (aboutTextEl && typeof TEXT_CONTENT_ANOUT === "string") {
        aboutTextEl.textContent = TEXT_CONTENT_ANOUT;
    }

    // Contact text
    const contactTextEl = document.getElementById("contact-text");
    if (contactTextEl && typeof TEXT_CONTENT_CONTACT === "string") {
        contactTextEl.textContent = TEXT_CONTENT_CONTACT;
    }

    // Products grid
    const productGridEl = document.getElementById("product-grid");
    if (productGridEl && Array.isArray(PRODUCT_DETAILS)) {
        PRODUCT_DETAILS.forEach(function (product) {
            const card = document.createElement("article");
            card.className = "product-card";

            const img = document.createElement("img");
            img.className = "product-image";
            img.src = product.logo_path;
            img.alt = product.name || "Product image";

            // click-to-expand
            img.addEventListener("click", function () {
                openImageModal(product.logo_path, product.name || "Product image");
            });

            const nameEl = document.createElement("h3");
            nameEl.className = "product-name";
            nameEl.textContent = product.name || "";

            const priceEl = document.createElement("p");
            priceEl.className = "product-price";
            priceEl.textContent = product.price || "";

            const buttonEl = document.createElement("button");
            buttonEl.className = "product-buy";
            buttonEl.type = "button";
            buttonEl.textContent = "Buy";

            card.appendChild(img);
            card.appendChild(nameEl);
            card.appendChild(priceEl);
            card.appendChild(buttonEl);

            productGridEl.appendChild(card);
        });
    }

    // Media grid
    const mediaGridEl = document.getElementById("media-grid");
    if (mediaGridEl && Array.isArray(MEDIA_ITEMS)) {
        MEDIA_ITEMS.forEach(function (item) {
            const wrapper = document.createElement("figure");
            wrapper.className = "media-item";

            const img = document.createElement("img");
            img.src = item.media_path;
            img.alt = "";

            wrapper.appendChild(img);
            mediaGridEl.appendChild(wrapper);
        });
    }

    // Footer logo
    const footerLogoEl = document.getElementById("footer-logo");
    if (footerLogoEl && typeof IMAGE_LOGO_FOOTER === "string") {
        footerLogoEl.src = IMAGE_LOGO_FOOTER;
    }

    // Modal close button
    const closeBtn = document.querySelector(".image-modal-close");
    if (closeBtn) {
        closeBtn.addEventListener("click", closeImageModal);
    }
});
