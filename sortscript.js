function sortGallery(criteria) {
    const galleryGrid = document.querySelector('.gallery-grid');
    const items = Array.from(galleryGrid.children);

    items.sort((a, b) => {
        if (criteria === 'type') {
            const aType = a.getAttribute('data-type').toLowerCase();
            const bType = b.getAttribute('data-type').toLowerCase();

            if (aType !== bType) {
                return aType.localeCompare(bType);
            }

            const aName = a.getAttribute('data-name').toLowerCase();
            const bName = b.getAttribute('data-name').toLowerCase();
            return aName.localeCompare(bName);
        } else if (criteria === 'date') {
            const aDate = new Date(a.getAttribute('data-date'));
            const bDate = new Date(b.getAttribute('data-date'));
            return bDate - aDate;
        }
    });

    items.forEach(item => galleryGrid.appendChild(item));
}
