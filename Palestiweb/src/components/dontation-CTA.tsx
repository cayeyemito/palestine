import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DonationCTA() {
  return (
    <Card className="bg-red-600 text-white p-8 rounded-2xl text-center">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl">Tu apoyo puede salvar vidas</CardTitle>
        <CardDescription className="text-lg md:text-xl mt-2">
          Infórmate, comparte o dona a organizaciones que trabajan directamente sobre el terreno.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-6 flex flex-col md:flex-row justify-center gap-4">
        <Button
          asChild
          className="bg-white text-red-600 hover:bg-gray-100"
        >
          <a href="https://www.un.org/es/actnow" target="_blank">Donar</a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-red-600"
        >
          <a href="https://www.un.org/es/actnow" target="_blank">Más información</a>
        </Button>
      </CardContent>
    </Card>
  )
}
