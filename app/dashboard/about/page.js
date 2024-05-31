import { use } from 'react'
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('这是about页面(dashboard的子页面)')
    }, 3000);
  })
}
export default function About(){
  const message = use(getData())

  return(
    <div style={{color: 'red', fontSize: '18px'}}>
      {message}
    </div>
  )
}