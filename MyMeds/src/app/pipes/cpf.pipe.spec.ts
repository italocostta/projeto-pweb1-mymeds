import { CPFPipe } from './cpf.pipe';

describe('CpfPipe', () => {
  it('create an instance', () => {
    const pipe = new CPFPipe();
    expect(pipe).toBeTruthy();
  });
});