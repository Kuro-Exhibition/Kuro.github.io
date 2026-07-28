import React from 'react'
import PostLayout from '../../components/PostLayout';
import NewsData from './data.json'

function scraping() {

  return (
    <>
      <PostLayout title="Scraping">
        <div>News</div><br/>
        {NewsData.map((data,_)=>
          <>
            <div>
              【{data.category}】<a href={data.url}>{data.title}</a>
            </div>
            <br/>
          </>
        )}
      </PostLayout>
    </>
  )
}
export default scraping