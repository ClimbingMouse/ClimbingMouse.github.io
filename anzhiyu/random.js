var posts=["2025/03/02/englishlearn/","2025/01/06/forinterview/","2025/03/09/getherback/","2025/03/01/justrecord/","2025/01/06/nicearticles/","2025/01/10/nicetools/","2024/12/21/someskills/","2025/01/10/notes/","2025/01/07/summary/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };