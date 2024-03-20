const searchLoginForm = document.getElementById('search-login')

searchLoginForm.addEventListener('submit', async (e)=>{
  e.preventDefault()
  const login = searchLoginForm.querySelector('input').value;
  const profileData = await getGitProfile(login)
  renderProfileBlock(profileData)
  console.log(profileData);

})


async function getGitProfile(login){
  const data = await fetch(`https://api.github.com/users/${login}`)
  return await data.json()
}

function renderProfileBlock(data){
  const profileBlockHtml = document.querySelector('main')
  const html = `
    <div>
      <div>
      <img width="200" src="${data.avatar_url}" />
      </div>
      <div></div>
      <div></div>
    </div>
    <div></div>
  `
  profileBlockHtml.innerHTML = html

}