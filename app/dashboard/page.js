import { use } from 'react'
function getData(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('这是dashboard---page')
    }, 3000);
  })
}
export default function dashboard(){
  const message = use(getData())
  return (
    <div style={{color:'red', fontSize: '18px'}}>
      {message}
    </div>
  )
}