class Node{
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
    show(){
        return this.data;
    }
}
   
//Binary Search Tree
class BST{
    constructor(){
        this.root = null;
    }

    getRoot(){
        return this.root;
    }

    insert(data){
        //새로운 Node 생성
        let n = new Node(data, null, null);
        //트리에 루트 노드가 없으면 생성한 노드가 루트 노드
        if(this.root == null){
            this.root = n;
        }
        else{
            //current에 루트 노드를 가져옴
            let current = this.root;
            let parent;
            while(true){
                parent = current;
                if(data < current.data){
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
                }
                else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
                }
            }
        }
    }

    inOrder(node){
        if(!(node == null)){
            this.inOrder(node.left);
            console.log(node.show());
            this.inOrder(node.right);
        }
    }

    find(data){
        let current = this.root;
        while(current.data != data){
            if(data < current.data){
                current = current.left;
            }
            else{
                current = current.right;
            }
            if(current == null){
                return null;
            }
        }
        return current;
    }
    remove(data){
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, data){
        if(node == null){
            return null;
        }
        if(data == node.data){
            //자식이 없을 때
            if(node.left == null && node.right == null){
                return null;
            }
            //왼쪽 자식이 없을 때
            if(node.left == null){
                return node.right;
            }
            //오른쪽 자식이 없을 때
            if(node.right == null){
                return node.left;
            }
            //둘 다 자식이 있을 때
            let tempNode = this.getSmallest(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        }
        else if(data < node.data){
        node.left = this.removeNode(node.left, data);
        return node;
        }
        else{
        node.right = this.removeNode(node.right, data);
        return node;
        }
    }
    getSmallest(node){
        let current = node;
        while(!(current.left == null)){
            current = current.left;
        }
        return current;
    }
}
   
  const nums = new BST();
  nums.insert(23);
  nums.insert(45);
  nums.insert(15);
  nums.insert(37);
  nums.insert(3);
  nums.insert(99);
  nums.insert(21);
  nums.insert(40);
  nums.insert(44);
  nums.insert(1);
  nums.insert(65);
  nums.inOrder(nums.getRoot());//1, 3, 15, 21, 23, 37, 40, 44, 45, 65, 99
  console.log("==========");
  console.log(nums.find(45)); 
  console.log(nums.find(2));
  nums.remove(45);
  nums.inOrder(nums.getRoot());
  
  