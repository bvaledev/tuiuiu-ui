import { colors } from '@tuiuiu-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, value]) => {
    if (typeof value === 'string') {
      return (
        <div key={`${key}`} style={{ backgroundColor: value, padding: '1rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: getContrast(value, '#FFF') < 3.5 ? '#000' : '#FFF',
            }}
          >
            <strong>{key}</strong>
            <span>{value}</span>
          </div>
        </div>
      )
    }
    return Object.entries(value).map(([key2, value2]) => {
      return (
        <div
          key={`${key}${key2}${value2}`}
          style={{ backgroundColor: value2, padding: '1rem' }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: getContrast(value2, '#FFF') < 3.5 ? '#000' : '#FFF',
            }}
          >
            <strong>{key2}</strong>
            <span>{value2}</span>
          </div>
        </div>
      )
    })
  })
}
