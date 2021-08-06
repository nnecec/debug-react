import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { TestUseCallback } from './pages/test-use-callback'

const { Header, Content, Footer, Sider } = Layout

function App () {
  const handleMenuClick = (params) => {
    console.log(params)
  }

  return (
    <Router>
      <Layout style={{ height: '100%' }}>
        <Sider>
          <Menu theme="dark" mode="inline" onClick={handleMenuClick}>
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="test-use-callback">
              <Link to="/test-use-callback">TestUseCallback</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Switch>
            <Route path="/test-use-callback">
              <TestUseCallback />
            </Route>
          </Switch>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
