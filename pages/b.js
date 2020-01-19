import Link from 'next/link'
import { Button } from 'antd'
import 'antd/lib/button/style/index.css'
import ActiveLink from '../components/ActiveLink'
const LinkTest = () => (
    <div>
        <h1>I`m B</h1>
        <ActiveLink href='/a'><Button>跳转到a页面</Button></ActiveLink>
        <Link prefetch href="/c">
            <Button>跳转到c页面</Button>
        </Link>
    </div>
)

export default LinkTest