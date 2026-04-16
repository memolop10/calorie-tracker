import { useState } from "react"
import { categories } from "../data/categories"

const Form = () => {
  const [activity, setActivity] = useState({
    category: 1,
    name : '',
    calories: 0
  })

  const handleChange = (e) => {
    setActivity({
      ...activity,
      [e.target.name]: e.target.value
    })
  }
  return (
    <form 
      className="bg-white space-y-5 p-10 rounded-lg shadow">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold text-sm text-gray-700">Category:</label>
        <select
            className="border border-slate-300 p-2 rounded-lg"
            name="category" 
            id="category"
            value={activity.category}
            onChange={handleChange}
        >
            {categories.map(category => (
                <option 
                    key={category.id} 
                    value={category.id}
                >
                        {category.name}
                </option>  
            ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold text-sm text-gray-700">Activity:</label>
        <input
            className="border border-slate-300 p-2 rounded-lg"
            type="text"
            name="name"
            id="name"
            placeholder="Ej. Comida, Jugos, Ensalada, Ejecicio"
            value={activity.name}
            onChange={handleChange}
        />  
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold text-sm text-gray-700">Calories:</label>
        <input
            className="border border-slate-300 p-2 rounded-lg"
            type="number"
            name="calories"
            id="calories"
            placeholder="Ej. 200, 300, 400"
            value={activity.calories}
            onChange={handleChange}
        />  
      </div>

      <input    
        type="submit" 
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
        value="Save"
      />
    </form>
  )
}

export default Form