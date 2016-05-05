import { ConvertStandardToInflationary } from './InflationaryEnglish';

describe('InflationaryEnglish', () => {
  it('converts "Today I won an award for being awesome." -> "Threeday I two an award five being awesome."',
    () => {
      const englishString = 'Today I won an award for being awesome.';
      const inflationaryEnglish = ConvertStandardToInflationary(englishString);

      expect(inflationaryEnglish).toEqual('Threeday I two an award five being awesome.');
    }
  );
});
