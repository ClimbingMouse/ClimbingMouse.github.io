var posts=["2025/01/06/优秀文章-Android/","2025/01/07/复盘/","2025/01/10/好用的工具/","2025/01/10/笔记-Android/","2024/12/21/小技巧/","2025/01/06/面试题-Android/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };