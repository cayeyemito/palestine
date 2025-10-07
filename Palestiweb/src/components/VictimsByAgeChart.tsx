import { VictoryPie, VictoryTooltip } from "victory"

interface Props {
  isDark: boolean
}

export default function VictimsByAgeChart({ isDark }: Props) {
  const data = [
    { x: "Niños (0-14)", y: 45 },
    { x: "Jóvenes (15-24)", y: 20 },
    { x: "Adultos (25-59)", y: 25 },
    { x: "Mayores (60+)", y: 10 },
  ]

  const colorScale = isDark
    ? ["#1f2937", "#4b5563", "#9ca3af", "#d1d5db"]
    : ["#4c6ef5", "#22b8cf", "#51cf66", "#fcc419"]

  const labelColor = isDark ? "#fff" : "#000"

  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="font-semibold mb-2 text-center">Distribución de víctimas por edad</h3>
      <VictoryPie
        data={data}
        colorScale={colorScale}
        innerRadius={70}
        labelRadius={110}
        labels={({ datum }) => `${datum.x}\n${datum.y}%`}
        labelComponent={
          <VictoryTooltip
            style={{ fontSize: 10, fill: labelColor }}
            flyoutStyle={{
              fill: isDark ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)",
              stroke: "none",
            }}
          />
        }
        animate={{ duration: 1000 }}
        style={{
          labels: { fill: labelColor, fontWeight: 600 },
        }}
      />
      <p className="mt-2 text-sm text-center opacity-80 max-w-sm">
        Los más jóvenes y los ancianos son los más vulnerables ante los ataques y la falta de recursos.
      </p>
    </div>
  )
}
