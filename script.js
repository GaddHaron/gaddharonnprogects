document.getElementById('inputForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const userData = {
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        id: document.getElementById('id').value,
        age: document.getElementById('age').value,
        gender: document.getElementById('gender').value,
        address: document.getElementById('address').value,
        date: document.getElementById('date').value,
        profileImage: document.getElementById('profileImage').files[0]?.name
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    window.location.href = 'view.html';
});

if (document.getElementById('profileData')) {
    const storedUser = JSON.parse(localStorage.getItem('userData'));
    if (storedUser) {
        document.getElementById('profileName').innerText = storedUser.name;
        document.getElementById('profileUsername').innerText = storedUser.username;
        document.getElementById('profileEmail').innerText = storedUser.email;
        document.getElementById('profileId').innerText = storedUser.id;
        document.getElementById('profileAge').innerText = storedUser.age;
        document.getElementById('profileGender').innerText = storedUser.gender;
        document.getElementById('profileAddress').innerText = storedUser.address;
        document.getElementById('profileDate').innerText = storedUser.date;
        document.getElementById('profileImageDisplay').innerText = storedUser.profileImage;
    } else {
        alert('No user data found. Please register first.');
        window.location.href = 'input.html';
    }
}

function goBack() {
    window.location.href = 'index.html';
}