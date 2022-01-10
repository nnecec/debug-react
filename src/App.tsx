import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'

import { routes } from './pages'

function App() {
  return (
    <Router>
      <Layout style={{ height: '100%' }}>
        <Layout.Sider>
          <Menu theme="dark" mode="inline">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            {
              routes.map(route => <Menu.Item key={route.path}>
                <Link to={route.path}>{route.component.name}</Link>
              </Menu.Item>)
            }
          </Menu>
        </Layout.Sider>
        <Layout.Content style={{ padding: 16 }}>
          <Routes>
            {
              routes.map(route => {
                const { component: Component, path } = route
                return <Route key={path} path={path} element={<Component />} />
              })
            }
          </Routes>
        </Layout.Content>
      </Layout>
    </Router>
  )
}

export default App
