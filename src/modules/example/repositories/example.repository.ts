export interface IExampleRepository {
  get(): void
}

export class ExampleRepository implements IExampleRepository {
  get() {
    console.log('hello')
  }
}
