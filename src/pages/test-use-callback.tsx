import React, { useState, useMemo, useCallback, memo } from 'react'
import { Button } from 'antd'

export const TestUseCallback = () => {
  const [, forceUpdate] = useState([])
  const handleClick1 = () => {
    forceUpdate([])
  }

  const handleClick2 = useCallback(
    () => {
      forceUpdate([])
    },
    []
  )

  return (
    <div>
      <List title="without useCallback" onClick={handleClick1}></List>
      <List title="with useCallback" onClick={handleClick2}></List>
    </div>
  )
}

const List = (props: any) => {
  const { title, onClick } = props
  const list = useMemo(() => {
    const result: any[] = []
    for (let i = 0; i < 500; i++) {
      result.push(<Button key={i} onClick={onClick}>click</Button>)
    }
    return result
  }, [onClick])

  return (
    <div>
      <div>{title}</div>
      <div style={{ height: 200, overflow: 'hidden' }}>{list}</div>
    </div>
  )
}
