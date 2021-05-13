const cleanup = () => {
  const node = document.getElementById('Generated')

  // remove image
  if (node) node.parentElement.removeChild(node)
}

export default cleanup
