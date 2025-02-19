'use client'

import React from 'react';
import { QueryClientProvider,QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
 children : React.ReactNode 
}

export default function Provider({children}: Props) {
const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
