/**
 * Fetches the services catalog and renders it as a nested, scrollable price list.
 * @returns {Promise<void>}
 */
async function loadServices() {
    const container = document.getElementById("services-scroll");
    if (!container) return;

    try {
        const response = await fetch("../src/data/services.json");
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        /** @type {{ categories: Array<Record<string, unknown>> }} */
        const data = await response.json();
        const categories = Array.isArray(data.categories) ? data.categories : [];

        container.textContent = "";
        categories.forEach((category) => {
            container.appendChild(buildCategorySection(category, 2));
        });
    } catch (error) {
        container.textContent = "Serviciile nu au putut fi încărcate momentan.";
        console.error("Failed to load services.json", error);
    }
}

/**
 * Builds a <section> for a category (or subcategory), including its own
 * service list and any nested subcategories.
 * @param {{ name: string, services?: Array<{name: string, price: number|string, currency: string}>, subcategories?: Array<Record<string, unknown>> }} category
 * @param {number} headingLevel - heading tag level to use for this category's title (2-6)
 * @returns {HTMLElement}
 */
function buildCategorySection(category, headingLevel) {
    const section = document.createElement("section");
    section.className = "services-group";

    const level = Math.min(headingLevel, 6);
    const heading = document.createElement(`h${level}`);
    heading.className = "services-group__title";
    heading.textContent = category.name ?? "";
    section.appendChild(heading);

    if (Array.isArray(category.services) && category.services.length > 0) {
        section.appendChild(buildServiceList(category.services));
    }

    if (Array.isArray(category.subcategories)) {
        category.subcategories.forEach((subcategory) => {
            section.appendChild(buildCategorySection(subcategory, level + 1));
        });
    }

    return section;
}

/**
 * Builds a <ul> listing each service's name and formatted price.
 * @param {Array<{name: string, price: number|string, currency: string}>} services
 * @returns {HTMLUListElement}
 */
function buildServiceList(services) {
    const list = document.createElement("ul");
    list.className = "services-list";

    services.forEach((service) => {
        const item = document.createElement("li");
        item.className = "services-list__item";

        const name = document.createElement("span");
        name.className = "services-list__name";
        name.textContent = service.name ?? "";

        const price = document.createElement("span");
        price.className = "services-list__price";
        price.textContent = `${service.price} ${service.currency}`.trim();

        item.append(name, price);
        list.appendChild(item);
    });

    return list;
}

document.addEventListener("DOMContentLoaded", loadServices);
