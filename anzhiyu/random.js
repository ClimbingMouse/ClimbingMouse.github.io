var posts=["2025/03/27/decodeapk/","2025/03/01/justrecord/","2025/01/06/nicearticles/","2025/10/22/changekey/","2025/01/10/nicetools/","2024/12/21/someskills/","2025/10/27/【每日早报】/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };