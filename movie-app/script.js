document.addEventListener("DOMContentLoaded", function () {
    // Get all sections and links
    const sections = document.querySelectorAll("main");
    const links = document.querySelectorAll("nav a");

    // Function to handle hash change and load the right view
    function handleHashChange() {
        // Get the current hash
        const hash = window.location.hash.substring(1);

        // Remove the "active" class from all sections
        sections.forEach(section => section.classList.remove("active"));

        // Find the section matching the hash and make it active
        const activeSection = document.getElementById(hash);
        if (activeSection) {
            activeSection.classList.add("active");
        } else {
            // Default to the home section if no matching hash is found
            document.getElementById("home").classList.add("active");
        }

        // Update link styles (optional)
        links.forEach(link => link.classList.remove("active"));
        const activeLink = document.querySelector(`nav a[href="#${hash}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }
    }

    // Add event listener to the window to listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Trigger the function to load the initial view
    handleHashChange();
});
