const attractions = [
    {
        id: 1,
        title: "Колизей",
        category: "История",
        location: "Рим, Италия",
        type: "Античный амфитеатр",
        era: "I век н.э.",
        description:
            "Один из самых известных символов Древнего Рима и величайшее достижение римской инженерии. Колизей вмещал до 80 000 зрителей и использовался для гладиаторских поединков, театральных представлений и общественных зрелищ.",
        image: "https://images.unsplash.com/photo-1522560101715-e0e09503a023?w=800&q=80"
    },
    {
        id: 2,
        title: "Китайская стена",
        category: "История",
        location: "Китай",
        type: "Фортификационное сооружение",
        era: "VII век до н.э. — XVII век",
        description:
            "Массивная система укреплений, протянувшаяся на тысячи километров через северный Китай. Строилась веками для защиты от набегов кочевников и считается одним из самых grandiosных архитектурных наследий человечества.",
        image: "https://images.unsplash.com/photo-1530148367079-cb98e76541e4?w=800&q=80"
    },
    {
        id: 3,
        title: "Мачу-Пикчу",
        category: "История",
        location: "Куско, Перу",
        type: "Инкский город",
        era: "XV век",
        description:
            "Затерянный город инков, расположенный на высоте 2430 метров в Андах. Открытый для внешнего мира в 1911 году, этот объект поражает своей каменной кладкой и потрясающими видами на окружающие горы.",
        image: "https://images.unsplash.com/photo-1585782381341-4400c282c98e?w=800&q=80"
    },
    {
        id: 4,
        title: "Эйфелева башня",
        category: "Архитектура",
        location: "Париж, Франция",
        type: "Железная башня",
        era: "1889",
        description:
            "Главный символ Парижа и одна из самых узнаваемых конструкций в мире. Построена к Всемирной выставке 1889 года, изначально подвергалась критике, но со временем стала иконой французской культуры.",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe1427b44c?w=800&q=80"
    },
    {
        id: 5,
        title: "Тадж-Махал",
        category: "Архитектура",
        location: "Агра, Индия",
        type: "Мавзолей",
        era: "1632–1653",
        description:
            "Беломраморный мавзолей, построенный императором Шах-Джаханом в память о своей жене Мумтаз-Махал.Шедевр архитектуры Моголов, сочетающий персидские, индийские и исламские элементы.",
        image: "https://images.unsplash.com/photo-1564468617727-8e0013abcb37?w=800&q=80"
    },
    {
        id: 6,
        title: "Байкал",
        category: "Природа",
        location: "Сибирь, Россия",
        type: "Озеро",
        era: "25–30 млн лет",
        description:
            "Глублейшее озеро планеты и крупнейший резервуар пресной воды. Известен своей кристально чистой водой, уникальной экосистемой и тысячами энемичных видов растений и животных.",
        image: "https://images.unsplash.com/photo-1557080967-90a0d8e4ec30?w=800&q=80"
    },
    {
        id: 7,
        title: "Аврора (Северное сияние)",
        category: "Природа",
        location: "Мурманская область, Россия",
        type: "Естественное явление",
        era: "Круглый год",
        description:
            "Завораживающее свечение неба в полярных регионах, вызванное взаимодействием солнечного ветра с магнитным полем Земли. Лучше всего видно в зимние месяцы вдали от городского света.",
        image: "https://images.unsplash.com/photo-1534092793271-626309616217?w=800&q=80"
    },
    {
        id: 8,
        title: "Лувр",
        category: "Культура",
        location: "Париж, Франция",
        type: "Музей",
        era: "1793",
        description:
            "Один из крупнейших и самых посещаемых музеев мира. Дом для тысячи шедевров, включая «Мону Лизу» и «Венеру Милосскую», расположен в бывшем королевском дворце.",
        image: "https://images.unsplash.com/photo-1501863517313-53301712226c?w=800&q=80"
    },
    {
        id: 9,
        title: "Статуя Свободы",
        category: "Культура",
        location: "Нью-Йорк, США",
        type: "Памятник",
        era: "1886",
        description:
            "Подарок Франции США, символ свободы и демократии. Расположена на острове Свободы в гавани Нью-Йорка и приветствует миллионы туристов каждый год.",
        image: "https://images.unsplash.com/photo-1545018364-eb1f26f9a77f?w=800&q=80"
    },
    {
        id: 10,
        title: "Петра",
        category: "История",
        location: "Маан, Иордания",
        type: "Город в скале",
        era: "IV век до н.э.",
        description:
            "Древний город, высеченный в розовом песчанике набатейцами. Известен своими скальными фасадами, включая знаменитый Аль-Хазне (Сокровищницу), и уникальной водной системой.",
        image: "https://images.unsplash.com/photo-1533337279964-6e23b078a52e?w=800&q=80"
    },
    {
        id: 11,
        title: "Красная площадь",
        category: "История",
        location: "Москва, Россия",
        type: "Площадь",
        era: "XV век",
        description:
            "Главная площадь России и сердце Москвы. В surrounds находятся Кремль, Василий Блаженный, Государственный исторический музей и Мавзолей Ленина.",
        image: "https://images.unsplash.com/photo-1549486432-dba99a1e7427?w=800&q=80"
    },
    {
        id: 12,
        title: "Гранд-Каньон",
        category: "Природа",
        location: "Аризона, США",
        type: "Каньон",
        era: "5–6 млн лет",
        description:
            "Огромный каньон, вырезанный рекой Колорадо миллионы лет назад. Поражает своими многоцветными слоями пород, отвесными скалами и масштабами пейзажей.",
        image: "https://images.unsplash.com/photo-1519682980262-9e311376e0b8?w=800&q=80"
    }
];

const grid = document.getElementById("attractionsGrid");
const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");
const filterBtns = document.querySelectorAll(".filter-btn");

let currentFilter = "all";
let searchQuery = "";

function render() {
    grid.innerHTML = "";

    const filtered = attractions.filter((a) => {
        const matchCategory =
            currentFilter === "all" || a.category.toLowerCase() === currentFilter;
        const matchSearch =
            a.title.toLowerCase().includes(searchQuery) ||
            a.description.toLowerCase().includes(searchQuery) ||
            a.location.toLowerCase().includes(searchQuery);
        return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <p>Ничего не найдено. Попробуйте изменить поиск или фильтр.</p>
            </div>
        `;
        return;
    }

    filtered.forEach((attr) => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
            <div class="card-image">
                <img src="${attr.image}" alt="${attr.title}" loading="lazy">
                <span class="card-category">${attr.category}</span>
            </div>
            <div class="card-content">
                <h3 class="card-title">${attr.title}</h3>
                <div class="card-location">📍 ${attr.location}</div>
                <p class="card-description">${attr.description}</p>
                <div class="card-footer">Подробнее →</div>
            </div>
        `;
        card.addEventListener("click", () => openModal(attr));
        grid.appendChild(card);
    });
}

const modal = document.getElementById("detailModal");
const backdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("modalClose");

function openModal(attr) {
    document.getElementById("modalImage").src = attr.image;
    document.getElementById("modalImage").alt = attr.title;
    document.getElementById("modalTitle").textContent = attr.title;
    document.getElementById("modalCategory").textContent = attr.category;
    document.getElementById("modalLocation").innerHTML = `📍 ${attr.location}`;
    document.getElementById("modalDescription").textContent = attr.description;
    document.getElementById("modalType").textContent = attr.type;
    document.getElementById("modalEra").textContent = attr.era;

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
        closeModal();
    }
});

searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    clearBtn.style.display = searchQuery ? "block" : "none";
    render();
});

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    searchQuery = "";
    clearBtn.style.display = "none";
    render();
});

filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        currentFilter = btn.dataset.filter;
        render();
    });
});

render();