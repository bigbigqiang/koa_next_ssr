import Router from '../next_router'
import { Button } from 'antd'
import 'antd/lib/button/style/index.css'
export default (props) => {
  const goB = () => {
    Router.push('/b?id=2')
    // 或
    Router.push({
      pathname: '/b',
      query: {
        id: 2,
      },
    })
  }

  return <div>
    <div>这是a页面, 参数是</div>
    <Button onClick={goB}>跳转到b页面</Button>
  </div>
}
