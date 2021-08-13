// class to create Nodes
class Node{
   constructor(val){
      this.val = val;   // assign the current value
      this.next = null; // always point the next to null for the new Nodes
   }
}

class singlyLinkedList{
   constructor(){

      //while creating a new list assign head and tail as null and length as 0 

      this.head = null; 
      this.tail = null;
      this.length = 0;
   }

   // Push Operation

   push(val){

      // creating a new node by node class
      let newNode = new Node(val);

      // if the head is not present in the list (i.e head is null) point the head and tail to the new Node
      if(!this.head) {
         this.head = newNode;
         this.tail = this.head;
      } else {                      
         this.tail.next = newNode; // else, the current tail's next should point to newNode
         this.tail = newNode;      // newNode will be assigned as tail
      }
      this.length++;               // for every push the length will be incremented
      return this;                 // return new list 
   }
}

let list = new singlyLinkedList();
// list.push(88);