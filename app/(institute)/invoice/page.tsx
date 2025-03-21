import InvoicePage from '@/components/Invoice/Invoice';
import React, { Suspense } from 'react';

function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <InvoicePage />
    </Suspense>
  );
}

export default Page;