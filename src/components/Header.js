import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext'
import Darkmode from './Darkmode'

const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  console.log('context', user)

  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/courses" className="justify-between">
                  Courses
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2">
                  <ul className="p-2">
                    <li>
                      <a>C Programming for Beginners</a>
                    </li>
                    <li>
                      <a>Introduction to R</a>
                    </li>
                    <li>
                      <a>Introduction to Database</a>
                    </li>
                    <li>
                      <a>Advanced JAVA Programming for Software Development</a>
                    </li>
                    <li>
                      <a>Data Structures And Algorithms</a>
                    </li>
                    <li>
                      <a>Complete HTML5, CSS3 & Bootstrap 4</a>
                    </li>
                  </ul>
                </ul>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            🛩 Cognition
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/courses">
                Courses
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2">
                <li>
                  <a>C Programming for Beginners</a>
                </li>
                <li>
                  <a>Introduction to R</a>
                </li>
                <li>
                  <a>Introduction to Database</a>
                </li>
                <li>
                  <a>Advanced JAVA Programming for Software Development</a>
                </li>
                <li>
                  <a>Data Structures And Algorithms</a>
                </li>
                <li>
                  <a>Complete HTML5, CSS3 & Bootstrap 4</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mx-2">
            <Darkmode></Darkmode>
          </div>
          {!user?.uid && (
            <div>
              <Link className="mx-3 hidden lg:inline" to="/login">
                Log in
              </Link>
              <Link className="btn mx-1" to="/register">
                Register
              </Link>
            </div>
          )}
          {user?.uid && (
            <div
              className="flex items-center tooltip tooltip-bottom"
              data-tip={user.displayName}
            >
              {/* <span>Welcome, {user.displayName}</span> */}
              <div>
                <button onClick={handleSignOut} className="btn btn-sm">
                  Log Out
                </button>
              </div>
              <div
                className="rounded-full avatar w-12 mask mask-circle mx-2 tooltip"
                data-tip={user.displayName}
              >
                <img src={user.photoURL} alt="" width={36} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
