import cazNmStarter from '../src'

// TODO: Implement module test
test('caz-nm-starter', () => {
  expect(cazNmStarter('w')).toBe('w@zce.me')
  expect(cazNmStarter('w', { host: 'wedn.net' })).toBe('w@wedn.net')
  expect(() => cazNmStarter(100 as unknown as string)).toThrow('Expected a string, got number')
})
