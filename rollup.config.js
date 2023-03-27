import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import { babel } from '@rollup/plugin-babel'

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      format: 'esm',
      file: 'lib/sdk-mcv.esm.js'
    }
  ],
  plugins: [
    // rollup typescript plugin 默认只会读取tsconfig.json中的compilerOptions选项，其余选项相对于rollup独立
    // 所以如果你想要配置compilerOptions之外的ts选项，请在这里配置，或者直接指定rollup typescript plugin读取整个
    // tsconfig.json文件 { tsconfig: './tsconfig.json' }
    typescript({
      exclude: ['src/test/**']
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime'
    })
  ]
})
