document.addEventListener('DOMContentLoaded', () => {
    const myComputerIcon = document.getElementById('my-computer');
    const recycleBinIcon = document.getElementById('recycle-bin');

    myComputerIcon.addEventListener('click', () => {
        alert('My Computer clicked!');
        // Add more functionality here
    });

    recycleBinIcon.addEventListener('click', () => {
        alert('Recycle Bin clicked!');
        // Add more functionality here
    });
});