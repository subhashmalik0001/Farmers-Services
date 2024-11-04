function showServiceDetails(service) {
    const modal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    // Update modal content based on the selected service
    switch(service) {
        case 'irrigation':
            modalTitle.innerText = "Modern Irrigation Techniques";
            modalDescription.innerText = "Explore techniques like drip and sprinkler irrigation for optimized water usage and increased crop productivity.";
            break;
        case 'subsidies':
            modalTitle.innerText = "Government Subsidies";
            modalDescription.innerText = "Access updated information on government subsidies, grants, and programs that support sustainable farming.";
            break;
        case 'soilHealth':
            modalTitle.innerText = "Soil Health Management";
            modalDescription.innerText = "Learn about soil preservation practices to improve soil quality and support high crop yield.";
            break;
        case 'marketAccess':
            modalTitle.innerText = "Market Access & Pricing";
            modalDescription.innerText = "Connect directly with markets and access real-time prices, allowing for fair profit without middlemen.";
            break;
        case 'cropRotation':
            modalTitle.innerText = "Crop Rotation Benefits";
            modalDescription.innerText = "Crop rotation techniques to improve soil structure, control pests, and ensure long-term soil productivity.";
            break;
        case 'pestManagement':
            modalTitle.innerText = "Pest Management";
            modalDescription.innerText = "Use eco-friendly pest control methods to protect crops and enhance agricultural sustainability.";
            break;
        default:
            modalTitle.innerText = "Service Details";
            modalDescription.innerText = "More information about the selected service will be available soon.";
            break;
    }

    // Display the modal
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("serviceModal").style.display = "none";
}
