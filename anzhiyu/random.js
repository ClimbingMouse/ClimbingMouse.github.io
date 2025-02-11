var posts=["2025/02/10/hello-world copy 2/","2025/02/10/hello-world/","2025/02/10/hello-world copy 3/","2025/02/10/hello-world copy/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };