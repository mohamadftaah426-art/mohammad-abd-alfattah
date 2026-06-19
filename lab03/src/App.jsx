import Course from './components/Course'
import Phonebook from './components/Phonebook'
import Countries from './components/Countries'

const App = () => {
  const courses = [
    {
      name: 'تطبيقات تطوير Half Stack',
      id: 1,
      parts: [
        { id: 1, name: 'أساسيات React', exercises: 10 },
        { id: 2, name: 'استخدام props لتمرير البيانات', exercises: 7 },
        { id: 3, name: 'حالة المكوّن', exercises: 14 },
        { id: 4, name: 'تنقيح تطبيقات React', exercises: 11 }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        { id: 1, name: 'التوجيه (Routing)', exercises: 3 },
        { id: 2, name: 'الوسائط (Middlewares)', exercises: 7 }
      ]
    }
  ]

  return (
    <div>
      <h1>منهاج الويب</h1>
      {courses.map(course => <Course key={course.id} course={course} />)}
      <hr />
      <Phonebook />
      <hr />
      <Countries />
    </div>
  )
}

export default App
