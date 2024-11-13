import TaiwanRecord from '@/modules/TaiwanRecord/classes/TaiwanRecord'

const TAIWAN_RECORD_DATA_MOCK_ARG = {
  id: '1',
  title: 'Taiwan Record Title',
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  createdAt: '2024-01-01',
  author: 'Taiwan Record Author',
  sources: {
    from: 'Taiwan Record Source',
    links: ['https://example.com', 'https://example.com'],
  },
}

const TAIWAN_RECORD_DATA_MOCK = new TaiwanRecord(TAIWAN_RECORD_DATA_MOCK_ARG)

const TAIWAN_RECORD_DATA_MOCK_LIST = Array.from({ length: 10 }).map(
  (_, index) =>
    new TaiwanRecord({
      ...TAIWAN_RECORD_DATA_MOCK_ARG,
      id: index.toString(),
    })
)

export { TAIWAN_RECORD_DATA_MOCK, TAIWAN_RECORD_DATA_MOCK_LIST }
