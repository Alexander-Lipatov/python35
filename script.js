const searchLoginForm = document.getElementById("search-login");
const loader = document.querySelector(".loader");
const description = document.querySelector(".description");

searchLoginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const login = searchLoginForm.querySelector("input").value;
  description.style.display = "none";
  loader.style.display = "block";
  const profileData = await getGitProfile(login);
  searchLoginForm.querySelector("input").value = "";
  loader.style.display = "none"
  if (profileData) renderProfileBlock(profileData);
  if (!profileData) alert("Profile not found!");
});

async function getGitProfile(login) {
  const data = await fetch(`https://api.github.com/users/${login}`);
  if (!data.ok) return null;
  
  return await data.json();
}

function renderProfileBlock(data) {
  const profileBlockHtml = document.querySelector("main");
  const html = `
    <div class="leftBlock">
      <img width="25%" src="${data.avatar_url}" />
      <div><span>Name:</span><span>${data.name}</span></div>
      <div><span>Login:</span><span>${data.login}</span></div>
    </div>
    <div class="rightBlock">
      <div><span>Url to git:</span> <a href="${data.html_url}">${data.html_url}</a></div>
      <div><span>Blog:</span><span>${data.blog}</span></div>
      <div><span>City:</span><span>${data.location}</span></div>
      <div><span>Email:</span><span>${data.email}</span></div>
      <div>
        <div><span>Followers:</span><span>${data.followers}</span></div>
        <div><span>Following:</span><span>${data.following}</span></div>
      </div>
    </div>
  `;
  profileBlockHtml.innerHTML = html;
}
