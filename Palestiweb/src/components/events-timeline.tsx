import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  { year: 2000, desc: "Inicio de la segunda intifada" },
  { year: 2014, desc: "Conflicto de Gaza de 50 días" },
  { year: 2023, desc: "Crisis humanitaria actual" },
]

export function EventsTimeline() {
  return (
    <Card className="p-8 rounded-2xl bg-gray-100 dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl text-center">Cronología de los eventos</CardTitle>
      </CardHeader>
      <CardContent className="mt-6 flex flex-col md:flex-row gap-6 overflow-x-auto">
        {events.map((event, i) => (
          <Card
            key={i}
            className="flex-shrink-0 min-w-[200px] p-4 rounded-xl bg-gray-200 dark:bg-gray-700"
          >
            <CardHeader>
              <CardTitle className="text-lg font-bold">{event.year}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{event.desc}</p>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  )
}
