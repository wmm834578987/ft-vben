import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import progress from 'vite-plugin-progress'
import purgeIcons from 'vite-plugin-purge-icons'
import VitePluginCertificate from 'vite-plugin-mkcert'
import UnoCSS from 'unocss/vite'
import { configPwaConfig } from './pwa'
import { configHtmlPlugin } from './html'
import { configCompressPlugin } from './compress'
import { configVisualizerConfig } from './visualizer'
import { configSvgIconsPlugin } from './svgSprite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite"; // 按需组件自动导入
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const { VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE } = viteEnv

  const vitePlugins: PluginOption[] = [
    // have to
    vue(),
    // have to
    vueJsx(),
    // UnoCSS
    UnoCSS(),
    // 打包进度条
    progress(),
    VitePluginCertificate({
      source: 'coding',
    }),
  ]

  // vite-vue-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

  // vite-plugin-svg-icons
  vitePlugins.push(configSvgIconsPlugin(isBuild))

  // vite-plugin-purge-icons
  vitePlugins.push(purgeIcons())

  // rollup-plugin-visualizer
  vitePlugins.push(configVisualizerConfig())

  // The following plugins only work in the production environment
  if (isBuild) {
    // rollup-plugin-gzip
    vitePlugins.push(configCompressPlugin(VITE_BUILD_COMPRESS, VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE))

    // vite-plugin-pwa
    vitePlugins.push(configPwaConfig(viteEnv))
  }
  vitePlugins.push(
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      eslintrc: {
        enabled: false, // Default `false`
        filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      dts: './auto-imports.d.ts',
    })
  )
  vitePlugins.push(
    Components({
      dts: true, //生成components.d.ts 全局定义文件
      resolvers: [
        AntDesignVueResolver({ //对使用到的全局ant design vue组件进行类型导入
          importStyle: false,  // 不动态引入css,这个不强求
        }),
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/], //包含的文件类型
    })
  )
  return vitePlugins
}
