import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    'src/index'
  ],
  clean: true,
  declaration: true,
  failOnWarn: false,
  rollup: {
    emitCJS: true,
    cjsBridge: true,
    inlineDependencies: true,
    esbuild: {
      minify: true,
    },
  },
});
