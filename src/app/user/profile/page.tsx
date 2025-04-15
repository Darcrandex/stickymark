/**
 * @name UserProfile
 * @description
 * @author darcrand
 */

'use client'

import { useEffect } from 'react'

export default function UserProfile() {
  useEffect(() => {
    fetch('/api/auth/user/info', {
      headers: { authorization: localStorage.getItem('token') || '' },
    })
  }, [])

  return (
    <>
      <h1>UserProfile</h1>
    </>
  )
}
