function updateCardInfo(cardData) {
  const image = document.getElementById('image-logo')
  photo.src = cardData.image
  photo.alt = cardData.name

  const name = document.getElementById('name-cassino')
  name.innerText = cardData.name

  const job = document.getElementById('head-line')
  job.innerText = cardData.job

  const location = document.getElementById('profile-location')
  location.innerText = cardData.location

  const linkedin = document.getElementById('profile-linkedin')
  linkedin.innerText = cardData.linkedin
  
  const email = document.getElementById('profile-email')
  email.innerText = cardData.email
  email.href = `mailto:${cardData.email}
  `
}

(async () => {
  const cardData = await fetchSitesData()
  updateProfileInfo(cardData)

})()