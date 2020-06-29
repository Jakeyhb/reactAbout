import React from 'react'

export default function Two() {
  const headData = [
    { id: '1', name: '演唱会', icon: 'https://img.meituan.net/kylisean/b132e8d30be554486b8c909c7d16f7c15282.png', path: '' },
    { id: '2', name: '话剧歌剧', icon: 'https://img.meituan.net/kylisean/5cc92a5a6bb19618f7d2b31433a2a2f24956.png', path: '' },
    { id: '3', name: '休闲展览', icon: 'https://img.meituan.net/kylisean/2b3d5971c31e8a39e181bd07f3c42d824737.png', path: '' },
    { id: '4', name: '戏曲相声', icon: 'https://img.meituan.net/kylisean/8d6764a0cee35332f44976f84b188c444767.png', path: '' },

    { id: '5', name: '亲子/艺术', icon: 'https://img.meituan.net/kylisean/cce8a904f6489abeff04f9d9555dd77f4052.png', path: '' }
  ];
  return (
    <div className="select-bnt">

      <div className="categories">
        {
          headData.map(item => (
            <div key={item.id} className="icon-item">
              <div>
                <div className="img-wrap"><img src={item.icon} className="head-icon" /></div>
                <div className="icon-text">
                  {item.name}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
