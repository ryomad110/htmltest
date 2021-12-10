function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
var links = ['https://forms.gle/KsCTvLTuz9rtiL7b9 ', 'https://forms.gle/pEHhjH31nT8NFYsQ7', 'https://forms.gle/cmxRbv2A53QuCfoh6', 'https://forms.gle/VKiSu29BzabAZgZ19', 'https://forms.gle/DNzZf2EzyceLg9Lq7']; //同じようにして遷移先のURLを配列へ格納する
window.location.href = links[getRandomInt(links.length)]; //getrandomInt(x)のxを遷移先のページの数に
