var posts=["2024/04/21/Transfomer_位置编码/","2025/10/22/changekey/","2025/03/27/decodeapk/","2025/03/01/justrecord/","2025/01/06/nicearticles/","2024/01/10/nicetools/","2024/12/21/someskills/","2024/09/01/teacher_forcing/","2025/11/03/【每日早报】/","2024/12/21/张量索引切片操作/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };