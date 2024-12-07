
import Login from './auth/Login'
import Signup from './auth/Signup'
import Layout from './components/ui/shared/Layout'
import Feed from './components/ui/shared/Feed'
import { useState } from 'react'

export default function App() {
  const [currentView, setCurrentView] = useState('main') // 'main', 'login', or 'signup'

  const renderView = () => {
    switch (currentView) {
      case 'login':
        return <Login onClose={() => setCurrentView('main')} />
      case 'signup':
        return <Signup onClose={() => setCurrentView('main')} />
      default:
        return (
          <Layout onLoginClick={() => setCurrentView('login')} onSignupClick={() => setCurrentView('signup')}>
            <Feed />
          </Layout>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {renderView()}
    </div>
  )
}