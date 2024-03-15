import path from 'path'
import { defineBuildConfig } from 'unbuild'
import postcss from 'rollup-plugin-postcss'

export default defineBuildConfig([
  {
    // 入口文件的路径
    entries: ['./src/index'],
    declaration: true,
    clean: true,
    failOnWarn: false,
    // 输出格式
    rollup: {
      emitCJS: true,
      cjsBridge: true,
      esbuild: {
        // 启用 JSX 支持
        jsx: 'transform', // 或者 'preserve' 如果你想要在输出中保留 JSX
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        // TypeScript 支持
        loaders: {
          '.ts': 'ts',
          '.tsx': 'tsx',
        },
      },
    },
    // 外部依赖，不打包进库
    externals: ['react', 'react-dom'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    // 使用 PostCSS
    // hooks: {
    //   'rollup:options'(ctx, options) {
    //     options.plugins = [
    //       options.plugins,
    //       postcss({
    //         // 指定使用已存在的 PostCSS 配置文件
    //         config: true,
    //       }),
    //     ]
    //   },
    // },
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
