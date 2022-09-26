import React,{ useEffect}from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Dashboard = () => {
  const {user} = useSelector((state) => state.auth)
  const navigate = useNavigate()
  
  useEffect(() => {
    if(!user) {
      navigate('/login')
    }
  }, [navigate, user])



  return (
    <div>Dashboard</div>
  )
}

export default Dashboard