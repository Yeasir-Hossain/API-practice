const loadbuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => display(data))
}
loadbuddies();
const display = data => {
    const buddies = data.results;
    const buddiesdiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p');
        p.innerText = ` Name: ${buddy.name.first} ${buddy.name.last}
        Mail: ${buddy.email}
        `
        buddiesdiv.appendChild(p);
    }

}