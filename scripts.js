document.addEventListener('DOMContentLoaded', () => {
    const myComputerIcon = document.getElementById('my-computer');
    const recycleBinIcon = document.getElementById('recycle-bin');
    const contextMenu = document.getElementById('context-menu');

    const showContextMenu = (event, iconId) => {
        event.preventDefault();
        contextMenu.style.top = `${event.clientY}px`;
        contextMenu.style.left = `${event.clientX}px`;
        contextMenu.style.display = 'block';
        contextMenu.setAttribute('data-icon-id', iconId);
    };

    const hideContextMenu = () => {
        contextMenu.style.display = 'none';
    };

    myComputerIcon.addEventListener('contextmenu', (event) => showContextMenu(event, 'my-computer'));
    recycleBinIcon.addEventListener('contextmenu', (event) => showContextMenu(event, 'recycle-bin'));

    document.addEventListener('click', hideContextMenu);

    contextMenu.addEventListener('click', (event) => {
        const iconId = contextMenu.getAttribute('data-icon-id');
        const action = event.target.textContent;
        alert(`Action "${action}" on icon "${iconId}"`);
        hideContextMenu();
    });
});