import { useState } from 'react' 
import './CSSs/App.css'
import './CSSs/Article.css'
import './CSSs/articleCount.css'
import './CSSs/ArticleUnity.css'
import './CSSs/ArticleOther.css'
import Introduction from './Articles/Introduction'
import TodoList from './Articles/Todo/TodoList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'


function App() {
  const [Isopen,setIsopen] = useState(null);
  const [activeCate, SetactiveCate] = useState("All");
  const [currentArti, setCurrentArti] = useState(null);

  const Ispageopen = ()=>{
    setIsopen(true);

  }

  const SetCategory = (Category)=>{
      SetactiveCate(Category);
  }

  const Ispageclose = ()=>{
    if(Isopen === true){
      setIsopen(false);
    }
  }

  const articles = [
    {id:1, title:"自己紹介", category:"other", element: <Introduction />,description: "ここの管理者の自己紹介を書いていきたいと思います", classname: "article-other",URL:"Introduction"},
    {id:2, title:"TodoList", category:"プログラミング", element: <TodoList />,description: "練習がてらTodoListを作成しました", classname: "article-other",URL:"TodoList"},
  ]

  return (
    <Router basename='/Kuro.github.io'>
      <>
        <header className='head'>
          <div className='title'>
            <div className='mainhead'>
                <span className='Menu' onClick={Ispageopen}>≡</span>
              <div onClick={Ispageclose} className={Isopen ?"disable-click" : ""}>
                <div className='title-name'>Kuro's LIBRARY</div>
              </div>
            </div>
            <div className='subtitle'>
              <Link to='/' className='ulLinks'>
              <ul>
                <li onClick={() => SetCategory("All")}>
                全て 
                </li>
                <li onClick={() => SetCategory("unity")}>
                unity 
                </li>
                <li  onClick={() => SetCategory("math")}>
                数学 
                </li>
                <li onClick={() => SetCategory("pharmacy")}>
                  薬学 
                </li>
                <li onClick={() => SetCategory("information")}>
                情報 
                </li>
                <li onClick={() => SetCategory("trivia")}>
                雑学 
                </li>
                <li onClick={() => SetCategory("Program")}>
                プログラミング 
                </li>
                <li onClick={() => SetCategory("other")}>
                その他 
                </li>
              </ul>
              </Link>
            </div>
          </div>
        </header>
        <div className={Isopen === null?"hide-menu": Isopen? "OpenMenu":"CloseMenu"}>Home</div>
        <Routes>
          <Route path='/' element ={
            <div className='article-pos'>
              <div className='article-count'>記事総数:{articles.filter(cont =>activeCate === "All" || cont.category === activeCate).length}
                &nbsp; 現在のカテゴリー:{activeCate}  
              </div>
                {articles.filter(cont =>activeCate === "All" || cont.category === activeCate).map((cont, index)=>{
                  return <Link to={`${cont.category}-${cont.URL}`} className='deco'>
                    <article className={cont.classname} key = {cont.id}>
                      <p>
                        <div>{cont.title}</div>
                        {cont.description}<br></br>
                        #{cont.category}
                      </p>
                    </article>
                  </Link>
                })}
              </div>
          }></Route>
          {articles.map((cont)=>{
            return <Route path={`${cont.category}-${cont.URL}`} element = {cont.element} /> 
          })}
        </Routes>
      </>
    </Router>  
  )
}

export default App
