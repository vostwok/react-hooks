import { AppContext2 } from '../contexts/App';
import { H1Reducer } from '../H1';

export function UseReduxUseContext() {
  return (
    <div>
      <AppContext2>
        <H1Reducer reducer />
      </AppContext2>
    </div>
  );
}
