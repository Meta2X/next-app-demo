import { use } from 'react'
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('这是settings页面(dashboard的子页面)')
    }, 3000);
  })
}
export default function Settings() {
  const message = use(getData())

  return (
    <div style={{color: 'red', fontSize: '18px'}}>
      {message}
    </div>
  )
}