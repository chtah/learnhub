import useCourseGet from '../hooks/useCourseGet'

const TestPage = () => {
  const { newCourse } = useCourseGet()

  return <div>{newCourse?.menu[0].menu_title}</div>
}
export default TestPage
