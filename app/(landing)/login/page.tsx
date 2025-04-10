import LoginForm from '@/components/Login/Login'
import React, { Suspense } from 'react';

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    < LoginForm />
    </Suspense>
  )
}

export default page
