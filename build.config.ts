import path from 'path'
import { defineBuildConfig } from 'unbuild'
import postcss from 'rollup-plugin-postcss'

export default defineBuildConfig([
  {
    // 入口文件的路径
    entries: [
      {
        builder: 'mkdist',
        input: './src/',
        esbuild: { minify: true },
      },
    ],
    declaration: true,
    clean: true,
    failOnWarn: false,
    // 输出格式
    rollup: {
      emitCJS: true,
      resolve: {
        extensions: ['.ts', '.tsx'],
      },
      esbuild: {
        // 启用 JSX 支持
        jsx: 'automatic', // 或者 'preserve' 如果你想要在输出中保留 JSX
      },
    },
    // 外部依赖，不打包进库
    externals: ['react', 'react-dom'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
    // 使用 PostCSS
    hooks: {
      'rollup:options'(_ctx, options) {
        if (Array.isArray(options.plugins)) {
          options.plugins.push(
            postcss({
              // 指定使用已存在的 PostCSS 配置文件
              config: true,
            }),
          )
        }
      },
    },
  },
  {
    name: 'minified',
    entries: ['./src/index'],
    outDir: 'dist/min',
    failOnWarn: false,
    rollup: {
      esbuild: {
        minify: true,
      },
    },
  },
])
