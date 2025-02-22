"use client";
import type { FC } from 'react'
import React, { useEffect } from 'react'

import type { IMainProps } from '@/app/components/chat-home'
import Main from '@/app/components/chat-home'
import { useSearchParams } from 'next/navigation';

const App: FC<IMainProps> = ({
  params,
}: any) => {
  const searchParams = useSearchParams();
  const tag = searchParams.get('tag');
  // 确保在 tag 存在时再合并
  const props = {
    ...params,
    ...(typeof tag !== 'undefined' ? { tag } : {}),
  };


  return (
    <Main params={props} />
  )
}

export default React.memo(App)
