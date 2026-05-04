import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { categories } from "../data/categories"
import type { ActivityInterface } from "../types"
import type { ActivityActions } from "../reducers/activity-reducer"

type FormProps = {
  dispatch: React.Dispatch<ActivityActions>
}

const initialState : ActivityInterface = {
  id: uuidv4(),
  category: 1,
  nameActivity : '',
  calories: 0
}

const Form = ({ dispatch }: FormProps) => {
  const [activity, setActivity] = useState<ActivityInterface>(initialState)

  const handleChange = (e : React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const isNumberField = ['calories','category'].includes(e.target.id)
    setActivity({
      ...activity,
      [e.target.name]: isNumberField ? Number(e.target.value) : e.target.value
    })
  }

  const isValidActivity = () => {
    const { nameActivity, calories } = activity
    return nameActivity.trim() !== '' && calories > 0
  }

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    dispatch({
      type: 'SAVE_ACTIVITY',
      payload: { newActivity: activity }
    })
    setActivity({
      ...initialState,
      id: uuidv4()
    })
  }


  return (
    <form 
      className="bg-white space-y-5 p-10 rounded-lg shadow"
      onSubmit={ handleSubmit }  
    >
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
            name="nameActivity"
            id="name"
            placeholder="Ej. Comida, Jugos, Ensalada, Ejecicio"
            value={activity.nameActivity}
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
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
        value={ activity.category === 1 ? 'Agregar comida' : 'Agregar ejercicio' }
        disabled = { !isValidActivity() }
      />
    </form>
  )
}

export default Form