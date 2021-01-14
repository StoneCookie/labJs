export interface MyWorker {
  id?: number;
  name: string;
  surname: string;
  type: number;
}

export enum MyWorkerType {
  programmer,
  designer,
  copywriter,
  manager,
}

export let MyWorkersDatabase: MyWorker[] = [
  { id: 1, name: 'Сергей', surname: 'Пешкин', type: 0 },
  { id: 2, name: 'Александр', surname: 'Николаев', type: 1 },
  { id: 3, name: 'Афанасий', surname: 'Должанский', type: 2 },
  { id: 4, name: 'Семен', surname: 'Чичваркин', type: 3 },
];
