import fs from 'fs'
import path from 'path'
import json from '@rollup/plugin-json'
import vue from 'rollup-plugin-vue'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const isDev = process.env.NODE_ENV !== 'production'

// å¬å±æä»¶éç½®
const plugins = [
  vue({
    // Dynamically inject css as a <style> tag
    css: true,
    // Explicitly convert template to render function
    compileTemplate: true
  }),
  json(),
  nodeResolve(),
  postcss({
    // æ css æå¥å° style ä¸­
    // inject: true,
    // æ css æ¾å°åjsåä¸ç®å½
    extract: true
  })
]

// å¦æä¸æ¯å¼åç¯å¢ï¼å¼å¯åç¼©
isDev || plugins.push(terser())

// packages æä»¶å¤¹è·¯å¾
const root = path.resolve(__dirname, 'packages')

module.exports = fs.readdirSync(root)
  // è¿æ»¤ï¼åªä¿çæä»¶å¤¹
  .filter(item => fs.statSync(path.resolve(root, item)).isDirectory())
  // ä¸ºæ¯ä¸ä¸ªæä»¶å¤¹åå»ºå¯¹åºçéç½®
  .map(item => {
    const pkg = require(path.resolve(root, item, 'package.json'))
    return {
      input: path.resolve(root, item, 'index.js'),
      output: [
        {
          exports: 'auto',
          file: path.resolve(root, item, pkg.main),
          format: 'cjs'
        },
        {
          exports: 'auto',
          file: path.join(root, item, pkg.module),
          format: 'es'
        },
      ],
      plugins: plugins
    }
  })
