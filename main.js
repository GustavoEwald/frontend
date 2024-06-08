$(document).ready(()=>{
  avatar = document.getElementById('profile-avatar');
  profile_name = document.getElementById('name');
  user = document.getElementById('user');
  repositories = document.getElementById('repositories');
  followers = document.getElementById('followers');
  following = document.getElementById('following');
  link = document.getElementById('link');

  fetch('https://api.github.com/users/GustavoEwald').then((response)=>{
    return response.json();
  })
  .then((json)=>{
    avatar.src = json.avatar_url ;
    profile_name.innerHTML = json.name;
    user.innerHTML = '@'+json.login;
    repositories.innerHTML = json.public_repos;
    followers.innerHTML = json.followers;
    following.innerHTML = json.following;
    link.href = json.html_url;

  })
})