const social_media_links = {
  github: 'davibc',
  youtube: 'davibc',
  facebook: 'costadavib',
  instagram: 'costadavib',
  twitter: 'costabdavi'
}

function change_social_media_links() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${social_media_links[social]}`

    // alert(li.children[0].href)
  }
}

change_social_media_links()

function get_github_profile_infos() {
  const url = `https://api.github.com/users/${social_media_links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithubLink.href = data.html_url
      userAvatar.src = data.avatar_url
      githubLogin.textContent = data.login
    })
}

get_github_profile_infos()
