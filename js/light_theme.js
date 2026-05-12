// Source - https://stackoverflow.com/a/63087710
// Posted by Carol Skelly, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-26, License - CC BY-SA 4.0

const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-bs-theme', savedTheme);
document.getElementById('btnSwitch').checked = (savedTheme === 'dark');

// Toggle theme on button click
document.getElementById('btnSwitch').addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    document.getElementById('btnSwitch').checked = (newTheme === 'dark');
});
