import SignUpForm from '@/components/Signup/Signup'
import React, { Suspense } from 'react';

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    < SignUpForm />
    </Suspense>
  )
}

export default page
