//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('input[type="button"][value="Select and Remove"]');
    const dropdown = document.getElementById('colorSelect');

    button.addEventListener('click', function() {

		const selectedOption = dropdown.options[dropdown.selectedIndex];

        dropdown.removeChild(selectedOption);
    });
});