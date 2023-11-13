import { useEffect, useState } from 'react'
import { courseDTO } from '../types/dto'
import axios from 'axios'

const useCourseGet = () => {
  const [newCourse, setNewCourse] = useState<courseDTO | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const res = await axios.get('http://localhost:8080/course/1')
        setNewCourse(res.data)
      } catch (err) {
        console.log('error')
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])
  console.log(newCourse)

  return { newCourse, isLoading }
}

export default useCourseGet
