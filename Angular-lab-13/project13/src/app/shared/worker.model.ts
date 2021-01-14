export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  phone: string;
  type: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Сергей', surname: 'Пешкин', phone: "(800) 777-77-77", type: 0 },
  { id: 2, name: 'Александр', surname: 'Николаев', phone: "(995) 123-32-21", type: 1 },
  { id: 3, name: 'Афанасий', surname: 'Должанский', phone: "(800) 555-63-63", type: 2 },
  { id: 4, name: 'Семен', surname: 'Чичваркин', phone: "(917) 816-22-07", type: 3 },
];
