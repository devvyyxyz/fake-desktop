document.addEventListener('DOMContentLoaded', () => {
    const myComputerIcon = document.getElementById('my-computer');
    const recycleBinIcon = document.getElementById('recycle-bin');
    const contextMenu = document.getElementById('context-menu');
    const desktopContextMenu = document.getElementById('desktop-context-menu');
    const desktop = document.getElementById('desktop');

    const showContextMenu = (event, menu) => {
        event.preventDefault();
        menu.style.top = `${event.clientY}px`;
        menu.style.left = `${event.clientX}px`;
        menu.style.display = 'block';
    };

    const hideContextMenu = () => {
        contextMenu.style.display = 'none';
        desktopContextMenu.style.display = 'none';
    };

    myComputerIcon.addEventListener('contextmenu', (event) => {
        showContextMenu(event, contextMenu);
        contextMenu.setAttribute('data-icon-id', 'my-computer');
    });

    recycleBinIcon.addEventListener('contextmenu', (event) => {
        showContextMenu(event, contextMenu);
        contextMenu.setAttribute('data-icon-id', 'recycle-bin');
    });

    desktop.addEventListener('contextmenu', (event) => {
        showContextMenu(event, desktopContextMenu);
    });

    document.addEventListener('click', hideContextMenu);

    contextMenu.addEventListener('click', (event) => {
        const iconId = contextMenu.getAttribute('data-icon-id');
        const action = event.target.textContent;
        alert(`Action "${action}" on icon "${iconId}"`);
        hideContextMenu();
    });

    desktopContextMenu.addEventListener('click', (event) => {
        const action = event.target.textContent;
        alert(`Action "${action}" on desktop`);
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

    desktop.addEventListener('dragover', handleDragOver);
    desktop.addEventListener('drop', handleDrop);
});