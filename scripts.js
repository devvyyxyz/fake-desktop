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

    const handleDragStart = (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.style.opacity = '0.5';
    };

    const handleDragEnd = (event) => {
        event.target.style.opacity = '1';
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const id = event.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(id);
        const dropzone = event.target.closest('.desktop');
        if (dropzone) {
            draggableElement.style.position = 'absolute';
            draggableElement.style.left = `${event.clientX}px`;
            draggableElement.style.top = `${event.clientY}px`;
        }
    };

    myComputerIcon.addEventListener('dragstart', handleDragStart);
    myComputerIcon.addEventListener('dragend', handleDragEnd);
    recycleBinIcon.addEventListener('dragstart', handleDragStart);
    recycleBinIcon.addEventListener('dragend', handleDragEnd);

    document.querySelector('.desktop').addEventListener('dragover', handleDragOver);
    document.querySelector('.desktop').addEventListener('drop', handleDrop);
});