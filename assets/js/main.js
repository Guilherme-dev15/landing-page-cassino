function updateProfileInfo(profileData) {
  const photo = document.getElementById('profile.photo')
  photo.src = profileData.photo
  photo.alt = profileData.name

  const name = document.getElementById('profile-name')
  name.innerText = profileData.name

  const job = document.getElementById('profile-job')
  job.innerText = profileData.job

  const location = document.getElementById('profile-location')
  location.innerText = profileData.location

  const linkedin = document.getElementById('profile-linkedin')
  linkedin.innerText = profileData.linkedin
  
  const email = document.getElementById('profile-email')
  email.innerText = profileData.email
  email.href = `mailto:${profileData.email}
  `
}

(async () => {
  const profileData = await fetchSitesData()
  updateProfileInfo(profileData)

})()