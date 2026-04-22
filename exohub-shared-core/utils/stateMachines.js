import { createMachine } from 'xstate';

/**
 * transactionMachine: 송금 과정에서 발생할 수 있는 중간 에러를 완벽히 제어
 */
export const transactionMachine = createMachine({
  id: 'transaction',
  initial: 'idle',
  states: {
    idle: { on: { SUBMIT: 'validating' } },
    validating: {
      on: { 
        SUCCESS: 'requesting',
        FAIL: 'idle'
      }
    },
    requesting: {
      on: {
        COMPLETE: 'finished',
        REJECT: 'idle',
        ERROR: 'error'
      }
    },
    finished: { type: 'final' },
    error: { on: { RETRY: 'validating' } }
  }
});
