function updateProfileInformation(profileData) { //manipular html
    const profilePhoto = document.getElementById('profile.photo');
    profilePhoto.src = profileData.photo;
    profilePhoto.alt = profileData.name;

    const profileName = document.getElementById('profile.name');
    profileName.innerText = profileData.name;

    const profileJob = document.getElementById('profile.job');
    profileJob.innerText = profileData.job;

    const profileLocation = document.getElementById('profile.location');
    profileLocation.innerText = profileData.location;

    const profilePhone = document.getElementById('profile.phone');
    profilePhone.innerText = profileData.phone;

    const profileEmail = document.getElementById('profile.email');
    profileEmail.innerText = profileData.email;
    profileEmail.href = href=`mailto:${profileData.email}`;
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills');

    softSkills.innerHTML = profileData.skills.softSkills.map((skill) => `<li>${skill}</li>`).join('');
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills');

    hardSkills.innerHTML = profileData.skills.hardSkills.map((skill) => `<li><img src="${skill.logo}" alt="${skill.name}"></li>`).join('');
}

function updateLanguages(profileData) {
    const languages = document.getElementById('languages');

    languages.innerText = profileData.languages.map((language) => `<li>${language}</li>`);
}

async function main() {
    const profileData = await fetchProfileData();
    console.log(profileData);
    updateProfileInformation(profileData);
    updateSoftSkills(profileData);
    updateHardSkills(profileData);
}

main();