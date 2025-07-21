// Diagnostic tests data for Andhra Pradesh
const diagnosticData = {
    districts: [
        "Srikakulam", "Parvathipuram Manyam", "Vizianagaram", "Visakhapatnam", "Anakapalli",
        "Alluri Sitharama Raju", "Kakinada", "East Godavari", "Konaseema", "West Godavari",
        "Eluru", "Krishna", "NTR", "Guntur", "Palnadu", "Bapatla", "Prakasam", "SPSR Nellore",
        "Kurnool", "Nandyal", "Anantapur", "Sri Sathya Sai", "YSR Kadapa", "Annamayya", "Chittoor", "Tirupati"
    ],
    tests: {
        "Blood Tests": {
            "Complete Blood Count (CBC)": { min_price: 230, max_price: 417, description: "Complete blood picture with 30 parameters", popular: true },
            "Liver Function Test (LFT)": { min_price: 300, max_price: 800, description: "11-test liver health panel" },
            "Kidney Function Test (KFT)": { min_price: 900, max_price: 1367, description: "14-test kidney function panel with electrolytes" },
            "Thyroid Profile (T3, T4, TSH)": { min_price: 299, max_price: 713, description: "Complete thyroid function assessment", popular: true },
            "Lipid Profile": { min_price: 300, max_price: 800, description: "8-parameter cholesterol and triglyceride panel" },
            "Blood Sugar Tests": { min_price: 80, max_price: 158, description: "FBS, PPBS, Random blood sugar" },
            "HbA1c (Diabetes)": { min_price: 299, max_price: 610, description: "3-month average blood sugar level", popular: true },
            "Vitamin D": { min_price: 650, max_price: 650, description: "25-hydroxy cholecalciferol" },
            "Vitamin B12": { min_price: 599, max_price: 599, description: "Cobalamin deficiency test" },
            "CRP (C-Reactive Protein)": { min_price: 250, max_price: 550, description: "Inflammation marker" },
            "ESR (Erythrocyte Sedimentation Rate)": { min_price: 120, max_price: 350, description: "Blood inflammation test" },
            "Uric Acid": { min_price: 150, max_price: 350, description: "Gout and kidney stone risk assessment" },
            "Iron Studies": { min_price: 800, max_price: 1200, description: "Iron, TIBC, Transferrin saturation" },
            "Electrolytes (Na, K, Cl)": { min_price: 400, max_price: 600, description: "Essential body salts" },
            "Calcium": { min_price: 200, max_price: 400, description: "Bone health marker" },
            "Magnesium": { min_price: 300, max_price: 500, description: "Essential mineral test" },
            "Phosphorus": { min_price: 250, max_price: 450, description: "Bone and energy metabolism" },
            "Total Protein & Albumin": { min_price: 300, max_price: 500, description: "Protein metabolism assessment" },
            "Bilirubin (Total & Direct)": { min_price: 200, max_price: 400, description: "Liver function and hemolysis" }
        },
        "Imaging Tests": {
            "X-Ray Chest": { min_price: 170, max_price: 650, description: "Chest radiography for lung and heart assessment", popular: true },
            "X-Ray Abdomen": { min_price: 200, max_price: 700, description: "Abdominal organ imaging" },
            "X-Ray Limbs": { min_price: 250, max_price: 800, description: "Bone fracture and joint assessment" },
            "X-Ray Spine": { min_price: 300, max_price: 1000, description: "Spinal alignment and pathology" },
            "X-Ray Pelvis": { min_price: 350, max_price: 1200, description: "Hip and pelvic bone imaging" },
            "X-Ray Skull": { min_price: 400, max_price: 1500, description: "Head injury and sinus assessment" },
            "CT Scan Head": { min_price: 1200, max_price: 3500, description: "Brain imaging for neurological conditions" },
            "CT Scan Chest": { min_price: 1500, max_price: 4000, description: "Detailed lung and mediastinal imaging" },
            "CT Scan Abdomen": { min_price: 1800, max_price: 4500, description: "Abdominal organ detailed imaging" },
            "CT Scan Spine": { min_price: 2000, max_price: 5000, description: "Spinal cord and vertebrae imaging" },
            "CT Scan Whole Body": { min_price: 3000, max_price: 5500, description: "Comprehensive body screening" },
            "MRI Brain": { min_price: 2500, max_price: 8000, description: "High-resolution brain imaging", popular: true },
            "MRI Spine": { min_price: 3000, max_price: 9000, description: "Spinal cord and disc assessment" },
            "MRI Knee/Joint": { min_price: 2800, max_price: 7500, description: "Joint and cartilage evaluation" },
            "MRI Abdomen": { min_price: 3500, max_price: 10000, description: "Abdominal organ detailed assessment" },
            "Ultrasound Abdomen": { min_price: 350, max_price: 1200, description: "Liver, kidney, gallbladder imaging" },
            "Mammography": { min_price: 650, max_price: 2250, description: "Breast cancer screening" }
        },
        "Cardiac Tests": {
            "ECG (Electrocardiogram)": { min_price: 150, max_price: 500, description: "Heart rhythm and electrical activity", popular: true },
            "2D Echo": { min_price: 800, max_price: 2500, description: "Heart structure and function assessment" },
            "TMT (Treadmill Test)": { min_price: 1200, max_price: 3000, description: "Exercise stress test for heart" },
            "Holter Monitoring": { min_price: 2000, max_price: 4000, description: "24-hour continuous heart monitoring" }
        },
        "Neurological Tests": {
            "EEG (Electroencephalogram)": { min_price: 800, max_price: 2000, description: "Brain wave activity measurement" },
            "NCV (Nerve Conduction Velocity)": { min_price: 1500, max_price: 3500, description: "Nerve function assessment" },
            "EMG (Electromyography)": { min_price: 1200, max_price: 3000, description: "Muscle electrical activity test" }
        },
        "Pulmonary Tests": {
            "PFT (Pulmonary Function Test)": { min_price: 800, max_price: 2000, description: "Lung capacity and function assessment" },
            "Spirometry": { min_price: 600, max_price: 1500, description: "Basic lung function test" }
        },
        "Health Packages": {
            "Basic Health Checkup": { min_price: 799, max_price: 2499, description: "Essential health screening package", popular: true },
            "Comprehensive Health Checkup": { min_price: 1999, max_price: 4999, description: "Complete health assessment" },
            "Cardiac Package": { min_price: 1299, max_price: 3999, description: "Heart health comprehensive screening" },
            "Diabetes Package": { min_price: 899, max_price: 2799, description: "Diabetes monitoring and assessment" },
            "Thyroid Package": { min_price: 599, max_price: 1899, description: "Complete thyroid function evaluation" },
            "Women's Health Package": { min_price: 1499, max_price: 4499, description: "Comprehensive women's health screening" },
            "Men's Health Package": { min_price: 1299, max_price: 3999, description: "Complete men's health assessment" },
            "Senior Citizen Package": { min_price: 1799, max_price: 6249, description: "Age-appropriate health screening for 60+" }
        }
    }
};

// DOM elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const testsContainer = document.getElementById('testsContainer');
const districtsList = document.getElementById('districtsList');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderDistricts();
    renderTests();
    
    // Event listeners
    searchInput.addEventListener('input', filterTests);
    categoryFilter.addEventListener('change', filterTests);
    sortFilter.addEventListener('change', filterTests);
});

// Render districts
function renderDistricts() {
    districtsList.innerHTML = diagnosticData.districts
        .map(district => `<div class="district-tag">${district}</div>`)
        .join('');
}

// Render tests
function renderTests(testsToRender = null) {
    const allTests = testsToRender || getAllTests();
    
    if (allTests.length === 0) {
        testsContainer.innerHTML = '<div class="loading">No tests found matching your criteria.</div>';
        return;
    }
    
    testsContainer.innerHTML = allTests
        .map((test, index) => createTestCard(test, index))
        .join('');
}

// Get all tests in flat array
function getAllTests() {
    const allTests = [];
    
    for (const [category, tests] of Object.entries(diagnosticData.tests)) {
        for (const [testName, testData] of Object.entries(tests)) {
            allTests.push({
                category,
                name: testName,
                ...testData
            });
        }
    }
    
    return allTests;
}

// Create test card HTML
function createTestCard(test, index) {
    const priceRange = test.min_price === test.max_price 
        ? `₹${test.min_price}` 
        : `₹${test.min_price} - ₹${test.max_price}`;
    
    const popularBadge = test.popular ? '<span class="popular-badge">Popular</span>' : '';
    
    return `
        <div class="test-card" style="animation-delay: ${index * 0.1}s">
            <div class="test-category">${test.category}</div>
            <div class="test-name">${test.name}</div>
            <div class="test-description">${test.description}</div>
            <div class="price-info">
                <div class="price-range">${priceRange}</div>
                ${popularBadge}
            </div>
        </div>
    `;
}

// Filter tests based on search and filters
function filterTests() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    const sortBy = sortFilter.value;
    
    let filteredTests = getAllTests();
    
    // Apply search filter
    if (searchTerm) {
        filteredTests = filteredTests.filter(test =>
            test.name.toLowerCase().includes(searchTerm) ||
            test.description.toLowerCase().includes(searchTerm) ||
            test.category.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply category filter
    if (selectedCategory) {
        filteredTests = filteredTests.filter(test => test.category === selectedCategory);
    }
    
    // Apply sorting
    switch (sortBy) {
        case 'name':
            filteredTests.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'price-low':
            filteredTests.sort((a, b) => a.min_price - b.min_price);
            break;
        case 'price-high':
            filteredTests.sort((a, b) => b.max_price - a.max_price);
            break;
    }
    
    renderTests(filteredTests);
}

// Export data for potential API integration
window.diagnosticData = diagnosticData;
