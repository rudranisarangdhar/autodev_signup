import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Login attempt:', { email, password })
    }

    return (
        <div className="login-container">
            {/* Left Section - Branding */}
            <div className="left-section">
                <div className="logo">
                    <span>AUTODEV</span>
                </div>

                <div className="hero-content">
                    <h1 className="hero-title">
                        Dream to Deployment<br />

                    </h1>
                    <p className="hero-subtitle">
                        Your round-the-clock AI software partner.
                    </p>

                    <img
                        src="/mascot.png"
                        alt="AUTODEV Mascots"
                        className="illustration"
                        onError={(e) => {
                            e.target.style.display = 'none'
                        }}
                    />
                </div>
            </div>

            {/* Right Section - Login Form */}
            <div className="right-section">
                <div className="login-card">
                    <div className="login-header">
                        <h2 className="login-title">Welcome Back</h2>

                        <button className="google-btn">
                            <svg className="google-icon" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Sign in with Google
                        </button>
                    </div>

                    <div className="divider">Or Sign in with a registered account</div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="email"
                                className="input-field"
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <input
                                type="password"
                                className="input-field"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="forgot-password">
                            <a href="#">Forgot password?</a>
                        </div>

                        <button type="submit" className="sign-in-btn">
                            Sign in
                        </button>

                        <div className="create-account">
                            Don't have an account? <Link to="/signup">Create your account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
