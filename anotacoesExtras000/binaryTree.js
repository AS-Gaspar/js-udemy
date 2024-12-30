let arvore ={
    left: {
        left: undefined,
        right: {
            value: 3
        },
        value: 2
    },
    right: undefined,
    value: 10
}

const preOrder = (arvore) => {
    console.log(arvore.value)
    arvore.left && preOrder(arvore.left)
    arvore.right && preOrder(arvore.right)
}

preOrder(arvore)