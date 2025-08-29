"use client"

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ApplyRedirect = dynamic(() => import('@/app/ig/apply/ApplyRedirect'), { ssr: false });

export default function ApplyPage() {
  return (
    <Suspense fallback={<p>Redirecting...</p>}>
      <ApplyRedirect />
    </Suspense>
  );
}
