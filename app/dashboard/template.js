'use client'
import Link from 'next/link'
import { useState } from 'react';

export default function DashboardTemplate({children}) {
  const [num, setNum] = useState(0)

  return (
    <div style={{padding: '3px', border: '3px solid #ccc'}}>
      <div style={{padding: '5px', border: '1px solid blue'}}>
        <div>
          <Link href="/dashboard/settings">settings页面</Link>
          <Link href="/dashboard/about">about页面</Link>
        </div>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num+1)}>增加</button>
      </div>
      <div>这是dashboard---template</div>
      {children}
    </div>
  )
}