const { transform: babelTransform, registerPlugin } = (window as any).Babel

const kebabCase = (string: string) =>
  string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

const convertPropName = (propName: string) => {
  if (propName === 'className') {
    return 'class'
  }
  if (propName.startsWith('on')) {
    return propName
  }
  return kebabCase(propName)
}

function babelPluginJSXToHTML(babel: any) {
  return {
    name: 'babel-plugin-jsx-to-html',
    visitor: {
      JSXAttribute(path: any) {
        path.node.name.name = convertPropName(path.node.name.name)
      },
    },
  }
}

registerPlugin('babel-plugin-jsx-to-html', babelPluginJSXToHTML)

export const transform = (input: string): string => {
  let { code } = babelTransform(input, {
    plugins: [
      'syntax-jsx',
      ['syntax-typescript', { isTSX: true }],
      'babel-plugin-jsx-to-html',
    ],
    compact: false,
    minified: false,
  })
  const regex = new RegExp('// @ts-ignore', 'g')
  code = code.replace(regex, '')
  code = code.replace(/(^;)|(;$)/g, '')
  return code
}
