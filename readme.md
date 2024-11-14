#Creation Pattern (dealing with object creation):
1. Factory Method: Creates objects without specifying the exact class of object that will be created.
2. Abstract Factory: Creates families of related or dependent objects without specifying their concrete classes.
3. Builder: Builds complex objects step by step. It separates the construction of an object from its representation.
4. Prototype: Create new objects by copying an existing object, known as the prototype.
5. Singleton: Ensures that a class has only one instance and provides a global point of access to it.

#Structural Pattern (dealing with object composition):
6. Adapter: Allows incompatible interfaces to work together by wrapping one interface in another.
7. Bridge: Separates an object's abstraction from its implementation, allowing both to vary independently.
8. Composite: Composes objects into tree structures to represent part-whole hierarchies, allowing clients to treat individual objects and compositions of objects uniformly.
9. Decorator: Adds new functionality to an object dynamically without altering its structure.
10. Facade: Provides a simplified interface to a complex subsystem.
11. Flyweight: Reduces the cost of creating an managing a large number of similar objects by sharing objects.
12. Proxy: Provides a surrogate or placeholder for another object to control access to it.

#Behavioral Pattern (dealing with object interaction and responsibility):
13. Chain of Responsibility: Passes a request along a chain of handlers, where each handler decides either to process the request or pass it to the next handler. 
14. Command: Encapsulates a request as an object, allowing parameterization of clients with different requests, queuing of requests, and logging the request history.
15. Interpreter: Defines a grammatical representation for a language and provides an interpreter to deal with this grammar.
16. Iterator: Provides a way to access elements of a collection sequentially without an interpreter to deal with this grammar.
17. Mediator: Centralizes complex communications and control logic between related objects. 
18. Memento: Captures and restores an object's internal state without violating encapsulation.
19. Observer: Defines a one-to-many dependency between objects, so when one object changes state, its dependents are notified and updated automatically.
20. State: Allows an object to change its behavior when its internal state changes. 
21. Strategy: Enables selecting an algorithm's behavior at runtime.
22. Template Method: Defines the skeleton of an algorithm, allowing subclasses to redefine certain steps of the algorithm without changing its structure.
23. Visitor: Separates algorithms from the objects on which they operate by allowing operations to be performed on elements of an object structure without changing the classes on which it operates.


g++ -std=c++11 -O2 -Wall test.cpp -o test.exe
