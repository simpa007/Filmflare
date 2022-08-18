import React from 'react'
import Main from '../component/Main/Main'
import Row from '../component/Row/Row'
import requests from '../Request'
export default function Home() {
  return (
    <div>
      <Main />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpComing} />
      <Row rowID="2" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="5" title="Horror" fetchURL={requests.requestHorror } /> 
    </div>
  )
}
