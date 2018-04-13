import moment from 'moment'
import dayjs from '../src'

test('Format no formatStr', () => {
  expect(dayjs().format()).toBe(moment().format())
})

test('Format Year YY YYYY', () => {
  expect(dayjs().format('YY')).toBe(moment().format('YY'))
  expect(dayjs().format('YYYY')).toBe(moment().format('YYYY'))
})

test('Format Month M MM', () => {
  expect(dayjs().format('M')).toBe(moment().format('M'))
  expect(dayjs().format('MM')).toBe(moment().format('MM'))
})

test('Format Day of Month D DD 1 - 31', () => {
  expect(dayjs().format('D')).toBe(moment().format('D'))
  expect(dayjs().format('DD')).toBe(moment().format('DD'))
})

test('Format Day of Week d Sun - Sat', () => {
  expect(dayjs().format('d')).toBe(moment().format('d'))
  expect(dayjs().format('dddd')).toBe(moment().format('dddd'))
})

test('Format Hour H HH 24-hour', () => {
  expect(dayjs().format('H')).toBe(moment().format('H'))
  expect(dayjs().format('HH')).toBe(moment().format('HH'))
})

test('Format Minute m mm', () => {
  expect(dayjs().format('m')).toBe(moment().format('m'))
  expect(dayjs().format('mm')).toBe(moment().format('mm'))
})

test('Format Second s sss', () => {
  expect(dayjs().format('s')).toBe(moment().format('s'))
  expect(dayjs().format('ss')).toBe(moment().format('ss'))
})

test('Format Time Zone ZZ', () => {
  expect(dayjs().format('Z')).toBe(moment().format('Z'))
  expect(dayjs().format('ZZ')).toBe(moment().format('ZZ'))
})

test('Format Complex with other string - : / ', () => {
  const string = 'YY-M-D / HH:mm:ss'
  expect(dayjs().format(string)).toBe(moment().format(string))
})
