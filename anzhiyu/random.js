var posts=["2025/03/01/以防自己忘了/","2025/01/06/优秀文章-Android/","2025/01/07/复盘/","2025/01/10/好用的工具/","2024/12/21/小技巧/","2025/01/10/笔记-Android/","2025/01/06/面试题-Android/","2025/03/02/英语学习笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };