import { VictoryBar, VictoryChart, VictoryAxis, VictoryTooltip, VictoryTheme } from "victory"

interface Props {
  isDark: boolean
}

export default function InfrastructureChart({ isDark }: Props) {
  const data = [
    { category: "Viviendas", value: 12000 },
    { category: "Escuelas", value: 340 },
    { category: "Hospitales", value: 57 },
    { category: "Instalaciones eléctricas", value: 110 },
  ]

  const barColor = isDark ? "#374151" : "#b91c1c" // barras más sobrias en oscuro
  const axisColor = isDark ? "#d1d5db" : "#111827" // ejes en gris claro para modo oscuro
  const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
  const labelColor = isDark ? "#ffffffff" : "#111827"

  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="font-semibold mb-2 text-center">Infraestructura destruida</h3>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={{ x: 50 }}
        animate={{ duration: 1000, easing: "bounce" }}
      >
        <VictoryAxis
          style={{
            tickLabels: { angle: -25, fontSize: 10, padding: 15, fill: axisColor },
            axis: { stroke: axisColor },
          }}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(t) => `${t}`}
          style={{
            tickLabels: { fontSize: 10, padding: 5, fill: axisColor },
            grid: { stroke: gridColor },
          }}
        />
        <VictoryBar
          data={data}
          x="category"
          y="value"
          barWidth={35}
          labels={({ datum }) => `${datum.value}`}
          labelComponent={
            <VictoryTooltip
              style={{ fontSize: 10, fill: labelColor }}
              flyoutStyle={{
                fill: isDark ? "#121212ff" : "#ffffff",
                stroke: isDark ? "#9ca3af" : "#d1d5db",
                strokeWidth: 1,
              }}
            />
          }
          style={{
            data: {
              fill: barColor,
              stroke: isDark ? "#b91c1c" : "#7f1d1d",
              strokeWidth: 1,
            },
            labels: { fill: labelColor },
          }}
        />
      </VictoryChart>
      <p className="mt-2 text-sm text-center opacity-80 max-w-sm">
        Viviendas, hospitales y escuelas han sido gravemente dañadas o destruidas, dificultando el acceso a servicios básicos.
      </p>
    </div>
  )
}
