import {
  createRenderer,
  VNode,
  RootRenderFunction,
  CreateAppFunction
} from '@vue/runtime-core'
import { nodeOps, TestElement } from './nodeOps'
import { patchProp } from './patchProp'
import { serializeInner } from './serialize'
import { extend } from '@vue/shared'

const { render: baseRender, createApp: baseCreateApp } = createRenderer(
  // nodeOps存放dom操作的一些方法
  extend({ patchProp }, nodeOps)
)

export const render = baseRender as RootRenderFunction<TestElement>
export const createApp = baseCreateApp as CreateAppFunction<TestElement>

// convenience for one-off render validations
export function renderToString(vnode: VNode) {
  const root = nodeOps.createElement('div')
  render(vnode, root)
  return serializeInner(root)
}

export * from './triggerEvent'
export * from './serialize'
export * from './nodeOps'
export * from '@vue/runtime-core'
