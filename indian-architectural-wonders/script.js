// Architecture data structure - EDIT THIS TO ADD YOUR PLACES
const architectureData = [
    {
        id: 1,
        name: "Sanchi Stupa",
        century: "1st Century",
        location: "Sanchi, Madhya Pradesh",
        visited: "December 8, 2024",
        images: [
            "images/sanchi-stupa/1.jpg",
            "images/sanchi-stupa/2.jpg",
            "images/sanchi-stupa/3.jpg"
        ],
        description: `The Great Stupa at Sanchi is one of the oldest stone structures in India, commissioned by Emperor Ashoka in the 3rd century BCE. This UNESCO World Heritage Site represents a masterpiece of early Buddhist architecture with its iconic hemispherical dome and intricately carved gateways.`,
        wikipedia: "https://en.wikipedia.org/wiki/Sanchi"
    },
    {
        id: 2,
        name: "Ajanta Caves",
        century: "2nd - 3rd Century",
        location: "Aurangabad, Maharashtra",
        visited: "January 24, 2021",
        images: [
            "images/ajanta-caves/1.jpg",
            "images/ajanta-caves/2.jpg",
            "images/ajanta-caves/3.jpg",
            "images/ajanta-caves/4.jpg",
            "images/ajanta-caves/5.jpg",
            "images/ajanta-caves/6.jpg",
            "images/ajanta-caves/7.jpg",
            "images/ajanta-caves/8.jpg"
        ],
        description: `The Ajanta Caves are approximately 30 rock-cut Buddhist cave monuments featuring exquisite murals and sculptures dating from the 2nd century BCE to 480 CE. These UNESCO World Heritage caves showcase some of the finest surviving examples of ancient Indian art with vibrant paintings depicting Buddha's life and Jataka tales.`,
        wikipedia: "https://en.wikipedia.org/wiki/Ajanta_Caves"
    },
    {
        id: 3,
        name: "Aihole",
        century: "4th Century",
        location: "Bagalkot, Karnataka",
        visited: "November 3, 2019",
        images: [
            "images/aihole/1.jpg",
            "images/aihole/2.jpg",
            "images/aihole/3.jpg"
        ],
        description: `Known as the 'Cradle of Indian Architecture', Aihole contains over 125 stone temples dating from the 5th century. The temples showcase experimental architectural styles and represent the early development of Hindu temple architecture with a mix of North and South Indian styles.`,
        wikipedia: "https://en.wikipedia.org/wiki/Aihole"
    },
    {
        id: 4,
        name: "Badami Caves",
        century: "5th Century",
        location: "Bagalkot, Karnataka",
        visited: "November 3, 2019",
        images: [
            "images/badami-caves/1.jpg",
            "images/badami-caves/2.jpg",
            "images/badami-caves/3.jpg",
            "images/badami-caves/4.jpg"
        ],
        description: `The Badami Cave Temples are a complex of Hindu and Jain cave temples carved out of soft Badami sandstone on a hill cliff. Dating from the 6th century, they contain intricate carvings of Hindu deities and represent the Chalukya dynasty's architectural prowess.`,
        wikipedia: "https://en.wikipedia.org/wiki/Badami_cave_temples"
    },
    {
        id: 5,
        name: "Gwalior Fort",
        century: "5th Century",
        location: "Gwalior, Madhya Pradesh",
        visited: "December 15, 2024",
        images: [
            "images/gwalior-fort/1.jpg",
            "images/gwalior-fort/2.jpg",
            "images/gwalior-fort/3.jpg"
        ],
        description: `Gwalior Fort is a hill fort considered one of the most impregnable fortresses in India. Described by Mughal Emperor Babur as 'the pearl amongst fortresses in India', it includes historic buildings, temples, and palaces with fort walls stretching nearly 3 kilometers.`,
        wikipedia: "https://en.wikipedia.org/wiki/Gwalior_Fort"
    },
    {
        id: 6,
        name: "Ellora Caves",
        century: "6th Century",
        location: "Aurangabad, Maharashtra",
        visited: "January 23, 2021",
        images: [
            "images/ellora-caves/1.jpg",
            "images/ellora-caves/2.jpg",
            "images/ellora-caves/3.jpg",
            "images/ellora-caves/4.jpg",
            "images/ellora-caves/5.jpg"
        ],
        description: `The Ellora Caves are a UNESCO World Heritage Site featuring 34 Buddhist, Hindu, and Jain monuments carved from basaltic cliffs. The Kailasa temple (Cave 16) is the most famous, carved top-down from a single rock, representing the epitome of Indian rock-cut architecture.`,
        wikipedia: "https://en.wikipedia.org/wiki/Ellora_Caves"
    },
    {
        id: 7,
        name: "Pattadakal",
        century: "7th - 8th Century",
        location: "Bagalkot, Karnataka",
        visited: "November 3, 2019",
        images: [
            "images/pattadakal/1.jpg",
            "images/pattadakal/2.jpg",
            "images/pattadakal/3.jpg"
        ],
        description: `Pattadakal is a UNESCO World Heritage Site known for its Chalukyan architecture, containing ten major temples representing various architectural styles. The temple complex showcases a harmonious blend of northern and southern Indian architectural styles.`,
        wikipedia: "https://en.wikipedia.org/wiki/Pattadakal"
    },
    {
        id: 8,
        name: "Shravana Belgola",
        century: "9th Century",
        location: "Hassan, Karnataka",
        visited: "July 20, 2019",
        images: [
            "images/shravana-belgola/1.jpg",
            "images/shravana-belgola/2.jpg",
            "images/shravana-belgola/3.jpg"
        ],
        description: `Shravana Belgola is one of the most important Jain pilgrimage sites, famous for the 57-foot monolithic statue of Gommateshvara (Lord Bahubali). Carved from a single block of granite, it's one of the tallest monolithic statues in the world.`,
        wikipedia: "https://en.wikipedia.org/wiki/Shravanabelagola"
    },
    {
        id: 9,
        name: "Khajuraho Temples",
        century: "10th Century",
        location: "Khajuraho, Madhya Pradesh",
        visited: "December 12, 2024",
        images: [
            "images/khajuraho-temples/1.jpg",
            "images/khajuraho-temples/2.jpg",
            "images/khajuraho-temples/3.jpg",
            "images/khajuraho-temples/4.jpg"
        ],
        description: `The Khajuraho Group of Monuments is a UNESCO World Heritage Site famous for intricate sculptures built by the Chandela dynasty between 950-1050 CE. The temples represent the zenith of temple architecture in Central India with their nagara-style symbolism.`,
        wikipedia: "https://en.wikipedia.org/wiki/Khajuraho_Group_of_Monuments"
    },
    {
        id: 10,
        name: "Gol Gumbaz",
        century: "10th Century",
        location: "Bijapur, Karnataka",
        visited: "November 2, 2019",
        images: [
            "images/gol-gumbaz/1.jpg",
            "images/gol-gumbaz/2.jpg",
            "images/gol-gumbaz/3.jpg",
            "images/gol-gumbaz/4.jpg",
            "images/gol-gumbaz/5.jpg"
        ],
        description: `Gol Gumbaz is the mausoleum of Mohammed Adil Shah, famous for having the second largest pre-modern dome in the world. The 44-meter diameter dome stands without any pillars, and the whispering gallery inside is famous for its acoustics where even the faintest sound echoes across the dome.`,
        wikipedia: "https://en.wikipedia.org/wiki/Gol_Gumbaz"
    },
    {
        id: 11,
        name: "Belur Temples",
        century: "11th Century",
        location: "Hassan, Karnataka",
        visited: "July 20, 2019",
        images: [
            "images/belur-temples/1.jpg",
            "images/belur-temples/2.jpg",
            "images/belur-temples/3.jpg",
            "images/belur-temples/4.jpg"
        ],
        description: `The Chennakeshava Temple at Belur is a 12th-century Hindu temple built by the Hoysala Empire, taking 103 years to complete. The temple is renowned for its intricate stone carvings covering every inch of walls and pillars, often referred to as 'sculptured poetry in stone'.`,
        wikipedia: "https://en.wikipedia.org/wiki/Chennakesava_Temple,_Belur"
    },
    {
        id: 12,
        name: "Halebidu Temples",
        century: "11th Century",
        location: "Hassan, Karnataka",
        visited: "July 20, 2019",
        images: [
            "images/halebidu-temples/1.jpg",
            "images/halebidu-temples/2.jpg",
            "images/halebidu-temples/3.jpg"
        ],
        description: `Halebidu was the capital of the Hoysala Empire, featuring the Hoysaleswara Temple with extraordinary intricate friezes depicting Hindu deities and mythological scenes. The level of detail in the stone carvings is extraordinary, with no two sculptures being identical.`,
        wikipedia: "https://en.wikipedia.org/wiki/Halebidu"
    },
    {
        id: 13,
        name: "Rameshwaram Temple",
        century: "12th Century",
        location: "Rameswaram, Tamil Nadu",
        visited: "July 2-3, 2022",
        images: [
            "images/ramanathaswamy-temple/1.jpg",
            "images/ramanathaswamy-temple/2.jpg",
            "images/ramanathaswamy-temple/3.jpg"
        ],
        description: `The Rameshwaram Temple is one of the twelve Jyotirlinga temples and a major pilgrimage site. The temple is famous for its long ornate corridors with intricately carved pillars, with the outer corridor being 197 meters long, one of the longest temple corridors in India.`,
        wikipedia: "https://en.wikipedia.org/wiki/Ramanathaswamy_Temple"
    },
    {
        id: 14,
        name: "Qutub Minar",
        century: "13th Century",
        location: "Delhi",
        visited: "March 11, 2017",
        images: [
            "images/qutub-minar/1.jpg",
            "images/qutub-minar/2.jpg",
            "images/qutub-minar/3.jpg",
            "images/qutub-minar/4.jpg"
        ],
        description: `The Qutub Minar is a UNESCO World Heritage Site and the tallest brick minaret in the world at 72.5 meters with 379 steps. Construction began in 1199, and it features intricate carvings and verses from the Quran, showcasing Indo-Islamic architecture.`,
        wikipedia: "https://en.wikipedia.org/wiki/Qutb_Minar"
    },
    {
        id: 15,
        name: "Hampi",
        century: "14th Century",
        location: "Vijayanagara, Karnataka",
        visited: "August 4, 2018",
        images: [
            "images/hampi/1.jpg",
            "images/hampi/2.jpg",
            "images/hampi/3.jpg"
        ],
        description: `Hampi is a UNESCO World Heritage Site and was the capital of the Vijayanagara Empire, containing over 1,600 surviving remains. The Virupaksha Temple and Vittala Temple with its iconic stone chariot showcase the peak of Vijayanagara architectural style.`,
        wikipedia: "https://en.wikipedia.org/wiki/Hampi"
    },
    {
        id: 16,
        name: "Golconda Fort",
        century: "14th Century",
        location: "Hyderabad, Telangana",
        visited: "August 15, 2017",
        images: [
            "images/golconda-fort/1.jpg",
            "images/golconda-fort/2.jpg",
            "images/golconda-fort/3.jpg"
        ],
        description: `Golconda Fort is renowned for its acoustic architecture where a hand clap at the entrance can be heard a kilometer away at the highest point. The fort was a major center for diamond trade, producing famous diamonds including the Koh-i-Noor and Hope Diamond.`,
        wikipedia: "https://en.wikipedia.org/wiki/Golconda_Fort"
    },
    {
        id: 17,
        name: "Agra Fort",
        century: "15th Century",
        location: "Agra, Uttar Pradesh",
        visited: "September 18, 2022",
        images: [
            "images/agra-fort/1.jpg",
            "images/agra-fort/2.jpg"
        ],
        description: `Agra Fort is a UNESCO World Heritage Site that served as the main residence of Mughal emperors until 1638. Built with red sandstone, it encompasses palaces, audience halls, and mosques. Shah Jahan was imprisoned here by his son Aurangzeb.`,
        wikipedia: "https://en.wikipedia.org/wiki/Agra_Fort"
    },
    {
        id: 18,
        name: "Dwarakadish Temple",
        century: "16th Century",
        location: "Dwarka, Gujarat",
        visited: "September 29, 2022",
        images: [
            "images/dwarakadish-temple/1.jpg"
        ],
        description: `The Dwarakadish Temple, also known as Jagat Mandir, is one of the Char Dham pilgrimage sites dedicated to Lord Krishna. According to Hindu belief, Dwarka was Krishna's kingdom. The temple is a five-storied structure supported by 72 pillars.`,
        wikipedia: "https://en.wikipedia.org/wiki/Dwarkadhish_Temple"
    },
    {
        id: 19,
        name: "Golden Temple (Harmandir Sahib)",
        century: "16th Century",
        location: "Amritsar, Punjab",
        visited: "March 4, 2017",
        images: [
            "images/golden-temple/1.jpg",
            "images/golden-temple/2.jpg",
            "images/golden-temple/3.jpg",
            "images/golden-temple/4.jpg"
        ],
        description: `The Golden Temple is the holiest Gurdwara of Sikhism, with upper floors covered in 750 kg of pure gold. Founded in 1577 and completed in 1604, the temple welcomes all faiths and serves free meals to over 100,000 people daily through its langar.`,
        wikipedia: "https://en.wikipedia.org/wiki/Golden_Temple"
    },
    {
        id: 20,
        name: "Taj Mahal",
        century: "17th Century",
        location: "Agra, Uttar Pradesh",
        visited: "September 17, 2022",
        images: [
            "images/taj-mahal/1.jpg",
            "images/taj-mahal/2.jpg",
            "images/taj-mahal/3.jpg"
        ],
        description: `The Taj Mahal is a UNESCO World Heritage Site and one of the New Seven Wonders of the World. Commissioned in 1632 by Shah Jahan for his wife Mumtaz Mahal, it took 22 years and 20,000 artisans to complete this ivory-white marble masterpiece.`,
        wikipedia: "https://en.wikipedia.org/wiki/Taj_Mahal"
    },
    {
        id: 21,
        name: "Red Fort",
        century: "17th Century",
        location: "Delhi",
        visited: "March 12, 2017",
        images: [
            "images/red-fort/1.jpg",
            "images/red-fort/2.jpg",
            "images/red-fort/3.jpg"
        ],
        description: `The Red Fort is a UNESCO World Heritage Site built by Emperor Shah Jahan in 1648, representing the peak of Mughal architecture. It's the site where India's Prime Minister hoists the national flag and delivers speeches on Independence Day.`,
        wikipedia: "https://en.wikipedia.org/wiki/Red_Fort"
    },
    {
        id: 22,
        name: "Mysore Palace",
        century: "18th Century",
        location: "Mysore, Karnataka",
        visited: "February 21, 2024",
        images: [
            "images/mysore-palace/1.jpg"
        ],
        description: `The Mysore Palace is one of India's most visited monuments, built in Indo-Saracenic style between 1897-1912. The palace features ornate interiors with carved wooden doors, mosaic floors, and stained glass ceilings, illuminated with nearly 100,000 lights on Sundays and holidays.`,
        wikipedia: "https://en.wikipedia.org/wiki/Mysore_Palace"
    },
    {
        id: 23,
        name: "Dakshineshwar Kali Temple",
        century: "19th Century",
        location: "Kolkata, West Bengal",
        visited: "April 8, 2019",
        images: [
            "images/dakshineshwar-kali-temple/1.jpg"
        ],
        description: `Dakshineshwar Kali Temple was founded in 1855 and is famous for its association with mystic saint Ramakrishna Paramahamsa. Built in traditional Bengali style, the complex includes the main Kali temple with nine spires and twelve Shiva temples.`,
        wikipedia: "https://en.wikipedia.org/wiki/Dakshineswar_Kali_Temple"
    },
    {
        id: 24,
        name: "India Gate",
        century: "20th Century",
        location: "New Delhi",
        visited: "March 11, 2017",
        images: [
            "images/india-gate/1.jpg",
            "images/india-gate/2.jpg"
        ],
        description: `India Gate is a war memorial dedicated to 82,000 Indian Army soldiers who died during World War I and the Third Anglo-Afghan War. Designed by Sir Edwin Lutyens and completed in 1931, it stands 42 meters tall with soldiers' names inscribed on its walls.`,
        wikipedia: "https://en.wikipedia.org/wiki/India_Gate"
    },
    {
        id: 25,
        name: "Statue of Unity",
        century: "21st Century",
        location: "Kevadia, Gujarat",
        visited: "September 27, 2022",
        images: [
            "images/statue-of-unity/1.jpg",
            "images/statue-of-unity/2.jpg"
        ],
        description: `The Statue of Unity is the world's tallest statue at 182 meters, depicting Sardar Vallabhbhai Patel. Inaugurated in 2018, it took 46 months to complete and features a viewing gallery at 153 meters offering panoramic views of the surrounding area.`,
        wikipedia: "https://en.wikipedia.org/wiki/Statue_of_Unity"
    }
];

// Generate timeline and content
function generateTimeline() {
    const timelineContainer = document.getElementById('timeline');
    const contentContainer = document.getElementById('content-container');

    architectureData.forEach((item, index) => {
        // Create timeline item
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.dataset.id = item.id;
        timelineItem.innerHTML = `
            <div class="timeline-century">${item.century}</div>
            <div class="timeline-name">${item.name}</div>
        `;
        timelineContainer.appendChild(timelineItem);

        // Create content card
        const contentCard = document.createElement('div');
        contentCard.className = 'content-card';
        contentCard.id = `content-${item.id}`;

        const imagesHTML = item.images && item.images.length > 0
            ? item.images.map(img => `<img src="${img}" alt="${item.name}" class="content-image">`).join('')
            : '<div style="text-align: center; padding: 40px; color: #7f8c8d; font-style: italic;">Photos coming soon...</div>';

        contentCard.innerHTML = `
            <div class="content-header">
                <div class="content-century">${item.century}</div>
                <h2 class="content-title">${item.name}</h2>
                <div class="content-location">📍 ${item.location}</div>
                ${item.visited ? `<div class="content-visited">📅 Visited: ${item.visited}</div>` : ''}
            </div>
            <div class="content-images">
                ${imagesHTML}
            </div>
            <div class="content-description">
                ${item.description}
            </div>
            <a href="${item.wikipedia}" target="_blank" class="wikipedia-link">Read more on Wikipedia →</a>
        `;
        contentContainer.appendChild(contentCard);

        // Add click event
        timelineItem.addEventListener('click', () => {
            showContent(item.id);
        });
    });
}

function showContent(id) {
    // Hide welcome screen
    document.getElementById('welcome').classList.remove('active');

    // Update timeline active state
    document.querySelectorAll('.timeline-item').forEach(item => {
        item.classList.remove('active');
    });
    const timelineItem = document.querySelector(`.timeline-item[data-id="${id}"]`);
    if (timelineItem) timelineItem.classList.add('active');

    // Update map pin active state
    document.querySelectorAll('.map-pin').forEach(pin => {
        pin.classList.remove('active');
    });
    const mapPin = document.querySelector(`.map-pin[data-id="${id}"]`);
    if (mapPin) mapPin.classList.add('active');

    // Update content active state
    document.querySelectorAll('.content-card').forEach(card => {
        card.classList.remove('active');
    });
    document.getElementById(`content-${id}`).classList.add('active');

    // Scroll to top of content section
    document.querySelector('.content-section').scrollTop = 0;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    generateTimeline();

    // Add click handler for home link
    document.getElementById('home-link').addEventListener('click', () => {
        // Show welcome screen
        document.getElementById('welcome').classList.add('active');

        // Hide all content cards
        document.querySelectorAll('.content-card').forEach(card => {
            if (card.id !== 'welcome') {
                card.classList.remove('active');
            }
        });

        // Remove active state from all timeline items
        document.querySelectorAll('.timeline-item').forEach(item => {
            item.classList.remove('active');
        });

        // Remove active state from all map pins
        document.querySelectorAll('.map-pin').forEach(pin => {
            pin.classList.remove('active');
        });

        // Scroll to top of content section
        document.querySelector('.content-section').scrollTop = 0;
    });

    // GPS Coordinates for each monument
    const monumentCoordinates = {
        1: [23.4793, 77.7397],  // Sanchi Stupa
        2: [20.5519, 75.7033],  // Ajanta Caves
        3: [15.9545, 75.8076],  // Aihole
        4: [15.9189, 75.6764],  // Badami Caves
        5: [26.2295, 78.1686],  // Gwalior Fort
        6: [20.0264, 75.1789],  // Ellora Caves
        7: [15.9447, 75.8147],  // Pattadakal
        8: [12.8577, 76.4894],  // Shravana Belgola
        9: [24.8318, 79.9199],  // Khajuraho Temples
        10: [16.8302, 75.7138], // Gol Gumbaz
        11: [13.1655, 75.8655], // Belur Temples
        12: [13.2323, 75.9961], // Halebidu Temples
        13: [9.2876, 79.3129],  // Rameshwaram Temple
        14: [28.5244, 77.1855], // Qutub Minar
        15: [15.3350, 76.4600], // Hampi
        16: [17.3833, 78.4011], // Golconda Fort
        17: [27.1795, 78.0211], // Agra Fort
        18: [22.2394, 68.9678], // Dwarakadish Temple
        19: [31.6200, 74.8765], // Golden Temple
        20: [27.1751, 78.0421], // Taj Mahal
        21: [28.6562, 77.2410], // Red Fort
        22: [12.3051, 76.6551], // Mysore Palace
        23: [22.6547, 88.3570], // Dakshineshwar Temple
        24: [28.6129, 77.2295], // India Gate
        25: [21.8380, 73.7191]  // Statue of Unity
    };

    // Initialize Leaflet map with bounds restricted to India
    const indiaBounds = [
        [6.5, 68.0],   // Southwest coordinates
        [35.5, 97.5]   // Northeast coordinates
    ];

    const map = L.map('map', {
        center: [20.5937, 78.9629],
        zoom: 5,
        maxBounds: indiaBounds,
        maxBoundsViscosity: 1.0,
        minZoom: 4,
        maxZoom: 18,
        tap: true,
        tapTolerance: 15,
        dragging: true,
        touchZoom: true,
        scrollWheelZoom: false,
        doubleClickZoom: true
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Custom marker icon
    const customIcon = L.icon({
        iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2U2N2UyMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PC9zdmc+',
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });

    // Add markers for each monument
    const markers = {};
    architectureData.forEach(monument => {
        const coords = monumentCoordinates[monument.id];
        if (coords) {
            const marker = L.marker(coords, { icon: customIcon })
                .addTo(map)
                .bindPopup(`<b>${monument.name}</b><br>${monument.location}`)
                .bindTooltip(monument.name, {
                    permanent: false,
                    direction: 'top',
                    offset: [0, -20]
                });

            marker.on('click', () => {
                showContent(monument.id);
            });

            markers[monument.id] = marker;
        }
    });

    // Add click handlers for welcome gallery images
    document.querySelectorAll('.welcome-image').forEach(img => {
        img.addEventListener('click', () => {
            const id = parseInt(img.dataset.id);
            showContent(id);
        });
    });

    // Ensure map resizes properly on window resize
    setTimeout(() => {
        map.invalidateSize();
        // Adjust zoom for mobile devices
        if (window.innerWidth < 768) {
            map.setView([20.5937, 78.9629], 4.5);
        }
    }, 100);

    window.addEventListener('resize', () => {
        map.invalidateSize();
    });
});

