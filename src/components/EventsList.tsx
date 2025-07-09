import { Card, CardContent } from '@/components/ui/card'

interface Event {
  id: string
  title: string
  date: string
  location?: string
}

interface EventsListProps {
  events: Event[]
}

export default function EventsList({ events }: EventsListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Upcoming Events
      </h3>
      {events.map((event) => (
        <Card key={event.id} className="bg-white border border-gray-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h4 className="font-medium text-gray-900">
                  {event.title}
                </h4>
                {event.location && (
                  <p className="text-sm text-gray-500 mt-1">
                    {event.location}
                  </p>
                )}
              </div>
              <div className="mt-2 sm:mt-0">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  {event.date}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 