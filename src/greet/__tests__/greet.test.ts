import greet from '../greet';

test('greet', () => {
    expect(greet('TypeScript')).toEqual('Hello, TypeScript')
})