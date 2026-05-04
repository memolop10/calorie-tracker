import { useMemo } from "react"
import { categories } from "../data/categories"
import type { ActivityInterface } from "../types"

interface ActivityListProps  {
  activities: ActivityInterface[]
}

const ActivityList = ({ activities }: ActivityListProps) => {
     
    const getCategoryName = useMemo(() => (category: ActivityInterface['category']) => {
       return categories.map(cat => cat.id === category ? cat.name : '')
    }, [activities])

    return (
    <>
        <h2 className="text-4xl font-bold text-slate-600 text-center">Comida y Actividades</h2>

        {
            activities.length === 0
            ? <p className="text-center text-gray-500 mt-5">No hay actividades registradas</p>
            : (
                <ul className="space-y-4">
                    {activities.map( activity => (
                        <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                            <div className="space-y-2 relative">
                                <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold 
                                    ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>{getCategoryName(Number(activity.category))}</p>
                                <p className="text-2xl font-bold pt-5">{activity.nameActivity}</p>
                                <p className="font-black text-4xl text-lime-500">
                                    {activity.calories} {''} <span>Calorias</span>
                                </p>
                            </div>
                            <div>
                                 
                            </div>
                        </div>
                    ))}
                </ul>
            )
        }

    </>
  )
}

export default ActivityList