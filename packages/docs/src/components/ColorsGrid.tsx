import { colors } from '@tuiuiu-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, value]) => {
    if (typeof value === 'string') {
      return <Color key={key} label={key} color={value} />
    }
    return Object.entries(value).map(([key2, value2]) => {
      return (
        <Color key={`${key}-${key2}`} label={`${key}-${key2}`} color={value2} />
      )
    })
  })
}

const Color = ({ color, label }: { label: string; color: string }) => (
  <div key={`${label}`} style={{ backgroundColor: color, padding: '1rem' }}>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontFamily: 'monospace',
        color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
      }}
    >
      <strong>{label}</strong>
      <span>{color}</span>
    </div>
  </div>
)
