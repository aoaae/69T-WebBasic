// ข้อมูลสัตว์เลี้ยง
const pets = [
    {
        id: 1,
        name: "โกลเด้น รีทรีฟเวอร์",
        breed: "Golden Retriever",
        category: "สุนัข",
        lifespan: "10-12 ปี",
        size: "ใหญ่ (25-32 กก.)",
        temperament: "เป็นมิตร ฉลาด และภักดี",
        care: "ออกกำลังกายสูง, หวีขนทุกวัน",
        image: "https://images.unsplash.com/photo-1734966213753-1b361564bab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZW4lMjByZXRyaWV2ZXIlMjBkb2d8ZW58MXx8fHwxNzY3NTk1MDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "สุนัขพันธุ์โกลเด้นเป็นสุนัขที่เป็นมิตรและรักครอบครัวมาก เหมาะสำหรับครอบครัวที่มีเด็ก มีสติปัญญาสูงและฝึกได้ง่าย"
    },
    {
        id: 2,
        name: "ไซบีเรียน ฮัสกี้",
        breed: "Siberian Husky",
        category: "สุนัข",
        lifespan: "12-14 ปี",
        size: "กลาง-ใหญ่ (16-27 กก.)",
        temperament: "กระตือรือร้น เป็นมิตร และดื้อรั้น",
        care: "ออกกำลังกายสูงมาก, หวีขนบ่อย",
        image: "https://images.unsplash.com/photo-1590419690008-905895e8fe0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodXNreSUyMGRvZ3xlbnwxfHx8fDE3Njc1OTU5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "สุนัขพันธุ์ไซบีเรียน ฮัสกี้มีต้นกำเนิดจากไซบีเรีย มีความทนทานต่ออากาศหนาว มีพลังงานสูงและต้องการการออกกำลังกายมาก"
    },
    {
        id: 3,
        name: "แมวสยาม",
        breed: "Siamese Cat",
        category: "แมว",
        lifespan: "12-20 ปี",
        size: "เล็ก-กลาง (2.5-5.5 กก.)",
        temperament: "เปิดเผย ร้องเสียงดัง และผูกพันกับเจ้าของ",
        care: "ดูแลง่าย, หวีขนสัปดาห์ละครั้ง",
        image: "https://images.unsplash.com/photo-1568152950566-c1bf43f4ab28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWFtZXNlJTIwY2F0fGVufDF8fHx8MTc2NzYyOTIxMnww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "แมวสยามเป็นแมวพันธุ์ไทย มีลักษณะเด่นคือสีขาวครีมและจุดสีเข้มที่ใบหน้า หู ขา และหาง ชอบพูดคุยและเข้ากับคนได้ง่าย"
    },
    {
        id: 4,
        name: "แมวเปอร์เซีย",
        breed: "Persian Cat",
        category: "แมว",
        lifespan: "12-17 ปี",
        size: "กลาง (3-6 กก.)",
        temperament: "สงบ นิ่งๆ และอ่อนโยน",
        care: "หวีขนทุกวัน, ดูแลตาเป็นพิเศษ",
        image: "https://images.unsplash.com/photo-1585137173132-cf49e10ad27d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwY2F0fGVufDF8fHx8MTc2NzY2ODgzMXww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "แมวเปอร์เซียมีขนยาวและหนานุ่ม ใบหน้าแบนและตาโต นิสัยสงบและชอบอยู่ในบ้าน ต้องการการดูแลขนเป็นพิเศษ"
    },
    {
        id: 5,
        name: "นกแก้วแมคคอว์",
        breed: "Macaw Parrot",
        category: "นก",
        lifespan: "50-80 ปี",
        size: "ใหญ่ (900-1500 กรัม)",
        temperament: "ฉลาด เปิดเผย และชอบเข้าสังคม",
        care: "ต้องการกรงใหญ่, ปฏิสัมพันธ์ทุกวัน",
        image: "https://images.unsplash.com/photo-1584888890205-9b49eaf0c660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHBhcnJvdCUyMGJpcmR8ZW58MXx8fHwxNzY3Njc2Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "นกแก้วแมคคอว์เป็นนกขนาดใหญ่ที่มีสีสันสวยงาม สามารถเลียนเสียงคนพูดได้ มีอายุยืนมากและต้องการความใส่ใจอย่างมาก"
    },
    {
        id: 6,
        name: "ปลาทอง",
        breed: "Goldfish",
        category: "ปลา",
        lifespan: "10-20 ปี",
        size: "เล็ก-กลาง (5-20 ซม.)",
        temperament: "สงบ เป็นมิตร",
        care: "เปลี่ยนน้ำสม่ำเสมอ, ให้อาหารวันละ 1-2 ครั้ง",
        image: "https://images.unsplash.com/photo-1592072467526-0506c6530493?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkZmlzaCUyMGFxdWFyaXVtfGVufDF8fHx8MTc2NzYzNTg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "ปลาทองเป็นสัตว์เลี้ยงที่ดูแลง่ายและเหมาะสำหรับผู้เริ่มต้น มีหลายสายพันธุ์ให้เลือก ต้องการพื้นที่ว่ายน้ำที่เพียงพอ"
    },
    {
        id: 7,
        name: "กระต่าย",
        breed: "Rabbit",
        category: "สัตว์เลี้ยงขนาดเล็ก",
        lifespan: "8-12 ปี",
        size: "เล็ก-กลาง (1-3 กก.)",
        temperament: "อ่อนโยน ขี้อาย และเป็นมิตร",
        care: "ดูแลขนบ่อย, ให้อาหารหญ้าและผัก",
        image: "https://images.unsplash.com/photo-1622349817799-067c32295df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWJiaXQlMjBidW5ueSUyMHBldHxlbnwxfHx8fDE3Njc2NTQyNTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
        description: "กระต่ายเป็นสัตว์เลี้ยงที่น่ารักและเหมาะกับครอบครัว ชอบกินหญ้าและผัก ต้องการพื้นที่ในการกระโดดและวิ่งเล่น"
    },
    {
        id: 8,
        name: "หนูแฮมสเตอร์",
        breed: "Hamster",
        category: "สัตว์เลี้ยงขนาดเล็ก",
        lifespan: "2-3 ปี",
        size: "เล็กมาก (20-200 กรัม)",
        temperament: "กระตือรือร้น ขี้เล่น และอยู่กลางคืน",
        care: "ทำความสะอาดกรงสัปดาห์ละครั้ง, ให้วงล้อวิ่ง",
        image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW1zdGVyfGVufDF8fHx8MTc2NzY3NjI5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        description: "แฮมสเตอร์เป็นสัตว์เลี้ยงขนาดเล็กที่เหมาะสำหรับผู้ที่มีพื้นที่จำกัด กระตือรือร้นในเวลากลางคืนและชอบเก็บอาหาร"
    }
];

// หมวดหมู่
const categories = [
    { name: 'ทั้งหมด', value: 'all', icon: '🏠' },
    { name: 'สุนัข', value: 'สุนัข', icon: '🐕' },
    { name: 'แมว', value: 'แมว', icon: '🐱' },
    { name: 'นก', value: 'นก', icon: '🦜' },
    { name: 'ปลา', value: 'ปลา', icon: '🐟' },
    { name: 'สัตว์เลี้ยงขนาดเล็ก', value: 'สัตว์เลี้ยงขนาดเล็ก', icon: '🐰' }
];

// สถานะ
let selectedCategory = 'all';

// สร้าง SVG icons
const icons = {
    clock: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    ruler: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 17 3 3 17 5"></polyline><line x1="17" y1="5" x2="21" y2="1"></line><line x1="7" y1="7" x2="3" y2="11"></line></svg>',
    heart: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>'
};

// แสดงหมวดหมู่
function renderCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.innerHTML = categories.map(category => `
        <button 
            class="category-btn ${selectedCategory === category.value ? 'active' : ''}"
            onclick="selectCategory('${category.value}')"
        >
            <span>${category.icon}</span>
            <span>${category.name}</span>
        </button>
    `).join('');
}

// เลือกหมวดหมู่
function selectCategory(category) {
    selectedCategory = category;
    renderCategories();
    renderPets();
}

// สร้างการ์ดสัตว์เลี้ยง
function createPetCard(pet) {
    return `
        <div class="pet-card">
            <div class="pet-image-container">
                <img src="${pet.image}" alt="${pet.name}" class="pet-image">
                <div class="pet-category-badge">${pet.category}</div>
            </div>
            <div class="pet-content">
                <h3 class="pet-name">${pet.name}</h3>
                <p class="pet-breed">${pet.breed}</p>
                
                <div class="pet-info">
                    <div class="pet-info-item" style="color: #3b82f6;">
                        ${icons.clock}
                        <span>อายุขัย: ${pet.lifespan}</span>
                    </div>
                    <div class="pet-info-item" style="color: #10b981;">
                        ${icons.ruler}
                        <span>ขนาด: ${pet.size}</span>
                    </div>
                    <div class="pet-info-item" style="color: #ef4444;">
                        ${icons.heart}
                        <span>นิสัย: ${pet.temperament}</span>
                    </div>
                </div>
                
                <button class="pet-btn" onclick="toggleDetails(${pet.id})">
                    ${icons.info}
                    <span id="btn-text-${pet.id}">ดูรายละเอียด</span>
                </button>
                
                <div id="details-${pet.id}" class="pet-details hidden">
                    <div class="pet-details-section">
                        <h4 class="pet-details-title">📝 รายละเอียด</h4>
                        <p class="pet-details-text">${pet.description}</p>
                    </div>
                    <div class="pet-details-section">
                        <h4 class="pet-details-title">🏥 การดูแล</h4>
                        <p class="pet-details-text">${pet.care}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// แสดงสัตว์เลี้ยง
function renderPets() {
    const petGrid = document.getElementById('petGrid');
    const filteredPets = selectedCategory === 'all' 
        ? pets 
        : pets.filter(pet => pet.category === selectedCategory);
    
    petGrid.innerHTML = filteredPets.map(pet => createPetCard(pet)).join('');
}

// ฟังก์ชันแนะนำสัตว์เลี้ยง
function calculatePetRecommendation(formData) {
    const scores = pets.map(pet => {
        let score = 0;
        const reasons = [];

        // คะแนนตามไลฟ์สไตล์
        if (formData.lifestyle === 'active') {
            if (pet.category === 'สุนัข') {
                score += 30;
                reasons.push('เหมาะกับการออกกำลังกาย');
            }
        } else if (formData.lifestyle === 'moderate') {
            if (pet.category === 'สุนัข' || pet.category === 'แมว') {
                score += 25;
                reasons.push('เหมาะกับกิจกรรมปานกลาง');
            }
        } else if (formData.lifestyle === 'quiet') {
            if (pet.category === 'แมว' || pet.category === 'ปลา' || pet.category === 'สัตว์เลี้ยงขนาดเล็ก') {
                score += 30;
                reasons.push('เหมาะกับความเงียบสงบ');
            }
        } else if (formData.lifestyle === 'busy') {
            if (pet.category === 'ปลา' || pet.category === 'สัตว์เลี้ยงขนาดเล็ก') {
                score += 35;
                reasons.push('ดูแลง่าย เหมาะกับคนยุ่ง');
            }
        }

        // คะแนนตามพื้นที่อยู่อาศัย
        if (formData.livingSpace === 'house-large') {
            if (pet.category === 'สุนัข') {
                score += 25;
                reasons.push('มีพื้นที่เพียงพอสำหรับวิ่งเล่น');
            }
        } else if (formData.livingSpace === 'house-small') {
            if (pet.category === 'แมว' || pet.category === 'สัตว์เลี้ยงขนาดเล็ก') {
                score += 20;
                reasons.push('เหมาะกับบ้านขนาดเล็ก');
            }
        } else if (formData.livingSpace === 'condo' || formData.livingSpace === 'studio') {
            if (pet.category === 'แมว' || pet.category === 'ปลา' || pet.category === 'สัตว์เลี้ยงขนาดเล็ก') {
                score += 30;
                reasons.push('เหมาะกับพื้นที่จำกัด');
            }
        }

        // คะแนนตามประสบการณ์
        if (formData.experience === 'beginner') {
            if (pet.category === 'ปลา' || (pet.category === 'สัตว์เลี้ยงขนาดเล็ก' && pet.breed === 'Hamster')) {
                score += 25;
                reasons.push('เหมาะสำหรับผู้เริ่มต้น');
            }
        } else if (formData.experience === 'expert') {
            if (pet.category === 'นก') {
                score += 30;
                reasons.push('เหมาะสำหรับผู้เชี่ยวชาญ');
            }
        }

        // คะแนนตามงบประมาณ
        if (formData.budget === 'low') {
            if (pet.category === 'ปลา' || pet.category === 'สัตว์เลี้ยงขนาดเล็ก') {
                score += 20;
                reasons.push('ค่าใช้จ่ายต่ำ');
            }
        } else if (formData.budget === 'premium') {
            if (pet.category === 'นก') {
                score += 25;
                reasons.push('การลงทุนระยะยาว คุ้มค่า');
            }
        }

        // คะแนนตามเวลาที่ว่าง
        if (formData.timeAvailable === 'less1') {
            if (pet.category === 'ปลา') {
                score += 35;
                reasons.push('ไม่ต้องใช้เวลามาก');
            }
        } else if (formData.timeAvailable === 'more6') {
            if (pet.category === 'สุนัข' || pet.category === 'นก') {
                score += 30;
                reasons.push('มีเวลาดูแลอย่างดี');
            }
        }

        // คะแนนตามความต้องการพิเศษ
        if (formData.preferences) {
            if (formData.preferences.includes('quiet') && (pet.category === 'ปลา' || pet.category === 'สัตว์เลี้ยงขนาดเล็ก')) {
                score += 15;
                reasons.push('เงียบ ไม่ส่งเสียงดัง');
            }
            if (formData.preferences.includes('social') && (pet.category === 'สุนัข' || pet.category === 'แมว')) {
                score += 15;
                reasons.push('เข้ากับคนได้ดี');
            }
            if (formData.preferences.includes('lowMaintenance') && (pet.category === 'ปลา' || pet.category === 'สัตว์เลี้ยงขนาดเล็ก')) {
                score += 15;
                reasons.push('ดูแลรักษาง่าย');
            }
            if (formData.preferences.includes('playful') && (pet.category === 'สุนัข' || pet.category === 'สัตว์เลี้ยงขนาดเล็ก')) {
                score += 15;
                reasons.push('ขี้เล่น กระตือรือร้น');
            }
            if (formData.preferences.includes('cuddly') && (pet.category === 'แมว' || pet.category === 'สัตว์เลี้ยงขนาดเล็ก')) {
                score += 15;
                reasons.push('น่ากอด อ่อนโยน');
            }
        }

        return {
            pet,
            score: Math.min(score, 100),
            reasons
        };
    });

    // เรียงตามคะแนนและส่งคืนท็อป 3
    return scores.filter(item => item.score > 20)
                 .sort((a, b) => b.score - a.score)
                 .slice(0, 3);
}

// จัดการฟอร์ม
function handleRecommendationForm(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {
        lifestyle: formData.get('lifestyle'),
        livingSpace: formData.get('livingSpace'),
        experience: formData.get('experience'),
        budget: formData.get('budget'),
        timeAvailable: formData.get('timeAvailable'),
        preferences: formData.getAll('preferences')
    };

    const recommendations = calculatePetRecommendation(data);
    displayRecommendations(recommendations);
}

// แสดงผลการแนะนำ
function displayRecommendations(recommendations) {
    const resultsSection = document.getElementById('recommendationResults');
    const recommendedPets = document.getElementById('recommendedPets');

    if (recommendations.length === 0) {
        recommendedPets.innerHTML = `
            <div class="no-results">
                <p>😅 ไม่พบสัตว์เลี้ยงที่เหมาะสมตามเงื่อนไขที่คุณระบุ</p>
                <p>ลองปรับเปลี่ยนตัวเลือกดูนะครับ</p>
            </div>
        `;
    } else {
        recommendedPets.innerHTML = recommendations.map(item => `
            <div class="recommended-pet-card">
                <div class="match-score">เหมาะสม ${item.score}%</div>
                <h4>${item.pet.name} (${item.pet.breed})</h4>
                <div class="pet-category" style="color: #6b7280; margin-bottom: 0.5rem;">
                    หมวดหมู่: ${item.pet.category}
                </div>
                <div class="reasons">
                    <strong>เหตุผลที่แนะนำ:</strong>
                    <ul style="margin-top: 0.5rem; padding-left: 1rem;">
                        ${item.reasons.map(reason => `<li>${reason}</li>`).join('')}
                    </ul>
                </div>
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                    <small style="color: #6b7280;">
                        <strong>อายุขัย:</strong> ${item.pet.lifespan} | 
                        <strong>ขนาด:</strong> ${item.pet.size}
                    </small>
                </div>
            </div>
        `).join('');
    }

    resultsSection.style.display = 'block';
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Toggle รายละเอียด
function toggleDetails(petId) {
    const details = document.getElementById(`details-${petId}`);
    const btnText = document.getElementById(`btn-text-${petId}`);
    
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        btnText.textContent = 'ซ่อนรายละเอียด';
    } else {
        details.classList.add('hidden');
        btnText.textContent = 'ดูรายละเอียด';
    }
}

// เริ่มต้น
document.addEventListener('DOMContentLoaded', function() {
    renderCategories();
    renderPets();
    
    // เพิ่ม event listener สำหรับฟอร์ม
    const recommendationForm = document.getElementById('petRecommendationForm');
    if (recommendationForm) {
        recommendationForm.addEventListener('submit', handleRecommendationForm);
    }
});
