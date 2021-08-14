// class to create Nodes
class Node{
   constructor(val){
      this.val = val;   // assign the current value
      this.next = null; // always point the next to null for the new Nodes
   }
}

// class to create List
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
   
   // Pop operation
   
   pop(){ //doesnot take arg since it will always remove the last node

        if(!this.head) return undefined; // checking is the head is not there, if yes return undefined

        // previous will be the new tail (2nd last node of the list)
        //create two variables current & pre to the first node of the list
        var current = this.head; 
        var previous = current;

        while(current.next) {   // loop until the current node of the list is not a null(points nothing)
            
            // assign the current to the previous and point the current to the next node
            previous = current; 
            current = current.next; 
        }
        
        // new tail will the previous(2nd last node of the list) and it will be points to null; also decrement the length
        this.tail = previous;   
        this.tail.next = null;
        this.length--;

        // after popping checking if the list is empty to assign the head and tail to null(as fresh)
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        // return the popped node(last node of the list)
        return current;
   }
   
   // Shift operation
   
   shift(){
      
      if(!this.head) return undefined; // checking is the head is not there, if yes return undefined
      
      // assign the head of the list to the currentHead variable & point the immediate node as the new head; also decrement the length
      var currentHead = this.head;    
      this.head = currentHead.next;
      this.length--;
      
      // if there is no element after removing the first node then assign the tail as null
      if(this.length === 0) {
         this.tail = null;
   }
   
   // return the removed item   
   return currentHead;
}

let list = new singlyLinkedList();
// list.push(88);
