import Validator from '../validator';

test.each([
  "sam-789m",
  "saml",
  "sam",
  "saml789A",
  "saml_78saml",
  "saml-7-saml",
  "saml_a",
  "saml789_a",
  "saml789-a",
])("should validate number", (data) => {
  expect(Validator.validateUsername(data)).toBe(true);
});

test.each([
  'saml-7894',
  '1saml',
  '_AX',
  '-saml789',
  'saml78945saml',
  '@msam1',
  'saml!a',
  'saml789_',
  'saml789-',
  'Семен',
])('should not validate number', (data) => {
  expect(() => Validator.validateUsername(data)).toThrow();
});