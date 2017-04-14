function Node(val){
    this.val = value;
    this.next = null;
}

function SLL(){
    this.head = null;
    this.addFront = function(val){
        //create a node
        var node = new Node(val);
        //check whether list is empty
        if(!this.head) {
            this.head = node;
            return this;
        }
        else {
            node.next = this.head;
            this.head = node;
            return this;
        }
    }

    this.length = function() {
        
        if(!this.head) {
            return 0;
        }
        var count = 0;
        var current = this.head;
        while(current) {
            count++;
            current = current.next;
        }
        return count;
    }
}

new myList = new SLL();
myList.addFront(4);
myList.addFront(9);
