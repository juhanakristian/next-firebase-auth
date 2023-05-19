import React from 'react'
import Link from 'next/link'

const nfaDependencyVersion =
  require('../package.json').dependencies['next-firebase-auth']
const nextDependencyVersion = require('../package.json').dependencies.next
const firebaseDependencyVersion =
  require('../package.json').dependencies.firebase
<<<<<<< HEAD
=======
const firebaseAdminDependencyVersion =
  require('../package.json').dependencies['firebase-admin']
>>>>>>> v1.x

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 16,
  },
  versionsContainer: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  button: {
    marginLeft: 16,
    cursor: 'pointer',
  },
  nfaVersion: {
    fontWeight: '600',
  },
  loginContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}

const Header = ({ email, signOut }) => (
  <div style={styles.container}>
    <div style={styles.versionsContainer}>
<<<<<<< HEAD
      <div>v{nfaDependencyVersion}</div>
      <div>Next.js v{nextDependencyVersion}</div>
      <div>Firebase v{firebaseDependencyVersion}</div>
=======
      <div style={styles.nfaVersion}>Version {nfaDependencyVersion}</div>
      <div>Next.js {nextDependencyVersion}</div>
      <div>Firebase {firebaseDependencyVersion}</div>
      <div>firebase-admin {firebaseAdminDependencyVersion}</div>
>>>>>>> v1.x
    </div>
    <div style={styles.loginContainer}>
      {email ? (
        <>
          <p>Signed in as {email}</p>
          <div>
            <button
              type="button"
              onClick={() => {
                signOut()
              }}
              style={styles.button}
            >
              Sign out
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You are not signed in.</p>
          <div>
            <Link href="/auth">
              <a>
                <button type="button" style={styles.button}>
                  Sign in
                </button>
              </a>
            </Link>
          </div>
        </>
      )}
    </div>
  </div>
)

export default Header
