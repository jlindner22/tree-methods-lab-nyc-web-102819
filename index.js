function inOrder(root) {
    if (root.left) {
        inOrder(root.left)
    }
    console.log(root.data)
    if (root.right) {
        inOrder(root.right)
    }
}

function findOrAdd(root, newNode) {
    if (root.data == newNode.data) return true;
    if (newNode.data < root.data) {
        if (root.left) {
           return findOrAdd(root.left, newNode)
        } else {
            return root.left = newNode;
        }
    } 
    if (newNode.data > root.data) {
        if (root.right) {
           return findOrAdd(root.right, newNode)
        } else {
            return root.right = newNode;
        }
    } 
}

function max(node) {
    if (!node.right) return node.data;
    let val = node;
    while (val.right) {
        val = val.right;
    }
    return val;
}

function min(node) {
    if (!node.left) return node.data;
    let val = node;
    while (val.left) {
        val = val.left;
    }
    return val;
}