import { useContext, useState } from 'react';
import { ItineraryContext } from '../context/ItineraryContext';

export default function ItineraryPlanner() {
    const { items, addItem, removeItem } = useContext(ItineraryContext);
    
    const [activity, setActivity] = useState('');
    const [time, setTime] = useState('');

    const handleAdd = () => {
        if (activity && time) {
            addItem({ activity, time });
            setActivity('');
            setTime('');
        }
};

return (
    <div className="bg-card rounded-2xl shadow-soft p-4 space-y-4">
      <h2 className="text-xl font-semibold">Itinerary</h2>

      <div className="space-y-2">
        {items.length === 0 && (
          <p className="text-sm opacity-70">No activities added yet.</p>
        )}

        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-primary text-white rounded-2xl px-4 py-2 shadow-soft"
          >
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm opacity-80">{item.time}</p>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className="text-sm opacity-80 hover:opacity-100"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <input
          type="text"
          placeholder="Activity"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="w-full p-2 rounded-2xl border focus:outline-none"
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="w-full p-2 rounded-2xl border focus:outline-none"
        />

        <button
          onClick={handleAdd}
          className="w-full bg-primary text-white rounded-2xl py-2 shadow-soft"
        >
          Add Activity
        </button>
      </div>
    </div>
  );
}
    