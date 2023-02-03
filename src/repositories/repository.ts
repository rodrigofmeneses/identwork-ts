export interface Repository<T, K> {
  readAll(): Promise<T[]>;
  read(id: K): Promise<T>;
  create(entity: T): Promise<T>;
  save(entity: T): Promise<T>;
  update(id: K, entity: Partial<T>): Promise<T>;
  delete(id: K): Promise<T>;
}
