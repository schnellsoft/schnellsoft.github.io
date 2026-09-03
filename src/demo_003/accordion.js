class Accordion {
    /**
     * Connects accordion triggers to their panels.
     * @param {HTMLElement} root Accordion container.
     * @example new Accordion(document.querySelector('[data-accordion]'));
     */
    constructor(root) {
        if (!(root instanceof HTMLElement)) {
            return;
        }

        this.root = root;
        this.items = [...root.querySelectorAll('.accordion__item')];
        this.items.forEach((item) => {
            const trigger = item.querySelector('.accordion__trigger');

            trigger?.addEventListener('click', () => this.toggle(item));
        });
    }

    /**
     * Opens the selected item and closes all other items.
     * @param {HTMLElement} selectedItem Item controlled by the clicked trigger.
     */
    toggle(selectedItem) {
        const selectedTrigger = selectedItem.querySelector('.accordion__trigger');
        const selectedPanel = selectedItem.querySelector('.accordion__panel');

        if (!(selectedTrigger instanceof HTMLButtonElement) || !(selectedPanel instanceof HTMLElement)) {
            return;
        }

        const shouldOpen = selectedTrigger.getAttribute('aria-expanded') !== 'true';

        this.items.forEach((item) => {
            const trigger = item.querySelector('.accordion__trigger');
            const panel = item.querySelector('.accordion__panel');

            if (!(trigger instanceof HTMLButtonElement) || !(panel instanceof HTMLElement)) {
                return;
            }

            const isOpen = item === selectedItem && shouldOpen;
            item.classList.toggle('is-open', isOpen);
            trigger.setAttribute('aria-expanded', String(isOpen));
            panel.hidden = !isOpen;
        });
    }
}

const accordionRoot = document.querySelector('[data-accordion]');
new Accordion(accordionRoot);
