import Link from 'next/link'
import Router from '../next_router'
import { Button } from 'antd'
import 'antd/lib/button/style/index.css'
export default () => {
  const goB = () => {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        //步骤五 如果能够进到这个判断 说明 数据 完美的回来了,并且请求的页面是存在的
        alert(JSON.parse(xhr.response).title)
      }
    }
    xhr.open('post', '/json', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('uname=xxx&upwd=123');
    // Router.push('/b')
  }

  return (
    <>
      <h1>I`m C</h1>
      <Link href="/a?id=1" as="/a/1">
        <Button>跳转到a页面</Button>
      </Link>
      <Button onClick={goB}>跳转到b页面</Button>
    </>
  )
}