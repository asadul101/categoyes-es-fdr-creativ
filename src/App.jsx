
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Card from './components/Card'

function App() {
const [data,setData]=useState([])
const[filters,setFilters]=useState([])
  useEffect(()=>{
    fetch('fakedata.json')
    .then(res=>res.json())
    .then(data=>{setData(data),setFilters(data)})
  },[])
  console.log(data);
   const handleCat=(allData)=>{
    const filterData=data.filter(item=>{
      return item.category==allData
    })
    setFilters(filterData)
   }

    const links=<>
     <li onClick={()=>setFilters(data)}><a>All</a></li>
     <li onClick={()=>handleCat('Brackfast')}><a>Barkfarst</a></li>
     <li onClick={()=>handleCat('Lunch')}><a>Lunch</a></li>
     <li onClick={()=>handleCat('Dinner')}><a>Dinner</a></li>
    
    </>
  return (
    <div className='container mx-auto pt-10'>
      <div className="navbar bg-base-200 rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <h1 className='text-3xl font-bold'>Food </h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-neutral">Loing</a>
        </div>
      </div>
      <div className='pt-10'>
        <div className='grid grid-cols-2 gap-6'>
          {
            filters.map(da=><Card key={da.id} products={da}></Card>)
          }
        </div>
      </div>


    </div>
  )
}

export default App
