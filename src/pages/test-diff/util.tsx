const each = (arrLike: any[], fn: any) => {
  for (let i = 0; i < arrLike.length; i++) {
    fn(arrLike[i], i, arrLike)
  }
}

export const getObserver = (selector: string) => {
  let target: any
  const config = { attributes: true, childList: true, characterData: true }
  let prevNodes: any[] = []

  const observer = new MutationObserver(function (mutations: any[]) {
    const allNodes = target.childNodes as any[]
    const addedNodes: any[] = []
    // console.log(selector, prevNodes);
    mutations.forEach(function (mutation) {
      observer.disconnect()
      if (mutation.type === 'childList') {
        each(mutation.addedNodes, (node: any) => addedNodes.push(node))
      }
    })
    observer.disconnect()
    each(prevNodes, (node: any) => {
      node.classList.toggle('ant-tag-gold', false)
      node.classList.toggle('ant-tag-red', false)
      node.classList.toggle('old', true)
      node.classList.toggle('ant-tag-green', true)
    })
    each(addedNodes, (node: any) => {
      if (prevNodes.indexOf(node) < 0) {
        node.classList.toggle('ant-tag-gold', true)
      } else {
        node.classList.toggle('ant-tag-red', true)
        node.classList.toggle('ant-tag-green', false)
      }
    })
    prevNodes = [...allNodes]
    observer.observe(target, config)
  })

  return () => {
    target = document.querySelector(selector)
    observer.observe(target, config)
  }
}
