var posts=["2025/02/12/复盘/","2025/02/12/优秀文章-Android/","2025/02/12/好用的工具/","2025/02/12/笔记-Android/","2025/02/12/小技巧/","2025/02/12/面试题-Android/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };