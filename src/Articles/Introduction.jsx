import React from 'react'
import PostLayout from '../components/PostLayout'
import "./Text.css"

function Introduction() {
  return (
    <>
      <PostLayout title="Introduction">
        <p>
          みなさんどうも初めまして<br/>
      <span className='Yoru-text' style={{color:'#0000cd',fontWeight:"bold"}}>Kuro's Library</span>の管理者を務める
      <span className='Yoru-text' style={{color:'#0000cd',fontWeight:"bold"}}>Kuro</span>と申します
        </p>
        <p>
      このサイトでは自身が作った作品・プログラムや勉強したところを載せていきたいと考えております<br/>
      まだまだ初学者ですが頑張っていきたいと思います
        </p>
        <p>
      自信のウェブサイトを設立した目的ですが主に2つあります
      <p>1つ目が、CSS,React,HTMLを習うついでにウェブサイトを管理してみたかったからですね<br/>
      調べものしていろいろなウェブサイトを見るたびにネットに自分の居場所があるのうらやましいなとずっと思ってたんですけど、
      それなら勉強がてらに作っちゃおうってことで作らせていただきました
      見ての通りまだまだ知識はございませんがより良いものを作っていきたいですね
      </p>
      <p>
        ２つ目が、自身の軌跡を残していきたいからですね<br/>
        今までにですね様々な作品を作ったり、勉強で調べたものをノートに書いたりしたんですけど、
        気が付いたら見なくなって消えて行ってしまうんです。消えるたびに「もったいないなぁ」
        「せっかくなら残していきたい」と思ってたんですけど、どうすればいいのかわからず路頭に彷徨っていた時にですね、
        ウェブサイト作るなら、自分の作品とかを置いちゃえばいいじゃないかと閃いてしまったんですね
      </p>
      <p>
        ってことで記念すべき１つ目の記事をこれで終わりたいと思います<br/>
        まだまだこのウェブサイトは発展途上ですが頑張っていきたいですね
      </p>

      
        </p>
    </PostLayout>
    </>
  )
}

export default Introduction