import React, { useState, useEffect } from 'react'
import { Input, Space, Tag } from 'antd'
import { getObserver } from './util'

export const TestDiff = () => {
  const [lastInput, setLastInput] = useState('')
  const [input, setInput] = useState('')

  useEffect(() => {
    const diffObs = getObserver('.test-diff-seq')
    diffObs()
  }, [])

  const patch = (e: any) => {
    console.log(e)
    setInput(last => {
      setLastInput(last)
      return e
    })
  }

  const sequence = input.trim().split('')

  return (
    <div>
      <Space>
        <Tag color="gold">Inserted</Tag>
        <Tag color="red">Moved</Tag>
        <Tag color="green">Non moved</Tag>
      </Space>
      <Input.Search placeholder="e.g. 123456" onSearch={patch} enterButton="Patch!" />
      <div>
        {lastInput}
        {'  ➔ '}
        {input}
      </div>
      <hr />
      <div className="test-diff-seq">
        {sequence.map(it =>
          <Tag key={it}>
            {it}
          </Tag>
        )}
      </div>
    </div>
  )
}
