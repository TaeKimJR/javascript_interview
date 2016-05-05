import { ConvertStandardToInflationary } from './InflationaryEnglish';

describe('InflationaryEnglish', () => {
  it('converts "Today I won an award for being awesome." -> "Threeday I two an award five being awesome."',
    () => {
      const standardString = 'Today I won an award for being awesome.';
      const inflationaryEnglish = ConvertStandardToInflationary(standardString);

      expect(inflationaryEnglish).toEqual('Threeday I two an award five being awesome.');
    }
  );
});
