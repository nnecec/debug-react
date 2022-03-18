import { TestUseCallback } from './test-use-callback'
import { TestDiff } from './test-diff'
import { TestRerender } from './test-rerender'
import { TestSyntheticEvent } from './test-synthetic-event'
import { TestUseEffect } from './test-use-effect'

export const routes = [{
  path: '/test-use-callback',
  component: TestUseCallback
}, {
  path: '/test-diff',
  component: TestDiff
}, {
  path: '/test-rerender',
  component: TestRerender
}, {
  path: '/test-syntheticevent',
  component: TestSyntheticEvent
}, {
  path: '/test-use-effect',
  component: TestUseEffect
}]
