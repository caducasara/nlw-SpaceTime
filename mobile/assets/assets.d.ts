// Faz com que o TS entenda que todo arquivo terminado com .pngn é um arquivo que pdoe ser importado
declare module '*.png'

declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}
