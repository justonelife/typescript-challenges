// const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

// type TupleToObject<T extends { [id: number ]: unknown }> = {
//   T[id]: T[id]
// }

// type result = TupleToObject<typeof tuple> // expected { 'tesla': 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}