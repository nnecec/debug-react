import { TestUseCallback } from './test-use-callback'
import { TestDiff } from './test-diff'
import { TestRerender } from './test-rerender'

export const routes = [{
  path: '/test-use-callback',
  component: TestUseCallback
}, {
  path: '/test-diff',
  component: TestDiff
}, {
  path: '/test-rerender',
  component: TestRerender
}]
