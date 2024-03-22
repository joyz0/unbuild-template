import path from 'path'
import { defineBuildConfig, type BuildConfig } from 'unbuild'
import postcss from 'rollup-plugin-postcss'

function createCommonConfig(): BuildConfig {
  return {
    clean: true,
    failOnWarn: false,
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
  }
}

const commonConfig = createCommonConfig()

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
    ...commonConfig,
  },
  {
    name: 'minified',
    entries: ['./src/index'],
    outDir: 'dist/min',
    ...commonConfig,
  },
])
