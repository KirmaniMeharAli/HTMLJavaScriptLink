document.addEventListener('DOMContentLoaded', () => {
    loadLinks();
});

function addLink() {
    const linkName = document.getElementById('linkName').value.trim();
    const linkURL = document.getElementById('linkURL').value.trim();
    
    if (linkName && linkURL) {
        const linkList = document.getElementById('linkList');
        const newLink = document.createElement('li');
        
        newLink.innerHTML = `
            <a href="${linkURL}" target="_blank">${linkName}</a>
            <button onclick="removeLink(this)">Remove</button>
        `;
        
        linkList.appendChild(newLink);
        saveLinks();
        clearInputs();
    }
}

function removeLink(button) {
    button.parentElement.remove();
    saveLinks();
}

function saveLinks() {
    const links = document.getElementById('linkList').innerHTML;
    localStorage.setItem('userLinks', links);
}

function loadLinks() {
    const savedLinks = localStorage.getItem('userLinks');
    if (savedLinks) {
        document.getElementById('linkList').innerHTML = savedLinks;
    }
}

function clearInputs() {
    document.getElementById('linkName').value = '';
    document.getElementById('linkURL').value = '';
}
