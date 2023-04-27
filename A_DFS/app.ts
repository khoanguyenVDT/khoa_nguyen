class TreeNode {
    public value: any;
    public left: TreeNode | null;
    public right: TreeNode | null;
    constructor(value: any) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

class DFS {
  private root: TreeNode;
  constructor(root: TreeNode) {
    this.root = root;
  }

  public preOrder(): any[] {
    const result: any[] = [];
    const traverse = (node: TreeNode | null) => {
      if (!node) return;
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  public postOrder(): any[] {
    const result: any[] = [];
    const traverse = (node: TreeNode | null) => {
      if (!node) return;
      traverse(node.left);
      traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  public inOrder(): any[] {
    const result: any[] = [];
    const traverse = (node: TreeNode | null) => {
      if (!node) return;
      traverse(node.left);
      result.push(node.value);
      traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
}

// Define the factory class
class DFSTraversalFactory {
  public static createDFS(root: TreeNode, order: string): any[] | null {
    switch (order) {
      case "pre-order":
        const dfsPreOrder: any = new DFS(root);
        return dfsPreOrder.preOrder();
      case "post-order":
        const dfsPostOrder: any = new DFS(root);
        return dfsPostOrder.postOrder();
      case "in-order":
        const dfsInOrder: DFS = new DFS(root)
        return dfsInOrder.preOrder()
      default:
        return null;
    }
  }
}

// Test
const root = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
const node6 = new TreeNode(6)
const node7 = new TreeNode(7)
const node8 = new TreeNode(8)

root.left = node2
root.right = node3
node2.left = node4
node2.right = node5
node5.left = node6
node5.right = node7
node7.left = node8

const dfsPreOrder = DFSTraversalFactory.createDFS(root, "pre-order");
console.log("Tree after pre-order traversal is:",dfsPreOrder);

const dsfPostOrder = DFSTraversalFactory.createDFS(root, "post-order");
console.log("Tree after post-order traversal is:",dsfPostOrder);

const dsfInOrder = DFSTraversalFactory.createDFS(root, "in-order");
console.log("Tree after in-order traversal is:",dsfInOrder);
