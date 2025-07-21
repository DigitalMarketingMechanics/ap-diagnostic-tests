# Andhra Pradesh Diagnostic Tests Price Guide

A comprehensive web application providing accurate pricing information for diagnostic tests across all 26 districts of Andhra Pradesh. This platform helps patients, healthcare providers, and medical tourists make informed decisions about diagnostic testing costs.

![AP Diagnostic Tests](https://img.shields.io/badge/Status-Active-green)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![Districts](https://img.shields.io/badge/Districts-26-orange)
![Tests](https://img.shields.io/badge/Tests-60+-red)

##  Features

###  Complete Coverage
- **All 26 Districts**: Covers every district in Andhra Pradesh including newly formed districts
- **60+ Diagnostic Tests**: Comprehensive database of commonly performed tests
- **6 Test Categories**: Blood Tests, Imaging, Cardiac, Neurological, Pulmonary, and Health Packages

###  Smart Search & Filtering
- **Real-time Search**: Find tests instantly by name, description, or category
- **Category Filtering**: Filter tests by medical category
- **Price Sorting**: Sort by price range (low to high, high to low)
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

###  Accurate Pricing
- **Price Ranges**: Displays minimum and maximum costs across different laboratories
- **Current Market Rates**: Updated pricing based on major diagnostic centers
- **Transparent Information**: No hidden costs or misleading information

##  Districts Covered

### Coastal Andhra (11 Districts)
- Srikakulam, Parvathipuram Manyam, Vizianagaram, Visakhapatnam, Anakapalli
- Alluri Sitharama Raju, Kakinada, East Godavari, Konaseema, West Godavari, Eluru

### Central Andhra (7 Districts)  
- Krishna, NTR, Guntur, Palnadu, Bapatla, Prakasam, SPSR Nellore

### Rayalaseema (8 Districts)
- Kurnool, Nandyal, Anantapur, Sri Sathya Sai, YSR Kadapa, Annamayya, Chittoor, Tirupati

##  Test Categories

###  Blood Tests (19 tests)
- Complete Blood Count (CBC), Liver Function Test, Kidney Function Test
- Thyroid Profile, Lipid Profile, Diabetes Tests (HbA1c, Blood Sugar)
- Vitamin D & B12, Iron Studies, Electrolytes, and more

###  Imaging Tests (17 tests)
- X-Ray (Chest, Abdomen, Limbs, Spine, Pelvis, Skull)
- CT Scans (Head, Chest, Abdomen, Spine, Whole Body)
- MRI Scans (Brain, Spine, Joints, Abdomen)
- Ultrasound, Mammography

###  Cardiac Tests (4 tests)
- ECG, 2D Echo, TMT (Treadmill Test), Holter Monitoring

###   Neurological Tests (3 tests)
- EEG, NCV (Nerve Conduction Velocity), EMG

###  Pulmonary Tests (2 tests)
- PFT (Pulmonary Function Test), Spirometry

###  Health Packages (8 packages)
- Basic to Comprehensive Health Checkups
- Specialized packages for Cardiac, Diabetes, Thyroid
- Gender-specific and Senior Citizen packages

##  Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DigitalMarketingMechanics/ap-diagnostic-tests.git
   cd ap-diagnostic-tests
   ```

2. **Open the application**
   ```bash
   # Simply open index.html in your browser
   open index.html
   # OR
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

### File Structure
```
ap-diagnostic-tests/
index.html          # Main HTML file
style.css           # Stylesheet
app.js             # JavaScript functionality
data.json          # Test data (optional)
README.md          # This file
```

##  Usage

1. **Search Tests**: Use the search bar to find specific diagnostic tests
2. **Filter by Category**: Select a medical category from the dropdown
3. **Sort Results**: Arrange tests by name or price range
4. **View Details**: Each test card shows description and price range
5. **District Information**: View all 26 districts covered

##  Sample Price Ranges

| Test Category | Price Range | Popular Tests |
|---------------|-------------|---------------|
| Blood Tests | â‚¹80 - â‚¹1,367 | CBC, Thyroid Profile, HbA1c |
| Imaging Tests | â‚¹170 - â‚¹10,000 | X-Ray Chest, MRI Brain |
| Cardiac Tests | â‚¹150 - â‚¹4,000 | ECG, 2D Echo |
| Health Packages | â‚¹599 - â‚¹6,249 | Basic Checkup, Comprehensive |

##  Customization

### Adding New Tests
1. Edit the `diagnosticData` object in `app.js`
2. Add new test entries with required fields:
   ```javascript
   "Test Name": {
     min_price: 100,
     max_price: 500,
     description: "Test description",
     popular: true  // Optional
   }
   ```

### Styling Changes
- Modify `style.css` for visual customizations
- Responsive breakpoints at 768px and 480px
- CSS custom properties for easy color scheme changes

### Adding Districts
- Update the `districts` array in `app.js`
- Ensure all 26 current districts are maintained

##  Responsive Design

- **Mobile First**: Optimized for smartphones and tablets
- **Touch Friendly**: Large touch targets for mobile users
- **Fast Loading**: Lightweight design for quick access
- **Accessibility**: ARIA labels and semantic HTML

##  Data Sources

Pricing data compiled from leading diagnostic centers:
- Apollo 247
- Redcliffe Labs
- Vijaya Diagnostics
- Tapadia Diagnostics
- Delta Hospitals
- Thyrocare
- Regional diagnostic centers across major AP cities

##  Performance

- **Lightweight**: Pure HTML, CSS, and JavaScript
- **No Dependencies**: No external libraries required
- **Fast Rendering**: Efficient DOM manipulation
- **Cached Assets**: Browser caching for faster subsequent loads

##  Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines
- Update pricing data from verified sources only
- Maintain responsive design principles
- Test across different devices and browsers
- Follow existing code style and conventions

##  License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Disclaimer

- Prices may vary based on location, laboratory type, and current market conditions
- Always confirm pricing with respective diagnostic centers before booking
- This application is for informational purposes only
- Not affiliated with any specific diagnostic center or laboratory

##  Support

For questions, suggestions, or issues:
- Create an issue on GitHub
- Email:digitalmarketingmechanics03@gmail.com (if applicable)

##  Version History

- **v1.0.0** (January 2025) - Initial release with all 26 districts and 60+ tests

##  Acknowledgments

- Andhra Pradesh Government for district reorganization data
- Various diagnostic centers for pricing information
- Open source community for inspiration and tools

---

**Made with AI for the people of Andhra Pradesh**

*Helping make healthcare transparent and accessible across all districts*
